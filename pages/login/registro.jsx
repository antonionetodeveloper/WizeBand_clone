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

			<Main className="register">
				<Header />

				<section className="login">
					<span>Criar</span>
					<form action="" onSubmit={() => {}}>
						<div>
							<input type="text" placeholder="Nome" />
							<input type="text" placeholder="Login" />
							<input type="text" placeholder="Senha" />
							<input type="text" placeholder="Confirmar senha" />
						</div>
						<button>Criar conta</button>
						<a href="/login/entrar">já tenho uma conta</a>
					</form>
				</section>

				<Footer />
			</Main>
		</>
	)
}
