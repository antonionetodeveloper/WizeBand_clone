import styled from "styled-components"

export const Main = styled.main`
	& {
		@media only screen and (min-width: 751px) {
			margin-top: 25vh;
			color: #493436;

			span.title {
				width: 100vw;

				display: flex;
				justify-content: center;

				font-size: 5vw;

				margin-bottom: 6vw;
			}

			section.container {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
				gap: 15vw;

				form {
					display: flex;
					flex-direction: column;

					input {
						border: 0px;
						box-shadow: rgb(209 217 230) 2px 2px 4px inset,
							rgb(249 249 249) -2px -2px 4px inset;

						padding: 1vw 2vw 1vw 2vw;
						font-size: 2vw;
						border-radius: 1vw;
					}
					button {
						border: 0px;
						background-color: #493436;
						color: white;

						width: 20vw;
						font-size: 2.5vw;
						padding: 1vw;
						border-radius: 1vw;

						display: flex;
						justify-content: center;
						margin: auto;
						margin-bottom: 10vw;
						margin-top: 2vw;

						transition: 100ms;

						:hover {
							cursor: pointer;
							background-color: #846c65;
						}
					}
				}
			}
		}

		@media only screen and (max-width: 750px) {
			margin-top: 18vh;
			color: #493436;

			span.title {
				width: 100vw;

				display: flex;
				justify-content: center;

				font-size: 6vw;

				margin-bottom: 6vw;
			}

			section.container {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 5vw;

				form {
					display: flex;
					gap: 2vw;
					flex-direction: column;

					span {
						font-size: 8vw;
					}
					input {
						border: 0px;
						box-shadow: rgb(209 217 230) 2px 2px 4px inset,
							rgb(249 249 249) -2px -2px 4px inset;

						padding: 2vw 4vw 2vw 4vw;
						font-size: 5vw;
						border-radius: 1vw;
					}
					button {
						border: 0px;
						background-color: #493436;
						color: white;

						width: 50vw;
						font-size: 6vw;
						padding: 5vw;
						border-radius: 10vw;

						display: flex;
						justify-content: center;
						margin: auto;
						margin-bottom: 10vw;
						margin-top: 2vw;

						transition: 100ms;

						:hover {
							cursor: pointer;
							background-color: #846c65;
						}
					}
				}
			}
		}
	}
`
