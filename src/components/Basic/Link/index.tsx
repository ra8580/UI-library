import React, { ComponentPropsWithoutRef } from "react";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "normalLink" | "linkWithIconLeft" | "linkWithIconRight";
  isDisabled?: boolean;
	isSmall?: boolean;
	isReverse?: boolean;
	icon?: string;
	text?: string;
	iconCustomClass?: string;
}

const getLinkCustomClass = (isSmall:boolean = false, isDisabled:boolean = false, isReverse:boolean = false ) => {
	let classSmall =  (isSmall) ? "link-small" : "";
	let classDisabled = (isDisabled) ? "disabled": "";
	let classReverse = (isReverse) ? "link-reverse" : "";

	return  classSmall + " " + classDisabled + " " + classReverse;
};

const LinkWithLeftIcon = ({isDisabled=false, isSmall=false, icon="", text="", iconCustomClass="", ...props}) => {
	let customIconClass = (isSmall) ? "icon-vrf link-icon-left t-0" : "icon-vrf txt-size-12 link-icon-left t-3",
			customIcon = (icon != "") ? icon : "icon-vrf icon-Arrow-right-small",
			finalIconCustomClass = (iconCustomClass != "") ? iconCustomClass : customIconClass;

  return (
		<>
			<span className={` ${customIcon} ${finalIconCustomClass}`} role="img" aria-hidden="true"></span>
			<span>{(text != "") ? text: props.children }</span>
		</>
  ) 
};

const LinkWithRightIcon = ({isDisabled=false, isSmall=false, icon="", text="", iconCustomClass="", ...props}) => {
	let customIconClass = (isSmall) ? "icon-vrf link-icon-right t-1" : "icon-vrf txt-size-12 link-icon-right t-0",
			customIcon = (icon != "") ? icon : "icon-vrf icon-Arrow-right-small",
			finalIconCustomClass = (iconCustomClass != "") ? iconCustomClass : customIconClass;

	return (
		<>
			<span>{(text != "") ? text: props.children }</span>
		 	<span className={`${customIcon} ${finalIconCustomClass}`} role="img" aria-hidden="true"></span>
		</>
	) 
};

const Link = ({ variant, isDisabled=false, isSmall=false, isReverse=false, icon="", text="", iconCustomClass="", ...props }: LinkProps) => {
	let customClass = getLinkCustomClass(isSmall, isDisabled, isReverse);

	switch (variant) {
		case "linkWithIconLeft":
			return (
				<a href="#" className={`link link-with-icon-left ${customClass}`} {...props}>
					<LinkWithLeftIcon isSmall={isSmall} isReverse={isReverse} isDisabled={isDisabled} icon={icon} text={text} iconCustomClass={iconCustomClass} {...props}/>
				</a>
			)
		case "linkWithIconRight":
			return (
				<a href="#" className={`link link-with-icon-right ${customClass}`} {...props}>
					<LinkWithRightIcon isSmall={isSmall} isReverse={isReverse} isDisabled={isDisabled} icon={icon} text={text} iconCustomClass={iconCustomClass} {...props}/>
	 			</a>
			)
		default:
			return (
				<a href="#" className={`link ${customClass}`} {...props}>
					{(text != "") ? text: props.children }
				</a>
			)
	}
};

export default Link;