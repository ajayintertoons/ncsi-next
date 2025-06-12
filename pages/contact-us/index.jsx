import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState, useRef , useMemo} from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const ContactUs = () => {
  //  useEffect(() => {
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = '/styles/contactus.css'; // Make sure this file is in /public/styles/
  //   document.head.appendChild(link);

  //   return () => {
  //     document.head.removeChild(link);
  //   };
  // }, []);

  const [captchaText, setCaptchaText] = useState("");

  
     const styledCaptcha = useMemo(() => {
      return captchaText.split("").map((char) => ({
        char,
        y: Math.floor(Math.random() * 6) - 3,
        rotate: Math.floor(Math.random() * 11) - 5,
      }));
    }, [captchaText]);

  const fetchCaptcha = async () => {
    const res = await fetch("/api/generate-captcha");
    const data = await res.json();
    setCaptchaText(data.captcha);
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const { t } = useTranslation("common");
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [statusMessage, setStatusMessage] = useState({
    success: "",
    error: "",
  });

  const mapRef = useRef(null);

  const handleMapLoad = (map) => {
    mapRef.current = map;
    // Force recentering
    map.panTo(center);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBdXV_BF1ffeOkXvwS6iZ6SnwMb8DOAyt4", // Replace with your actual API key
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 23.571189,
    lng: 58.293642,
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("Mandatory field")),
      email: Yup.string()
        .email(t("Invalid Email"))
        .required(t("Mandatory field")),
      subject: Yup.string().required(t("Mandatory field")),
      message: Yup.string().required(t("Mandatory field")),
      captcha: Yup.string().required(t("Mandatory field")),
    }),
    onSubmit: async (values, { setSubmitting, resetForm , setFieldError}) => {
      setStatusMessage({ success: "", error: "" }); 

      try {
        // --- Client-side CAPTCHA Validation ---
        // const captchaValidationResponse = await fetch("/api/validate-captcha", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ captcha: values.captcha }),
        // });

        // const captchaValidationResult = await captchaValidationResponse.json();

        // if (!captchaValidationResponse.ok) {
        //   throw new Error(captchaValidationResult.message || t("captcha_validation_failed"));
        // }
        // --- End Client-side CAPTCHA Validation ---

        if (values.captcha.toUpperCase() !== captchaText) {
          setFieldError("captcha", t("captcha_validation_failed")); // Set Formik error
          fetchCaptcha(); 
          return; // Stop further execution
        }

        // Prepare data for the external API, converting confirmEmail to confirm_email
        const payload = {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        };

        const response = await fetch(`${baseUrl}V1/contact-us`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || t("submission_failed"));
        }

        setStatusMessage({
          success: result.message || t("submission_success"),
          error: "",
        });
        resetForm();
        fetchCaptcha();
        // refreshCaptcha();
      } catch (err) {
        setStatusMessage({ success: "", error: err.message });
        fetchCaptcha();
        // refreshCaptcha(); 
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <section className="contact-section" style={{ backgroundColor: "#ffffff" }}>
      <div class="_breadcrumb">
        <p class="_breadcrumb-header">{t("contact_us")}</p>
      </div>

      <div
        className="container contact-us-container"
        style={{ paddingTop: "100px" }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="Froms form-horizontal regFrom"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7">
              <div className="form-group">
                <div className="col-sm-4 control-label">
                  <span className="lbl" title="Name">
                    {t("name")}
                  </span>
                  <span className="Astr">*</span>
                </div>
                <div className="col-sm-8">
                  <input
                    name="name"
                    type="text"
                    maxLength={255}
                    title="Name"
                    className="txtbox securinput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="RequiredAstr">{formik.errors.name}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 control-label">
                  <span className="lbl" title="Email">
                    {t("email")}
                  </span>
                  <span className="Astr">*</span>
                </div>
                <div className="col-sm-8">
                  <input
                    name="email"
                    type="text"
                    maxLength={255}
                    title="Email"
                    className="txtbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="RequiredAstr">{formik.errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 control-label">
                  <span className="lbl" title="Subject">
                    {t("subject")}
                  </span>
                  <span className="Astr">*</span>
                </div>
                <div className="col-sm-8">
                  <input
                    name="subject"
                    type="text"
                    maxLength={255}
                    title="Subject"
                    className="txtbox securinput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <span className="RequiredAstr">
                      {formik.errors.subject}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 control-label">
                  <span className="lbl" title="Message">
                    {t("message")}
                  </span>
                  <span className="Astr">*</span>
                </div>
                <div className="col-sm-8">
                  <textarea
                    name="message"
                    rows={2}
                    cols={20}
                    title="Message"
                    className="txtbox securinput"
                    style={{ height: "180px", width: "100%" }}
                    maxLength={500}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <span className="RequiredAstr">
                      {formik.errors.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-4 control-label"></div>
                <div className="col-sm-8">
                  <div className="RadCaptcha RadCaptcha_Default">
                    <div>
                      {/* <img
                        alt="captcha"
                        // src="/assets/images/captcha.png"
                        style={{
                          height: "50px",
                          width: "180px",
                          display: "block",
                        }}
                      /> */}
                      <div
                        style={{
                          height: "50px",
                          width: "180px",
                          backgroundColor: "#eaeaea",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "28px",
                          fontWeight: "bold",
                          letterSpacing: "7px",
                          fontStyle: "italic",
                          backgroundImage:
                              "url('/assets/images/captcha-bg.jpg')", // <-- fixed line
                            backgroundSize: "cover", // optional: ensure full coverage
                            backgroundRepeat: "no-repeat",
                        }}
                      >
                       {styledCaptcha.map((item, index) => (
                            <span
                              key={index}
                              style={{
                                transform: `translateY(${item.y}px) rotate(${item.rotate}deg)`,
                                display: "inline-block",
                              }}
                            >
                              {item.char}
                            </span>
                          ))}
                      </div>
                    </div>
                    <input type="hidden" autoComplete="off" />
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    className="txtbox"
                    maxLength={5}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.captcha}
                  />
                  {formik.touched.captcha && formik.errors.captcha && (
                    <span className="RequiredAstr">
                      {formik.errors.captcha}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-12 col-sm-12 col-md-12 btnsWrapper">
                  <button className="submitBtn" type="submit" title="Send">
                    {t("send")}
                  </button>
                </div>
              </div>
              {statusMessage.error && (
                <div className="contact-msg error">{statusMessage.error}</div>
              )}
              {statusMessage.success && (
                <div className="contact-msg success">
                  {statusMessage.success}
                </div>
              )}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 Contactdetails">
              <div className="form-group">
                <div
                  id="map-canvas"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={14}
                      onLoad={handleMapLoad}
                    >
                      <MarkerF position={center} />
                      {/* Add markers or InfoWindow here if needed */}
                    </GoogleMap>
                  ) : (
                    <div>Loading map...</div>
                  )}
                  {/* <div
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "rgb(229, 227, 223)",
                    }}
                  ></div> */}
                </div>
              </div>

              <address>
                <strong>{t("keep_in_touch")}</strong>
                <p>{t("mission_statement")}</p>
              </address>

              <div className="Work_hours">
                <h6>{t("working_hours")}</h6>
                <div className="row">
                  {t("working_days")}
                  <br />
                  {t("working_time")}
                </div>
              </div>

              <div className="mt-4">
                <dl className="dl-horizontal flex">
                  <dt>{t("call_center")}</dt>
                  <dd className="mb-0 ml-[14px]">80076274</dd>
                </dl>
                <hr class="spacer"></hr>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
