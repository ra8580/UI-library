import React from "react";

interface FooterLink {
	linkName: string;
	linkUrl: string
};

interface FooterProps {
	brandAllRights?: string;
	links?: FooterLink[];
	skipToMainTxt?: string;
};


function FooterMinimal({ brandAllRights, links, skipToMainTxt }: FooterProps) {

	return (
		<div className="standard-minimal-footer virgin-footer-links d-print-none bg-dust txt-midnight-light">
			<a href="#maincontent" className="skip-to-main-link">
				{skipToMainTxt}
			</a>
			<div className="spacer1 bg-greylight" aria-hidden="true"></div>
			<div className="container liquid-container pad-h-0">
				<div>
					<div className="row d-flex align-item-center spacer-pad-b-5 no-margin">
						<div className="col-12 legal-links spacer-margin-t-4">
							<ul className="footer-links noBullets d-flex flex-column flex-md-row align-items-center justify-content-center">
								{
									(links && links.length > 0) && links.map((link, i) =>
										<li className="copy-small" key={i}>
											<a href={link.linkUrl} className="text-decoration-none txt-midnight-light">{link.linkName}</a>
										</li>
									)
								}
							</ul>
						</div>
						<div className="col-12 margin-12-top">
							<div className="d-flex justify-content-center">
								<div className="d-flex justify-content-center">
									<div><p className="no-margin copy-small txt-midnight-light">{brandAllRights}</p></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterMinimal;