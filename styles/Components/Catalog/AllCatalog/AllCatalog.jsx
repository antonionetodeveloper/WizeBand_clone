/* eslint-disable react/prop-types */
import Link from "next/link"
import styled from "styled-components"

import { Item } from "./Item"

const Container = styled.div`
	& {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 5vw;

		margin-top: 10vh;
		margin-bottom: 10vh;

		img {
			@media only screen and (min-width: 751px) {
				width: 20vw;
				height: 20vh;
			}
			@media only screen and (max-width: 750px) {
				width: 40vw;
				height: 40vw;
			}
		}

		a {
			color: #604648;
			text-decoration: none;
		}
	}
`

export default function AllCatalog({ productList, filter }) {
	return (
		<Container>
			{productList.edges.map((product, index) => {
				if (product.node.tags[0] == filter || filter == "all") {
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
									img={
										product.node.images.edges[0].node.transformedSrc
									}
									name={product.node.title}
									price={parseInt(
										product.node.priceRange.minVariantPrice.amount,
									)}
								/>
							</a>
						</Link>
					)
				}
			})}
		</Container>
	)
}
