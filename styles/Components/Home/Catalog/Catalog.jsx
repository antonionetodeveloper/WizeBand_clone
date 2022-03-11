import styled from "styled-components"
import { Item } from "./Item"

export const Catalog = () => {
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

const Container = styled.section`
	display: flex;
	gap: 4vw;
	flex-wrap: wrap;
	justify-content: center;
`
