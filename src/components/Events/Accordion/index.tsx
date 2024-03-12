import React, {ReactElement, ReactPortal} from "react";

import { customAccordionToggleLabel } from "./helper";

interface AccordionProps {
	id: string;
	collapseTitle: string;
	expandTitle: string;
	children?: ReactElement;
}

const Accordion = ({id="", children, collapseTitle, expandTitle}: AccordionProps) => {
	const setDropdownBodyId = () => {
		return "body-" + id;
	}
	const setTriggerId = () => {
		return "button-" + id;
	}

	return (
		<div className="accordion-wrap">
			<h2 className="no-margin d-flex">
				<a href={"#" + setDropdownBodyId()} onClick={(e)=>customAccordionToggleLabel(e)} className="link link-with-icon-left text-decoration-none collapse-trigger js-click-on-space-delegate" 
					id={setTriggerId()} aria-controls={setDropdownBodyId()} 
					aria-expanded="true" role="button" data-bs-toggle="collapse" data-icon-expand="icon-expand-plus-icon" data-icon-collapse="icon-collapse-minus-icon">
					<span className="icon-vrf txt-size-16 link-icon-left t-1 icon-collapse-minus-icon" aria-hidden="true" role="img" aria-label="details expander"></span>
					<span className="small-text d-inline-flex align-items-center accordion-title text-decoration-none" data-expand-title={expandTitle} data-collapse-title={collapseTitle}>{collapseTitle}</span>
				</a>
			</h2>
			<div className="collapse-accordion-accessible-toggle margin-t-15 small-text collapse" id={setDropdownBodyId()}
				data-title-type="dynamic" data-bs-parent={"#"+ setTriggerId()} aria-labelledby={setTriggerId()} role="region" data-expand-type="single">
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Accordion;