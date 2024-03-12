import React, { ComponentPropsWithoutRef } from "react";

interface IconProps extends ComponentPropsWithoutRef<"span"> {
  iconName: "icon-mobile" | "icon-check" | "icon-error";
}


const Icon = ({ iconName, ...props}: IconProps) => {
  return (
    <span className={`icon-vrf ${iconName}`} {...props}></span>
  )
};

export default Icon;