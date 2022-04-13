import styled from "styled-components"
import { FontCollor } from "./Components/_Colors"

export const Main = styled.main`
	& {
		@media only screen and (max-width: 750px) {
			margin-top: 18vh;
			text-align: center;
			color: ${FontCollor};

			section {
				span {
					font-weight: 700;
					font-size: 7vw;
				}

				div {
					margin-top: 5vw;

					a {
						color: ${FontCollor};
					}
				}
			}

			form {
				width: 80vw;

				display: flex;
				margin: auto;
				gap: 5vw;
				flex-direction: column;

				.input {
					border: 0px;
					box-shadow: rgb(209 217 230) 2px 2px 4px inset,
						rgb(249 249 249) -2px -2px 4px inset;

					font-size: 5vw;
					border-radius: 1vw;

					:focus {
						box-shadow: 0 0 0 0;
						outline: 0;
					}
				}
				textarea {
					border: 0px;
					box-shadow: rgb(209 217 230) 2px 2px 4px inset,
						rgb(249 249 249) -2px -2px 4px inset;

					padding: 1vw 2vw 1vw 2vw;
					font-size: 5vw;
					border-radius: 1vw;

					:focus {
						box-shadow: 0 0 0 0;
						outline: 0;
					}
				}

				button {
					border: 0px;
					background-color: #493436;
					color: white;

					width: 50vw;
					font-size: 6vw;
					padding: 1.5vw;
					border-radius: 3vw;

					display: flex;
					justify-content: center;
					margin: auto;
					margin-bottom: 10vw;

					transition: 100ms;

					:hover {
						cursor: pointer;
						background-color: #846c65;
					}
				}
			}
		}

		@media only screen and (min-width: 751px) {
			margin-top: 25vh;
			text-align: center;
			color: ${FontCollor};

			section {
				span {
					font-weight: 700;
					font-size: 2vw;
				}

				div {
					margin-top: 5vw;

					a {
						color: ${FontCollor};
					}
				}
			}

			.form {
				width: 30vw;

				display: flex;
				margin: auto;
				gap: 2vw;
				flex-direction: column;

				.input {
					border: 0px;
					box-shadow: rgb(209 217 230) 2px 2px 4px inset,
						rgb(249 249 249) -2px -2px 4px inset;

					padding: 1vw 2vw 1vw 2vw;
					font-size: 1.5vw;
					border-radius: 1vw;

					:focus {
						box-shadow: 0 0 0 0;
						outline: 0;
					}
				}

				.textarea {
					border: 0px;
					box-shadow: rgb(209 217 230) 2px 2px 4px inset,
						rgb(249 249 249) -2px -2px 4px inset;

					padding: 1vw 2vw 1vw 2vw;
					font-size: 1.5vw;
					border-radius: 1vw;

					:focus {
						box-shadow: 0 0 0 0;
						outline: 0;
					}
				}

				.button {
					border: 0px;
					background-color: #493436;
					color: white;

					width: 20vw;
					font-size: 1.75vw;
					padding: 1.5vw;
					border-radius: 3vw;

					display: flex;
					justify-content: center;
					margin: auto;
					margin-bottom: 3vw;

					transition: 100ms;

					:hover {
						cursor: pointer;
						background-color: #846c65;
					}
				}
			}
		}
	}
`
