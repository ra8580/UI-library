import React, { useState } from "react";

const AccordionItem = ({ accordionTriggerLabel, accordionTriggerId, accordionTriggerIndex, setTriggerIndex, ...props }) => {
	function setTriggerId() {

		if (accordionTriggerId == accordionTriggerIndex) {
			setTriggerIndex("");
		} else {
			setTriggerIndex(accordionTriggerId);
		}
	}

	const setAccordionIcon = () => {
		return (accordionTriggerId == accordionTriggerIndex) ? "icon-Arrow-down" : "icon-Arrow-right-small";
	}

	return (
		<li className={`connector-lob button-on-mobile ${(accordionTriggerIndex == accordionTriggerId) ? "active" : ""}`}>
			<a id={accordionTriggerId} className="connector-lob-no-href" tabIndex={0} onClick={setTriggerId}>
				<span className="capitalize txtNormalCase noMargin">
					{accordionTriggerLabel}
				</span>
				<span className={`icon-vrf d-lg-none d-flex ${setAccordionIcon()}`} role="img" aria-hidden="true"></span>
			</a>

			{props.children}
		</li>
	)
}

const MobileNavAccordion = ({ setIsMyAccountDisclosureOpen, isMyAccountDisclosureOpen, ...props }) => {
	const [accordionTriggerIndex, setAccordionTriggerIndex] = useState("myvirgin_gc_FIRST_MY_SERVICES_SERVICES");
	
	function toggleDisclosure() {
		if (isMyAccountDisclosureOpen) {
			setIsMyAccountDisclosureOpen(false);
		} else {
			setIsMyAccountDisclosureOpen(true);
		}
	}

	const setDisclosureIcon = () => {
		return isMyAccountDisclosureOpen ? "icon-Arrow-down" : "icon-Arrow-right-small";
	}

	return (
		<>
			<a id="myvirgin_gc_FIRST_MYBELL" onClick={toggleDisclosure} className="active no-margin-right show-flyout-onfocus-virgin" role="presentation" tabIndex={-1}>
				<span className="capitalize txtSize14 txtSize16-sm txtSize16-xs txtSize16-xs">My account</span>
				<span className={`icon-vrf d-lg-none ${setDisclosureIcon()}`} role="img" aria-hidden="true"></span>
			</a>
			<div className="connector-lob-flyout" id="area-myaccount-flyout">
				<div>
					<ul className="connector-lob-flyout-content pad-20-top-important no-pad-top-important-sm ul-auto-center height_auto_sm">
						<AccordionItem accordionTriggerLabel="My services" accordionTriggerId="myvirgin_gc_FIRST_MY_SERVICES_SERVICES" accordionTriggerIndex={accordionTriggerIndex} setTriggerIndex={setAccordionTriggerIndex}>
							<ul className="height_auto_sm connector-lob-dropdown-mobile accessible-sublinks-dropdown">
								<li className="third-connector-lob button-on-mobile">

									<a className="current-active-lob lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_MY_SERVICES_SERVICES_1_1" href="#">
										<span className="icon-vrf icon-overview txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Overview</span>
										<span className="connector-lob-mobile-info"></span>
									</a>


								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_MOBILITY_1_2" href="#">
										<span className="icon-vrf icon-Mobile-warning txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Mobility</span>
										<span className="connector-lob-mobile-info">416 735-4111</span>
									</a>


								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_INTERNET_1_3" href="#">
										<span className="icon-vrf icon-Internet-01 txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Internet</span>
										<span className="connector-lob-mobile-info">9999911043</span>
									</a>


								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_TV_1_4" href="#">
										<span className="icon-vrf icon-TV-01 txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">TV</span>
										<span className="connector-lob-mobile-info">1000001001001073</span>
									</a>


								</li>
							</ul>
						</AccordionItem>

						<AccordionItem accordionTriggerLabel="My bill" accordionTriggerId="myvirgin_gc_FIRST_MY_SERVICES_BILLS" accordionTriggerIndex={accordionTriggerIndex} setTriggerIndex={setAccordionTriggerIndex}>
							<ul className="height_auto_sm connector-lob-dropdown-mobile accessible-sublinks-dropdown">
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_MOBBILL_1_1" href="#">
										<span className="icon-vrf icon-Mobility-bill-colored txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Mobility bill</span>
										<span className="connector-lob-mobile-info">524571162</span>
									</a>

								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_BILL_PAYMENT_2" href="#">
										<span className="icon-vrf icon-Card txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Pay this bill</span>
										<span className="connector-lob-mobile-info"></span>
									</a>

								</li>
							</ul>
						</AccordionItem>

						<AccordionItem accordionTriggerLabel="My profile" accordionTriggerId="myvirgin_gc_FIRST_MY_SERVICES_PROFILE" accordionTriggerIndex={accordionTriggerIndex} setTriggerIndex={setAccordionTriggerIndex}>
							<ul className="height_auto_sm connector-lob-dropdown-mobile accessible-sublinks-dropdown">
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_MY_PROFILE_1" href="#">
										<span className="icon-vrf icon-User-icon txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">My Virgin Plus Account</span>
										<span className="connector-lob-mobile-info"></span>
									</a>

								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_BILL_PROFILE_2" href="#">
										<span className="icon-vrf icon-Bill-dollar txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Billing</span>
										<span className="connector-lob-mobile-info"></span>
									</a>

								</li>
								<li className="third-connector-lob button-on-mobile">

									<a className=" lob-nickname-flyout lob-nickname-mobile txtWhite" id="myvirgin_gc_FIRST_SERVICE_PROFILE_3" href="#">
										<span className="icon-vrf icon-Service-info txtSize32 margin-r-10" role="img" aria-hidden="true"></span>
										<span className="connector-lob-mobile-sevice">Services information</span>
										<span className="connector-lob-mobile-info"></span>
									</a>

								</li>
							</ul>
						</AccordionItem>

						<li className="connector-lob  button-on-mobile">
							<a id="myvirgin_gc_FIRST_Promotions" href="/Promotions/" className="no-flyout-menu justify-content-start">
								<span className="capitalize txtNormalCase noMargin">
									Exclusive offers
								</span>
								<div id="mob_promotions-dot" className="product-color-option relative">
									<p className="ctrl_element ctrl_size border-allRound"></p>
								</div>
							</a>

						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNavAccordion;