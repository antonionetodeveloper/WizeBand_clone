import Head from "next/head"

import { Main } from "../styles/Track.js"

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
				<span className="title">Acompanhe seu pedido aqui!</span>
				<section className="container">
					<form action="">
						<span>email/celular</span>
						<input type="text" placeholder="email@email.com/+55(79)..." />
						<span>Numero de pedido</span>
						<input type="text" placeholder="exemplo: 1001" />
						<button>Acompanhar</button>
					</form>
					<form action="">
						<span>Seu numero de pedido</span>
						<input type="text" placeholder="ex: 254235412" />
						<button>Acompanhar</button>
					</form>
				</section>

				<Footer />
			</Main>
		</>
	)
}
