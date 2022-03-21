import { useState } from "react"
import Head from "next/head"

import { Loading, Main } from "../../styles/Login.js"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

import Axios from "axios"

export default function Register() {
	const [isLoading, setIsLoading] = useState(false)

	const [UserName, setName] = useState("")

	const [login, setLogin] = useState("")

	const [pass, setPass] = useState("")
	const [confirmPass, setConfirmPass] = useState("")

	let isPasswordTheSame = false

	async function tryRegister() {
		Register()

		async function chekPassword(password1, password2) {
			if (password1 === password2) {
				isPasswordTheSame = true
			} else {
				alert("As senhas não são iguais")
			}
		}

		async function Register() {
			await chekPassword(pass, confirmPass)

			if (isPasswordTheSame) {
				try {
					setIsLoading(true)
					const response = await Axios.post(
						"https://wbc-login-system.herokuapp.com/register",
						{
							name: UserName,
							login: login,
							password: pass,
						},
					)

					document.querySelector(".nameInput").value = ""
					document.querySelector(".loginInput").value = ""
					document.querySelector(".pass1Input").value = ""
					document.querySelector(".pass2Input").value = ""

					if (response.status == 201) {
						setIsLoading(false)
						alert("Conta criada com sucesso!")
						window.location.replace(
							"https://login-system-omega.vercel.app/dashboard",
						)
					} else {
						setIsLoading(false)
						alert(
							"Uma conta com esse login provavelmente já existe... Por favor, use outra.",
						)
					}
				} catch (error) {
					console.log(error)
				}
			}
		}
	}

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main className="register">
				<Loading isLoading={isLoading} />
				<section className="login">
					<span>Criar</span>
					<form action="" onSubmit={() => {}}>
						<div>
							<input
								className="nameInput"
								type="text"
								placeholder="Nome"
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								className="loginInput"
								type="text"
								placeholder="Login"
								onChange={(e) => setLogin(e.target.value)}
							/>
							<input
								className="pass1Input"
								type="password"
								placeholder="Senha"
								onChange={(e) => setPass(e.target.value)}
							/>
							<input
								className="pass2Input"
								type="password"
								placeholder="Confirmar senha"
								onChange={(e) => setConfirmPass(e.target.value)}
							/>
						</div>
						<button
							type="button"
							onClick={() => {
								tryRegister()
							}}
						>
							Criar conta
						</button>
						<a href="/login/entrar">já tenho uma conta</a>
					</form>
				</section>
			</Main>

			<Footer />
		</>
	)
}
