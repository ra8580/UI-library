import React from "react";

const RightPortion = () => {
	return (
		<div className="connector-settings-right" role="region" aria-label="header connector settings">
			<div className="connector-search">
				<button id="connector-search-button" aria-label="Search">
					<span className="icon icon-magnifying-glass" aria-hidden="true"></span>
					<span className="visually-hidden">Search</span>
				</button>
				<div className="connector-search-wrap">
					<form id="connector-search" className="search-bar-header js-connector-search-form" method="POST" data-mktseg="shp" data-suggestions="#header-autocomplete-search-results" data-url="http://local-myvirgin-b.ids.int.bell.ca/en/search/search.html?q=#qbox#" data-autocompletehost="http://www.bell.ca/Search/Search/GetAutocomplete" role="search">
						<span className="visually-hidden">Search</span>
						<input name="query" id="topNavSearch" className="ui-autocomplete-input" placeholder="Search" autoComplete="off" type="search" />
						<button className="accss-icon-height-override hideAutocomplete" type="reset" title="Reset search terms" aria-label="Reset search terms">
							<img alt="" className="width-12" src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+Cjx0aXRsZT48L3RpdGxlPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGQ9Ik01MTIgMGMtMjgxLjYgMC01MTIgMjMwLjQtNTEyIDUxMnMyMzAuNCA1MTIgNTEyIDUxMiA1MTItMjMwLjQgNTEyLTUxMi0yMzAuNC01MTItNTEyLTUxMnpNNzI5LjYgNzI5LjZjLTE5LjIgMTkuMi01MS4yIDE5LjItNzAuNCAwbC0xNDcuMi0xNDcuMi0xNDcuMiAxNDcuMmMtMTkuMiAxOS4yLTUxLjIgMTkuMi03MC40IDBzLTE5LjItNTEuMiAwLTcwLjRsMTUzLjYtMTQ3LjItMTQ3LjItMTQ3LjJjLTE5LjItMTkuMi0xOS4yLTUxLjIgMC03MC40czUxLjItMTkuMiA3MC40IDBsMTQwLjggMTQ3LjIgMTQ3LjItMTQ3LjJjMTkuMi0xOS4yIDUxLjItMTkuMiA3MC40IDBzMTkuMiA1MS4yIDAgNzAuNGwtMTQ3LjIgMTQ3LjIgMTQ3LjIgMTQ3LjJjMTkuMiAxOS4yIDE5LjIgNTEuMiAwIDcwLjR6Ij48L3BhdGg+Cjwvc3ZnPgo=" />
						</button>
						<button id="search_submit" type="submit" aria-label="Perform a search" className="accss-icon-height-override pointer">
							<img alt="" className="width-16" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxMjFjMzY7b3BhY2l0eTowLjY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0LjIsMTQuMTQsMTEuNjcsMTEuNmE2LjEsNi4xLDAsMSwwLTEuMTkuOTRsMi42NiwyLjY2YS43NS43NSwwLDAsMCwxLjA2LTEuMDZaTTcuMzMsMTEuOTJhNC41OSw0LjU5LDAsMSwxLDMuMjUtMS4zNUE0LjU5LDQuNTksMCwwLDEsNy4zMywxMS45MloiLz48L3N2Zz4=" />
						</button>
					</form>
				</div>
			</div>


			<div className="location-area-wrap">
				<a id="mybell_gc_fed_LANGUAGE_DESK" href="javascript:void(0)" className="js-current-language footer-header-current-language" data-language="en" data-alternative="fr" data-vanityurl="" aria-label="Change language to Français" role="button">
					<span>FR</span>
				</a>

				<a href="http://local-myvirgin-b.ids.int.bell.ca/en/support/find-a-store.html?V=ON&amp;itcid=NAV:69" title="Find a store" aria-label="Find a store">
					<img alt="" className="width-16" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxMzFjMzU7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgsNS4yNUExLjQyLDEuNDIsMCwxLDAsOS40Miw2LjY3LDEuNDIsMS40MiwwLDAsMCw4LDUuMjVaTTgsLjU4QTYuMDksNi4wOSwwLDAsMCwxLjkyLDYuNjdhNi4xNCw2LjE0LDAsMCwwLC45MywyLjg2LDIwLjM5LDIwLjM5LDAsMCwwLDEuOSwyLjcyYy42OS44MywxLjM3LDEuNTcsMS44OCwyLjEuMjUuMjcuNDYuNDguNjEuNjNsLjE4LjE3LDAsMHYwaDBMOCwxNC42N2wuNTIuNTRoMHYwbC4wNSwwTDguNzYsMTVjLjE1LS4xNS4zNi0uMzYuNjEtLjYzLjUxLS41MywxLjE5LTEuMjcsMS44OC0yLjFhMjAuMzksMjAuMzksMCwwLDAsMS45LTIuNzIsNi4xNCw2LjE0LDAsMCwwLC45My0yLjg2QTYuMDksNi4wOSwwLDAsMCw4LC41OFptMy44NSw4LjIxYTE4LjQyLDE4LjQyLDAsMCwxLTEuNzYsMi41MWMtLjY1Ljc5LTEuMzEsMS41LTEuOCwybC0uMjkuMy0uMjktLjNjLS40OS0uNTEtMS4xNS0xLjIyLTEuOC0yQTE4LjQyLDE4LjQyLDAsMCwxLDQuMTUsOC43OWE0LjcxLDQuNzEsMCwwLDEtLjczLTIuMTIsNC41OCw0LjU4LDAsMSwxLDkuMTYsMEE0LjcxLDQuNzEsMCwwLDEsMTEuODUsOC43OVpNOCwxNC42N2wuNTIuNTRhLjc3Ljc3LDAsMCwxLTEsMFoiLz48L3N2Zz4=" />
				</a>
			</div>

			<div className="connector-settings">

				<div className="login-area-wrap">

					<div className="login-button user-options">

						<a id="login-register-button" className="trigger-popup login-register-button click-on-enter-or-space" role="presentation" tabIndex={-1}>
							<div className="container-flex-box-wrap">
								<span className="login-ellipsis" title="Daphne">Hey Daphne </span>

							</div>
						</a>
					</div>
					<div className="logout-button floatL txtSize15 pad-9-top">
						<a id="mybell_gc_FIRST_BELL_LOGOUT" href="javascript:void(0)" className="log-out-button-menu text-underline txtSize14">Log out</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default RightPortion;