import React from "react";

import FooterPersonalization from "./FooterPersonalization";

import FOOTER_HELP_DATA from "../../../mockData/FOOTER_HELP.json";

function FooterExtras() {
	return (
		<div className="bg-dust border-radius-top-24 overflow-hidden help-footer js-help-footer">
			<div className="container liquid-container spacer-pad-y-5">
				<div className="row margin-0 align-items-lg-center">
					<div className="col-lg-4">
						<div className="side-links-footer">
							<h3 className="headline-small no-margin txt-midnight">
								Help is on the way
							</h3>
							<ul className="listStyleNone pad-h-0 no-margin d-flex flex-column d-md-block d-lg-flex spacer-pad-t-lg-1">
								{
									FOOTER_HELP_DATA.map((item, i) =>
										<li className="d-flex spacer-pad-t-3" key={i}>
											<a href="#" className="d-inline-flex align-items-center txt-midnight relative text-decoration-none">
												<div className="d-flex align-items-center justify-center spacer-margin-r-2">
													<img alt="" src={item.imgSrc} />
												</div>
												<div>
													<span className="relative">
														{item.linkLabel}
														<span aria-hidden="true" className="icon-pssp arrow-right txtSize12 margin-l-10 d-inline-block absolute bottom-2"></span>
													</span>
												</div>
											</a>
										</li>
									)
								}
							</ul>
						</div>
					</div>
					<div className="col-lg-8 spacer-pad-t-3 pad-t-md-0">
						<FooterPersonalization />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterExtras;