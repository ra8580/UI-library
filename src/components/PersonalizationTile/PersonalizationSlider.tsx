import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import PersonalizationTile, { PersonalizationTileProps } from './PersonalizationTile';

import '@splidejs/react-splide/css';
import './PersonalizationTile.css';

interface PersonalizationSliderProps {
  data: PersonalizationTileProps[] | [],
  sliderOptions?: any
}

const PersonalizationSlider = ({
  data = [],
  sliderOptions
  // ...props
}:PersonalizationSliderProps) => {
  return (
    <div className="myaccount-landing-bottom custom-spacer-pad-t-xxl-0 landing-personalization-tile">
      <div className="PersonalizationTilesContainer pers-transparent pers-full-width pers-no-shadow pers-xs-center-mode pers-top-right-controls pers-white-dots pers-narrow" data-location="bottom" preview-mode="false" data-md-stretch="true">
        <div className="personalization-wrapper liquid-wrap container liquid-container">
          <div className="personalization-slider-container responsive" data-lg-crop="false" data-md-stretch="true">
            <Splide 
              options={sliderOptions}>
              { data.map((item: PersonalizationTileProps, i) =>
                <SplideSlide key={i}>
                  <PersonalizationTile
                    id={item.id}
                    image={item.image}
                    account={item.account}
                    title={item.title}
                    button={item.button}
                    link={item.link}
                  />
                </SplideSlide>
              )}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalizationSlider