import { useContext } from "react"
import Head from "next/head"

import { Main } from "../styles/Cart"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"

import { CartContext } from "../contexts/Cart"

export default function Home() {
	const { CartList } = useContext(CartContext)
	console.log(CartList)

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main></Main>

			<Footer />
		</>
	)
}
