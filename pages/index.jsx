import Head from "next/head"

import { Main } from "../styles/Home"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"

import { Carousel } from "../styles/Components/Carousel"
import { Categories } from "../styles/Components/Home/Categories/Categories"
import { Catalog } from "../styles/Components/Home/Catalog/Catalog"
import { Reviews } from "../styles/Components/Home/Reviews/Reviews"
import { Folder as Instagram } from "../styles/Components/Home/Instagram/Folder"
import { storeFront } from "../shop/utils"

// eslint-disable-next-line react/prop-types
export default function Home({ products }) {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<Carousel
					src1={"/home/carousel/banner2.jpg"}
					src2={"/home/carousel/banner1.jpg"}
					src3={"/home/carousel/banner3.jpg"}
				/>

				<Categories />

				<h2>Alguns items</h2>
				<Catalog productList={products} />

				<h2 className="reviews">Avaliações de clientes</h2>
				<Reviews />

				<h2 className="Instagram">Compre pelo instagram</h2>
				<Instagram />
			</Main>

			<Footer />
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
