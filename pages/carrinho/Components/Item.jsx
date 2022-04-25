import { useEffect, useState } from "react"
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
export default function Item({ title, price, img }) {
	const [cartList, setCartList] = useState([])
	useEffect(() => {
		const cartListJson = JSON.parse(localStorage.getItem("CART"))
		setCartList((preventState) => [...preventState, cartListJson])
	}, [])

	function removeItemHandle() {
		cartList.map(
			(storage) =>
				storage.map((product, index) => {
					{
						/* selecionar o item corretamente */
					}
					if (product.title == "camisa listrada azul legal") {
						storage.splice(index, 1)
					}
				}),
			location.reload(),
		)

		localStorage.setItem("CART", JSON.stringify(cartList))
	}

	return (
		<Container>
			<img src={img} alt="foto do produto" />
			<div>
				<h3>{title}</h3>
				<span>{price}</span>
			</div>
			<button
				onClick={() => {
					removeItemHandle()
				}}
			>
				-
			</button>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2vw;

	border: 1px solid;
	border-radius: 1vw;

	padding: 0.5vw;

	img {
		width: 20vw;
	}

	div {
		width: 20vw;
		h3 {
			font-size: 1.7vw;
		}
		span {
			font-size: 1.4vw;
		}
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 2.5vw;
		height: 2.5vw;

		border: 0px;
		clip-path: circle(50% at 50% 50%);

		background-color: red;
		color: white;
		font-size: 3vw;

		:hover {
			cursor: pointer;
		}
	}
`
