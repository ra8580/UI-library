function customAccordionToggleLabel(target) {
	if (target) {
		toggleAccordionLabel(target);
	} else {
		const triggers = document.querySelectorAll('a.collapse-trigger') ? document.querySelectorAll('a.collapse-trigger') : false;
		if (triggers) {
			triggers.forEach(trigger => {
				toggleAccordionLabel(trigger);
			});
		} else {
			return;
		}
	}
debugger;
	function toggleAccordionLabel(triggerToggle) {
		const trigger = triggerToggle;
		let classes = trigger.querySelector("[class*='icon-']")?.classList,
			removeIconClass = trigger.getAttribute('data-icon-expand'),
			addIconClass = trigger.getAttribute('data-icon-collapse'),
			toggleAccordionLabel = trigger.querySelector('.accordion-title') ? trigger.querySelector('.accordion-title') : '',
			toggleAccordionLabelExpand = '',
			toggleAccordionLabelCollapse = '',
			temp;

		if (toggleAccordionLabel) {
			toggleAccordionLabelExpand = toggleAccordionLabel.getAttribute('data-expand-title') ? toggleAccordionLabel.getAttribute('data-expand-title') : '';
			toggleAccordionLabelCollapse = toggleAccordionLabel.getAttribute('data-collapse-title') ? toggleAccordionLabel.getAttribute('data-collapse-title') : '';
		}

		if (!trigger.classList.contains('collapsed')) {
			temp = removeIconClass;
			removeIconClass = addIconClass;
			addIconClass = temp;
			toggleAccordionLabel.innerHTML = toggleAccordionLabel ? toggleAccordionLabelCollapse : '';
		} else {
			toggleAccordionLabel.innerHTML = toggleAccordionLabel ? toggleAccordionLabelExpand : '';
		}

		if (classes) {
			classes.remove(addIconClass)
			classes.add(removeIconClass);
		}
	}
}

export { customAccordionToggleLabel };

