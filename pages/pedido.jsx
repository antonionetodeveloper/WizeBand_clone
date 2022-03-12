import Head from "next/head"

import { Main } from "../styles/Catalog.js"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"

export default function Catalog() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Main>
				<Header />

				<section className="first">
					<span>ACOMPANHE SEU PEDIDO</span>
				</section>

				<Footer />
			</Main>
		</>
	)
}