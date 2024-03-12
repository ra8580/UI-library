import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import PersonalizationSlider from '../components/PersonalizationTile/PersonalizationSlider';
import { crossSellPersonalizationData } from '../constants/personalization';
import PersonalizationTile from '../components/PersonalizationTile/PersonalizationTile';
import { Button, Link } from '../components';
import { PrimarySmall } from './components/Events/Button.stories';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const meta: Meta<typeof PersonalizationTile> = {
	component: PersonalizationTile,
	title: "COMPONENTS/Personalization Tile",
	tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof PersonalizationTile>;

export const SingleTile: Story = {
	args: {
		id: 'BOTTOM-1',
    image: './src/assets/images/cross-sell/Image_1A.png',
    account: 'Account: 1234567890',
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li',
    button: {
      label: 'Primary',
      args: {
        className: 'personalization-primary-cta'
      }
    },
    link: {
      props: {
        children: 'Secondary'
      },
      args: {
        href: '#'
      }
    }
	},
	render: (args) =>  {
		return (
			<PersonalizationTile {...args} />
		)
	}
}

export const MultipleTiles: Story = {
	...SingleTile,
	render: (args, SingleTile) =>  {
		return (
			<div className="myaccount-landing-bottom custom-spacer-pad-t-xxl-0 landing-personalization-tile">
					<div className="PersonalizationTilesContainer pers-transparent pers-full-width pers-no-shadow pers-xs-center-mode pers-top-right-controls pers-white-dots pers-narrow" data-location="bottom" preview-mode="false" data-md-stretch="true">
						<div className="personalization-wrapper liquid-wrap container liquid-container">
							<div className="personalization-slider-container responsive" data-lg-crop="false" data-md-stretch="true">
								<Splide 
									options={{
										rewind: false,
										gap: '16px',
										autoplay: false,
										arrows: false,
										perPage: 3,
										pagination: false,
										breakpoints: {
											767: {
												perPage: 1.1,
												focus: 'center',
												trimSpace: false,
											},
											425: {
												perPage: 1.15
											}
										}
									}}>
										<SplideSlide>
											<PersonalizationTile {...SingleTile.args} />
										</SplideSlide>
										<SplideSlide>
											<PersonalizationTile {...SingleTile.args} />
										</SplideSlide>
										<SplideSlide>
											<PersonalizationTile {...SingleTile.args} />
										</SplideSlide>
								</Splide>
							</div>
						</div>
					</div>
				</div>
		)
	}
};