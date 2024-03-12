import React, { useEffect, useState } from "react";

import TopBanner from "./pageComponents/TopBanner.tsx";
import BottomBanner from "./pageComponents/BottomBanner.tsx";
import CrossSellCards from "./pageComponents/CrossSellCard.tsx";
import FooterExtras from "./pageComponents/FooterExtras.tsx";
import { FooterMinimal, GlobalNav } from "../../components";

// import "../style/myaccount-landing.css";
// import "../style/Virgin-personalization-slider.css";

import FOOTER_MINIMAL_DATA from "../../mockData/FOOTER_MINIMAL.json";

function CrossSell() {

  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleClassMobileNavActive = () => {
    let body = document.querySelector("body");

    if (isMobileNavActive) {
      return body?.classList.add("mobile-nav-open");
    } else {
     return  body?.classList.remove("mobile-nav-open");
    }
  }

  useEffect(()=> {
    toggleClassMobileNavActive();
  })

  return (
    <div>
      <GlobalNav setIsMobileNavActive={setIsMobileNavActive} />
      <TopBanner/>
      <CrossSellCards />
      <BottomBanner/>

      <footer>
				<FooterExtras />
				<FooterMinimal 
					skipToMainTxt={FOOTER_MINIMAL_DATA.SKIP_TO_MAIN}
					brandAllRights={FOOTER_MINIMAL_DATA.BRAND_ALL_RIGHTS}
					links={FOOTER_MINIMAL_DATA.LINKS}/>
			</footer>
    </div>
  )
}

export default CrossSell;