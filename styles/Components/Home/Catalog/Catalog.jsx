/* eslint-disable react/prop-types */
import styled from "styled-components"
import { Item } from "./Item"

const Container = styled.section`
	display: flex;
	gap: 4vw;
	flex-wrap: wrap;
	justify-content: center;
`

export const Catalog = ({ productList }) => {
	return (
		<Container>
			{productList.edges.map((product, index) => (
				<Item
					key={index}
					img={product.node.images.edges[0].node.transformedSrc}
					name={product.node.title}
					price={parseInt(product.node.priceRange.minVariantPrice.amount)}
				/>
			))}
		</Container>
	)
}
