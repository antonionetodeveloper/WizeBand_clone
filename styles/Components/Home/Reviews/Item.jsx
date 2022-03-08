/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Item = (props) => {
	return (
		<Container>
			<img src={props.srcImage} alt="review" />
			<span>{props.nameInitials}</span>
			<div>
				<p>{props.name}</p>
				<p>{props.date}</p>
				<p>{props.text}</p>
			</div>
		</Container>
	)
}

const Container = styled.div`
	& {
		width: 20vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

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
		}
	}
`
