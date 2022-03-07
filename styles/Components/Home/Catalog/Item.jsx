/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Item = (props) => {
	return (
		<Container>
			<img src="/home/catalog/clock1.png" alt="item" /> {/*Funciona*/}
			<div>
				<h6>{props.name}</h6>
				<p>R$ {props.price}, 00</p>
			</div>
		</Container>
	)
}

const Container = styled.div`
	& {
		overflow: hidden;
		img {
			max-width: 15vw;
			-moz-transition: all 0.3s;
			-webkit-transition: all 0.3s;
			transition: all 0.3s;

			:hover {
				-moz-transform: scale(1.3);
				-webkit-transform: scale(1.3);
				transform: scale(1.3);
			}
		}

		div {
			margin-top: 2vw;

			h6,
			p {
				text-align: center;
				margin: 0px;
			}

			h6 {
				font-size: 2vw;
				font-weight: 600;
			}
		}

		:hover {
			cursor: pointer;
		}
	}
`
