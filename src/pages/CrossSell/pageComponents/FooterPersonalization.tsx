import React from 'react';

import PersonalizationSlider from '../../../components/PersonalizationTile/PersonalizationSlider';

import '@splidejs/react-splide/css';

import PERSONALIZATION_DATAS from "../../../mockData/PERSONALIZATION_TILE.json";

const FooterPersonalization = () => {
  let crossSellPersonalizationData = PERSONALIZATION_DATAS;
  return (
    <PersonalizationSlider 
      data={crossSellPersonalizationData}
      sliderOptions={{
        rewind: false,
        gap: '16px',
        autoplay: false,
        arrows: false,
        perPage: 2,
        pagination: false,
        breakpoints: {
          767: {
            perPage: 2,
            focus: 'center',
            trimSpace: false,
          },
          320: {
            perPage: 1.15
          }
        }
      }}
    />
  )
}

export default FooterPersonalization;