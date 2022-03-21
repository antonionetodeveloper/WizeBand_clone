/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Head from "next/head"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

import { Main } from "../../styles/Catalog"

import { storeFront } from "../../shop/utils"
import AllCatalog from "../../styles/Components/Catalog/AllCatalog/AllCatalog"

export default function Catalog({ products }) {
	const filter = "all"
	const [productListLength, setProductListLength] = useState([])

	useEffect(() => {
		products.edges.map((product, index) => {
			setProductListLength((item) => [...item, index])
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
					<span>TODAS AS BANDAS ({productListLength.length})</span>
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
					id
					title
					handle
					availableForSale
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
