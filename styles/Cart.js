import styled from "styled-components"

export const Main = styled.main`
	& {
		@media only screen and (min-width: 751px) {
			margin-top: 25vh;
			min-height: 75vh;

			display: flex;
			justify-content: center;
			gap: 5vw;
			div {
				flex: none;
				width: 45vw;
			}
			div.items {
				margin-bottom: 5vw;
				display: flex;
				flex-direction: column;
				gap: 2vw;
			}
		}

		@media only screen and (max-width: 750px) {
		}
	}
`
