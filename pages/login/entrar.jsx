import { useState } from "react"
import Head from "next/head"

import { Loading, Main } from "../../styles/Login.js"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

import Axios from "axios"
const url = "http://localhost:3000"

export default function Login() {
	const [isLoading, setIsLoading] = useState(false)
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	async function tryLogin() {
		if (login != "") {
			try {
				setIsLoading(true)
				const response = await Axios.post(
					"https://wbc-login-system.herokuapp.com/login",
					{
						recivedLogin: login,
						recivedPassword: password,
					},
				)
				document.querySelector(".loginInput").value = ""
				document.querySelector(".passInput").value = ""

				if (response.status == 201) {
					setIsLoading(false)
					window.location.href = url + "/perfil"
				} else {
					setIsLoading(false)
					alert("Usuário ou senha incorreta.")
				}
			} catch (error) {
				console.log(error)
			}
		} else {
			alert("Preencha os dados")
		}
	}

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<Loading isLoading={isLoading} />
				<section className="login">
					<span>Entrar</span>
					<form action="" onSubmit={() => {}}>
						<div>
							<input
								className="loginInput"
								type="text"
								placeholder="Login"
								onChange={(e) => setLogin(e.target.value)}
							/>
							<input
								className="passInput"
								type="password"
								placeholder="Senha"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button
							type="button"
							onClick={() => {
								tryLogin()
							}}
						>
							Entrar
						</button>
						<a href="/login/registro">ainda não tenho uma conta</a>
					</form>
				</section>
			</Main>

			<Footer />
		</>
	)
}
