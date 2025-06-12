import Image from "next/image";
import { useEffect, useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { Geist, Geist_Mono } from "next/font/google";

import Carousel from "@/components/Home/BannerSlider";
import MenuList from "@/components/Home/MenuList";
import PublicationSlider from "@/components/Home/PublicationSlider";
import CalendarIndicator from "@/components/Home/CalenderIndicator";
import IndicatorSlider from "@/components/Home/IndicatorSlider ";
import EventAccordion from "@/components/Home/EventAccordion";
import PopulationClock from "@/components/Home/PopulationClock";
import { getEventList, getPopulationList, getSliderList, getIndicatorList, getPublicationList } from "@/services/indexServices";


export default function Home({ populationData, sliderData, eventData, indicatorData, publicationData }) {

  // console.log(publicationData,"----------publicationData")

  const [highlightDate, setHighlightDate] = useState("");
  const [indicatorTitle, setIndicatorTitle] = useState({ en: '', ar: '' });
  const [nextReleaseDate, setNextReleaseDate] = useState("");
  const [nextReleaseDateList, setNextReleaseDateList] = useState([]);
  const [clickedReleaseDate, setClickedReleaseDate] = useState("");

  return (
    <>
      <div className="banner-row-main">
        <div className="row banner-row">
          <div className="col-sm-12 col-sm-12 col-md-12 col-lg-4 population-clock">
            <PopulationClock populationData={populationData} />
          </div>
          <div className="col-sm-12 col-sm-12 col-md-12 col-lg-8 home-banner-slider-col">
            <Carousel sliderData={sliderData} />
            <IndicatorSlider
              indicatorData={indicatorData}
              onIndicatorHover={(date, title_en, title_ar, nextReleaseDate) => {
                setHighlightDate(date);
                setIndicatorTitle({ en: title_en, ar: title_ar });
                setNextReleaseDate(nextReleaseDate);

              }}
              onNextReleaseDatesReady={(dates) => {
                setNextReleaseDateList(dates);
              }}
              clickedReleaseDate={clickedReleaseDate}
            />

          </div>
        </div>

      </div>
      <div class="row home-body" style={{ paddingTop: '0px' }}>
        <div class="col-sm-12 col-md-6 col-lg-4 home-body-col wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
          <MenuList />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 publisher-slide text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
          <PublicationSlider publicationData={publicationData} />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 home-event-calendar home-body-col wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
          <div className="row">
            <div className="col-md-12">
              <CalendarIndicator
                highlightDate={highlightDate}
                indicatorTitle={indicatorTitle}
                nextReleaseDate={nextReleaseDate}
                nextReleaseDateList={nextReleaseDateList}
                onDateClick={(date) => setClickedReleaseDate(date)}
                setClickedReleaseDate= {setClickedReleaseDate}
                setNextReleaseDate= {setNextReleaseDate}

              // nextReleaseDateList={[
              //   "2025-06-12",
              //   "2025-06-14",
              //   "2025-06-18",
              //   "2025-07-01"
              // ]}
              />
            </div>
            <div className="col-md-12">
              <EventAccordion eventData={eventData} />
            </div>
          </div>
        </div>
      </div>



    </>
  );
}
export async function getServerSideProps({ locale }) {
  try {
    const [populationData, sliderData, eventDataRaw, indicatorData, publicationData] = await Promise.all([
      getPopulationList(),
      getSliderList(),
      getEventList(),
      getIndicatorList(),
      getPublicationList()
    ]);

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        populationData,
        sliderData,
        eventData: eventDataRaw.events || [],
        indicatorData,
        publicationData
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        populationData: null,
        sliderData: [],
        eventData: [],
        indicatorData: [],
        publicationData: [],
      },
    };
  }
}