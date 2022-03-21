/* eslint-disable react/prop-types */
import { storeFront } from "../../shop/utils"

import { Main } from "../../styles/items"
import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

export async function getStaticPaths() {
	const { data } = await storeFront(gql`
		{
			products(first: 6) {
				edges {
					node {
						handle
					}
				}
			}
		}
	`)

	return {
		paths: data.products.edges.map((product) => ({
			params: { handle: product.node.handle },
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const { data } = await storeFront(singleQuery, { handle: params.handle })

	return {
		props: {
			product: data.productByHandle,
		},
	}
}

const gql = String.raw
const singleQuery = gql`
	query SingleProduct($handle: String!) {
		productByHandle(handle: $handle) {
			title
			description
			tags
			availableForSale
			priceRange {
				minVariantPrice {
					amount
				}
			}
			images(first: 1) {
				edges {
					node {
						transformedSrc
						altText
					}
				}
			}
		}
	}
`

export default function Item({ product: singleProduct }) {
	return (
		<>
			<Header />

			<Main>
				<img
					src={singleProduct.images.edges[0].node.transformedSrc}
					alt="produto"
				/>
				<div>
					<h3>{singleProduct.title}</h3>
					<span>
						{parseInt(
							singleProduct.priceRange.minVariantPrice.amount,
						).toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
					{singleProduct.availableForSale ? (
						<button onClick={() => {}}>Adicionar ao carrinho</button>
					) : (
						<p className="outOfStock">Item fora de estoque</p>
					)}
					<p>{singleProduct.description}</p>
				</div>
			</Main>

			<Footer />
		</>
	)
}
