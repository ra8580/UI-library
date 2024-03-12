import React, { ComponentPropsWithoutRef } from "react";

import DATA from "./logo.json";

interface LogoProps extends ComponentPropsWithoutRef<"img"> {
  variant?: "virginRedBoxBlackPlusRow" | "virginRedBoxBlackPlusColumn" | "virginRedBoxWhitePlusRow" | 
    "virginRedBoxWhitePlusColumn" | "virginWhiteBoxWhitePlusRow" | "virginWhiteBoxWhitePlusColumn";
}

const getImgSrc = (variant: string = "") => {
  switch (variant) {
    case "virginRedBoxBlackPlusRow":
      return DATA.VIRGIN_RED_BOX_WHITE_PLUS_ROW;
    case "virginRedBoxBlackPlusColumn":
      return DATA.VIRGIN_RED_BOX_WHITE_PLUS_COLUMN;
    case "virginRedBoxWhitePlusRow":
     return DATA.VIRGIN_RED_BOX_BLACK_PLUS_ROW;
    case "virginRedBoxWhitePlusColumn":
      return DATA.VIRGIN_RED_BOX_BLACK_PLUS_COLUMN;
    case "virginWhiteBoxWhitePlusRow":
      return DATA.VIRGIN_WHITE_BOX_WHITE_PLUS_ROW;
    default:
      return DATA.VIRGIN_WHITE_BOX_WHITE_PLUS_COLUMN;
  }
};

const Logo = ({ variant, alt="", ...props}: LogoProps) => {
  return (
    <img alt={alt} src={getImgSrc(variant)} {...props}/>
  )
};

export default Logo;