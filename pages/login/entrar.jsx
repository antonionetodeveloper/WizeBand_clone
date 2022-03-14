import Head from "next/head"

import { Main } from "../../styles/Login.js"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

export default function Catalog() {
	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Main>
				<Header />

				<section className="login">
					<span>Entrar</span>
					<form action="" onSubmit={() => {}}>
						<div>
							<input type="text" placeholder="Login" />
							<input type="text" placeholder="Senha" />
						</div>
						<button>Entrar</button>
						<a href="/login/registro">esqueci a senha</a>
						<a href="/login/registro">ainda não tenho uma conta</a>
					</form>
				</section>

				<Footer />
			</Main>
		</>
	)
}
