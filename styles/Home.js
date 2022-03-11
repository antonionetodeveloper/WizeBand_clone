import styled from "styled-components"
// import { color } from "./Components/Colors.js"

export const Main = styled.main`
	& {
		@media only screen and (min-width: 751px) {
			display: flex;
			flex-direction: column;
			gap: 5vw;

			color: #493436;
			margin-top: 20vh;
			margin-bottom: 5vw;

			h2 {
				text-align: center;
				font-size: 3vw;
			}

			section {
				overflow-y: hidden;
			}
		}

		@media only screen and (max-width: 750px) {
			display: flex;
			flex-direction: column;
			gap: 5vw;

			color: #493436;
			margin-top: 15vh;
			margin-bottom: 5vw;

			h2 {
				text-align: center;
				font-size: 9vw;
			}

			section {
				overflow-y: hidden;
			}
		}
	}
`
