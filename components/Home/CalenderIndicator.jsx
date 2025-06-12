import React, { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const CalendarIndicator = ({
  highlightDate,
  indicatorTitle,
  nextReleaseDate,
  nextReleaseDateList = [],
  setClickedReleaseDate,
  setNextReleaseDate,
}) => {
  const router = useRouter();
  const calendarContainerRef = useRef(null);
  const calendarRef = useRef(null);
  const { t } = useTranslation("common");

  const dateObj = nextReleaseDate ? new Date(nextReleaseDate) : new Date();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const monthName = dateObj.toLocaleString(router?.locale || "en", {
    month: "long",
  });

  const normalizeDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  };

  // const nextRelease = nextReleaseDate
  //   ? new Date(nextReleaseDate).toLocaleDateString(router.locale, {
  //       day: '2-digit',
  //       month: 'long',
  //       year: 'numeric',
  //     })
  //   : '';

  const title =
    router.locale === "ar" ? indicatorTitle?.ar : indicatorTitle?.en;

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
      });

    const loadJQueryUI = async () => {
      if (!window.jQuery) {
        await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
      }

      if (!window.$.datepicker) {
        await loadScript("https://code.jquery.com/ui/1.13.2/jquery-ui.min.js");

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css";
        document.head.appendChild(link);
      }

      const highlightedDates = nextReleaseDateList.map((d) => normalizeDate(d));
      const mainDate = normalizeDate(nextReleaseDate);

      // Destroy and reinitialize the datepicker
      window.$(calendarRef.current).datepicker("destroy");

      const dateObj = new Date(nextReleaseDate);

      window.$(calendarRef.current).datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        defaultDate: dateObj, // force calendar to jump to the highlight date's month
        beforeShowDay: (date) => {
          const normalized = normalizeDate(date);

          const isMainDate = normalized === mainDate;
          const isHighlighted = highlightedDates.includes(normalized);

          if (isMainDate) {
            return [true, "highlighted-date"]; // styled with big orange circle
          } else if (isHighlighted) {
            return [true, "highlighted-text-date"]; // styled with orange text
          } else {
            return [true, ""];
          }
        },

        onSelect: function (dateText, inst) {
          setClickedReleaseDate(dateText);
          setNextReleaseDate(dateText);
          // alert(`You clicked: ${dateText}`);
        },
      });
    };

    loadJQueryUI();
  }, [nextReleaseDate]);

  return (
    <>
      <style>{`
   .ui-datepicker-header {
  background-color: #2196f3;
  color: white;
  text-align: center;
  padding: 10px;
  height: 40px;
  border-radius: 8px 8px 0px 0px;
  height: 100%;
}
.ui-datepicker-prev span,
.ui-datepicker-next span {
  display: none;
}
.ui-datepicker-prev:after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\\f0d9";
  font-size: 20px;
  float: left;
  margin-left: 10px;
  cursor: pointer;
  color: #a1a1a1;
  margin-top: 6px;
}
.ui-datepicker-next:after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\\f0da";
  float: right;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  color: #a1a1a1;
  margin-top: 6px;
}
.ui-datepicker-calendar th {
  padding: 10px;
  color: #000000;
}
.ui-datepicker-calendar {
  text-align: center;
  margin: 0 auto;
  padding: 8px;
}
.ui-datepicker-title {
  padding: 10px;
}
.ui-datepicker-calendar td {
  padding: 4px 2px !important;
}
.ui-datepicker-calendar .ui-state-default {
  text-decoration: none;
  color: black;
}
.ui-datepicker-calendar .ui-state-active {
  color: #ff8f2e;
}
.cust-cal-top {
  background-color: #06c3b1;
  color: white;
  padding: 10px 15px;
  font-size: 20px;
}
.cust-cal-top span {
  font-size: 22px;
  font-weight: 600;
}
.cust-cal-bottom {
  display: flex;
}
.cust-cal-orange {
  background-color: #ff8f2e;
  /* padding:10px; */
}
.ui-datepicker-calendar .ui-state-default {
  border: none !important;
}
.ui-datepicker .ui-widget-header {
  border: none !important;
  border-bottom: 1px solid #b9b9b9 !important;
}
.ui-datepicker {
  border: none !important;
  margin-top: 0px !important;
}
.ui-datepicker,
.ui-datepicker .ui-widget-content,
.ui-datepicker .ui-widget-header,
.ui-datepicker .ui-state-default,
.ui-datepicker .ui-state-hover {
  background: #f2f2f2 url(images/ui-bg_flat_75_ffffff_40x100.png) 50% 50%
    repeat-x !important;
}
.cust-cal-orange h3 {
  color: white;
  font-size: 70px;
  margin: 0px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  margin-top: 10px;
}
.cust-cal-orange span {
  color: white;
  text-align: center;
  display: block;
  font-weight: 600;
  line-height: 12px;
  margin-bottom: 12px;
  font-size: 20px;
}
.cust-cal-orange h4 {
  color: white;
  text-align: center;
  font-size: 34px;
  margin: 0px;
  line-height: 1;
  margin-bottom: 4px;
}
.cust-cal-orange .chl-div {
  display: block;
  margin: 0px auto;
  border: none;
  padding: 6px 2px;
  background-color: white;
  width: 90px;
  font-size: 14px;
  text-align: center;
}
.bk-wyt-arw {
  background-color: white;
  margin: 10px;
  text-align: center;
  line-height: 1.3;
  padding: 6px;
  font-size: 14px;
  margin-bottom: 0px;
  position: relative;
  width: 98px !important;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bk-wyt-arw::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.cust-cal-wrap {
  background-color: white;
  /* width: 360px; */
}
.ui-datepicker .ui-datepicker-title {
  font-size: 14px !important;
  line-height: 1em;
  text-align: center;
  color: black;
  font-weight: bold;
}
span.ui-datepicker-month {
  text-transform: uppercase;
  color: gray;
}
span.ui-datepicker-year {
  color: gray;
}
.hasDatepicker {
  width: 100%;
}
.ui-datepicker {
  width: auto !important;
  padding: 0px !important;
}
.ui-datepicker td span,
.ui-datepicker td a {
  text-align: center;
}
.ui-widget-header .ui-icon {
  display: none !important;
}
.ui-datepicker .ui-datepicker-prev,
.ui-datepicker .ui-datepicker-next {
  outline: none !important;
  border: none !important;
}
.ui-datepicker table {
  margin: 0 0 0.8em;
}
.highlighted-date .ui-state-default {
  background-color: #ff8f2e !important;
  color: white !important;
  font-weight: bold !important;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center !important;
  margin: 0px auto;
  line-height: 27px;
}
.highlighted-text-date .ui-state-default {
  color: #ff8f2e !important;
  font-weight: bold !important;
}

      `}</style>

      {/* <a href="#" className="hover-link">Hover to show calendar</a> */}

      <div className="custom-calendar-wrapper" ref={calendarContainerRef}>
        <div className="cust-cal-wrap">
          <div className="cust-cal-top">
            <i className="fas fa-calendar-alt"></i>{" "}
            <span className="calander-text">{t("calander_of_the_key")}</span>
          </div>
          <div className="cust-cal-bottom">
            <div id="calendar" className="" ref={calendarRef}></div>
            <div className="cust-cal-orange">
              <div className="bk-wyt-arw">{title}</div>
              <h3>{t(`${day}`)}</h3>
              <span>{t(monthName)}</span>
              <h4>{year}</h4>
              <div className="chl-div">{t("next_release")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarIndicator;
