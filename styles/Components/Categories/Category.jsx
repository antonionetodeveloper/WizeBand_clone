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
		width: 20vw;
		flex: none;
		overflow: hidden;

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
				border-radius: 1vw;
			}
		}
	}
`
