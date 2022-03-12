import Head from "next/head"

import { Main } from "../styles/Contact.js"

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
					<span>CONTATO</span>
					<p>
						Estamos sempre aqui para atendê-lo. Adoraríamos ouvir sua
						comentários e pensamentos. Se você tiver alguma ideia, dúvida
						ou quer compartilhar uma foto conosco de você e seu favorito
						itens, entre em contato conosco! Para devoluções, reembolsos e
						outros problemas, envie-nos um e-mail. Você pode nos enviar um
						email para info@email.com, ligue para +55 numero de tel, ou
						use o formulário de contato abaixo!
					</p>
					<div>
						<p>
							ATENDIMENTO AO CLIENTE: Segunda a Sábado das 8h00 às 19h00
						</p>
						<a href="#">info@email.com</a>
						<p> +55 numero de tel</p>
						<p>Escritório Corporativo: Etsul Invest OÜ (LLC) Brasil</p>
					</div>
				</section>

				<form action="">
					<input type="text" placeholder="Seu Email" />
					<input type="text" name="" id="" placeholder="Sua dúvida" />
					<button type="submit">Enviar</button>
				</form>

				<Footer />
			</Main>
		</>
	)
}
