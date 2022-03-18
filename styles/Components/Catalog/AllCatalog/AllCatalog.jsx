/* eslint-disable react/prop-types */
import styled from "styled-components"

import { Item } from "./Item"

const Container = styled.div`
	& {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 5vw;
		margin: 2vw;
	}
`

export default function AllCatalog({ productList, filter }) {
	return (
		<Container>
			{productList.edges.map((product, index) => {
				if (product.node.tags[0] == filter || filter == "all") {
					return (
						<Item
							key={index}
							img={product.node.images.edges[0].node.transformedSrc}
							name={product.node.title}
							price={parseInt(
								product.node.priceRange.minVariantPrice.amount,
							)}
						/>
					)
				}
			})}
		</Container>
	)
}
