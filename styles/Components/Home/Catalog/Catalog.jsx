/* eslint-disable react/prop-types */
import Link from "next/link"
import styled from "styled-components"
import { Item } from "./Item"

const Container = styled.section`
	display: flex;
	gap: 4vw;
	row-gap: 0px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	a {
		color: #604648;
		text-decoration: none;
	}
`

export const Catalog = ({ productList }) => {
	return (
		<Container>
			{productList.edges.map((product, index) => {
				//Remove especial characters
				let Title = product.node.title
				Title = Title.toLowerCase()
				Title = Title.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a")
				Title = Title.replace(new RegExp("[ÉÈÊ]", "gi"), "e")
				Title = Title.replace(new RegExp("[ÍÌÎ]", "gi"), "i")
				Title = Title.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o")
				Title = Title.replace(new RegExp("[ÚÙÛ]", "gi"), "u")
				Title = Title.replace(new RegExp("[Ç]", "gi"), "c")
				Title = Title.replace(" ", "-")
				Title = Title.replace(" ", "-")
				Title = Title.replace(" ", "-")
				Title = Title.replace(" ", "-")
				Title = Title.replace(" ", "-")
				Title = Title.replace(" ", "-")

				return (
					<Link href={"/loja/" + Title} key={Title}>
						<a>
							<Item
								key={index}
								img={product.node.images.edges[0].node.transformedSrc}
								name={product.node.title}
								price={parseInt(
									product.node.priceRange.minVariantPrice.amount,
								)}
							/>
						</a>
					</Link>
				)
			})}
		</Container>
	)
}
