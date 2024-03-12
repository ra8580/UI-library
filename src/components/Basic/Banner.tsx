import React from "react";

// interface BannerProps {
//     label?: string,
//     disabled?: boolean,
//     mode?: 'btn-primary' | 'btn-secondary' | 'btn-secondary-small' | 'btn-primary-reverse' | 'btn-primary-small-reverse'|'btn-secondary-reverse' | 'btn-secondary-small-reverse',
//     onClick?: () => void | any
//   }

const Banner = (props) => {

    return (
        <div className="top-container relative bg-red spacer-pad-y-2 spacer-pad-y-md-6 border-radius-bottom-24">
            <div className="top-heading-container container liquid-container">
                {props.children}
            </div>
        </div>
    )
}

export default Banner;