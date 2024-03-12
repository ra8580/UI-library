import React from "react";

import CROSS_SELL_DATA from "../../../mockData/cross-sell-data";

function CrossSellCards() {
	let crossSellData = CROSS_SELL_DATA;

	return (
		<div>
			<div className="bg-white spacer-pad-t-8 spacer-pad-t-md-9">
				<div className="container liquid-container">
					<div className="myaccount-landing-middle custom-max-w-lg-552 margin-h-auto">

						<div className="PersonalizationTilesContainer pers-transparent pers-full-width pers-no-shadow pers-vertical pers-narrow rendered personalization-initialized" data-location="middle" data-orientation="vertical" preview-mode="false" data-max-initial-count="4" data-load-more-count="2">
							<div className="personalization-wrapper liquid-wrap container liquid-container">
								<div className="personalization-slider-container responsive">

									{crossSellData.map((data, i) => {

										return (
											<div role="presentation" className="slick-slide-wrapper slick-slide-wrapper-active" key={i}>
												<div className="slick-slide slick-active bg-none-force">
													<div>
														<div id="middle-1" className="personalization-tile-container personalization-revamped personalization-support personalization-fixed-image-top personalization-GraWhiWhiWhi">
															<div className="personalization-tile-image-container">
																<img alt="" src={data.imageSource} />
															</div>
															<div className="personalization-tile-content-container">
																<div className="height-100-percent width-100-percent display-flex flex-column">
																	<div className="personalization-tile-details-container">
																		<div className="personalization-title virginUltraReg" aria-hidden="true">{data.title}</div>
																		<p className="personalization-description" aria-hidden="true">{data.description}</p>
																	</div>
																	<div className="personalization-tile-cta-container">
																		<a href="#" className="personalization-primary-cta btn btn-secondary" aria-label=" Mobile Cool phones at Hot prices. Now that's sweet. Sweet Pay™ breaks the cost of your new phone or tablet down to 24 monthly payments at 0% APR on an eligible 2-year rate plan. Add a mobile line">{data.buttonLabel}</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										)

									})}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)














































	// return (
	//     <div id="middle-1" classNameName="personalization-tile-container personalization-revamped personalization-support personalization-fixed-image-top personalization-GraWhiWhiWhi">
	//         <div classNameName="personalization-tile-image-container">
	//             <img alt="" src="http://localhost:81/Markups/VRF/assets/PSSP/Mobile_offers.png" />
	//         </div>
	//         <div classNameName="personalization-tile-content-container">
	//             <div classNameName="height-100-percent width-100-percent display-flex flex-column">
	//                 <div classNameName="personalization-tile-details-container">
	//                     <div classNameName="personalization-title virginUltraReg" aria-hidden="true">Mobile</div>
	//                     <p classNameName="personalization-description" aria-hidden="true">Cool phones at Hot prices. Now that's sweet. Sweet Pay™ breaks the cost of your new phone or tablet down to 24 monthly payments at 0% APR on an eligible 2-year rate plan.</p>
	//                 </div>
	//                 <div classNameName="personalization-tile-cta-container">
	//                     <Link label="Add a mobile line"/>
	//                     <Button label="Add a mobile line" mode="btn-primary"/>
	//                     {/* classNameName="personalization-primary-cta btn btn-secondary" aria-label=" Mobile Cool phones at Hot prices. Now that's sweet. Sweet Pay™ breaks the cost of your new phone or tablet down to 24 monthly payments at 0% APR on an eligible 2-year rate plan. Add a mobile line" */}
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// )
}

export default CrossSellCards