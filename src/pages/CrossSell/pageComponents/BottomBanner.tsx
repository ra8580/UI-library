import React from "react";

import { Heading } from "../../../components";

function BottomBanner() {
    return (
        <div className="bg-red spacer-margin-t-9 spacer-margin-t-xs-8 margin-b-neg-24 spacer-pad-b-3 spacer-pad-b-md-3 border-radius-top-24 overflow-hidden">
            <div className="container liquid-container bg-red spacer-pad-y-6">
                <div className="txt-white text-center m-0">
                    <Heading HeadingLevel="h1" variant="large">Even more to love</Heading>
                </div>
                <ul className="d-flex flex-column flex-md-row justify-content-center m-0 spacer-pad-t-6 list-unstyled">
                    <li className="text-center max-w-160 max-w-xs-100-percent">
                        <div className="m-auto dimension-72 dimension-xs-60">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NSA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3LjI2NiA3LjY2NjYzQzM2LjcxMzcgNy42NjY2MyAzNi4yNjYgOC4xMTQzNCAzNi4yNjYgOC42NjY2M0MzNi4yNjYgOS4yMTg5MSAzNi43MTM3IDkuNjY2NjMgMzcuMjY2IDkuNjY2NjNINDUuMjY2QzQ1LjgxODMgOS42NjY2MyA0Ni4yNjYgOS4yMTg5MSA0Ni4yNjYgOC42NjY2M0M0Ni4yNjYgOC4xMTQzNCA0NS44MTgzIDcuNjY2NjMgNDUuMjY2IDcuNjY2NjNIMzcuMjY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MS42NjY3IDIzQzQxLjY2NjcgMjIuMDc5NiA0Mi40MTI5IDIxLjMzMzQgNDMuMzMzNCAyMS4zMzM0SDQ2LjY2NjdDNDcuNTg3MiAyMS4zMzM0IDQ4LjMzMzQgMjIuMDc5NiA0OC4zMzM0IDIzVjI2LjMzMzRDNDguMzMzNCAyNy4yNTM4IDQ3LjU4NzIgMjggNDYuNjY2NyAyOEg0My4zMzM0QzQyLjQxMjkgMjggNDEuNjY2NyAyNy4yNTM4IDQxLjY2NjcgMjYuMzMzNFYyM1pNNDMuNjY2NyAyMy4zMzM0VjI2SDQ2LjMzMzRWMjMuMzMzNEg0My42NjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My4zMzM0IDMwLjY2NjZDNDIuNDEyOSAzMC42NjY2IDQxLjY2NjcgMzEuNDEyOCA0MS42NjY3IDMyLjMzMzNWMzUuNjY2NkM0MS42NjY3IDM2LjU4NzEgNDIuNDEyOSAzNy4zMzMzIDQzLjMzMzQgMzcuMzMzM0g0Ni42NjY3QzQ3LjU4NzIgMzcuMzMzMyA0OC4zMzM0IDM2LjU4NzEgNDguMzMzNCAzNS42NjY2VjMyLjMzMzNDNDguMzMzNCAzMS40MTI4IDQ3LjU4NzIgMzAuNjY2NiA0Ni42NjY3IDMwLjY2NjZINDMuMzMzNFpNNDMuNjY2NyAzNS4zMzMzVjMyLjY2NjZINDYuMzMzNFYzNS4zMzMzSDQzLjY2NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjY2NjcgMzIuMzMzM0MzMy42NjY3IDMxLjQxMjggMzQuNDEyOSAzMC42NjY2IDM1LjMzMzQgMzAuNjY2NkgzOC42NjY3QzM5LjU4NzIgMzAuNjY2NiA0MC4zMzM0IDMxLjQxMjggNDAuMzMzNCAzMi4zMzMzVjM1LjY2NjZDNDAuMzMzNCAzNi41ODcxIDM5LjU4NzIgMzcuMzMzMyAzOC42NjY3IDM3LjMzMzNIMzUuMzMzNEMzNC40MTI5IDM3LjMzMzMgMzMuNjY2NyAzNi41ODcxIDMzLjY2NjcgMzUuNjY2NlYzMi4zMzMzWk0zNS42NjY3IDMyLjY2NjZWMzUuMzMzM0gzOC4zMzM0VjMyLjY2NjZIMzUuNjY2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuMjY1OSA2QzI5LjI2NTkgNC4zNDMxNSAzMC42MDkxIDMgMzIuMjY1OSAzSDUwLjI2NTlDNTEuOTIyOCAzIDUzLjI2NTkgNC4zNDMxNSA1My4yNjU5IDZWMTAuMjA3MkM1NC4yNTE3IDkuNzkzNjEgNTUuNDEyNiA5LjgyOTM0IDU2LjQwOTggMTAuNDA1MUM1OC4xMDQgMTEuMzgzMiA1OC42ODQ0IDEzLjU0OTUgNTcuNzA2MyAxNS4yNDM3TDU2LjIwNjkgMTcuODQwN0M1Ni4wNTc3IDE4LjA5OTEgNTUuODgwOCAxOC4zMzE3IDU1LjY4MjIgMTguNTM2N0M1NS45MzA4IDE4LjYxMzYgNTYuMTc0OCAxOC43MTkzIDU2LjQwOTggMTguODU0OUM1OC4xMDQgMTkuODMzIDU4LjY4NDQgMjEuOTk5NCA1Ny43MDYzIDIzLjY5MzVMNTYuMjA2OSAyNi4yOTA1QzU2LjA1NzcgMjYuNTQ5IDU1Ljg4MDggMjYuNzgxNiA1NS42ODIxIDI2Ljk4NjdDNTUuOTMwOCAyNy4wNjM1IDU2LjE3NDggMjcuMTY5MiA1Ni40MDk4IDI3LjMwNDlDNTguMTA0IDI4LjI4MyA1OC42ODQ0IDMwLjQ0OTMgNTcuNzA2MyAzMi4xNDM1TDU2LjIwNjkgMzQuNzQwNUM1NS41NzQxIDM1LjgzNjYgNTQuNDQzOSAzNi40NjY1IDUzLjI2NTkgMzYuNTA5N1Y0MEM1My4yNjU5IDQxLjY1NjkgNTEuOTIyOCA0MyA1MC4yNjU5IDQzSDQyLjg2NTJDMzkuNzAwOSA0OC41NTk1IDMzLjI4MjkgNDguOTYgMzAuMTAzNiA0OC45OTY1QzI5LjgyNzggNDguOTk5NiAyOS41NzMgNDkuMTA3MSAyOS4zODczIDQ5LjI5MjlMMjUuODM1MyA1Mi44NDQ4QzI2LjU0NjMgNTMuNjI5OSAyNi41MjMyIDU0Ljg0MzMgMjUuNzY2IDU1LjYwMDVMMjEuOTM0IDU5LjQzMjVDMjEuMTUyOSA2MC4yMTM2IDE5Ljg4NjYgNjAuMjEzNiAxOS4xMDU1IDU5LjQzMjVMNi4zMzMzNCA0Ni42NjAzQzUuNTUyMyA0NS44NzkzIDUuNTUyMyA0NC42MTI5IDYuMzMzMzUgNDMuODMxOUwxMC4xNjU0IDM5Ljk5OTlDMTAuOTQ2NCAzOS4yMTg4IDEyLjIxMjcgMzkuMjE4OCAxMi45OTM4IDM5Ljk5OTlMMTMuOTIyOSA0MC45Mjg5TDE3Ljk3MyAzNi44Nzg4QzE4LjE2MDYgMzYuNjkxMiAxOC4yNjU5IDM2LjQzNjkgMTguMjY1OSAzNi4xNzE2VjI4LjY1NDhDMTguMjY1OSAyOC4wMTY3IDE4LjQ2OTQgMjcuMzk1MyAxOC44NDY3IDI2Ljg4MDdMMjkuMjY1OSAxMi42NzI3VjZaTTIzLjI3MTUgNTMuMTA2QzIzLjI5NDggNTMuMzI1NiAyMy4zOTA2IDUzLjUzODggMjMuNTU4OCA1My43MDcxQzIzLjcyNzEgNTMuODc1MyAyMy45NDA0IDUzLjk3MTEgMjQuMTU5OSA1My45OTQ0TDI0LjM1MTggNTQuMTg2M0wyMC41MTk4IDU4LjAxODNMNy43NDc1NiA0NS4yNDYxTDExLjU3OTYgNDEuNDE0MUwyMy4yNzE1IDUzLjEwNlpNMjQuNDIyOCA1MS40Mjg5TDI3Ljk3MyA0Ny44Nzg3QzI4LjUzNzUgNDcuMzE0MiAyOS4yOTU3IDQ3LjAwNTYgMzAuMDgwNyA0Ni45OTY2QzMzLjA1NjcgNDYuOTYyNCAzNy43NDc4IDQ2LjU3IDQwLjQ3MjEgNDNIMzIuMjY1OUMzMC42MDkxIDQzIDI5LjI2NTkgNDEuNjU2OSAyOS4yNjU5IDQwVjM5LjQwM0MyOS4xNzE1IDM5LjUwNDkgMjkuMDczOSAzOS42MDYzIDI4Ljk3MyAzOS43MDcyQzI4LjU4MjUgNDAuMDk3NyAyNy45NDk0IDQwLjA5NzcgMjcuNTU4OCAzOS43MDcyQzI3LjE2ODMgMzkuMzE2NiAyNy4xNjgzIDM4LjY4MzUgMjcuNTU4OCAzOC4yOTI5QzMwLjY2MTEgMzUuMTkwNyAyOS45MTg4IDMxLjQwMzkgMjguODQxOSAyOS4yNjI4QzI4LjQ5MjMgMjguNTY3NiAyOC4zMDExIDI3LjY2NzUgMjguNjE2OCAyNi43NzQ4QzI5LjI0NTMgMjQuOTk3NiAzMC4yNTczIDIyLjczMDUgMzEuMTg0OSAyMC42NzA3TDMxLjM1MTEgMjAuMzAxOEMzMi4xODcyIDE4LjQ0NiAzMi45MTk1IDE2LjgyMDYgMzMuMjY4NCAxNS44MjY2QzMzLjI0MjYgMTUuNzY4IDMzLjE5NzEgMTUuNjgyMiAzMy4xMjI2IDE1LjU3MTJDMzIuOTI0IDE1LjI3NTQgMzIuNjAxNiAxNC45MjExIDMyLjIxOTMgMTQuNTk2M0MzMS44MzQ4IDE0LjI2OTYgMzEuNDQzMyAxNC4wMTg1IDMxLjEyNzggMTMuODg3OUMzMS4wMzEyIDEzLjg0NzkgMzAuOTU5NyAxMy44MjYgMzAuOTA5MiAxMy44MTM5TDIwLjQ1OTUgMjguMDYzNEMyMC4zMzM3IDI4LjIzNSAyMC4yNjU5IDI4LjQ0MjEgMjAuMjY1OSAyOC42NTQ4VjM2LjE3MTZDMjAuMjY1OSAzNi45NjczIDE5Ljk0OTkgMzcuNzMwNCAxOS4zODczIDM4LjI5M0wxNS4zMzcxIDQyLjM0MzFMMjQuNDIyOCA1MS40Mjg5Wk00Mi4yODg3IDQxQzQyLjI3NCA0MC45OTk3IDQyLjI1OTMgNDAuOTk5NyA0Mi4yNDQ3IDQxSDMyLjI2NTlDMzEuNzEzNiA0MSAzMS4yNjU5IDQwLjU1MjMgMzEuMjY1OSA0MFYzNi4xNDY0QzMyLjMyNDIgMzMuMTQ3NCAzMS41MzYxIDMwLjE2ODMgMzAuNjI4NyAyOC4zNjQxQzMwLjQ0MjggMjcuOTk0NSAzMC40MjA3IDI3LjY3MjUgMzAuNTAyNCAyNy40NDE2QzMxLjA5NzcgMjUuNzU4MiAzMi4wNzIxIDIzLjU3MTIgMzMuMDA4NSAyMS40OTJMMzMuMjA1IDIxLjA1NTlDMzQuMDUyNCAxOS4xNzU4IDM0Ljg1NSAxNy4zOTUxIDM1LjIxNDYgMTYuMzE2NEMzNS4zNTEzIDE1LjkwNjMgMzUuMjc1MiAxNS41MTUgMzUuMTg2NSAxNS4yNDc3QzM1LjA5MjkgMTQuOTY1NSAzNC45NDQgMTQuNjk2MSAzNC43ODMgMTQuNDU2M0MzNC40NTk0IDEzLjk3NDMgMzQuMDAxOSAxMy40ODY0IDMzLjUxNDIgMTMuMDcyMUMzMy4wMjg3IDEyLjY1OTcgMzIuNDYwMSAxMi4yNzQ4IDMxLjg5MjggMTIuMDRDMzEuNzE1OSAxMS45NjY3IDMxLjUwMTEgMTEuODkyNiAzMS4yNjU5IDExLjg0NjJWNkMzMS4yNjU5IDUuNDQ3NzIgMzEuNzEzNiA1IDMyLjI2NTkgNUg1MC4yNjU5QzUwLjgxODIgNSA1MS4yNjU5IDUuNDQ3NzEgNTEuMjY1OSA2VjEyLjIzMDNMNTAuMDcxOCAxNC4yOTg2QzQ5LjA5MzcgMTUuOTkyNyA0OS42NzQxIDE4LjE1OSA1MS4zNjgzIDE5LjEzNzJDNTEuNjAzMiAxOS4yNzI4IDUxLjg0NzMgMTkuMzc4NSA1Mi4wOTU5IDE5LjQ1NTRDNTEuODk3MyAxOS42NjA0IDUxLjcyMDQgMTkuODkzIDUxLjU3MTIgMjAuMTUxNEw1MC4wNzE4IDIyLjc0ODRDNDkuMDkzNyAyNC40NDI2IDQ5LjY3NDEgMjYuNjA4OSA1MS4zNjgzIDI3LjU4N0M1MS42MDMzIDI3LjcyMjcgNTEuODQ3MyAyNy44MjgzIDUyLjA5NiAyNy45MDUyQzUxLjg5NzMgMjguMTEwMyA1MS43MjA0IDI4LjM0MjkgNTEuNTcxMiAyOC42MDE0TDUwLjA3MTggMzEuMTk4M0M0OS4xMTM3IDMyLjg1NzkgNDkuNjUxMSAzNC45NzA2IDUxLjI2NTkgMzUuOTc1NlY0MEM1MS4yNjU5IDQwLjU1MjMgNTAuODE4MiA0MSA1MC4yNjU5IDQxSDQyLjI4ODdaTTUzLjI2NTkgMTNINTMuMTMwOUw1MS44MDM5IDE1LjI5ODZDNTEuMzc4IDE2LjAzNjEgNTEuNjMwNyAxNi45NzkzIDUyLjM2ODMgMTcuNDA1MUM1My4xMDU5IDE3LjgzMSA1NC4wNDkgMTcuNTc4MyA1NC40NzQ5IDE2Ljg0MDdMNTUuOTc0MiAxNC4yNDM3QzU2LjQwMDEgMTMuNTA2MSA1Ni4xNDc0IDEyLjU2MyA1NS40MDk4IDEyLjEzNzFDNTQuNjcyMiAxMS43MTEzIDUzLjcyOTEgMTEuOTY0IDUzLjMwMzIgMTIuNzAxNkw1My4yNjU5IDEyLjc2NjJWMTNaTTUzLjMwMzIgMjEuMTUxNEM1My43MjkxIDIwLjQxMzggNTQuNjcyMiAyMC4xNjExIDU1LjQwOTggMjAuNTg3QzU2LjE0NzQgMjEuMDEyOCA1Ni40MDAxIDIxLjk1NTkgNTUuOTc0MiAyMi42OTM1TDU0LjQ3NDkgMjUuMjkwNUM1NC4wNDkgMjYuMDI4MSA1My4xMDU5IDI2LjI4MDggNTIuMzY4MyAyNS44NTVDNTEuNjMwNyAyNS40MjkxIDUxLjM3OCAyNC40ODYgNTEuODAzOSAyMy43NDg0TDUzLjMwMzIgMjEuMTUxNFpNNTUuNDA5OCAyOS4wMzY5QzU0LjY3MjIgMjguNjExMSA1My43MjkxIDI4Ljg2MzggNTMuMzAzMiAyOS42MDE0TDUxLjgwMzkgMzIuMTk4M0M1MS4zNzggMzIuOTM1OSA1MS42MzA3IDMzLjg3OTEgNTIuMzY4MyAzNC4zMDQ5QzUzLjEwNTkgMzQuNzMwNyA1NC4wNDkgMzQuNDc4IDU0LjQ3NDkgMzMuNzQwNUw1NS45NzQyIDMxLjE0MzVDNTYuNDAwMSAzMC40MDU5IDU2LjE0NzQgMjkuNDYyOCA1NS40MDk4IDI5LjAzNjlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM1LjMzMzQgMjEuMzM0QzM0LjQxMjkgMjEuMzM0IDMzLjY2NjcgMjIuMDgwMiAzMy42NjY3IDIzLjAwMDdWMjYuMzM0QzMzLjY2NjcgMjcuMjU0NSAzNC40MTI5IDI4LjAwMDcgMzUuMzMzNCAyOC4wMDA3SDM4LjY2NjdDMzkuNTg3MiAyOC4wMDA3IDQwLjMzMzQgMjcuMjU0NSA0MC4zMzM0IDI2LjMzNFYyMy4wMDA3QzQwLjMzMzQgMjIuMDgwMiAzOS41ODcyIDIxLjMzNCAzOC42NjY3IDIxLjMzNEgzNS4zMzM0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="Icon award" />
                        </div>
                        <div className="spacer-margin-t-3 txt-white d-flex align-items-center justify-content-center">
                            Awesome customer service and award-winning My Account app
                        </div>
                    </li>
                    <li className="text-center spacer-margin-l-md-8 spacer-margin-t-xs-3 max-w-160 max-w-xs-100-percent">
                        <div className="m-auto dimension-72 dimension-xs-60">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjMzMzMgNTQuNjY2QzI3LjMzMzMgNTYuODc1MSAyNS41NDIzIDU4LjY2NiAyMy4zMzMzIDU4LjY2NkMyMS4xMjQxIDU4LjY2NiAxOS4zMzMzIDU2Ljg3NTEgMTkuMzMzMyA1NC42NjZDMTkuMzMzMyA1Mi40NTY5IDIxLjEyNDEgNTAuNjY2IDIzLjMzMzMgNTAuNjY2QzI1LjU0MjMgNTAuNjY2IDI3LjMzMzMgNTIuNDU2OSAyNy4zMzMzIDU0LjY2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MCA1NC42NjZDNTAgNTYuODc1MSA0OC4yMDkxIDU4LjY2NiA0NiA1OC42NjZDNDMuNzkwOSA1OC42NjYgNDIgNTYuODc1MSA0MiA1NC42NjZDNDIgNTIuNDU2OSA0My43OTA5IDUwLjY2NiA0NiA1MC42NjZDNDguMjA5MSA1MC42NjYgNTAgNTIuNDU2OSA1MCA1NC42NjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjguNSAxNy41MDA2QzI3Ljk0NzcgMTcuNTAwNiAyNy41IDE3Ljk0ODMgMjcuNSAxOC41MDA2QzI3LjUgMTkuMDUyOSAyNy45NDc3IDE5LjUwMDYgMjguNSAxOS41MDA2SDQ0QzQ0LjU1MjMgMTkuNTAwNiA0NSAxOS4wNTI5IDQ1IDE4LjUwMDZDNDUgMTcuOTQ4MyA0NC41NTIzIDE3LjUwMDYgNDQgMTcuNTAwNkgyOC41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI3LjUgMzMuMDAwNkMyNy41IDMyLjQ0ODMgMjcuOTQ3NyAzMi4wMDA2IDI4LjUgMzIuMDAwNkg0NEM0NC41NTIzIDMyLjAwMDYgNDUgMzIuNDQ4MyA0NSAzMy4wMDA2QzQ1IDMzLjU1MjkgNDQuNTUyMyAzNC4wMDA2IDQ0IDM0LjAwMDZIMjguNUMyNy45NDc3IDM0LjAwMDYgMjcuNSAzMy41NTI5IDI3LjUgMzMuMDAwNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNSAyNS4wMDA2QzI0LjQ0NzcgMjUuMDAwNiAyNCAyNS40NDgzIDI0IDI2LjAwMDZDMjQgMjYuNTUyOSAyNC40NDc3IDI3LjAwMDYgMjUgMjcuMDAwNkg0OEM0OC41NTIzIDI3LjAwMDYgNDkgMjYuNTUyOSA0OSAyNi4wMDA2QzQ5IDI1LjQ0ODMgNDguNTUyMyAyNS4wMDA2IDQ4IDI1LjAwMDZIMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzMzMzcgNS4zMzM5OEM0LjMzMzM3IDQuNzgxNyA0Ljc4MTA5IDQuMzMzOTggNS4zMzMzNyA0LjMzMzk4QzEwLjU2OTMgNC4zMzM5OCAxMy4xNzEyIDcuNDczNSAxNC4wNTQzIDkuNjY3MzJINTguNjY2N0M1OC45NjMyIDkuNjY3MzIgNTkuMjQ0NSA5Ljc5ODkxIDU5LjQzNDUgMTAuMDI2NkM1OS42MjQ1IDEwLjI1NDIgNTkuNzAzNiAxMC41NTQ1IDU5LjY1MDYgMTAuODQ2Mkw1NC4zMTk1IDQwLjE2NzNDNTQuMzAyOCA0MC4yNjY4IDU0LjI3MTQgNDAuMzYxMyA1NC4yMjc2IDQwLjQ0ODVDNTQuMTUwNSA0MC42MDI2IDU0LjAzNTMgNDAuNzMyNyA1My44OTUzIDQwLjgyNzlDNTMuNzg2MyA0MC45MDE5IDUzLjY2MjQgNDAuOTU0OCA1My41Mjk3IDQwLjk4MTNDNTMuNDk0NyA0MC45ODgzIDUzLjQ1OTIgNDAuOTkzNCA1My40MjMxIDQwLjk5NjdDNTMuMzkzNSA0MC45OTkzIDUzLjM2MzYgNDEuMDAwNyA1My4zMzM0IDQxLjAwMDdIMTguNjY2N0wxOC42NTcxIDQxLjAwMDZIMTMuOTQ4N0MxMS42OTggNDEuMDAwNiAxMC4xMTg4IDQxLjQ5NTYgOS4xMjY1NyA0Mi4yNDZDOC4xNzAzNiA0Mi45NjkzIDcuNjY2NjMgNDMuOTk2OCA3LjY2NjYzIDQ1LjMzMzlDNy42NjY2MyA0Ni42NzExIDguMTcwMzYgNDcuNjk4NiA5LjEyNjU3IDQ4LjQyMThDMTAuMTE4OCA0OS4xNzIzIDExLjY5OCA0OS42NjczIDEzLjk0ODcgNDkuNjY3M0g1MkM1Mi41NTIyIDQ5LjY2NzMgNTMgNTAuMTE1IDUzIDUwLjY2NzNDNTMgNTEuMjE5NiA1Mi41NTIyIDUxLjY2NzMgNTIgNTEuNjY3M0gxMy45NDg3QzExLjQ0MTIgNTEuNjY3MyA5LjM3OTM4IDUxLjEyMDcgNy45MjAxMiA1MC4wMTdDNi40MjQ4NCA0OC44ODYxIDUuNjY2NjMgNDcuMjQ2OSA1LjY2NjYzIDQ1LjMzMzlDNS42NjY2MyA0My40MjEgNi40MjQ4NCA0MS43ODE4IDcuOTIwMTIgNDAuNjUwOUM5LjM3OTM4IDM5LjU0NzIgMTEuNDQxMiAzOS4wMDA2IDEzLjk0ODcgMzkuMDAwNkgxNy40Njg1TDEyLjM1NTcgMTAuODgwNUMxMS45ODE4IDkuNDQ0NzYgMTAuMDg4OSA2LjMzMzk4IDUuMzMzMzcgNi4zMzM5OEM0Ljc4MTA5IDYuMzMzOTggNC4zMzMzNyA1Ljg4NjI3IDQuMzMzMzcgNS4zMzM5OFpNNTcuNDY4NSAxMS42NjczTDUyLjQ5ODggMzkuMDAwNkgxOS41MDEzTDE0LjUzMTYgMTEuNjY3M0g1Ny40Njg1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="Icon cart" />
                        </div>
                        <div className="spacer-margin-t-3 txt-white d-flex align-items-center justify-content-center">
                            Fast and easy ordering
                        </div>
                    </li>
                    <li className="text-center spacer-margin-l-md-8 spacer-margin-t-xs-3 max-w-160 max-w-xs-100-percent">
                        <div className="m-auto dimension-72 dimension-xs-60">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NSA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni44ODc5IDMwLjMxODRDNTAuMzY1MyAyOC41ODM0IDUyLjczOTQgMjUuMTAyNiA1Mi43Mzk0IDIxLjA5MTRDNTIuNzM5NCAxNS4zNDc2IDQ3Ljg3MTUgMTAuNjkxNCA0MS44NjY3IDEwLjY5MTRDMzUuODYxOCAxMC42OTE0IDMwLjk5NCAxNS4zNDc2IDMwLjk5NCAyMS4wOTE0QzMwLjk5NCAyNS4xODUgMzMuNDY2NiAyOC43MjYzIDM3LjA2MTMgMzAuNDIzMUMzMy44MzQ2IDMxLjYzODEgMzEuMDU1NiAzNC4wNDU1IDI5LjAwNyAzNy4yMDYyQzI3LjUxMzggMzUuNTA5NSAyNS43MTYzIDM0LjE5MTQgMjMuNzE1MyAzMy40MDhDMjYuNjU3OCAzMS45NCAyOC42NjY3IDI4Ljk5NDcgMjguNjY2NyAyNS42MDA1QzI4LjY2NjcgMjAuNzQwNCAyNC41NDc3IDE2LjgwMDUgMTkuNDY2NyAxNi44MDA1QzE0LjM4NTYgMTYuODAwNSAxMC4yNjY3IDIwLjc0MDQgMTAuMjY2NyAyNS42MDA1QzEwLjI2NjcgMjguOTkxNSAxMi4yNzE4IDMxLjkzNDUgMTUuMjA5OCAzMy40MDM5QzkuMzQ0NjggMzUuNjkyNCA1LjI2NjY2IDQyLjU4NyA1LjI2NjY2IDUwLjQwMDZDNS4yNjY2NiA1MC45NTI5IDUuNzE0MzggNTEuNDAwNiA2LjI2NjY2IDUxLjQwMDZDNi44MTg5NSA1MS40MDA2IDcuMjY2NjYgNTAuOTUyOSA3LjI2NjY2IDUwLjQwMDZDNy4yNjY2NiA0MS40MzY0IDEyLjk0IDM0LjYwMDYgMTkuNDY2NyAzNC42MDA2QzIyLjcwOTkgMzQuNjAwNiAyNS43MTAxIDM2LjI1MzQgMjcuOTQwOCAzOS4wNDY0QzI2LjI0MTggNDIuMzQwNSAyNS4yNjY3IDQ2LjI1NTQgMjUuMjY2NyA1MC40MDA0QzI1LjI2NjcgNTAuOTUyNyAyNS43MTQ0IDUxLjQwMDQgMjYuMjY2NyA1MS40MDA0QzI2LjgxODkgNTEuNDAwNCAyNy4yNjY3IDUwLjk1MjcgMjcuMjY2NyA1MC40MDA0QzI3LjI2NjcgMzkuNzQ5MyAzNC4wMTQ1IDMxLjU0NTkgNDEuODY2NyAzMS41NDU5QzQ2LjQ0NjcgMzEuNTQ1OSA1MC4xMDc3IDMzLjUwNzggNTIuNjQ5NCAzNi44MDgzQzU1LjIwOSA0MC4xMzIyIDU2LjY2NjcgNDQuODY0OSA1Ni42NjY3IDUwLjQwMDRDNTYuNjY2NyA1MC45NTI3IDU3LjExNDQgNTEuNDAwNCA1Ny42NjY3IDUxLjQwMDRDNTguMjE5IDUxLjQwMDQgNTguNjY2NyA1MC45NTI3IDU4LjY2NjcgNTAuNDAwNEM1OC42NjY3IDQ0LjUzNiA1Ny4xMjQ0IDM5LjM0MTQgNTQuMjM0IDM1LjU4OEM1Mi4zMjU0IDMzLjEwOTYgNDkuODQzNyAzMS4yODIgNDYuODg3OSAzMC4zMTg0Wk01MC43Mzk0IDIxLjA5MTRDNTAuNzM5NCAyNS42NDc3IDQ2Ljg1MTcgMjkuNDkxNCA0MS44NjY3IDI5LjQ5MTRDMzYuODgxNyAyOS40OTE0IDMyLjk5NCAyNS42NDc3IDMyLjk5NCAyMS4wOTE0QzMyLjk5NCAxNi41MzUxIDM2Ljg4MTcgMTIuNjkxNCA0MS44NjY3IDEyLjY5MTRDNDYuODUxNyAxMi42OTE0IDUwLjczOTQgMTYuNTM1MSA1MC43Mzk0IDIxLjA5MTRaTTE5LjQ2NjcgMzIuNDAwNUMyMy41Mjc4IDMyLjQwMDUgMjYuNjY2NyAyOS4yNzMyIDI2LjY2NjcgMjUuNjAwNUMyNi42NjY3IDIxLjkyNzkgMjMuNTI3OCAxOC44MDA1IDE5LjQ2NjcgMTguODAwNUMxNS40MDU1IDE4LjgwMDUgMTIuMjY2NyAyMS45Mjc5IDEyLjI2NjcgMjUuNjAwNUMxMi4yNjY3IDI5LjI3MzIgMTUuNDA1NSAzMi40MDA1IDE5LjQ2NjcgMzIuNDAwNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NS42NjY3IDIzLjc4ODNDNDUuNjY2NyAyNS41NjIxIDQzLjg3NTggMjcgNDEuNjY2NyAyN0MzOS40NTc1IDI3IDM3LjY2NjcgMjUuNTYyMSAzNy42NjY3IDIzLjc4ODNDMzcuNjY2NyAyMi4wMTQ2IDM5LjQ1NzUgMjMuNzg4MyA0MS42NjY3IDIzLjc4ODNDNDMuODc1OCAyMy43ODgzIDQ1LjY2NjcgMjIuMDE0NiA0NS42NjY3IDIzLjc4ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="Icon emoticon" />
                        </div>
                        <div className="spacer-margin-t-3 txt-white d-flex align-items-center justify-content-center">
                            Invite a friend. You'll get a bill credit. They'll get a bill credit.
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default BottomBanner;