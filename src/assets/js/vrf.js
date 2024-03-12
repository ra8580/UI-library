/*v2.1
Latest update: 2023.12.01

Virgin IT-DCX Frameworks vanilla js functions
Do not modify/use this file to host styles for custom components
Contact Bell IT DCX UX Solution Architect for support and updates
*/

// Global functions
function resetSameHeightElements(pSameHeightElement) {
    if (pSameHeightElement !== undefined) {
        var sameHeightIndex = pSameHeightElement.dataset.sameHeightIndex;
        var sameHeightGroup = pSameHeightElement.closest('.same-height-wrap').querySelectorAll('.same-height[data-same-height-index="' + sameHeightIndex + '"]');

        sameHeightGroup.forEach(function (element) {
            element.style.minHeight = '';
        });
    } else {
        var allSameHeight = document.querySelectorAll('.same-height-wrap .same-height');

        allSameHeight.forEach(function (element) {
            element.style.minHeight = '';
        });
    }
}

function processSameHeightElements(pSameHeightElement) {
    var mobileMax = 767.98;
    var tabletMax = 991.98;
    var initializing = true;
    var wrapEls;
    var specificIndex;

    if (pSameHeightElement !== undefined) {
        initializing = false;
        wrapEls = [pSameHeightElement.closest('.same-height-wrap')];
        specificIndex = pSameHeightElement.dataset.sameHeightIndex;
    } else {
        wrapEls = document.querySelectorAll('.same-height-wrap');
    }

    wrapEls.forEach(function (wrapEl) {
        var skipBreakpoints = wrapEl.dataset.sameHeightSkip;
        var sameHeightElements;
        var indexArr = [];

        if (skipBreakpoints !== undefined) {
            skipBreakpoints = skipBreakpoints.trim().toLowerCase().split(',');

            if (window.matchMedia('(max-width: ' + mobileMax + 'px)').matches) {
                if (skipBreakpoints.includes('m')) {
                    return;
                }
            } else if (window.matchMedia('(max-width: ' + tabletMax + 'px)').matches) {
                if (skipBreakpoints.includes('t')) {
                    return;
                }
            } else if (skipBreakpoints.includes('d')) {
                return;
            }
        }

        sameHeightElements = wrapEl.querySelectorAll('.same-height' + (specificIndex === undefined ? '' : '[data-same-height-index="' + specificIndex + '"]'));

        sameHeightElements.forEach(function (sameHeightEl) {
            var index = sameHeightEl.dataset.sameHeightIndex;

            if (!indexArr.includes(index)) {
                var maxHeight = 0;
                var equalElements = Array.from(sameHeightElements).filter(function (tempEl) {
                    var height = tempEl.offsetHeight;
                    var ret = tempEl.dataset.sameHeightIndex === index;
                    if (ret && height > maxHeight) {
                        maxHeight = height;
                    }

                    return ret;
                });

                equalElements.forEach(function (element) {
                    element.style.minHeight = maxHeight + 'px';
                });

                indexArr.push(index);
            }
        });

        if (initializing) {
            sameHeightElements.forEach(function (triggerEl) {
                triggerEl.removeEventListener('resize', triggerResize);
                triggerEl.addEventListener('resize', triggerResize);
            });
        }
    });

    function triggerResize() {
        var triggerEl = this;
        resetSameHeightElements(triggerEl);
        processSameHeightElements(triggerEl);
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function customIconToggle(target) {
    var classes = target.querySelector(".icon-collapsed-trigger[class*='icon-']")?.classList,
        removeIconClass = target.getAttribute('data-icon-expand'),
        addIconClass = target.getAttribute('data-icon-collapsed'),
        temp;

    if (target.getAttribute('aria-expanded') === 'true') {
        temp = removeIconClass;
        removeIconClass = addIconClass;
        addIconClass = temp;
    }

    classes?.add(addIconClass);
    classes?.remove(removeIconClass);

}

function initializeComboBox(target, triggerEvent) {
    if(triggerEvent == 'click') {
        triggerComboboxClick(target);
    } else if(triggerEvent == 'keydown') {
        triggerComboboxKeyboardEvents(target);
    } else {
        const targets = document.querySelectorAll('.js-aria-combobox-select-wrapper');
        targets.forEach((target) => {
            const list = target.querySelector('.combo-menu-wrapper');
            initComboboxList(target, list);
        });
    }

    function initComboboxList ($target, $list) {
        $list.querySelectorAll('li').forEach(($listItem) => {
            const selectedListItem = $listItem.getAttribute('aria-selected');

            if (selectedListItem === 'true') {
                $target.querySelector('.aria-combobox-select-trigger-value').textContent = $listItem.textContent;
                $listItem.setAttribute('aria-selected', 'true');
            }
        });
    }

    function hideListbox($wrapper, $trigger, $list, doFocusTrigger) {
        $trigger.setAttribute('aria-expanded', 'false');
        $list.classList.add('d-none');
        $wrapper.classList.remove('expanded');
        if (doFocusTrigger) {
            $trigger.focus();
        }
        customIconToggle($trigger);
    }

    function showListbox($wrapper, $trigger, $list) {
        $trigger.setAttribute('aria-expanded', 'true');
        $list.classList.remove('d-none');
            $list.querySelector('li.custom-highlight')?.classList.remove('custom-highlight'); 
            const activeOption = document.getElementById($list.getAttribute('aria-activedescendant'));
            activeOption?.classList.add('custom-highlight');
            setTimeout(() => {
                $list.setAttribute('tabindex', '-1');
                $list.focus();
            }, 10);
        $wrapper.classList.add('expanded');
        customIconToggle($trigger);
    }

    function setValueFromOption($wrapper, selOption) {
        const oldValue = $wrapper.querySelector('.aria-combobox-select-trigger-value').textContent;
        const newValue = selOption.textContent;

        if (oldValue !== newValue) {
            $wrapper.querySelector('.aria-combobox-select-trigger-value').textContent = newValue;

            //fire custom change event on the wrapper in case something wants to listen to it
            const event = new CustomEvent('change', {
                detail: {
                    oldValue,
                    newValue,
                    selectedOption: selOption
                }
            });
            $wrapper.dispatchEvent(event);
        }
    }

    function triggerComboboxKeyboardEvents (keydownTrigger) {
        const $wrapper = keydownTrigger.target.closest('.js-aria-combobox-select-wrapper');
        const $trigger = $wrapper.querySelector('.aria-combobox-select-trigger');
        const $list = document.getElementById($trigger.getAttribute('aria-controls'));
        var key = keydownTrigger.which || keydownTrigger.keyCode || 0,
            isExpanded = $trigger.getAttribute('aria-expanded') === 'true',
            selectedId,
            option,
            KEYS = {
                'ESCAPE': 27,
                'ENTER': 13,
                'SPACE': 32,
                'DOWN': 40,
                'UP': 38,
                'END': 35,
                'HOME': 36,
                'TAB': 9
            };

        $list.querySelectorAll('li').forEach(($option) => {
            let id = $option.getAttribute('id');
            const isSelected = $option.classList.contains('custom-selected');

            if (!id) {
                id = uuidv4();
                $option.setAttribute('id', id);
            }

            if (isSelected) {
                $list.dataset.cachedSelected = id;
                $list.querySelectorAll('li:not(.custom-selected)').forEach((item) => item.classList.remove('custom-selected'));
                setValueFromOption($wrapper, $option);
            }
        });

        if (!isExpanded) {
            if (KEYS.DOWN === key || KEYS.SPACE === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                selectedId = $list.dataset.cachedSelected;
                if (selectedId) {
                    option = KEYS.DOWN === key ? $list.querySelector('#' + CSS.escape(selectedId)).nextElementSibling : $list.querySelector('#' + CSS.escape(selectedId));
                    if (!option) {
                        option = $list.querySelector('#' + CSS.escape(selectedId));
                    }
                } else {
                    option = $list.querySelector('li');
                }
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
                showListbox($wrapper, $trigger, $list);
            } else if (KEYS.UP === key || KEYS.SPACE === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                selectedId = $list.dataset.cachedSelected;
                if (selectedId) {
                    option = KEYS.UP === key ? $list.querySelector('#' + CSS.escape(selectedId)).previousElementSibling : $list.querySelector('#' + CSS.escape(selectedId));
                    if (!option) {
                        option = $list.querySelector('#' + CSS.escape(selectedId));
                    }
                } else {
                    option = $list.querySelector('li');
                }
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
                showListbox($wrapper, $trigger, $list);
            }
        } else {
            if (KEYS.ESCAPE === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                hideListbox($wrapper, $trigger, $list, true);
                $trigger.focus();
            } else if (KEYS.ENTER === key || KEYS.SPACE === key) {
                keydownTrigger.preventDefault();
                option = $list.querySelector('li.custom-highlight');
                option.click();
            } else if (KEYS.DOWN === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                option = $list.querySelector('li.custom-highlight');
                option.classList.remove('custom-highlight');
                option = option.nextElementSibling;
                if (!option) {
                    option = $list.querySelector('li:last-child');
                }
                option.classList.add('custom-highlight');
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
            } else if (KEYS.UP === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                option = $list.querySelector('li.custom-highlight');
                option.classList.remove('custom-highlight');
                option = option.previousElementSibling;
                if (!option) {
                    option = $list.querySelector('li:first-child');
                }
                option.classList.add('custom-highlight');
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
            } else if (KEYS.END === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                option = $list.querySelector('li:last-child');
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
                option.classList.add('custom-highlight');
            } else if (KEYS.HOME === key) {
                keydownTrigger.preventDefault();
                keydownTrigger.stopPropagation();
                option = $list.querySelector('li:first-child');
                $list.setAttribute('aria-activedescendant', option.getAttribute('id'));
                option.classList.add('custom-highlight');
            } else if (KEYS.TAB === key) {
                hideListbox($wrapper, $trigger, $list, true);
            }
        }
        document.addEventListener('click', (e) => {
            const $target = e.target;

            if (!$trigger.contains($target) && !$list.contains($target)) {
                hideListbox($wrapper, $trigger, $list);
            }
        });
    }

    function triggerComboboxClick (currentTrigger) {
        const $wrapper = currentTrigger.closest('.js-aria-combobox-select-wrapper');
        const $trigger = $wrapper.querySelector('.aria-combobox-select-trigger');
        const $list = document.getElementById($trigger.getAttribute('aria-controls'));
        //trigger custom select open
        const isExpanded = $trigger.getAttribute('aria-expanded') === 'true';
        let selectedId;

        if (isExpanded) {
            hideListbox($wrapper, $trigger, $list, false);
        } else {
            selectedId = $list.dataset.cachedSelected;
            $list.setAttribute('aria-activedescendant', selectedId || $list.querySelector('li').getAttribute('id'));
            showListbox($wrapper, $trigger, $list);
        }
        if(currentTrigger.getAttribute('role') == 'option') {
            const isSelected = currentTrigger;
            let id = isSelected.getAttribute('id');
            isSelected.classList.add('custom-selected');

            if (!id) {
                id = uuidv4();
                isSelected.setAttribute('id', id);
            } else {
                $list.dataset.cachedSelected = id;
                $list.setAttribute('aria-activedescendant', id);
            }

            $list.querySelectorAll('li').forEach((item) => {
                if(item.getAttribute('id') != id) {
                    item.classList.remove('custom-selected');
                    item.setAttribute('aria-selected', false);
                }                    
            });
            currentTrigger.setAttribute('aria-selected', 'true');
            setValueFromOption($wrapper, isSelected);
            hideListbox($wrapper, $trigger, $list, true);
        } else {
            $list.querySelectorAll('li').forEach(($option) => {
                let id = $option.getAttribute('id');
                const isItemSelected = $option.getAttribute('aria-selected');
                if (!id) {
                    id = uuidv4();
                    $option.setAttribute('id', id);
                    if (isItemSelected === 'true') {
                        $option.classList.add('custom-highlight');
                        $list.dataset.cachedSelected = id;
                        $list.setAttribute('aria-activedescendant', $option.getAttribute('id'));
                    }                    
                    showListbox($wrapper, $trigger, $list);
                }
            });
        }

        document.addEventListener('click', (e) => {
            const $target = e.target;

            if (!$trigger.contains($target) && !$list.contains($target)) {
                hideListbox($wrapper, $trigger, $list);
            }
        });
    }
}

function initializeTooltip() {
    const tooltipTriggersToInit = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    if (tooltipTriggersToInit.length === 0) {
        return;
    }

    const tooltipTriggers = Array.from(tooltipTriggersToInit).filter(function (tooltipTrigger) {
        return bootstrap.Tooltip.getInstance(tooltipTrigger) == null;
    });

    if (tooltipTriggers.length === 0) {
        return;
    }

    const tooltipInstances = [];

    tooltipTriggers.forEach((tooltipTrigger) => {
        const customClass = tooltipTrigger.getAttribute('data-bs-custom-class');
        let offsetValue = [0, 16]; // default offset value

        // if tooltip has data-bs-offset
        const customOffset = tooltipTrigger.getAttribute('data-bs-offset');
        if (customOffset) {
            const parsedOffset = customOffset.split(',').map(value => parseInt(value, 10));
            if (parsedOffset.length === 2 && !isNaN(parsedOffset[0]) && !isNaN(parsedOffset[1])) {
                offsetValue = parsedOffset;
            }
        } else if (customClass === 'tooltip-sm') {
            offsetValue = [0, 16];
        } else if (customClass === 'tooltip-md' || customClass === 'tooltip-lg') {
            offsetValue = [0, 24];
        }

        const tooltip = new bootstrap.Tooltip(tooltipTrigger, {
            boundary: document.body,
            offset: offsetValue,
        });

        tooltipInstances.push(tooltip);
    });

    // Event listener for window resize
    window.addEventListener('resize', () => {
        tooltipInstances.forEach((tooltip) => {
            tooltip.hide();
        });
    });

    // close all tooltips on Escape key press
    document.addEventListener("keydown", function (event) {
        // Check if the pressed key is Escape
        if (event.key === "Escape") {
            tooltipInstances.forEach((tooltip) => {
                tooltip.hide();
            });
        }
    });

    function addMultipleEventListener(el, events, fn) {
        events.split(' ').forEach(function (e) {
            el.addEventListener(e, fn);
        });
    }

    tooltipTriggers.forEach(function (el) {
        var tooltipTimeout,
            tooltipTriggeredByFocusIn = false,
            tooltipTriggeredByMouseOver = false,
            tooltipInstance = bootstrap.Tooltip.getInstance(el);

        addMultipleEventListener(el, 'focusin mouseover', function (event) {
            if (tooltipTriggeredByFocusIn || tooltipTriggeredByMouseOver) {
                return;
            }

            if (event.type === "focusin") {
                tooltipTriggeredByFocusIn = true;
            } else if (event.type === "mouseover") {
                tooltipTriggeredByMouseOver = true;
            }
        });

        addMultipleEventListener(el, 'focusout mouseout', function (event) {
            if (event.type === "focusout" && !tooltipTriggeredByFocusIn) return;
            if (event.type === "mouseout" && tooltipTriggeredByFocusIn) return;

            clearTimeout(tooltipTimeout);
            tooltipTimeout = setTimeout(function () {
                tooltipInstance.hide();
            }, 200);
        });

        el.addEventListener('hide.bs.tooltip', function () {
            tooltipTriggeredByFocusIn = false;
            tooltipTriggeredByMouseOver = false;
        });
    });
}

function progressBar() {
    const progressBarContainers = document.querySelectorAll('.progress-container');
    if (progressBarContainers.length > 0) {
        progressBarContainers.forEach(function (progressBarContainer) {
            const progressBar = progressBarContainer;
            progressBar.style.left = "";
            const steps = progressBar.querySelectorAll('[role="listitem"]');
            let stepsLength = steps.length;

            if (window.matchMedia('(max-width: 767px)').matches) {
                if (stepsLength == 2) {
                    const stepWidth = 100 / stepsLength;
                    for (let i = 0; i < steps.length; i++) {
                        steps[i].style.width = stepWidth + "%";
                    }
                    const progressLineMargin = stepWidth / 2;
                    progressBar.querySelector('.progressive-steps-line').style.margin = "0 " + progressLineMargin + "%";
                    const completedSteps = progressBar.querySelectorAll('.progressive-steps.complete');
                    if (completedSteps.length > 0) {
                        const progressRange = (((stepsLength - 1) - completedSteps.length) * stepWidth) + progressLineMargin;
                        progressBar.querySelector('.progressive-steps-progress').classList.add('in-progress');
                        progressBar.querySelector('.progressive-steps-progress').style.marginLeft = progressLineMargin + "%";
                        progressBar.querySelector('.progressive-steps-progress').style.marginRight = progressRange + "%";
                    }
                }

                if (stepsLength >= 3) {
                    const stepWidth = progressBar.clientWidth / 3; // always use 3 steps
                    for (let i = 0; i < steps.length; i++) {
                        steps[i].style.width = stepWidth + "px";
                    }
                    const progressLineMargin = stepWidth / 2;
                    progressBar.querySelector('.progressive-steps-line').style.margin = "0 " + progressLineMargin + "px";
                    const completedSteps = progressBar.querySelectorAll('.progressive-steps.complete');
                    if (completedSteps.length > 0) {
                        const progressRange = (((3 - 1) - completedSteps.length) * stepWidth) + progressLineMargin;
                        progressBar.querySelector('.progressive-steps-progress').classList.add('in-progress');
                        progressBar.querySelector('.progressive-steps-progress').style.marginLeft = progressLineMargin + "px";
                        progressBar.querySelector('.progressive-steps-progress').style.marginRight = (progressRange - (5 * (steps.length - 3))) + "px";
                        if (steps.length > 3) {
                            let newProgressLineMargin = progressLineMargin + ((steps.length - 3 - 1) * stepWidth) + (5 * (steps.length - 3));
                            progressBar.querySelector('.progressive-steps-line').style.marginRight = "-" + newProgressLineMargin + "px";
                        }
                        const progressFocusLeft = ((completedSteps.length - 1) * stepWidth);
                        progressBar.style.left = "-" + (progressFocusLeft + (5 * (steps.length - 3))) + "px";
                    } else {
                        progressBar.style.left = stepWidth + "px";
                    }
                }
            } else {
                const stepWidth = 100 / stepsLength;
                for (let i = 0; i < steps.length; i++) {
                    steps[i].style.width = stepWidth + "%";
                }
                const progressLineMargin = stepWidth / 2;
                progressBar.querySelector('.progressive-steps-line').style.margin = "0 " + progressLineMargin + "%";
                const completedSteps = progressBar.querySelectorAll('.progressive-steps.complete');
                if (completedSteps.length > 0) {
                    const progressRange = (((stepsLength - 1) - completedSteps.length) * stepWidth) + progressLineMargin;
                    progressBar.querySelector('.progressive-steps-progress').classList.add('in-progress');
                    progressBar.querySelector('.progressive-steps-progress').style.marginLeft = progressLineMargin + "%";
                    progressBar.querySelector('.progressive-steps-progress').style.marginRight = progressRange + "%";
                }
            }
        });
    }
}

function toggleCollapse() {
    var parents = this.closest('.same-height');
    if (parents) {
        triggerResize(parents);
    }
}

// merged and converted into vanilla js from virgin.js
function maskUnmaskPws(obj) {
    var txtShow = document.getElementById("showText") ? document.getElementById("showText").value : document.querySelector("html").getAttribute("lang") == "en" ? "SHOW" : "AFFICHER",
        txtHide = document.getElementById("hideText") ? document.getElementById("hideText").value : document.querySelector("html").getAttribute("lang") == "en" ? "HIDE" : "MASQUER",
        showHideButton = document.querySelector(".maskUnMaskPwsBtn"),
        SearchInput = obj[0].previousElementSibling.nodeName === "INPUT" && obj[0].previousElementSibling,
        showLabel = document.querySelector("#showLabel") ? document.querySelector("#showLabel").value : "",
        hideLabel = document.querySelector("#hideLabel") ? document.querySelector("#hideLabel").value : "";

    function focusToInput() {
        var strLength = SearchInput.value.length * 2;
        SearchInput.focus();
        SearchInput.setSelectionRange(strLength, strLength);
    }


    if (SearchInput.getAttribute("type") == "password") {
        obj[0].innerHTML = txtHide;
        SearchInput.setAttribute("type", "text");
        focusToInput();
        showHideButton.setAttribute('aria-label', hideLabel);

    } else {
        obj[0].innerHTML = txtShow;
        SearchInput.setAttribute("type", "password");
        focusToInput();
        showHideButton.setAttribute('aria-label', showLabel);
    }
}

function changeModalSubTab(btnClicked, tabNo) {
    var container = btnClicked.closest(".modal-content");
    container.querySelectorAll(".btn-modalSubNav").forEach(el => el.classList.remove("active"));
    btnClicked.classList.add("active");
    container.querySelectorAll(".modalTab").forEach(el => el.classList.add("hidden"));
    container.querySelector(tabNo).classList.remove("hidden");
    document.querySelector("img.lazy").lazyload({ effect: "fadeIn" });
}

function openTabFromSelect(selectItem) {
    var mainTabToOpen = selectItem.value,
        mainNavBtnToActivate = mainTabToOpen.substring(12, 13),
        tabParent = selectItem.closest(".modal-content");
    tabParent.querySelectorAll(".modalTab").forEach(el => el.classList.add("hidden"));
    document.querySelector(mainTabToOpen).classList.remove('hidden');
    tabParent.querySelectorAll(".btn-modalSubNav").forEach(el => el.classList.remove("active"));
    tabParent.querySelectorAll(".btn-modalSubNav")[mainNavBtnToActivate].classList.add("active");
}

function changeRadioBg(event) {
    var e = event || windows.event,
        itemClicked = e.target,
        selectRadioFromPanel = itemClicked.closest(".panel.bgWhite").querySelectorAll(".bgRadioPanel");

    selectRadioFromPanel.forEach(el => el.classList.remove("active"));
    selectRadioFromPanel.forEach((el) => {
        el.querySelectorAll("input[type=radio]").forEach((elem) => {
            elem.checked = false
        })
    });

    itemClicked.closest(".bgRadioPanel").classList.add("active");
    itemClicked.closest(".bgRadioPanel").querySelectorAll("input[type=radio]").forEach(el => el.checked = true);
}

function openRecoveryTab(tabToOpen) {
    document.querySelectorAll(".recoveryTab").forEach(el => el.classList.add("hidden"));
    document.querySelectorAll(tabToOpen).forEach(el => el.classList.remove("hidden"));
}

function setFocusTimeout(item) {
    var focusTimeout = window.setTimeout(focusOnCloseBtn, 500);

    function focusOnCloseBtn() {
        var targetId = document.querySelector(item).getAttribute("data-tagret");
        var targetModal = document.querySelector(targetId);
        var closeButton = targetModal.querySelector('.modal-header button');

        if (closeButton) {
            closeButton.focus();
        }

        clearTimeout(focusTimeout);
    }
}

function focusTabControlOnce(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('is_tabbing');
        window.removeEventListener('keydown', focusTabControlOnce);
        window.addEventListener('mousedown', focusMouseDownControlOnce);
    }
}

function focusMouseDownControlOnce() {
    document.body.classList.remove('is_tabbing');
    window.removeEventListener('mousedown', focusMouseDownControlOnce);
    window.addEventListener('keydown', focusTabControlOnce);
}

function openSendCodeMessage(itemClicked) {
    var parentRecoveryTab = document.querySelector(itemClicked).closest('.recoveryTab'),
        parentPanelBody = document.querySelector(itemClicked).closest('.panel-body');

    if (parentRecoveryTab) {
        parentRecoveryTab.querySelector('.sendCodeMessage').removeClass('hidden')
    } else {
        parentPanelBody.querySelector('.sendCodeMessage').removeClass('hidden')
    }
}

function openSecretAnswer(itemClicked) {
    var questionID = document.querySelector(itemClicked).id,
        questionChoice = document.querySelector(itemClicked).textContent,
        parent = document.querySelector(itemClicked).parentElement;

    if (questionID === 'secretQn1') {
        if (questionChoice === 'custom') {
            parent.querySelector('#secretAnsForm2').classList.remove('hidden');
            parent.querySelector('#secretAnsForm1').classList.add('hidden');
        } else {
            parent.querySelector('#secretAnsForm1').classList.remove('hidden');
            parent.querySelector('#secretAnsForm2').classList.add('hidden');
        }
    } else if (questionID === 'secretQn2') {
        if (questionChoice === 'custom') {
            parent.querySelector('#secretAnsForm4').classList.remove('hidden');
            parent.querySelector('#secretAnsForm3').classList.add('hidden');
        } else {
            parent.querySelector('#secretAnsForm3').classList.remove('hidden');
            parent.querySelector('#secretAnsForm4').classList.add('hidden');
        }
    } else if (questionID === 'secretQn3') {
        if (questionChoice === 'custom') {
            parent.querySelector('#secretAnsForm6').classList.remove('hidden');
            parent.querySelector('#secretAnsForm5').classList.add('hidden');
        } else {
            parent.querySelector('#secretAnsForm5').classList.remove('hidden');
            parent.querySelector('#secretAnsForm6').classList.add('hidden');
        }
    }
}

function initializeProgressBar() {
    if(document.querySelectorAll('.progress-container').length > 0) {
        if (document.body.dataset.jsProgressBarDelegateInit !== 'true') {
            document.body.dataset.jsProgressBarDelegateInit = 'true';               
            progressBar();
        }
    }

    // re-initialize the progressBar function on window resize
    window.addEventListener('resize', function () {
        progressBar();
    });
}

function initUtilityKeys() {
    var body = document.body;
    if (body.dataset.jsClickOnSpaceDelegateInitialized !== 'true') {
        body.dataset.jsClickOnSpaceDelegateInitialized = 'true';

        body.addEventListener("keydown", (event) => {
            var target = event.target;
            var disableClass = target.classList.contains('no-click-on-space-enter-core');
            
            if(!disableClass) {
                if (event.keyCode === 32 && target.classList.contains('js-click-on-space-delegate')) {
                    event.preventDefault();
                    event.stopPropagation();
                    target.click();
                }

                if (event.keyCode === 13 && target.classList.contains('js-click-on-enter-delegate')) {
                    event.preventDefault();
                    event.stopPropagation();
                    target.click();
                }
                
                if (target.classList.contains('js-click-on-space-enter-delegate')) {
                    if (event.keyCode === 13 || event.keyCode === 32) {
                        event.preventDefault();
                        event.stopPropagation();
                        target.click();
                    }
                }                    
            }
        });
    }
};
initFnKeys = { initUtilityKeys: initUtilityKeys };

function modalFunction () {
    const modals = document.querySelectorAll('.modal');
    
    const setFocusToFirstFocusable = function () {
        const modal = this;

        if (this.classList.contains('no-auto-focus-first')) {
            return;
        }

        const focusableElements = Array.from(modal.querySelectorAll('input, textarea, select, [tabindex]:not([tabindex="-1"]), a[href], button:not([disabled])')).filter(function (focusable) {
            return focusable.offsetParent !== null && window.getComputedStyle(focusable).visibility !== 'hidden' && window.getComputedStyle(focusable).opacity != '0';
        });
        const firstFocusable = focusableElements[0];

        if (firstFocusable) {
            firstFocusable.focus();
        }
    };

    const trapFocusOnKeydownTab = function (event) {
        const tabPressed = event.key === 'Tab' || event.keyCode === 9;

        // proceed only to the remaining script if tab key is pressed
        if (!tabPressed) {
            return;
        }

        const modal = this;

        // get all focusable elements inside the modal then get first and last focusable element.
        const focusableElements = Array.from(modal.querySelectorAll('input, textarea, select, [tabindex]:not([tabindex="-1"]), a[href], button:not([disabled])')).filter(function (focusable) {
            return focusable.offsetParent !== null && window.getComputedStyle(focusable).visibility !== 'hidden' && window.getComputedStyle(focusable).opacity != '0';
        });
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        // disable tab if no focusable element on modal
        if (focusableElements.length === 0) {
            event.preventDefault();
        }

        // if tab + shift key is pressed, check if focus is in the first focusable element then reroute the next focus to the last focusable element
        if (event.shiftKey) {
            if (firstFocusable.matches(':focus')) {
                lastFocusable.focus();
                event.preventDefault();
            }
        }
        // if tab key is pressed, check if focus is in the last focusable element then reroute the next focus to the first focusable element
        else {
            if (lastFocusable.matches(':focus')) {
                firstFocusable.focus();
                event.preventDefault();
            }
        }
    };

    modals.forEach(modal => {

        // focus first interactive element in modal
        modal.classList.add('has-core-focus-setter');
        modal.addEventListener('shown.bs.modal', setFocusToFirstFocusable);

        /*
        Start Accessibility fix for modal (focus trapper)
        Reference: https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal 
        If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.
        If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.
        */
        modal.classList.add('has-core-focus-trapper');
        modal.addEventListener('keydown', trapFocusOnKeydownTab);
    });

    // prevent Bootstrap's problematic focus trapping and apply custom trapper below

    document.addEventListener('show.bs.modal', function (event) {
        const targetModal = event.target;
        const modalInstance = bootstrap.Modal.getInstance(targetModal);

        if (!modalInstance) {
            return;
        }

        modalInstance._config.focus = false;
    });

    document.addEventListener('shown.bs.modal', function (event) {
        const targetModal = event.target;

        if (!targetModal.classList.contains('has-core-focus-setter')) {
            targetModal.classList.add('has-core-focus-setter');
            targetModal.addEventListener('shown.bs.modal', setFocusToFirstFocusable);
            setFocusToFirstFocusable.call(targetModal);
        }

        if (!targetModal.classList.contains('has-core-focus-trapper')) {
            targetModal.classList.add('has-core-focus-trapper');
            targetModal.addEventListener('keydown', trapFocusOnKeydownTab);
        }
    });
}

function customAccordionToggleLabel (target) {
    if (target) {
        toggleAccordionLabel(target);
    } else {
        const triggers = document.querySelectorAll('a.collapse-trigger') ? document.querySelectorAll('a.collapse-trigger') : false;
        if(triggers) {
            triggers.forEach(trigger => {
                toggleAccordionLabel(trigger);
            });
        } else {
            return;
        }
    }    

    function toggleAccordionLabel (triggerToggle) {
        const trigger = triggerToggle;
        let classes = trigger.querySelector("[class*='icon-']")?.classList,
            removeIconClass = trigger.getAttribute('data-icon-expand'),
            addIconClass = trigger.getAttribute('data-icon-collapse'),
            toggleAccordionLabel = trigger.querySelector('.accordion-title') ? trigger.querySelector('.accordion-title') : '',
            toggleAccordionLabelExpand = '',
            toggleAccordionLabelCollapse = '',
            temp;
            
        if(toggleAccordionLabel) {
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

function initializeOnSearchFn() {
    document.addEventListener('input', function (event) {
        const searchInpt = document.querySelector("input[placeholder=Search]");
        if (searchInpt === event.target) {
            event.target.parentElement.querySelector('.search-icon').classList.add('active');
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('search-icon')) {
            event.target.classList.remove('active');
            event.target.parentNode.closest('.search-field-input-wrap').querySelector('input').value = "";
        }
    });
}

function tooltipInteractive () {
    const tooltipDropdownMenus = document.querySelectorAll('.tooltip-dropdown-menu') ? document.querySelectorAll('.tooltip-dropdown-menu') : '';

    if (tooltipDropdownMenus) {
        tooltipDropdownMenus.forEach(function (menu) {
            const tooltip = new bootstrap.Tooltip(menu, {
                boundary: menu,
                offset: [0, 8], // added standard distance offset of 8px
            });
    
            menu.addEventListener('click', function (event) {
                //prevent dropdown from closing when user clicks anything inside the dropdown
                event.stopPropagation();
            });
        });
    }    
}

function addFocusedElement () {
    document.addEventListener('focus', function (e) {
        const target = e.target;
        const graphicalContainer = target.closest('.graphical_ctrl_container');
        if (graphicalContainer && graphicalContainer.querySelector('.graphical_ctrl input') === target) {
            triggerFocusElement(graphicalContainer);
        }
    }, true);

    document.addEventListener('blur', function (e) {
        const target = e.target;
        const graphicalContainer = target.closest('.graphical_ctrl_container');

        if (graphicalContainer && graphicalContainer.querySelector('.graphical_ctrl input') === target) {
            triggerKeydownElement(graphicalContainer);
        }
    }, true);
    
    function triggerFocusElement (target) {
        const graphicalContainer = target;
        graphicalContainer.classList.add('focused-element');
    }

    function triggerKeydownElement (target) {
        const graphicalContainer = target;
        graphicalContainer.classList.remove('focused-element');
    }
}

function initOnChangeRadioCard () {
    var radioBtn;
    var checkIfCard;
    var radioCards;
    document.addEventListener('change', function (e) {
        radioBtn = e.type === 'radiochange' ? e.detail : e.target;        
        checkIfCard = false;

        if (radioBtn.getAttribute('type') !== 'radio' || !radioBtn.closest('.graphical_ctrl')) {
            return;
        }
    
        var radioCardGroup = radioBtn.closest('.radio-card-group');
    
        if (radioCardGroup) {
            checkIfCard = true;
            radioCards = radioCardGroup.querySelectorAll('.radio-card');
        } else {
            radioCardGroup = radioBtn.closest('.radio-button-group');
            radioCards = radioCardGroup.querySelectorAll('.radio-container');
        }
    
        
        Array.from(radioCards).forEach(radioCard => {
            const isChecked = radioCard.querySelector('input[type="radio"]').checked;                
            if(checkIfCard) { 
                isChecked ? radioCard.classList.add('selected') : radioCard.classList.remove('selected');
            } else {
                isChecked ? radioCard.classList.add('checked-border') : radioCard.classList.remove('checked-border');
            }                
    
            if (radioCard.querySelector('.vertical_radioBtn') !== null) {
                radioCard.querySelector('label').classList.remove('fw-bold');
            }
        });
    });
}

function initOnClickRadioCard () {
    document.addEventListener('click', function (event) {
        const eventTarget = event.target;
        var radioCard;

        if(eventTarget.closest('a[role=button]') || eventTarget.matches('a[role=button]') || eventTarget.matches('button')) {
            return;
        }
    
        if (eventTarget.matches('input[type="radio"]')) {
            return;
        }
    
        if(eventTarget.closest('.radio-card')) {
            radioCard = eventTarget.closest('.radio-card:not(.disabled)');
        } else {
            radioCard = eventTarget.closest('.radio-container:not(.disabled)');
        } 
        
        if (radioCard) {
            const radio = radioCard.querySelector('input[type="radio"]');
                
            radio.click();
            radio.focus();
        }
    });       
}

function checkboxBtnClick () {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.js-checkbox') || e.target.classList.contains('js-checkbox') === true || e.target.classList.contains('graphical_ctrl_checkbox')) {
            clickCheckboxBtn(e.target);
        }        
    });

    document.addEventListener('keydown', function (e) {
        if (e.target.getAttribute('type') === 'checkbox' && e.target.closest('.graphical_ctrl')) { 
            var target = e.target;
            var key = e.which || e.keyCode;
            const chkContainer = target.closest('.js-checkbox') ? target.closest('.js-checkbox') : target.closest('.graphical_ctrl_checkbox');
            const checkbox = chkContainer.querySelector("input[type='checkbox']");
            if (chkContainer.classList.contains('js-checkbox')) {
                if(key === 32) {
                    toggleCheckboxState(checkbox, chkContainer);
                }
            }
        }        
    });

    function clickCheckboxBtn (checkboxClickTrigger) {
        const trigger = checkboxClickTrigger;
        var chkContainer;
        var checkbox;
        if(trigger.closest('.js-checkbox')) {
            chkContainer = trigger.closest('.js-checkbox');
            checkbox = chkContainer.querySelector("input[type='checkbox']");
        } else if (trigger.closest('.graphical_ctrl_checkbox')) {
            chkContainer = trigger.closest('.graphical_ctrl_checkbox');
            checkbox = chkContainer.querySelector("input[type='checkbox']");
        } else if (trigger.classList.contains('graphical_ctrl_checkbox') === true || trigger.classList.contains('js-checkbox') === true) {
            chkContainer = trigger;
            checkbox = chkContainer.querySelector("input[type='checkbox']");
        }

        if(!chkContainer.classList.contains('disabled')) {
            if (checkboxClickTrigger.hasAttribute('data-toggle')) {
                return;
            }
            toggleCheckboxState(checkbox, chkContainer);
            checkbox.focus();
        }
    }
    
    function toggleCheckboxState(checkbox, container) {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            container.classList.add('checked-border');
        } else {
            container.classList.remove('checked-border');
        }
    }
}

