import React, { useEffect } from "react";
import $ from "jquery";
import { useRouter } from "next/router";

function shareNCSI(index) {
  // your share logic here
  alert(`Share clicked for slide ${index}`);
}

export default function Carousel({ sliderData }) {
  const { locale } = useRouter();
  const isRTL = locale === "ar";

  const baseUrl = process.env.NEXT_PUBLIC_SLIDER_BASE_URL;

  //     useEffect(() => {
  //     // Import the plugin script after jQuery is available
  //     import('../../public/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js').then(() => {
  //       $('.carousel').carousel();
  //     });
  //   }, []);
  return (
    <>
    <style jsx>{`
        .carousel-control {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
    <section
      className="carousel slide cid-ruuXFG6DcH container-slide"
      data-interval="false"
      id="slider1-9"
    >
      <div className="full-screen">
        <div
          className="mbr-slider slide carousel"
          data-pause="true"
          data-keyboard="false"
          data-ride="carousel"
          data-interval="6000"
        >
          <ol className="carousel-indicators">
            {sliderData.map((_, idx) => (
              <li
                key={idx}
                data-app-prevent-settings=""
                data-target="#slider1-9"
                className={idx === 0 ? "active" : ""}
                data-slide-to={idx}
              ></li>
            ))}
          </ol>

          <div className="carousel-inner" role="listbox">
            {sliderData.map((item, idx) => {
              const imageUrl = isRTL
                ? `${baseUrl}${item.slider_image_ar}`
                : `${baseUrl}${item.slider_image}`;
              return (
                <div
                  key={item.id}
                  className={`carousel-item slider-fullscreen-image ${
                    idx === 0 ? "active" : ""
                  }`}
                >
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <img src={imageUrl} alt={item.alt_text} />
                      <div
                        className="carousel-share customeIconHome-share color-white"
                        id={idx === 0 ? "socialShare" : undefined}
                        onClick={() => shareNCSI(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            shareNCSI(idx);
                        }}
                      ></div>
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            data-app-prevent-settings=""
            className="carousel-control carousel-control-prev wow fadeInLeft "
            data-wow-delay="0.2s"
            data-wow-duration="0.5s"
            role="button"
            data-slide="prev"
            href="#slider1-9"
          >
            <span
              aria-hidden="true"
              className="customeIconHome-arrow-cheveron-left mbr-iconfont slider-arrow-left color-theme"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            data-app-prevent-settings=""
            className="carousel-control carousel-control-next slider-prev-icon wow fadeInLeft"
            data-wow-delay="0.4s"
            data-wow-duration="0.5s"
            role="button"
            data-slide="next"
            href="#slider1-9"
          >
            <span
              aria-hidden="true"
              className="customeIconHome-arow-cheveron-right mbr-iconfont color-theme slider-arrow-right"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
