import styled from "styled-components"
import { FontCollor } from "./Components/_Colors"

export const Main = styled.main`
	& {
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
`
