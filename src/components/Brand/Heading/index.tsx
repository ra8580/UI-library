import React, { ComponentPropsWithoutRef } from 'react';

export interface HeadingProps extends ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
  HeadingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  text?: string;
}

const variants = {
  xlarge:
    "headline-xlarge",
  large:
    "headline-large",
  medium:
    "headline-medium",
  small:
    "headline-small",
  xsmall:
    "headline-xsmall"
};

const Heading = ({ HeadingLevel = 'h1', variant, className, text="", ...props }: HeadingProps) => {

  return (
    <HeadingLevel className={[variants[variant], className].join(' ')}>
      {(text) ? text : props.children}
    </HeadingLevel>
  );
};

export default Heading;