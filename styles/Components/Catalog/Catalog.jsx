import styled from "styled-components"
import { Item } from "./Item"

export const Catalog = () => {
	return (
		<Container>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
			<Item
				imgSrc={"/home/catalog/clock1.png"}
				name={"Item Teste"}
				price={"455"}
			/>
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	gap: 4vw;
	flex-wrap: wrap;
	justify-content: center;
`
