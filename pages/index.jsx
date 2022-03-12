import Head from "next/head"

import { Main } from "../styles/Home"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"

import { Carousel } from "../styles/Components/Carousel"
import { Categories } from "../styles/Components/Home/Categories/Categories"
import { Catalog } from "../styles/Components/Home/Catalog/Catalog"
import { Reviews } from "../styles/Components/Home/Reviews/Reviews"
import { Folder as Instagram } from "../styles/Components/Home/Instagram/Folder"

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

				<h2 className="reviews">Avaliações de clientes</h2>
				<Reviews />

				<h2 className="Instagram">Compre pelo instagram</h2>
				<Instagram />
			</Main>

			<Footer />
		</>
	)
}