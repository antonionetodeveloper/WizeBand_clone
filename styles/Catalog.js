import styled from "styled-components"
import { FontCollor } from "./Components/_Colors"

export const Main = styled.main`
	& {
		@media only screen and (max-width: 750px) {
			color: ${FontCollor};

			section.first {
				margin-top: 20vh;

				span {
					display: flex;
					justify-content: center;

					font-size: 7vw;
					font-weight: 700;

					margin-top: 25vh;
					margin-bottom: 10vw;
				}
			}
		}

		@media only screen and (min-width: 751px) {
			color: ${FontCollor};

			section.first {
				margin-top: 20vh;

				span {
					display: flex;
					justify-content: center;

					font-size: 3vw;
					font-weight: 700;

					margin-top: 25vh;
				}
			}
		}
	}
`
