import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const PopulationClock = () => {
    const {t} = useTranslation("common")
  return (
    <div>
        
    </div>
  )
}

export default PopulationClock;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
