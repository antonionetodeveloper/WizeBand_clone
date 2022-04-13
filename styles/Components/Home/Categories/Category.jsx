/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Category = (props) => {
	return (
		<Container srcImage={props.srcImage}>
			<a href={props.to}>
				<img src={props.srcImage} alt="category" />
			</a>
		</Container>
	)
}

const Container = styled.div`
	& {
		@media only screen and (max-width: 750px) {
			width: 40vw;
			flex: none;
			border-radius: 1vw;

			a {
				-moz-transition: all 0.3s;
				-webkit-transition: all 0.3s;
				transition: all 0.3s;

				:hover {
					-moz-transform: scale(1.1);
					-webkit-transform: scale(1.1);
					transform: scale(1.1);
					cursor: pointer;
				}

				img {
					width: 40vw;
					border-radius: 1vw;
				}
			}
		}

		@media only screen and (min-width: 751px) {
			width: 20vw;
			flex: none;
			overflow: hidden;
			border-radius: 1vw;

			a {
				width: 30vw;
				-moz-transition: all 0.3s;
				-webkit-transition: all 0.3s;
				transition: all 0.3s;

				:hover {
					-moz-transform: scale(1.1);
					-webkit-transform: scale(1.1);
					transform: scale(1.1);
					cursor: pointer;
				}

				img {
					width: 20vw;
					height: 20vw;
					border-radius: 1vw;
				}
			}
		}
	}
`
