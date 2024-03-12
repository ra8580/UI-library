import React, { ComponentPropsWithoutRef } from "react";

interface SkipLinkProps extends ComponentPropsWithoutRef<"a"> {
	text?: string;
}

function SkipLink({text, className, ...props}:SkipLinkProps) {
	let content = (text && text != "") ? text : props.children;

	return (
		<a className={`skip-to-main-link bg-white txt-midnight nav-drop-shadow-2 border-midnight border-radius-all-6 ${className}`} href="" {...props}>{content}</a>
	)
}

export default SkipLink;