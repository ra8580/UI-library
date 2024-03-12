import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "primarySmall" | "primaryReverse" | "primarySmallReverse" | "secondary" | "secondarySmall" | "secondaryReverse" | "secondarySmallReverse";
  isDisabled?: boolean;
  text?: string;
}

const variants = {
  primary:
    "btn btn-primary",
  primarySmall:
    "btn btn-primary-small",
  primaryReverse:
    "btn btn-primary-reverse",
  primarySmallReverse:
    "btn btn-primary-small-reverse",
  secondary:
    "btn btn-secondary",
  secondarySmall:
    "btn btn-secondary-small",
  secondaryReverse:
    "btn btn-secondary-reverse",
  secondarySmallReverse:
    "btn btn-secondary-small-reverse"
};

const Button = ({ variant, className, isDisabled=false, text="", ...props }: ButtonProps) => {
  const disabledClass = "disabled";
  const disable = () => {
    return (isDisabled) ? disabledClass: "";
  }
  return (
    <button
      className={[
        variants[variant],
        className,
        disable()
      ].join(" ")}
      {...props}
    >
      {(text != "") ? text: props.children }
    </button>
  );
};

export default Button;