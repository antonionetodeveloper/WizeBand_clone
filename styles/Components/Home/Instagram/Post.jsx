/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Post = (props) => {
	return (
		<Container background={props.imageSrc}>
			<div>
				<img src="https://img.icons8.com/ios-glyphs/60/ffffff/like--v1.png" />
				<span>{props.likes}</span>
			</div>
		</Container>
	)
}

const Container = styled.div`
	& {
		@media only screen and (min-width: 751px) {
			background-image: url(${(props) => props.background});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;

			width: 15vw;
			height: 15vw;

			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			position: relative;

			transition: 0.2s;

			:hover {
				cursor: pointer;
				box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, 0.3);
				div {
					display: flex;
				}
			}

			div {
				display: none;
				align-items: center;

				margin: 1vw;

				img {
					width: 3vw;
				}
				span {
					color: #fff;
				}
			}
		}

		@media only screen and (max-width: 750px) {
			background-image: url(${(props) => props.background});
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;

			width: 30vw;
			height: 30vw;

			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			position: relative;

			transition: 0.2s;

			:hover {
				cursor: pointer;
				box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, 0.3);
				div {
					display: flex;
				}
			}

			div {
				display: none;
				align-items: center;

				margin: 1vw;

				img {
					width: 3vw;
				}
				span {
					color: #fff;
				}
			}
		}
	}
`
