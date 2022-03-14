import Head from "next/head"

import { Main } from "../../styles/Catalog"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

import { AllCatalog } from "../../styles/Components/Catalog/AllCatalog/AllCatalog"

export default function Catalog() {
	const bands_length = "num"

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Main>
				<Header />

				<section className="first">
					<span>TODAS AS BANDAS ({bands_length})</span>
					<AllCatalog />
				</section>

				<Footer />
			</Main>
		</>
	)
}
