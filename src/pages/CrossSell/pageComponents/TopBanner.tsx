import React from "react";

import { Heading } from "../../../components";

function TopBanner() {
    return (
        <div className="top-container relative bg-red spacer-pad-y-2 spacer-pad-y-md-6 border-radius-bottom-24">
            <div className="top-heading-container container liquid-container">
                <div className="cs-service-container d-flex flex-column align-items-center txt-white">
                    <div className="txt-white virginUltraReg m-0 text-start text-md-center w-100 custom-max-w-626">
                        <Heading HeadingLevel="h1" variant="large">Add a Virgin Plus service</Heading>
                    </div>
                    <div className="custom-max-w-626 col1">
                        <p className="copy-large text-start text-md-center spacer-margin-t-2">
                            We've got you covered with value-packed plans and hot phones, plus Internet with the speed you need, plus the hottest TV shows, plus more pluses...
                        </p>
                        <div className="copy-large-bold text-start text-md-center spacer-margin-t-2">
                            What would you like to add?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;