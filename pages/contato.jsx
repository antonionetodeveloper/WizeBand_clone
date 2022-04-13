import { useRef, useState } from "react"
import Head from "next/head"

import emailjs from "emailjs-com"

import { Main } from "../styles/Contact.js"

import { GlobalHeader as Header } from "../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../styles/Components/Global/GlobalFooter"

export default function Catalog() {
	const form = useRef()
	const [email, setEmail] = useState("")
	const [content, setContent] = useState("")

	async function sendEmail() {
		if (email != "" && content != "") {
			await emailjs
				.sendForm(
					"gmailMessage",
					"template_u6lz4uc",
					form.current,
					"user_4aLlx0n2ziH8uqNDSxDHx",
				)
				.then(
					() => {
						alert("Email enviado com sucesso.")
					},
					() => {
						alert("Não foi possível enviar o email")
						location.reload()
					},
				)
		} else {
			alert("Por favor, preencha os dados adequadamente.")
		}
	}
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

				<form action="" ref={form} className="form">
					<input
						type="name"
						placeholder="Seu email"
						name="name"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className="input"
					/>
					<textarea
						name="message"
						placeholder="Escreva algo.."
						value={content}
						onChange={(e2) => setContent(e2.target.value)}
						className="textarea"
					/>
					<button
						type="button"
						onClick={() => {
							sendEmail()
						}}
						className="button"
					>
						Enviar
					</button>
				</form>

				<Footer />
			</Main>
		</>
	)
}
