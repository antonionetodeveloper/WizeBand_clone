import Head from "next/head"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

export default function Home() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<main>
				<p>oi</p>
			</main>

			<Footer />
		</>
	)
}
