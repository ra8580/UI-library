import React from "react";

import Button, { ButtonProps } from '../Events/Button';
import Link, { LinkProps } from '../Basic/Link';

import './PersonalizationTile.css';

export interface PersonalizationTileProps {
  id: string,
  image?: string,
  account?: string
  title?: string,
  button?: {
    label: string,
    args?: React.ComponentProps<"button">
  },
  link?: {
    props: LinkProps,
    args?: React.ComponentProps<"a">
  }
}

const PersonalizationTile = ({ id, image = '', account, title, button, link }: PersonalizationTileProps) => {
  return (
    <div className="vrf-personalization-tile">
      <div id={id} className="personalization-tile-container personalization-revamped personalization-template-a personalization-WhiBlaRedRed">
        <div className="personalization-tile-bg-image-container">
        </div>
        <div className="personalization-tile-image-container">
          { (image) ?
            <img alt="" src={image} /> : null
          }
        </div>
        <div className="personalization-tile-content-container">
          <div className="height-100-percent width-100-percent display-flex flex-column flex-justify-space-between">
            <div className="personalization-tile-details-container">
              <span className="personalization-account">{account}</span>
              <div className="personalization-title virginUltraReg">{title}</div>
            </div>
            <div className="personalization-tile-cta-container">
              { (button) ?
                <Button variant="primarySmall" {...button.args}>{button.label}</Button> : null
              }
              { (link) ?
                <Link 
                  variant="normalLink"
                  isSmall
                  isDisabled={link.props.isDisabled}
                  {...link.args}
                >
                  {link.props.children}
                </Link> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalizationTile;