/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Head from "next/head"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

import { Main } from "../../styles/Catalog"

import { storeFront } from "../../shop/utils"
import AllCatalog from "../../styles/Components/Catalog/AllCatalog/AllCatalog"

export default function Catalog({ products }) {
	const filter = "silicone"
	const [productListLength, setProductListLength] = useState([])

	useEffect(() => {
		products.edges.map((product, index) => {
			if (product.node.tags[0] == filter) {
				setProductListLength((item) => [...item, index])
			}
		})
	}, [])

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Main>
				<Header />

				<section className="first">
					<span>FAIXAS DE SILICONE ({productListLength.length})</span>
					<AllCatalog productList={products} filter={filter} />
				</section>

				<Footer />
			</Main>
		</>
	)
}

export async function getStaticProps() {
	const { data } = await storeFront(QUERY)
	return {
		props: {
			products: data.products,
		},
	}
}
const gql = String.raw
const QUERY = gql`
	query Products {
		products(first: 10) {
			edges {
				node {
					title
					handle
					tags
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
		}
	}
`
