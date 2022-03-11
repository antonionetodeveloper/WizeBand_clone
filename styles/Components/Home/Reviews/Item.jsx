/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Item = (props) => {
	return (
		<Container>
			<img src={props.srcImage} alt="review" />
			<span>{props.nameInitials}</span>
			<div>
				<p className="Name">{props.name}</p>
				<p>{props.date}</p>
				<p>{props.text}</p>
			</div>
		</Container>
	)
}

const Container = styled.div`
	& {
		@media only screen and (min-width: 751px) {
			width: 20vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			animation: moveSlideshow 120s linear infinite;
			@keyframes moveSlideshow {
				0% {
					transform: translate3d(calc(+100% - 100vw), 0, 0);
				}
				50% {
					transform: translate3d(calc(-100% + 100vw), 0, 0);
				}
				100% {
					transform: translate3d(calc(+100% - 100vw), 0, 0);
				}
			}

			img {
				width: 20vw;
			}

			span {
				width: 5vw;
				height: 5vw;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				top: -5vw;
				background-color: #e6e6e6;
				border-radius: 50%;
				font-family: serif;
				font-size: 2vw;
			}

			div {
				margin-top: -5vw;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;

				p {
					margin: 0.1vw;
				}
				.Name {
					margin-top: 1vw;
					font-size: 1.5vw;
				}
			}
		}

		@media only screen and (max-width: 750px) {
			width: 50vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			animation: moveSlideshow 120s linear infinite;
			@keyframes moveSlideshow {
				0% {
					transform: translate3d(calc(+100% - 100vw), 0, 0);
				}
				50% {
					transform: translate3d(calc(-100% + 100vw), 0, 0);
				}
				100% {
					transform: translate3d(calc(+100% - 100vw), 0, 0);
				}
			}

			img {
				width: 50vw;
			}

			span {
				width: 10vw;
				height: 10vw;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				top: -5vw;
				background-color: #e6e6e6;
				border-radius: 50%;
				font-family: serif;
				font-size: 4vw;
			}

			div {
				margin-top: -5vw;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;

				p {
					margin: 0.1vw;
				}
				.Name {
					margin-top: 1vw;
					margin-bottom: 5vw;
					font-size: 6vw;
				}
			}
		}
	}
`
