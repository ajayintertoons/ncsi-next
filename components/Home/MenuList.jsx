import React from 'react';
// import './MenuList.css'; 
import { useTranslation } from 'next-i18next';

const menuItems = [
  { labelKey: 'e_census_portal', href: 'https://portal.ecensus.gov.om' },
  { labelKey: 'data_portal', href: 'https://data.gov.om' },
  { labelKey: 'sdg', href: 'https://sdg.ncsi.gov.om/' },
  { labelKey: 'national_statistics', href: '#' },
  { labelKey: 'oman_nsdi', href: 'https://nsdig2gapps.ncsi.gov.om/nsdiportal/' },
  { labelKey: 'women_in_oman', href: '#' },
  { labelKey: 'manafeth_international_trade', href: 'https://manafeth.ncsi.gov.om' },
  { labelKey: 'big_data_pilot_project', href: 'https://mpd.ncsi.gov.om' },
];

const MenuList = () => {

  const { t } = useTranslation('common');
  return (
     <div className="row home-menu text-bold">
      <div className="col">
        <div className="population-clock-header bg-theme color-white text-bold">
          <div className="row">
            <div className="col-2 text-center wow fadeInLeft" data-wow-delay="0.2s" data-wow-duration="0.5s">
              <i className="customeIconHome-menu section-head-icon vertical-middle main-menu-icon"></i>
            </div>
            <div className="col wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.5s">
              <span className="section-head vertical-middle">{t('main_menu')}</span>
            </div>
          </div>
        </div>

        {menuItems.map((item, index) => {
          const delay = 0.35 + index * 0.05;
          return (
            <div className="row menu-item" key={index}>
              <div
                className="col-2 text-center text-20 align-self-center wow fadeInLeft rotate-icon"
                data-wow-delay={`${delay.toFixed(2)}s`}
                data-wow-duration="0.5s"
              >
                <i className="customeIconHome-arrow-circle color-theme "></i>
              </div>
              <div
                className="col align-self-center wow fadeInLeft"
                data-wow-delay={`${(delay + 0.05).toFixed(2)}s`}
                data-wow-duration="0.5s"
              >
                <a target={item.href !== '#' ? '_blank' : undefined} href={item.href}>{t(item.labelKey)}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
