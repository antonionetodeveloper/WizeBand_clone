import Head from "next/head"

import { Main } from "./styles"
import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

export default function Home() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<p>oi</p>
			</Main>

			<Footer />
		</>
	)
}
