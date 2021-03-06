/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Item = (props) => {
	return (
		<Container>
			<img src={props.img} alt="item" />
			<div>
				<h6>{props.name}</h6>
				<p>
					{props.price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</p>
			</div>
		</Container>
	)
}

const Container = styled.div`
	& {
		@media only screen and (min-width: 751px) {
			width: 20vw;
			height: 30vw;

			display: flex;
			flex-direction: column;
			align-items: center;
			overflow: hidden;

			img {
				width: 15vw;
				height: 15vw;
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

		@media only screen and (max-width: 750px) {
			width: 40vw;
			height: 60vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow: hidden;

			img {
				width: 40vw;
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
				h6,
				p {
					text-align: center;
					margin: 0px;
				}

				h6 {
					font-size: 6vw;
					font-weight: 600;
				}
			}

			:hover {
				cursor: pointer;
			}
		}
	}
`
