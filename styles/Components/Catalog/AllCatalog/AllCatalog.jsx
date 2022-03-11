import React from "react"
import styled from "styled-components"
import { Item } from "./Item"

export const AllCatalog = () => {
	const productList = [
		{
			imgUrl: "/home/catalog/clock1.png",
			name: "nome",
			value: 45,
		},
		{
			imgUrl: "/home/catalog/clock1.png",
			name: "nome",
			value: 45,
		},
		{
			imgUrl: "/home/catalog/clock1.png",
			name: "nome",
			value: 45,
		},
		{
			imgUrl: "/home/catalog/clock1.png",
			name: "nome",
			value: 45,
		},
		{
			imgUrl: "/home/catalog/clock1.png",
			name: "nome",
			value: 45,
		},
	]

	return (
		<Container>
			{productList.map((product, index) => (
				<Item
					key={index}
					img={product.imgUrl}
					name={product.name}
					price={product.value.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				/>
			))}
		</Container>
	)
}

export const Container = styled.div`
	& {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 5vw;
		margin: 2vw;
	}
`
