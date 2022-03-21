import styled from "styled-components"
import { FontCollor } from "./Components/_Colors"

export const Main = styled.main`
	@media only screen and (min-width: 751px) {
		margin-top: 20vh;

		color: ${FontCollor};
		text-align: center;
		font-weight: 700;
		section.login {
			margin-bottom: 10vw;

			span {
				font-size: 5vw;
			}

			form {
				width: 70vw;
				padding-bottom: 5vw;

				display: flex;
				flex-direction: column;
				align-items: center;
				margin: auto;

				background-color: #e4d8d0;
				border-radius: 1vw;

				div {
					margin-bottom: 2vw;
					display: flex;
					margin-top: 5vw;
					gap: 1vw;
					flex-direction: column;

					input {
						border: 0px;
						width: 40vw;
						color: #493436;
						box-shadow: rgb(209 217 230) 2px 2px 4px inset,
							rgb(249 249 249) -2px -2px 4px inset;

						padding: 1vw 2vw 1vw 2vw;
						font-size: 1.7vw;
						border-radius: 1vw;

						:focus {
							box-shadow: 0 0 0 0;
							outline: 0;
						}
					}
				}
				button {
					border: 0px;
					background-color: #493436;
					color: white;

					width: 15vw;
					font-size: 2vw;
					padding: 1.5vw;
					border-radius: 3vw;

					display: flex;
					justify-content: center;
					margin: auto;
					margin-bottom: 2vw;

					transition: 100ms;

					:hover {
						cursor: pointer;
						background-color: #846c65;
					}
				}

				a {
					color: #493436;
					font-weight: 400;
					font-size: 1.5vw;
					transition: 500ms;

					:hover {
						color: #846c65;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 750px) {
		&.register {
			margin-top: 20vh;
		}

		margin-top: 30vh;

		color: ${FontCollor};
		text-align: center;
		font-weight: 700;

		section.login {
			margin-bottom: 50vw;

			span {
				font-size: 12vw;
			}

			form {
				width: 90vw;

				display: flex;
				flex-direction: column;
				align-items: center;
				margin: auto;

				background-color: #e4d8d0;
				border-radius: 1vw;

				div {
					margin-bottom: 10vw;
					display: flex;
					margin-top: 5vw;
					gap: 2vw;
					flex-direction: column;

					input {
						border: 0px;
						width: 70vw;
						color: #493436;
						box-shadow: rgb(209 217 230) 2px 2px 4px inset,
							rgb(249 249 249) -2px -2px 4px inset;

						padding: 4vw;
						font-size: 5vw;
						border-radius: 1vw;

						:focus {
							box-shadow: 0 0 0 0;
							outline: 0;
						}
					}
				}
				button {
					border: 0px;
					background-color: #493436;
					color: white;

					width: 50vw;
					font-size: 8vw;
					padding: 1.5vw;
					border-radius: 3vw;

					display: flex;
					justify-content: center;
					margin: auto;

					transition: 100ms;

					:hover {
						cursor: pointer;
						background-color: #846c65;
					}
				}

				a {
					margin-top: 10vw;
					margin-bottom: 4vw;
					color: #493436;
					font-weight: 400;
					font-size: 4vw;
					transition: 500ms;

					:hover {
						color: #846c65;
					}
				}
			}
		}
	}
`

// eslint-disable-next-line react/prop-types
export const Loading = ({ isLoading }) => {
	return (
		<Container isLoading={isLoading}>
			<div>
				<img src="/loading.svg" alt="carregando" />
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: ${(props) => {
		if (props.isLoading) {
			return "flex"
		}
		if (!props.isLoading) {
			return "none"
		}
	}};
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;

	align-items: center;
	justify-content: center;

	div {
		background-color: #e4d8d0;

		width: 20vw;
		height: 30vh;
		padding: 5vw;

		display: flex;
		margin: auto;
		margin-top: 19vh;
		justify-content: center;

		border-radius: 1vw;
		box-shadow: #ecd0b4 0px 0px 30px;

		z-index: 3;

		img {
			width: 20vw;
		}
	}
`