(function () {
    var resizeTimeoutFn;

    var collapseElements = document.querySelectorAll('.same-height .collapse');
    collapseElements.forEach(function (collapseElement) {
        collapseElement.addEventListener('shown.bs.collapse', toggleCollapse);
        collapseElement.addEventListener('hidden.bs.collapse', toggleCollapse);
    });

    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeoutFn);
        resizeTimeoutFn = setTimeout(function () {
            resetSameHeightElements();
            processSameHeightElements();
        }, 200);
    });

    function triggerResize(element) {
        resetSameHeightElements(element);
        processSameHeightElements(element);
    }

    function initEventListeners () {
        var target;

        initializeComboBox();
        initializeTooltip();
        customAccordionToggleLabel();
        addFocusedElement();
        initOnChangeRadioCard();
        initOnClickRadioCard();
        checkboxBtnClick();

        document.addEventListener('click', function (e) {
            target = e.target;
            
            if (target.closest('.js-aria-combobox-select-wrapper')) {
                initializeComboBox(target, 'click');
            }

            if (target.classList.contains('collapse-trigger') === true) {
                customAccordionToggleLabel(target);
            }
        });

        document.addEventListener('keydown', function (e) {
            target = e.target;

            if (target.closest('.js-aria-combobox-select-wrapper')) {
                initializeComboBox(e, 'keydown');
            }
        });

        document.addEventListener('focus', function (e) {
            target = e.target;

            if (target.hasAttribute('data-bs-toggle')) {
                if (!target.classList.contains('dropdown-toggle')) {
                    initializeTooltip(target);
                }
            }
        }, true);

        document.addEventListener('mouseover', function (e) {
            target = e.target;

            if (target.hasAttribute('data-bs-toggle')) {
                if (!target.classList.contains('dropdown-toggle')) {
                    initializeTooltip(target);
                }
            }

            if (document.querySelectorAll('.progress-container').length > 0) {
                initializeProgressBar();
            }
        }, true);
    }

    document.addEventListener("DOMContentLoaded", () => {      
        initEventListeners();
        modalFunction();
        tooltipInteractive();
        initializeProgressBar();
        initializeOnSearchFn();
        setTimeout(() => {
            initFnKeys.initUtilityKeys();            
        }, 0);
        setTimeout(() => {
            processSameHeightElements();
        }, 10);
    });

})();