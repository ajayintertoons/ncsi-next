import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getEvents } from "@/services/eventService"; // Update your service
import { formatDate } from "@/utils/formatDate";

const PAGE_SIZE = 3;

const Events = ({ initialEvents }) => {
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const { t } = useTranslation("common");

  const [events, setEvents] = useState(initialEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialEvents.length === PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    const newEvents = await getEvents(nextPage, PAGE_SIZE);
    if (newEvents.length < PAGE_SIZE) {
      setHasMore(false);
    }
    setEvents((prev) => [...prev, ...newEvents]);
    setCurrentPage(nextPage);
    setLoading(false);
  };

  return (
    <section className="events-section">
      <div className="_breadcrumb">
        <p className="_breadcrumb-header">{t("Events")}</p>
      </div>

      <div className="row home-body">
        <div className="col-md-12">
          <div className="events-accordion">
            {events.map((event, index) => (
              <div className="row calendar-row col-lg-12" key={index}>
                <div className="col-lg-2 col-md-3 _date-sec">
                  <h1 className="_date">
                    {new Date(event.from_date)
                      .getDate()
                      .toString()
                      .padStart(2, "0")}
                  </h1>
                  <h5 className="_month-year">
                    {(() => {
                      const date = new Date(event.from_date);
                      const month = date
                        .toLocaleString(router.locale, { month: "short" })
                        .toUpperCase();
                      const year = date.getFullYear();
                      return `${year} ${month}`;
                    })()}
                  </h5>
                </div>
                <div className="col-lg-10 col-md-9 _calendar-desc-main-sec">
                  <div className="_calendar-desc-sub-sec">
                    <ul className="_title-ul">
                      <li>
                        <h4 className="_title">
                          {isRTL ? event.title_ar : event.title_en}
                        </h4>
                      </li>
                      <li>
                        <a
                          href={event.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/images/calendar-icons/download-icon.png"
                            alt="Download Icon"
                          />
                        </a>
                      </li>
                    </ul>
                    <p className="_sub-text">
                      {isRTL
                        ? event.short_description_ar
                        : event.short_description_en}
                    </p>
                    <ul className="_events-ul">
                      <li className="_time-date">
                        <span>
                          {isRTL ? (
                            <>
                              من تاريخ: {formatDate(event.from_date, "ar-EG")}{" "}
                              إلى تاريخ: {formatDate(event.to_date, "ar-EG")}
                            </>
                          ) : (
                            <>
                              From Date: {formatDate(event.from_date)} To Date:{" "}
                              {formatDate(event.to_date)}
                            </>
                          )}
                        </span>
                      </li>
                      <li className="_speaker">
                        <span>
                          {t("Event Speaker")} :{" "}
                          {isRTL
                            ? event.event_speaker_ar
                            : event.event_speaker_en}
                        </span>
                      </li>
                      <li className="_location">
                        <span>
                          {t("Event Location")} :{" "}
                          {isRTL ? event.location_ar : event.location_en}
                        </span>
                      </li>
                      <li className="_avatar">
                        <span>
                          {t("Event Type")} :{" "}
                          {isRTL ? event.event_type_ar : event.event_type_en}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex">
              <button
                id="loadMore"
                onClick={loadMore}
                disabled={loading}
                style={{ marginTop: 20 }}
              >
                {loading ? t("loading") : t("Load More Events")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ locale }) {
  const initialEvents = await getEvents(1, PAGE_SIZE);
  return {
    props: {
      initialEvents,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Events;
