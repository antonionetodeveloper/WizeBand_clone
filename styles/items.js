import styled from "styled-components"

export const Main = styled.main`
	& {
		@media only screen and (min-width: 751px) {
			color: #604648;
			margin-top: 25vh;

			min-height: 75vh;

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5vw;
			flex-direction: row;

			img {
				width: 40vw;
				display: flex;
				height: 30vw;

				-moz-transition: all 0.3s;
				-webkit-transition: all 0.3s;
				transition: all 0.3s;

				:hover {
					-moz-transform: scale(1.1);
					-webkit-transform: scale(1.1);
					transform: scale(1.1);
				}
			}

			div {
				width: 40vw;
				display: flex;
				flex-direction: column;
				align-items: center;

				h3 {
					font-size: 4vw;
					margin: 0px;
					text-align: center;
				}

				span {
					margin-top: 2vw;
					font-size: 2vw;
				}

				button {
					border: 0px;
					color: white;
					width: 30vw;

					border-radius: 5vw;
					font-size: 2vw;
					padding: 1vw;
					background-color: #604648;

					:hover {
						cursor: pointer;
						background-color: #7d5c5e;
					}
				}

				p.outOfStock {
					text-align: center;
					width: 40vw;
				}

				p {
					width: 40vw;
				}
			}
		}

		@media only screen and (max-width: 750px) {
			color: #604648;
			margin-top: 20vh;

			min-height: 75vh;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 5vw;

			img {
				width: 80vw;
				height: 60vw;
				display: flex;
				align-items: center;

				-moz-transition: all 0.3s;
				-webkit-transition: all 0.3s;
				transition: all 0.3s;

				:hover {
					-moz-transform: scale(1.1);
					-webkit-transform: scale(1.1);
					transform: scale(1.1);
				}
			}

			div {
				width: 90vw;
				display: flex;
				flex-direction: column;
				align-items: center;

				h3 {
					font-size: 9vw;
					margin: 0px;
					text-align: center;
				}

				span {
					margin-top: 5vw;
					font-size: 7vw;
				}

				button {
					border: 0px;
					color: white;
					width: 80vw;

					border-radius: 10vw;
					font-size: 6vw;
					padding: 5vw;
					background-color: #604648;

					:hover {
						cursor: pointer;
						background-color: #7d5c5e;
					}
				}

				p.outOfStock {
					text-align: center;
					width: 90vw;
				}

				p {
					width: 90vw;
					text-align: justify;
				}
			}
		}
	}
`
