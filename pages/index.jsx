import Head from "next/head"

import { Main } from "../styles/Home"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"
import { Carousel } from "../styles/Components/Carousel"
import { Categories } from "../styles/Components/Categories/Categories"
import { Catalog } from "../styles/Components/Catalog/Catalog"

export default function Home() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<Carousel
					src1={"/home/carousel/ex.png"}
					src2={"/home/carousel/ex.png"}
					src3={"/home/carousel/ex.png"}
				/>

				<Categories />

				<h2>Todos os itens</h2>
				<Catalog />
			</Main>

			<Footer />
		</>
	)
}
