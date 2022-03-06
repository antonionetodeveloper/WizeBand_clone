import Head from "next/head"

import { Main } from "../styles/Home"
import { GlobalHeader as Header } from "../styles/Components/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/GlobalFooter"
import Carousel from "../styles/Components/Carousel"

export default function Home() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<Carousel />
			</Main>

			<Footer />
		</>
	)
}
