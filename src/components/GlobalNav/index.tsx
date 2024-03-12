import React, { useState } from "react";

import RightPortion from "./components/RightPortion";
import SecondaryNav from "./components/SecondaryNav";
import MobileNavAccordion from "./components/MobileNavAccordion";

import NAV_ICONS from "../../mockData/NAV_ICONS.json";

const GlobalNav = ({ setIsMobileNavActive }) => {

	const [isMyAccountDisclosureOpen, setIsMyAccountDisclosureOpen] = useState(true);

	function toggleMenu(isVisible: boolean = false) {
		let connectorNav = document.querySelector(".connector-nav");

		if (connectorNav) {
			if (isVisible) {
				if (connectorNav.classList.contains("hidden-on-mobile")) {
					connectorNav.classList.remove("hidden-on-mobile");
				}
			} else {
				connectorNav.classList.add("hidden-on-mobile");
			}
		}
	};

	function clickMenu(e) {
		let btn = e.target.closest("button");

		if (btn) {
			if (!btn.classList.contains("active")) {
				btn.classList.add("active");
				toggleMenu(true);
			} else {
				btn.classList.remove("active");
				toggleMenu(false);
			}
		}
	}

	const toggleActiveClass = () => {
			return (isMyAccountDisclosureOpen ? "active" : "");
	}

	const toggleMobileNavActive = (toShow:boolean=false) => {
		if(!toShow) {
			setIsMobileNavActive(false);
		} else {
			setIsMobileNavActive(true);
		}
	}

	return (
		<header className="vm-gn-responsive gh-myv header-outline-override">
			{/* <NavSkipToMain /> */}
			<a className="skip-link bg-white txt-midnight nav-drop-shadow-2 border-midnight border-radius-all-6" href="">Skip to main content</a>

			<div id="accessible-connector" className="connector virgin-connector">
				<div className="container liquid-container mob-connector">
					<div className="connector-mobile-bar">
						<a id="mybell_gc_HOME_MOB" href="" className="connector-brand" title="Virgin Plus Home" aria-label="Virgin Plus Home">
							<img alt="Virgin Plus" className="virgin-plus-logo-img-h" src={NAV_ICONS.BRAND_LOGO_TM} />
						</a>
						<div className="connector-active-lob-title">
							<span>Home</span>
						</div>
						<button id="mybell_gc_hamburger_menu" onClick={(e)=> {clickMenu(e)}} type="button" className="connector-nav-open-button" title="Open Mobile Nav" aria-label="Open Mobile Nav" aria-controls="connector-nav" aria-expanded="false">
							<img alt="mobile nav" onClick={()=> toggleMobileNavActive(true)} className="width-24 hamburger-menu" src={NAV_ICONS.ICON_HAMBURGER} />
							<img alt="mobile nav" onClick={()=> toggleMobileNavActive(false)} className="width-24 close-thin" src={NAV_ICONS.ICON_CLOSE} />
						</button>
					</div>
					<nav id="connector-nav" className="connector-nav hidden-on-mobile mobNav-trap-focus-init" aria-label="Primary">
						<div className="connector-brand">
							<a id="mybell_gc_HOME_DESK" href="" title="Virgin Plus Home" aria-label="Virgin Plus Home">
								<img alt="Virgin Plus" className="virgin-plus-logo-img-h" src={NAV_ICONS.BRAND_LOGO_D} />
								<span className="icon-vrf icon-virgin-plus-logo-h"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
							</a>
						</div>

						<ul className="connector-areas">
							<li className="connector-area connector-area_find-store connector-area_first" id="mobileEnvUrl">
								<a id="mybell_gc_MOBILE" href="" className="">
									<span className="capitalize txtSize14 txtSize16-sm txtSize16-xs txtSize16-xs">Mobile</span>
								</a>

							</li>
							<li className="connector-area connector-area_find-store connector-area_first" id="internetEnvUrl">
								<a id="mybell_gc_HOME_INTERNET" href="" className="">
									<span className="capitalize txtSize14 txtSize16-sm txtSize16-xs txtSize16-xs">Internet</span>
								</a>

							</li>
							<li className="connector-area">
								<a id="mybell_gc_MEMBER_BENEFITS" href="" className="">
									<span className="capitalize txtSize14 txtSize16-sm txtSize16-xs txtSize16-xs">Member Benefits</span>
								</a>

							</li>
							<li className="connector-area connector-area_support">
								<a id="lgcConnectorHeaderSupport" href="" className="pointer">
									<span className="capitalize txtSize14 txtSize16-sm txtSize16-xs txtSize16-xs">Support</span>
								</a>
							</li>
							<li className={`connector-area connector-area_current ${toggleActiveClass()}`}>
								<MobileNavAccordion setIsMyAccountDisclosureOpen={setIsMyAccountDisclosureOpen} isMyAccountDisclosureOpen={isMyAccountDisclosureOpen} />
							</li>
						</ul>

						<ul className="connector-settings-mobile">
							<li>
								<span className="icon-o icon-user_profile-2 txtWhite navbar-icon-mobile d-none" aria-hidden="true"></span>
								<a id="myvirgin_gc_FIRST_LOGOUT_MOB" href="">
									<span className="txtSize12">
										Log out
									</span>
								</a>
							</li>

							<li>
								<div className="m-location-area-wrap">
									<a id="mybell_gc_fed_STORE_MOB" href="">
										<img alt="" className="width-16" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxMzFjMzU7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgsNS4yNUExLjQyLDEuNDIsMCwxLDAsOS40Miw2LjY3LDEuNDIsMS40MiwwLDAsMCw4LDUuMjVaTTgsLjU4QTYuMDksNi4wOSwwLDAsMCwxLjkyLDYuNjdhNi4xNCw2LjE0LDAsMCwwLC45MywyLjg2LDIwLjM5LDIwLjM5LDAsMCwwLDEuOSwyLjcyYy42OS44MywxLjM3LDEuNTcsMS44OCwyLjEuMjUuMjcuNDYuNDguNjEuNjNsLjE4LjE3LDAsMHYwaDBMOCwxNC42N2wuNTIuNTRoMHYwbC4wNSwwTDguNzYsMTVjLjE1LS4xNS4zNi0uMzYuNjEtLjYzLjUxLS41MywxLjE5LTEuMjcsMS44OC0yLjFhMjAuMzksMjAuMzksMCwwLDAsMS45LTIuNzIsNi4xNCw2LjE0LDAsMCwwLC45My0yLjg2QTYuMDksNi4wOSwwLDAsMCw4LC41OFptMy44NSw4LjIxYTE4LjQyLDE4LjQyLDAsMCwxLTEuNzYsMi41MWMtLjY1Ljc5LTEuMzEsMS41LTEuOCwybC0uMjkuMy0uMjktLjNjLS40OS0uNTEtMS4xNS0xLjIyLTEuOC0yQTE4LjQyLDE4LjQyLDAsMCwxLDQuMTUsOC43OWE0LjcxLDQuNzEsMCwwLDEtLjczLTIuMTIsNC41OCw0LjU4LDAsMSwxLDkuMTYsMEE0LjcxLDQuNzEsMCwwLDEsMTEuODUsOC43OVpNOCwxNC42N2wuNTIuNTRhLjc3Ljc3LDAsMCwxLTEsMFoiLz48L3N2Zz4=" />
									</a>
									<a id="mybell_gc_fed_LANGUAGE_MOB" className="js-current-language " href="javascript:void(0)" role="button" aria-label="FranÃ§ais" data-language="en" data-alternative="fr" data-vanityurl="">
										<span className="txtSize12">FR</span>
									</a>
								</div>
							</li>
						</ul>

						<RightPortion />
					</nav>
				</div>

				<SecondaryNav />
			</div>
		</header>
	)
};

export default GlobalNav;