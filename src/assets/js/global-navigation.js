(function () {
    /* START mobile */
    function initHamburgerMenu() {
        const hamburgerMenuTrigger = document.querySelector('header .connector-nav-open-button');
        const hamburgerMenu = document.querySelector('header .connector-nav');

        hamburgerMenuTrigger.addEventListener('click', function () {
            toggleHamburgerMenu(this);
        });

        hamburgerMenuTrigger.addEventListener('keydown', function (event) {
            if (this.classList.contains("connector-nav-open-button") && this.classList.contains("active")) {
                if (event.keyCode === 40) {
                    const mobileElement = document.getElementById('mybell_gc_MOBILE');
                    if (mobileElement) {
                        mobileElement.focus();
                        event.preventDefault();
                    }
                }
            }
        });

        hamburgerMenu.addEventListener('keydown', onHamburgerMenuKeyDown);

        hamburgerMenu.querySelectorAll('a').forEach(function (elem) {
            elem.addEventListener('focus', onHamburgerMenuItemFocus);
        });
    }

    function initNonDesktopDisclosureMenus() {
        const disclosureTriggers = document.querySelectorAll('#myvirgin_gc_FIRST_MYBELL, .connector-lob-no-href');

        disclosureTriggers.forEach(function (disclosureTrigger) {
            disclosureTrigger.addEventListener('click', onClickNonDesktopDisclosureMenu);

            disclosureTrigger.addEventListener('keydown', clickOnSpaceOrEnterKey);

            disclosureTrigger.removeAttribute('href');
            disclosureTrigger.removeAttribute('aria-haspopup');

            if (disclosureTrigger.id !== 'myvirgin_gc_FIRST_MYBELL' || !checkIfDesktop()) {
                disclosureTrigger.setAttribute('tabindex', '0');
            }
        });
    }

    function toggleHamburgerMenu(trigger) {
        const body = document.body;

        if (trigger.classList.contains('active')) {
            trigger.classList.remove('active');
            trigger.setAttribute('aria-label', checkIfFrench() ? 'Ourvrir le menu de navigation' : 'Open Mobile Nav');
            trigger.setAttribute('title', checkIfFrench() ? 'Ourvrir le menu de navigation' : 'Open Mobile Nav');
            body.classList.remove('connector-active');
        } else {
            trigger.classList.add('active');
            trigger.setAttribute('aria-label', checkIfFrench() ? 'Fermer le menu de navigation' : 'Close Mobile Nav');
            trigger.setAttribute('title', checkIfFrench() ? 'Fermer le menu de navigation' : 'Close Mobile Nav');
            body.classList.add('connector-active');
        }

        toggleHamburgerMenuFocusTrap(trigger);
        toggleAriaExpanded(trigger);
    }

    function onHamburgerMenuKeyDown(event) {
        const eventTarget = event.target;

        if (checkIfDesktop() || eventTarget.tagName !== 'A') {
            return;
        }

        const key = event.which || event.keyCode || 0;
        const isExpanded = eventTarget.getAttribute('aria-expanded') === 'true';
        let listItemWithElementToFocus;
        let elementToFocus;

        switch (key) {
            case 37:
                listItemWithElementToFocus = eventTarget.closest('li').previousElementSibling;

                if (listItemWithElementToFocus) {
                    elementToFocus = listItemWithElementToFocus.querySelector('a');
                    elementToFocus.focus();
                } else {
                    elementToFocus = eventTarget.closest('ul').closest('li');

                    if (elementToFocus) {
                        elementToFocus = elementToFocus.querySelector('a');
                        elementToFocus.focus();
                    }
                }
                break;
            case 38:
                listItemWithElementToFocus = eventTarget.closest('li').previousElementSibling;

                if (listItemWithElementToFocus) {
                    elementToFocus = listItemWithElementToFocus.querySelector('a');
                    elementToFocus.focus();
                }
                break;
            case 39:
                if (isExpanded) {
                    elementToFocus = eventTarget.nextElementSibling.querySelector('a');
                    elementToFocus.focus();
                } else {
                    listItemWithElementToFocus = eventTarget.closest('li').nextElementSibling;

                    if (listItemWithElementToFocus) {
                        elementToFocus = listItemWithElementToFocus.querySelector('a');
                        elementToFocus.focus();
                    }
                }
                break;
            case 40:
                listItemWithElementToFocus = eventTarget.closest('li').nextElementSibling;

                if (listItemWithElementToFocus) {
                    elementToFocus = listItemWithElementToFocus.querySelector('a');
                    elementToFocus.focus();
                }
                break;
            default:
                return;
        }

        event.preventDefault();
        event.stopPropagation();
    }

    function onHamburgerMenuItemFocus(event) {
        const eventTarget = event.target;

        if (checkIfDesktop()) {
            return;
        }

        if (checkIfCoveredByMobileDockNavbar(eventTarget)) {
            const mobileNav = document.querySelector('#connector-nav');

            mobileNav.scrollTo(mobileNav.scrollLeft, eventTarget.offsetTop - 10);
        }
    }

    function onClickNonDesktopDisclosureMenu(event) {
        const eventTarget = event.target;

        if (checkIfDesktop() || eventTarget.tagName !== 'A') {
            return;
        }

        const targetParent = eventTarget.parentElement;
        const targetGrandparent = targetParent.parentElement;
        const targetIcons = eventTarget.querySelectorAll('.icon-vrf');
        const isExpanded = targetParent.classList.contains('active');
        let targetIconCaret;
        let targetCollapsiblePanel;

        if (targetParent.classList.contains('connector-area')) { // My Account
            targetCollapsiblePanel = targetParent.querySelector('.connector-lob-flyout');

            targetGrandparent.querySelectorAll('.connector-lob-flyout').forEach(function (collapsiblePanel) {
                const parent = collapsiblePanel.parentElement;
                const trigger = parent.querySelector('a');
                const triggerIcons = trigger.querySelectorAll('.icon-vrf');
                let triggerIconCaret = triggerIcons[triggerIcons.length - 1];

                trigger.setAttribute('aria-expanded', 'false');
                trigger.classList.remove('expanded');
                triggerIconCaret.classList.add('icon-Arrow-right-small');
                triggerIconCaret.classList.remove('icon-Arrow-down');
                parent.classList.remove('active');
                collapsiblePanel.classList.remove('expanded');
            });

            if (!isExpanded) {
                targetIconCaret = targetIcons[targetIcons.length - 1];
                eventTarget.setAttribute('aria-expanded', 'true');
                eventTarget.classList.add('expanded');
                targetIconCaret.classList.remove('icon-Arrow-right-small');
                targetIconCaret.classList.add('icon-Arrow-down');
                targetParent.classList.add('active');
                targetCollapsiblePanel.classList.add('expanded');
            }
        } else if (targetParent.classList.contains('connector-lob')) { // My Services, My Bill, My Profile
            targetCollapsiblePanel = targetParent.querySelector('.connector-lob-dropdown-mobile');

            targetGrandparent.querySelectorAll('.connector-lob-dropdown-mobile').forEach(function (collapsiblePanel) {
                const parent = collapsiblePanel.parentElement;
                const trigger = parent.querySelector('a');
                const triggerIcons = trigger.querySelectorAll('.icon-vrf');
                let triggerIconCaret = triggerIcons[triggerIcons.length - 1];

                trigger.setAttribute('aria-expanded', 'false');
                triggerIconCaret.classList.add('icon-Arrow-right-small');
                triggerIconCaret.classList.remove('icon-Arrow-down');
                parent.classList.remove('active');
            });

            if (!isExpanded) {
                targetIconCaret = targetIcons[targetIcons.length - 1];
                eventTarget.setAttribute('aria-expanded', 'true');
                targetIconCaret.classList.remove('icon-Arrow-right-small');
                targetIconCaret.classList.add('icon-Arrow-down');
                targetParent.classList.add('active');
            }
        } else if (targetParent.classList.contains('third-connector-lob')) { // LOBs
            targetCollapsiblePanel = targetParent.querySelector('.third-level-connector-flyout');

            targetGrandparent.querySelectorAll('.third-level-connector-flyout').forEach(function (collapsiblePanel) {
                const parent = collapsiblePanel.parentElement;
                const trigger = parent.querySelector('a');
                const triggerIcons = trigger.querySelectorAll('.icon-vrf');
                let triggerIconCaret = triggerIcons[triggerIcons.length - 1];

                trigger.setAttribute('aria-expanded', 'false');
                triggerIconCaret.classList.add('icon-Arrow-right-small');
                triggerIconCaret.classList.remove('icon-Arrow-down');
                parent.classList.remove('active');
            });

            if (!isExpanded) {
                targetIconCaret = targetIcons[targetIcons.length - 1];
                eventTarget.setAttribute('aria-expanded', 'true');
                targetIconCaret.classList.remove('icon-Arrow-right-small');
                targetIconCaret.classList.add('icon-Arrow-down');
                targetParent.classList.add('active');
            }
        }
    }

    function toggleHamburgerMenuFocusTrap(trigger) {
        const targetPanel = document.getElementById(trigger.getAttribute('aria-controls'));

        targetPanel.classList.toggle('hidden-on-mobile');

        if (!targetPanel.classList.contains('hidden-on-mobile')) {
            if (!targetPanel.classList.contains('mobNav-trap-focus-init')) {
                targetPanel.classList.add('mobNav-trap-focus-init');
                trapKeyboardAndSRFocus(document.querySelector('.mob-connector'));
                Array.from(trigger.parentElement.children).forEach(function (el) {
                    el.removeAttribute('aria-hidden');
                });
            }
        } else {
            if (targetPanel.classList.contains('mobNav-trap-focus-init')) {
                targetPanel.classList.remove('mobNav-trap-focus-init');
                untrapKeyboardAndSRFocus(document.querySelector('.mob-connector'));
                Array.from(trigger.parentElement.children).forEach(function (el) {
                    el.removeAttribute('aria-hidden');
                });
            }
        }
    }
    /* END mobile */



    /* START desktop */
    function initDesktopDisclosureMenus(fixAria, fixClickOnSpace) {
        const activeSecondaryNav = document.querySelector('.connector-active-secondary-nav');

        if (!activeSecondaryNav) {
            return;
        }

        const disclosureTriggers = activeSecondaryNav.querySelectorAll('li a.secondary-nav-lob:not(.no-flyout-menu)');

        disclosureTriggers.forEach(function (disclosureTrigger) {
            disclosureTrigger.addEventListener('click', onClickDesktopDisclosureMenu);

            if (fixAria === true) {
                disclosureTrigger.removeAttribute('aria-haspopup');
                disclosureTrigger.removeAttribute('onclick');
                disclosureTrigger.removeAttribute('title');
                disclosureTrigger.removeAttribute('href');
                disclosureTrigger.setAttribute('role', 'button');
                disclosureTrigger.setAttribute('tabindex', '0');
            }

            if (fixClickOnSpace === true) {
                disclosureTrigger.addEventListener('keydown', clickOnSpaceOrEnterKey);
            }
        });

        activeSecondaryNav.addEventListener('keydown', onKeydownDesktopDisclosureMenu);
        activeSecondaryNav.addEventListener('focusout', onBlurDesktopDisclosureMenu);
        document.querySelectorAll('.secondary-nav-dropdown a').forEach(function (elem) {
            elem.addEventListener('focus', onFocusDesktopDisclosureMenuItem);
            elem.addEventListener('blur', onBlurDesktopDisclosureMenuItem);
        });

        document.addEventListener('click', collapseExpandedDisclosuresOnExternalClick);
    }

    function onClickDesktopDisclosureMenu(event) {
        const eventTarget = event.target;
        const disclosureTrigger = eventTarget.tagName === 'A' ? eventTarget : eventTarget.closest('a');
        const isExpanded = disclosureTrigger.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            disclosureTrigger.setAttribute('aria-expanded', 'false');
            disclosureTrigger.classList.remove('dropdown-active');
        } else {
            disclosureTrigger.setAttribute('aria-expanded', 'true');
            disclosureTrigger.classList.add('dropdown-active');
        }
    }

    function onKeydownDesktopDisclosureMenu(event) {
        const eventTarget = event.target;

        if (eventTarget.tagName !== 'A') {
            return;
        }

        const key = event.which || event.keyCode || 0;
        const isExpanded = eventTarget.getAttribute('aria-expanded') === 'true';
        let listItemWithElementToFocus;
        let elementToFocus;

        switch (key) {
            case 27:
                const disclosureContainer = eventTarget.closest('.secondary-nav-dropdown');

                if (disclosureContainer) {
                    const expandedDisclosureTrigger = Array.from(disclosureContainer.parentElement.children).filter(function (child) { return child.tagName === 'A'; })[0];
                    expandedDisclosureTrigger.setAttribute('aria-expanded', 'false');
                    expandedDisclosureTrigger.classList.remove('dropdown-active');
                    expandedDisclosureTrigger.focus();
                } else {
                    collapseExpandedDisclosures();
                }
                break;
            case 37:
            case 38:
                listItemWithElementToFocus = eventTarget.closest('li').previousElementSibling;

                if (listItemWithElementToFocus) {
                    elementToFocus = listItemWithElementToFocus.querySelector('a');
                    elementToFocus.focus();
                }
                break;
            case 39:
            case 40:
                //The APG says the RIGHT and DOWN arrow keys should function the same way.
                //However, in their example, they behave differently when the corresponding disclosure is expanded while transferring the focus from the trigger.
                //This implementation follows the example.
                if (isExpanded && key !== 39) {
                    elementToFocus = eventTarget.parentElement.querySelector('.secondary-nav-dropdown a');
                    elementToFocus.focus();
                } else {
                    listItemWithElementToFocus = eventTarget.closest('li').nextElementSibling;

                    if (listItemWithElementToFocus) {
                        elementToFocus = listItemWithElementToFocus.querySelector('a');
                        elementToFocus.focus();
                    }
                }
                break;
            default:
                return;
        }

        event.preventDefault();
        event.stopPropagation();
    }

    function onBlurDesktopDisclosureMenu(event) {
        if (!event.target.closest('.connector-active-secondary-nav').contains(event.relatedTarget)) {
            collapseExpandedDisclosures();
        }
    }

    function onFocusDesktopDisclosureMenuItem(event) {
        const eventTarget = event.target;

        if (eventTarget.tagName !== 'A') {
            return;
        }

        eventTarget.classList.add('focus-style');
    }

    function onBlurDesktopDisclosureMenuItem(event) {
        const eventTarget = event.target;

        if (eventTarget.tagName !== 'A') {
            return;
        }

        eventTarget.classList.remove('focus-style');
    }

    function collapseExpandedDisclosuresOnExternalClick(event) {
        const eventTarget = event.target;
        const disclosureTrigger = eventTarget.tagName === 'A' ? eventTarget : eventTarget.closest('a');



        if (eventTarget.classList.contains('navigation-links-trigger')) {
            return;
        }
        initViewAll(event);
        collapseExpandedDisclosures(disclosureTrigger);
    }

    function collapseExpandedDisclosures(triggerToSkip) {
        const expandedDisclosureTriggers = document.querySelectorAll('.connector-active-secondary-nav li a:not(.no-flyout-menu)[aria-expanded="true"]');

        expandedDisclosureTriggers.forEach(function (expandedDisclosureTrigger) {
            if (triggerToSkip === expandedDisclosureTrigger) {
                return;
            }

            expandedDisclosureTrigger.setAttribute('aria-expanded', 'false');
            expandedDisclosureTrigger.classList.remove('dropdown-active');
        });
    }
    /* END desktop */



    /* START Preferences (language only) */
    const Preferences = {
        init: function () {
            const self = this;

            document.querySelectorAll('.js-current-language').forEach(function (elem) {
                elem.addEventListener('click', function () {
                    self.saveLanguage(elem);
                });
            });
        },
        saveLanguage: function setLanguage(elem) {
            const language = elem.dataset.alternative;
            const vanityurl = elem.dataset.vanityurl;
            const langRegex = /(language=\w+)|(lang=\w+)/i;

            this.setLanguageRegionCookieValue(language, null);

            if (vanityurl && vanityurl.length > 0) {
                if (langRegex.test(vanityurl)) {
                    window.location = vanityurl.replace(langRegex, 'lang=' + htmlEncodeUsingInMemoryDiv(language));
                } else {
                    window.location = vanityurl;
                }
            } else if (langRegex.test(location.href)) {
                location.href = location.href.replace(langRegex, 'lang=' + htmlEncodeUsingInMemoryDiv(language));
            } else {
                try {
                    let currentURL = location.href;
                    window.location.search.split('?').length > 1 ? currentURL += '&lang=' + htmlEncodeUsingInMemoryDiv(language) : currentURL += '?lang=' + htmlEncodeUsingInMemoryDiv(language);
                    window.location.href = currentURL;
                }
                catch (e) {
                    window.location.reload();
                }
            }
        },
        setLanguageRegionCookieValue: function (lang, region, larsegmenttype, bIgnorePreviousCookie) {
            const geminiCookieName = 'gemini';
            const cookieVal = bIgnorePreviousCookie == true ? null : this.getCookie(geminiCookieName);
            const geminiCookieVal = this.getGeminiString(lang, region, cookieVal, larsegmenttype);
            const domain = '.virgin.ca';
            this.setCookie(geminiCookieName, geminiCookieVal, 90, domain);
        },
        getGeminiString: function (lang, region, cval, larsegmenttype) {
            let retVal = 'region=' + region + '|language=' + lang + '|province=' + region + '|LarSegmentType=' + larsegmenttype;

            if (cval != null) {
                const strSpl = cval.split('|');

                if (region != null && region.length !== 0) {
                    strSpl[0] = 'region=' + region;
                    strSpl[2] = 'province=' + region;
                }

                if (lang != null && lang.length !== 0) {
                    strSpl[1] = 'language=' + lang;
                }

                if (larsegmenttype != null && larsegmenttype !== undefined && larsegmenttype.length !== 0) {
                    strSpl[3] = 'LarSegmentType=' + larsegmenttype;
                }

                retVal = strSpl[0] + '|' + strSpl[1] + '|' + strSpl[2] + '|' + strSpl[3];
            }

            return retVal;
        },
        setCookie: function (name, value, days, domain) {
            let expires = '';
            let date = new Date();

            if (!days || isNaN(days)) {
                days = 365;
            }

            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();

            let setCookieVal = name + '=' + value + expires + '; path=/';

            if (domain) {
                setCookieVal += '; domain=' + domain;
            }

            document.cookie = setCookieVal;
        },
        getCookie: function (name) {
            const value = '; ' + document.cookie;
            const parts = value.split('; ' + name + '=');

            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            }
        }
    };
    /* END Preferences */



    /* START Search */
    const Search = {
        ACTIVE_CLASS: 'active',
        SEARCH_ACTIVE_CLASS: 'connector-search-active',
        AUTOCOMPLETE_URL: 'http://www.virgin.ca/Search/Search/GetAutoComplete',
        body: null,
        connector: null,
        screen: null,
        province: null,
        language: null,
        defaultXhrTimeout: null,
        init: function () {
            this.body = document.body;
            this.connector = document.querySelector('.connector');
            this.screen = document.getElementById('search-screen');

            this.province = document.querySelector('meta[name="province"]');
            if (this.province) {
                this.province = this.province.getAttribute("content");
            }

            this.language = document.querySelector('meta[name="language"]');
            if (this.language) {
                this.language = this.language.getAttribute("content");
            }

            this.defaultXhrTimeout = 7500;

            const self = this;
            const inputs = document.querySelectorAll('.search-bar-header input[type="search"], .search-bar-footer input[type="search"]');
            inputs.forEach(function (input) {
                self.initQuery(input);
            });
        },
        initQuery: function (input) {
            const self = this;
            const form = input.closest('form');
            const resetButton = form.querySelector('[type="reset"]');
            const formWrap = form.closest('.connector-search-wrap');
            const minKeywordLength = 2;
            const autocompleteURL = form.getAttribute('data-autocompletehost') || self.AUTOCOMPLETE_URL;
            const appendTo = form.dataset.suggestions;
            const autocompleteIdPrefix = (input.id || (input.closest('header') ? 'header-autocomplete' : 'footer-autocomplete')) + '-';
            let autocompleteWrap = document.querySelector(appendTo);

            const onSuccessResponse = function (resultsObj) {
                if (!autocompleteWrap) {
                    autocompleteWrap = document.createElement('div');
                    input.parentElement.insertBefore(autocompleteWrap, input.nextElementSibling);
                }

                autocompleteWrap.setAttribute('role', 'presentation');

                const oldList = autocompleteWrap.querySelector('ul');
                if (oldList) {
                    oldList.remove();
                }

                const newList = document.createElement('ul');
                newList.setAttribute('role', 'listbox');
                newList.classList.add('autocomplete-list');
                autocompleteWrap.appendChild(newList);

                resultsObj.forEach(function (result, index) {
                    const listItem = document.createElement('li');
                    listItem.id = autocompleteIdPrefix + (index + 1);
                    listItem.setAttribute('role', 'option');
                    listItem.classList.add('autocomplete-listitem');
                    listItem.innerText = result.label;
                    listItem.dataset.label = result.label;
                    newList.appendChild(listItem);

                    listItem.addEventListener('mouseenter', function () {
                        self.changeAutocompleteActiveDescendantWithMouse(input, autocompleteWrap, listItem, true);
                    });

                    listItem.addEventListener('mouseleave', function () {
                        self.changeAutocompleteActiveDescendantWithMouse(input, autocompleteWrap, listItem);
                    });

                    listItem.addEventListener('click', function () {
                        self.selectOption(input, autocompleteWrap, true, form);
                    });
                });

                self.highlightAutocompleteKeywords(input, autocompleteWrap);
                self.showAutocomplete(self, formWrap, form, resetButton);
            };

            const onErrorResponse = function () {
                console.error('Search Autocomplete: Unable to query server');
            };

            let searchKeyupTimeout;
            let didValueBrieflyChange = false;

            input.addEventListener('keyup', function (event) {
                clearTimeout(searchKeyupTimeout);

                const key = event.which || event.keyCode || 0;

                if (27 === key) {
                    event.preventDefault();
                    event.stopPropagation();
                    self.hideAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input);
                    return;
                }

                const eventTarget = event.target;
                if (!didValueBrieflyChange) {
                    didValueBrieflyChange = eventTarget.value.trim() !== eventTarget.dataset.oldInputVal;
                }

                searchKeyupTimeout = setTimeout(function () {
                    const inputVal = eventTarget.value.trim();

                    if (inputVal === eventTarget.dataset.oldInputVal) {
                        if (didValueBrieflyChange && autocompleteWrap && !self.body.classList.contains(self.SEARCH_ACTIVE_CLASS) && autocompleteWrap.querySelector('.autocomplete-list')) {
                            self.showAutocomplete(self, formWrap, form, resetButton);
                            didValueBrieflyChange = false;
                        }
                        return;
                    }

                    input.dataset.oldInputVal = inputVal;
                    didValueBrieflyChange = false;

                    if (inputVal.length < minKeywordLength) {
                        self.hideAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input);
                        return;
                    }

                    resetButton.classList.add(self.ACTIVE_CLASS);
                    self.requestSuggestions(autocompleteURL, { term: inputVal }, form, onSuccessResponse, onErrorResponse);
                }, 150);
            });

            input.addEventListener('keydown', function (event) {
                const key = event.which || event.keyCode || 0;

                switch (key) {
                    case 9:
                    case 13:
                        self.selectOption(input, autocompleteWrap);
                        break;
                    case 33:
                    case 34:
                    case 38:
                    case 40:
                        if (!self.body.classList.contains(self.SEARCH_ACTIVE_CLASS) && autocompleteWrap && autocompleteWrap.querySelectorAll('.autocomplete-listitem').length > 0) {
                            self.showAutocomplete(self, formWrap, form, resetButton);
                        }

                        self.changeAutocompleteActiveDescendantWithKeyboard(input, autocompleteWrap, key);
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                }
            });

            input.addEventListener('blur', function () {
                self.hideAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input);
            });

            form.addEventListener('submit', function () {
                self.submitSearchForm(form, input);
            });

            form.addEventListener('reset', function () {
                input.focus();
                self.removeAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input);
            });

            self.screen.addEventListener('click', function () {
                self.hideAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input);
            });
        },
        requestSuggestions: function (url, requestData, form, onSuccess, onError) {
            const mktseg = form.dataset.mktseg;
            const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());

            window[callbackName] = function (data) {
                delete window[callbackName];
                document.body.removeChild(script);
                onSuccess(data.map(function (result) {
                    const lbl = result;
                    let vl = result;

                    if (/<[^>]*>/g.test(vl)) {
                        vl = vl.replace(/<[^>]*>/g, '');
                    }

                    if (lbl.indexOf(":") > -1) {
                        vl = vl.substring(0, vl.indexOf(":"));
                    }

                    return {
                        label: lbl,
                        value: vl
                    };
                }));
            };

            const params = 'q=' + encodeURIComponent(requestData.term.trim()) +
                '&prov=' + encodeURIComponent(this.province) +
                '&lang=' + encodeURIComponent(this.language) +
                '&mktseg=' + encodeURIComponent(mktseg) +
                '&ver=w' +
                '&callback=' + encodeURIComponent(callbackName);

            const script = document.createElement('script');
            script.src = url + '?' + params;
            document.body.appendChild(script);

            script.onerror = function () {
                delete window[callbackName];
                document.body.removeChild(script);
                onError();
            };
        },
        highlightAutocompleteKeywords: function (input, autocompleteWrap) {
            const inputVal = input.value.trim().toLowerCase();
            const template = '<span class="autocomplete-term">' + simpleHTMLEncode(inputVal) + '</span>';
            const listItems = autocompleteWrap.querySelectorAll('li');

            listItems.forEach(function (listItem) {
                let phrase = listItem.textContent;

                if (phrase.indexOf(":") > -1) {
                    phrase = phrase.substring(0, phrase.indexOf(":"));
                }

                const newInnerHTML = simpleHTMLEncode(phrase.toLowerCase()).replace(simpleHTMLEncode(inputVal), template);
                listItem.innerHTML = newInnerHTML;
            });
        },
        selectOption: function (input, autocompleteWrap, proceedToSubmit, form) {
            if (!autocompleteWrap) {
                return;
            }

            const activeDescendantClass = 'selected';
            const currentActiveDescendant = autocompleteWrap.querySelector('.' + activeDescendantClass);

            if (currentActiveDescendant) {
                let optionLabel = currentActiveDescendant.dataset.label;

                if (optionLabel.indexOf(':') > -1) {
                    location.href = optionLabel.substring(optionLabel.indexOf(':') + 1);
                } else {
                    input.value = optionLabel;

                    if (proceedToSubmit === true) {
                        form.dispatchEvent(new Event('submit'));
                    }
                }
            }
        },
        changeAutocompleteActiveDescendantWithMouse: function (input, autocompleteWrap, option, shouldSet) {
            const activeDescendantClass = 'selected';
            const currentActiveDescendant = autocompleteWrap.querySelector('.' + activeDescendantClass);

            if (currentActiveDescendant) {
                currentActiveDescendant.classList.remove(activeDescendantClass);
                input.removeAttribute('aria-activedescendant');
            }

            if (shouldSet) {
                let newActiveDescendant = option;
                newActiveDescendant.classList.add(activeDescendantClass);
                input.setAttribute('aria-activedescendant', newActiveDescendant.id);
            }

        },
        changeAutocompleteActiveDescendantWithKeyboard: function (input, autocompleteWrap, key) {
            if (!autocompleteWrap) {
                return;
            }

            const allOptions = autocompleteWrap.querySelectorAll('.autocomplete-listitem');

            if (allOptions.length === 0) {
                return;
            }

            const activeDescendantClass = 'selected';
            const currentActiveDescendant = autocompleteWrap.querySelector('.' + activeDescendantClass);
            const pageKeyJumpSize = 5;
            let newActiveDescendant;
            let currentIndex;
            let newIndex;

            switch (key) {
                case 33:
                    if (currentActiveDescendant) {
                        currentIndex = Array.from(allOptions).indexOf(currentActiveDescendant);
                        newIndex = currentIndex - pageKeyJumpSize;

                        newActiveDescendant = allOptions[newIndex > -1 ? newIndex : 0];
                    } else {
                        newActiveDescendant = allOptions[allOptions.length - 1];
                    }
                    break;
                case 34:
                    if (currentActiveDescendant) {
                        currentIndex = Array.from(allOptions).indexOf(currentActiveDescendant);
                        newIndex = currentIndex + pageKeyJumpSize;

                        newActiveDescendant = allOptions[newIndex < allOptions.length ? newIndex : allOptions.length - 1];
                    } else {
                        newActiveDescendant = allOptions[0];
                    }
                    break;
                case 38:
                    if (currentActiveDescendant) {
                        newActiveDescendant = currentActiveDescendant.previousElementSibling;
                    } else {
                        newActiveDescendant = allOptions[allOptions.length - 1];
                    }
                    break;
                case 40:
                    if (currentActiveDescendant) {
                        newActiveDescendant = currentActiveDescendant.nextElementSibling;
                    } else {
                        newActiveDescendant = allOptions[0];
                    }
                    break;
            }

            if (newActiveDescendant) {
                if (currentActiveDescendant) {
                    currentActiveDescendant.classList.remove(activeDescendantClass);
                }

                newActiveDescendant.classList.add(activeDescendantClass);
                input.setAttribute('aria-activedescendant', newActiveDescendant.id);
            }
        },
        showAutocomplete: function (self, formWrap, form, resetButton) {
            self.body.classList.add(self.SEARCH_ACTIVE_CLASS);
            self.connector.classList.add(self.SEARCH_ACTIVE_CLASS);
            self.screen.classList.add(self.ACTIVE_CLASS);
            formWrap.classList.add(self.ACTIVE_CLASS);
            form.classList.add(self.ACTIVE_CLASS);
            resetButton.classList.add(self.ACTIVE_CLASS);
        },
        hideAutocomplete: function (self, formWrap, form, resetButton, autocompleteWrap, input) {
            self.removeAutocomplete(self, formWrap, form, resetButton, autocompleteWrap, input, true);
        },
        removeAutocomplete: function (self, formWrap, form, resetButton, autocompleteWrap, input, skipClear) {
            if (!autocompleteWrap) {
                return;
            }

            if (autocompleteWrap.contains(document.activeElement)) {
                input.focus();
            }

            self.body.classList.remove(self.SEARCH_ACTIVE_CLASS);
            self.connector.classList.remove(self.SEARCH_ACTIVE_CLASS);
            self.screen.classList.remove(self.ACTIVE_CLASS);
            formWrap.classList.remove(self.ACTIVE_CLASS);
            form.classList.remove(self.ACTIVE_CLASS);
            input.removeAttribute('aria-activedescendant');

            if (skipClear === true) {
                const activeDescendantClass = 'selected';
                const activeDescendant = autocompleteWrap.querySelector('.' + activeDescendantClass);

                if (activeDescendant) {
                    activeDescendant.classList.remove(activeDescendantClass);
                }
            } else {
                resetButton.classList.remove(self.ACTIVE_CLASS);
                autocompleteWrap.innerHTML = '';
                delete input.dataset.oldInputVal;
            }
        },
        submitSearchForm: function (form, input) {
            const inputValue = input.value;
            const tempElem = document.createElement('div');

            tempElem.innerText = inputValue;
            input.value = tempElem.textContent.length > 0 ? tempElem.textContent : inputValue;

            const action = form.getAttribute('data-url').replace('#qbox#', encodeURIComponent(input.value));
            form.setAttribute('action', action);

            return true;
        }
    };
    /* END Search */



    /* START utilities */
    function simpleHTMLEncode(s) {
        return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&#34;');
    }

    function htmlEncodeUsingInMemoryDiv(value) {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML.replace(/&/g, '%26');
    }

    function clickOnSpaceOrEnterKey(event) {
        const key = event.which || event.keyCode || 0;

        if (13 === key || 32 === key) {
            event.preventDefault();
            event.stopPropagation();
            event.target.click();
        }
    }

    function clickOnEnterKey(event) {
        const key = event.which || event.keyCode || 0;

        if (13 === key) {
            event.preventDefault();
            event.stopPropagation();
            event.target.click();
        }
    }

    function toggleAriaExpanded(triggerEl) {
        //const expandedAttr = triggerEl.getAttribute('aria-expanded');

        //triggerEl.setAttribute('aria-expanded', expandedAttr === 'true' ? 'false' : 'true');

        triggerEl.setAttribute('aria-expanded', triggerEl.getAttribute('aria-expanded') !== 'true');
    }

    function getSiblings(element) {
        return Array.from(element.parentElement.children).filter(function (child) {
            return child.nodeType === Node.ELEMENT_NODE && child !== element;
        });
    }

    function trapKeyboardFocus(container) {
        const focusTrapperBefore = document.createElement('div');
        const focusTrapperAfter = document.createElement('div');
        const containerParent = container.parentElement;

        focusTrapperBefore.classList.add('focus-trapper');
        focusTrapperBefore.classList.add('visually-hidden');
        focusTrapperBefore.setAttribute('tabindex', '0');
        focusTrapperBefore.setAttribute('role', 'presentation');

        focusTrapperAfter.classList.add('focus-trapper');
        focusTrapperAfter.classList.add('visually-hidden');
        focusTrapperAfter.setAttribute('tabindex', '0');
        focusTrapperAfter.setAttribute('role', 'presentation');

        containerParent.insertBefore(focusTrapperBefore, container);
        containerParent.insertBefore(focusTrapperAfter, container.nextSibling);

        focusTrapperBefore.addEventListener('focus', function () {
            const focusables = Array.from(container.querySelectorAll('a,area,input,select,textarea,button,[tabindex]:not([tabindex="-1"])')).filter(function (focusable) {
                return focusable.offsetParent !== null && window.getComputedStyle(focusable).visibility !== 'hidden' && window.getComputedStyle(focusable).opacity != '0';
            });

            setTimeout(function () {
                focusables[focusables.length - 1].focus();
            }, 100);
        });

        focusTrapperAfter.addEventListener('focus', function () {
            const focusables = Array.from(container.querySelectorAll('a,area,input,select,textarea,button,[tabindex]:not([tabindex="-1"])')).filter(function (focusable) {
                return focusable.offsetParent !== null && window.getComputedStyle(focusable).visibility !== 'hidden' && window.getComputedStyle(focusable).opacity != '0';
            });

            setTimeout(function () {
                focusables[0].focus();
            }, 100);
        });
    }

    function untrapKeyboardFocus(container) {
        const focusTrapperBefore = container.previousElementSibling;
        const focusTrapperAfter = container.nextElementSibling;

        if (focusTrapperBefore.matches('.focus-trapper')) {
            focusTrapperBefore.remove();
        }

        if (focusTrapperAfter.matches('.focus-trapper')) {
            focusTrapperAfter.remove();
        }
    }

    function trapKeyboardAndSRFocus(currEl, tempMoveToProperPos, isRecursionCall) {
        let parent, index, originClass;

        // if tempMoveToProperPos === true, the modal will temporarily be moved and become an immediate child of the document body
        if (tempMoveToProperPos === true) {
            index = Array.from(getSiblings(currEl)).indexOf(currEl);
            if (index > 0) { // has previous sibling, mark it
                originClass = 'origin-' + Date.now();
                currEl.previousElementSibling.classList.add(originClass);
                currEl.dataset.originprev = originClass;
                document.body.appendChild(currEl);
            } else { // remember parent
                originClass = 'origin-' + Date.now();
                currEl.parentElement.classList.add(originClass);
                currEl.dataset.originparent = originClass;
                document.body.appendChild(currEl);
            }
        }

        // process the current element's siblings
        Array.from(getSiblings(currEl)).forEach(function (el) {
            const ariaHidden = el.getAttribute('aria-hidden');

            if (ariaHidden !== null && ariaHidden !== '') {
                el.dataset.oldariahidden = ariaHidden;
            }
            el.setAttribute('aria-hidden', true);
        });

        // use recursion to process each ancestor until the body root is reached
        parent = currEl.parentElement;
        if (parent && !parent.isEqualNode(document.body)) {
            trapKeyboardAndSRFocus(parent, undefined, true);
        }

        if (true !== isRecursionCall && typeof trapKeyboardFocus === 'function' && ('dialog' === currEl.getAttribute('role') || currEl.classList.contains('mob-connector'))) {
            trapKeyboardFocus(currEl);
        }
    }

    function untrapKeyboardAndSRFocus(currEl, isRecursionCall) {
        let parent, origParentClass, origParent, origPrevSibClass, origPrevSib;

        // process the current element's siblings
        Array.from(currEl.parentElement.children).forEach(function (el) {
            if (el !== currEl && el.nodeType === Node.ELEMENT_NODE) {
                const ariaHidden = el.getAttribute('data-oldariahidden');

                if (ariaHidden !== null) {
                    el.setAttribute('aria-hidden', ariaHidden);
                    el.removeAttribute('data-oldariahidden');
                } else {
                    el.removeAttribute('aria-hidden');
                }
            }
        });

        // use recursion to process each ancestor until the body root is reached
        parent = currEl.parentElement;
        if (parent && !parent.matches('body')) {
            untrapKeyboardAndSRFocus(parent, true);
        }

        if (true !== isRecursionCall && typeof untrapKeyboardFocus === 'function' && (currEl.getAttribute('role') === 'dialog' || currEl.classList.contains('mob-connector'))) {
            untrapKeyboardFocus(currEl);
        }

        // this returns the modal to its original position if it was temporarily moved by trapKeyboardAndSRFocus
        origParentClass = currEl.dataset.originparent;
        if (origParentClass) {
            origParent = document.querySelector('.' + origParentClass);
            origParent.insertBefore(currEl, origParent.firstChild);
            delete currEl.dataset.originparent;
            origParent.classList.remove(origParentClass);
        } else {
            origPrevSibClass = currEl.dataset.originprev;
            if (origPrevSibClass) {
                origPrevSib = document.querySelector('.' + origPrevSibClass);
                origPrevSib.parentNode.insertBefore(currEl, origPrevSib.nextSibling);
                delete currEl.dataset.originprev;
                origPrevSib.classList.remove(origPrevSibClass);
            }
        }
    }

    function getSetId(element, preferredPrefix) {
        if (!element) {
            return;
        }

        const currentId = element.hasAttribute('id');

        if (currentId) {
            return currentId;
        }

        const prefix = preferredPrefix === null ? 'btn-menu-' : preferredPrefix;
        const randomId = prefix + Math.random().toString(36).substr(2, 10);

        element.setAttribute('id', randomId);

        return randomId;
    }

    function checkIfVisible(element) {
        return element.offsetWidth > 0 && element.offsetHeight > 0;
    }

    function checkIfMobile() {
        return window.matchMedia("(max-width: 767.98px)").matches;
    }

    function checkIfCoveredByMobileDockNavbar(elem) {
        const mobileNav = document.querySelector('#connector-nav');
        const navScrollTop = mobileNav.scrollTop;
        const elemOffsetTop = elem.offsetTop;
        const offsetForFocusOutline = 5;

        return navScrollTop + offsetForFocusOutline > elemOffsetTop;
    }

    function checkIfDesktop() {
        return window.matchMedia("(min-width: 992px)").matches;
    }

    function checkIfFrench() {
        const language = document.querySelector('html').getAttribute('lang');

        if (language === null) {
            return false;
        }

        return language.substring(0, 2).toLowerCase() === 'fr';
    }
    /* END utilities */


    /* START all views */
    function onResizeWindow() {
        fixSharedComponentsAria();
        fixHamburgerMenuFocusTrap();
    }

    function fixSharedComponentsAria(isInitializing) {
        const isDesktop = checkIfDesktop();

        if (isInitializing === true) {
            const nonInteractiveSelector = '#login-register-button' + (isDesktop ? ', #myvirgin_gc_FIRST_MYBELL' : '');
            const nonInteractiveElements = document.querySelectorAll(nonInteractiveSelector);
            const promotionsLink = document.querySelector('#myvirgin_gc_SEC_Promotions_4');

            nonInteractiveElements.forEach(function (elem) {
                elem.removeAttribute('href');
                elem.removeAttribute('onclick');
                elem.removeAttribute('aria-label');
                elem.removeAttribute('aria-controls');
                elem.removeAttribute('aria-haspopup');
                elem.removeAttribute('aria-expanded');
                elem.setAttribute('role', 'presentation');
                elem.setAttribute('tabindex', '-1');
            });

            if (!isDesktop) {
                const myAccountElem = document.querySelector('#myvirgin_gc_FIRST_MYBELL');
                myAccountElem.removeAttribute('href');
                myAccountElem.removeAttribute('onclick');
                myAccountElem.removeAttribute('aria-label');
                myAccountElem.removeAttribute('aria-controls');
                myAccountElem.removeAttribute('aria-haspopup');
                myAccountElem.setAttribute('aria-expanded', myAccountElem.parentElement.classList.contains('active') ? 'true' : 'false');
                myAccountElem.setAttribute('role', 'button');
                myAccountElem.setAttribute('tabindex', '0');
            }

            if (promotionsLink) {
                promotionsLink.removeAttribute('onclick');
                promotionsLink.removeAttribute('title');
            }
        } else {
            const elem = document.querySelector('#myvirgin_gc_FIRST_MYBELL');

            if (isDesktop) {
                elem.removeAttribute('aria-expanded');
                elem.setAttribute('role', 'presentation');
                elem.setAttribute('tabindex', '-1');
            } else {
                elem.setAttribute('aria-expanded', elem.parentElement.classList.contains('active') ? 'true' : 'false');
                elem.setAttribute('role', 'button');
                elem.setAttribute('tabindex', '0');
            }
        }
    }

    let prevIsDesktop = checkIfDesktop();

    function fixHamburgerMenuFocusTrap() {
        const currIsDesktop = checkIfDesktop();

        if (prevIsDesktop === currIsDesktop) {
            return;
        }

        const hamburgerMenuTrigger = document.querySelector('header .connector-nav-open-button');
        const isExpanded = hamburgerMenuTrigger.classList.contains('active');

        if (!isExpanded) {
            prevIsDesktop = currIsDesktop;
            return;
        }

        if (!prevIsDesktop && currIsDesktop) {
            toggleHamburgerMenuFocusTrap(hamburgerMenuTrigger);
        } else if (prevIsDesktop && !currIsDesktop) {
            toggleHamburgerMenuFocusTrap(hamburgerMenuTrigger);

        }

        prevIsDesktop = currIsDesktop;
    }

    let resizeTimeout;

    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(onResizeWindow, 200);
    });

    document.addEventListener('DOMContentLoaded', function () {
        fixSharedComponentsAria(true);
        initDesktopDisclosureMenus(true, true);

        initHamburgerMenu();
        initNonDesktopDisclosureMenus();


        Preferences.init();
        Search.init();
    });

    document.addEventListener('mousedown', function (event) {
        var eventTarget = event.target;

        if (eventTarget.closest('.secondary-nav-dropdown a')) {
            return;
        }

        if (eventTarget.closest('.secondary-nav-dropdown')) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
    });

    document.addEventListener('click', function (event) {
        initViewAll(event);
    });

    function initViewAll(event) {
        var eventTarget = event.target;

        if (!eventTarget.closest('.secondary-nav-dropdown a') && eventTarget.closest('.secondary-nav-dropdown')) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }

        if (eventTarget.matches('.gh-myv .navigation-links-trigger')) {
            let ariaExpandedState = eventTarget.getAttribute('aria-expanded'),
                servicesMaxCountAllowed = eventTarget.dataset.servicesMaxCount,
                servicesLinkContainer = document.getElementById(eventTarget.getAttribute('aria-controls')),
                hiddenLinkListItems = servicesLinkContainer.querySelectorAll('li:nth-child(n+' + (parseInt(servicesMaxCountAllowed) + 1) + ')');

            if (ariaExpandedState === 'false') {
                eventTarget.setAttribute('aria-expanded', 'true');

                hiddenLinkListItems.forEach(function (listItem) {
                    listItem.classList.remove('d-none');
                });

                setTimeout(function () {
                    hiddenLinkListItems[0].querySelector('a').focus();
                }, 100);
            } else {
                eventTarget.setAttribute('aria-expanded', 'false');

                hiddenLinkListItems.forEach(function (listItem) {
                    listItem.classList.add('d-none');
                });
            }

            event.preventDefault();
            event.stopPropagation();
        } else {
            var trigger = document.querySelector('.navigation-links-trigger');

            if (trigger) {
                let ariaExpandedState = trigger.getAttribute('aria-expanded'),
                    servicesMaxCountAllowed = trigger.dataset.servicesMaxCount,
                    servicesLinkContainer = document.getElementById(trigger.getAttribute('aria-controls')),
                    hiddenLinkListItems = servicesLinkContainer.querySelectorAll('li:nth-child(n+' + (parseInt(servicesMaxCountAllowed) + 1) + ')');


                trigger.setAttribute('aria-expanded', 'false');

                hiddenLinkListItems.forEach(function (listItem) {
                    listItem.classList.add('d-none');
                });
            }
        }
    }
})();