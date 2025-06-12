import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "next-i18next";

// If you use WOW.js animations
// import WOW from 'wow.js';
// import 'animate.css';

// SwiperCore.use([Navigation]);

const PublicationSlider = ({ publicationData = [] }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
   const { locale } = useRouter();

  const baseUrl = process.env.NEXT_PUBLIC_PUBLICATION_BASE_URL;

  
  const publicationUrl = locale === 'ar' ? '/ar/publications' : '/publications';

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isRTL = router.locale === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    const swiper = new Swiper(".swiper-two", {
      loop: false,
      direction: "horizontal",
      rtl: isRTL,
      navigation: {
        nextEl: isRTL ? ".pub-btn-next" : ".pub-btn-prev",
        prevEl: isRTL ? ".pub-btn-prev" : ".pub-btn-next",
      },
      slidesPerView: 1,
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      },
    });

    return () => swiper?.destroy(true, true);
  }, [router.locale]);

  return (
    <div className="publisher-slide-main">
      <div
        className="publication-slide-head text-center text-bold text-25 publication-head wow fadeInLeft pt-2"
        data-wow-delay="0.4s"
      >
       <a href={publicationUrl} className="">{t("publications")}</a> 
      </div>
      <div className="swiper swiper-two text-center my-swiper" style={{ height: "100%" }}>
        <div className="swiper-wrapper">
          {publicationData.publications.map((item, index) => (
            <div
              key={index}
              className="swiper-slide my-swiper-slide"
              // style={{ display: "flex", flexDirection: "column" }}
            >
              <img src={`${baseUrl}${item.cover_image}`} alt="publication" />
              <div className="slider-caption">
                <span>
                  {router.locale === "ar" ? item.title_ar : item.title_en}
                </span>
                <br />
                <span>
                  {new Date(item.created_at).toLocaleDateString(router.locale, {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="pub-btn-prev customeIconHome-arrow-circle wow fadeInLeft"
          data-wow-delay="0.5s"
          data-wow-duration="0.5s"
        ></div>
        <div
          className="pub-btn-next customeIconHome-arrow-left wow fadeInLeft"
          data-wow-delay="0.5s"
          data-wow-duration="0.5s"
        ></div>
      </div>
    </div>
  );
};

export default PublicationSlider;
