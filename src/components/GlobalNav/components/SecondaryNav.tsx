import React, { useEffect, useRef } from "react";

const DropDownSecondaryNav = ({ id, triggerLabel, ...props }) => {
  const dropdownRef = useRef(null);
  const liRef = useRef(null);
  const aRef = useRef(null);

  function toggleDropdown(toShow = false) {
    if (dropdownRef) {
      let dropdown = dropdownRef.current;
      let li = liRef.current;

      if (toShow) {
        dropdown.style.display = "";
        li.classList.add('js-s-nav-active');
      } else {
        dropdown.style.display = "none";
        li.classList.remove('js-s-nav-active');
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      let liTarget = e.target.closest("li");
      let liRefParent = liRef.current;

      if (!liTarget) {
        toggleDropdown(false);
      } else if (liTarget.id != liRefParent.id) {
        toggleDropdown(false);
      } else if (liTarget.id == liRefParent.id && !liRefParent.classList.contains("js-s-nav-active")) {
        toggleDropdown(true);
      } else if (liTarget.id == liRefParent.id && liRefParent.classList.contains("js-s-nav-active")) {
        toggleDropdown(false);
      }
    });
  });

  return (
    <li id={id} ref={liRef} {...props}>
      <div className="relative d-inline-flex pad-v-15">
        <a id="btn-1" ref={aRef} className="spacer-margin-r-4 trigger-dropdown secondary-nav-lob display-flex nba virgin" aria-expanded="false" role="button" tabIndex={0}>
          <span className="spacer-margin-r-1">{triggerLabel}</span>
          <span className="icon-vrf icon-Arrow-down txtSize12" role="img" aria-hidden="true"></span>
        </a>
        <div className="secondary-nav-dropdown block no-txt-transform connector-drop-down" style={{ display: "none" }} ref={dropdownRef}>
          {props.children}
        </div>
      </div>
    </li>
  )
}

const SecondaryNav = () => {
  return (
    <div className="connector-active-secondary-nav" role="navigation" aria-label="Secondary">
      <div className="container liquid-container">
        <ul className="clearfix">
          <DropDownSecondaryNav id="sNav-item-id-0" triggerLabel="My Services" className="active" aria-current="true">
            <div className="bgWhite outer-shadow border-radius-16 secondary-nav-dropdown-container">
              <ul className="pad-0 margin-0">
                <li>
                  <a id="myvirgin_gc_SEC_MOBILITY_1_1" href="/Home/Index/87742773" className="services-selection active">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Mobile-warning txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Mobility</div>
                        <div className="lineH-22 lob-nickname" title="Bruce’s cell">Bruce’s cell</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_INTERNET_1_2" href="/Home/Index/93177018" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Internet-01 txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Internet</div>
                        <div className="lineH-22 lob-nickname" title="9999911043">9999911043</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_TV_1_3" href="/Home/Index/21717036" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-TV-01 txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">TV</div>
                        <div className="lineH-22 lob-nickname" title="1000001001001073">1000001001001073</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </DropDownSecondaryNav>

          <DropDownSecondaryNav id="sNav-item-id-1" triggerLabel="My bill">
            <div className="bgWhite outer-shadow border-radius-16 secondary-nav-dropdown-container">
              <ul className="pad-0 margin-0">
                <li>
                  <a id="myvirgin_gc_SEC_MOBBILL_1_1" href="/MyBill?acctNo=524571162" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Mobility-bill-colored txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Mobility bill</div>
                        <div className="lineH-22 lob-nickname" title="524571162">524571162</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_MOBBILL_1_2" href="/MyBill?acctNo=524571162" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Mobility-bill-colored txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Mobility bill</div>
                        <div className="lineH-22 lob-nickname" title="524571162">524571162</div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_BILL_PAYMENT_2" href="/MyBill/PayBill" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Card txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Pay this bill</div>
                        <div className="lineH-22 lob-nickname" title=""></div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </DropDownSecondaryNav>

          <DropDownSecondaryNav id="sNav-item-id-2" triggerLabel="My profile">
            <div className="bgWhite outer-shadow border-radius-16 secondary-nav-dropdown-container">
              <ul className="pad-0 margin-0">
                <li>
                  <a id="myvirgin_gc_SEC_MY_PROFILE_1" href="/MyProfile?profile=#profileinformation" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-User-icon txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">My Virgin Plus Account</div>
                        <div className="lineH-22 lob-nickname" title=""></div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_BILL_PROFILE_2" href="/MyProfile?billing=#billinginformation/" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Bill-dollar txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Billing</div>
                        <div className="lineH-22 lob-nickname" title=""></div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a id="myvirgin_gc_SEC_SERVICE_PROFILE_3" href="/MyProfile?service=#serviceinformation" className="services-selection">
                    <div className="icon-pos gn-menu">
                      <span className="icon-vrf icon-Service-info txtSize32" role="img" aria-hidden="true"></span>
                    </div>
                    <div className="desc-pos">
                      <div className="middle-align flex-column">
                        <div className="my-service txtBold txtSize14">Services information</div>
                        <div className="lineH-22 lob-nickname" title=""></div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </DropDownSecondaryNav>

          <li>
            <div className="nav-relative d-inline-flex pad-v-15">
              <a id="myvirgin_gc_SEC_Promotions_4" href="/Promotions/" className="trigger-dropdown secondary-nav-lob display-flex nba virgin no-flyout-menu">
                <span>Exclusive offers</span>
                <div id="promotions-dot" className="product-color-option relative">
                  <p className="ctrl_element ctrl_size border-allRound"></p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SecondaryNav;