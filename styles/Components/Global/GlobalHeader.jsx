import HeaderHook from "./HeaderHook"
import styled from "styled-components"
import { useState } from "react"

export const GlobalHeader = () => {
	const [isMobileMenuVisible, setisMobileMenuVisible] = useState(false)

	return (
		<Container isVisible={isMobileMenuVisible}>
			<div>
				<section>
					<img
						src="/menu_mobile.png"
						alt="menu"
						className="menu"
						onClick={() => {
							setisMobileMenuVisible(true)
						}}
					/>
					<div className="logo">
						<img src="/logo.png" alt="logo" />
						<h1>Site 2 It</h1>
					</div>
					<div className="desktop_Contaniner">
						<a href="/login/entrar">
							<img
								src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
								alt="user"
							/>
						</a>
						<a href="/carrinho">
							<img
								src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-cart-ecommerce-icongeek26-outline-icongeek26.png"
								alt="carrinho"
								className="cart"
							/>
						</a>
					</div>
				</section>
				<nav className="mobileNav">
					<img
						src="https://img.icons8.com/ios/100/000000/delete-sign--v1.png"
						onClick={() => {
							setisMobileMenuVisible(false)
						}}
					/>
					<div>
						<a href="/">Home</a>
						<a href="/loja/catalogo">Catálogo</a>
						<a href="/loja/couro">Faixas de Couro</a>
						<a href="/loja/nylon">Faixas de Náilon</a>
						<a href="/loja/silicone">Faixas de Silicone</a>
						<a href="/loja/metal">Faixas de Time</a>
						<a href="/loja/acessorios">Acessórios</a>
						<a href="/pedido">Acompanhar Pedido</a>
						<a href="/contato">Contate-nos</a>
					</div>
					<div>
						<a href="/login/entrar">Entrar</a>
						<a href="/login/registro">Registrar</a>
					</div>
				</nav>
			</div>
			<nav>
				<HeaderHook name={"Home"} to={"/"} />
				<HeaderHook name={"Catálogo"} to={"/loja/catalogo"} />
				<HeaderHook name={"Faixas de Couro"} to={"/loja/couro"} />
				<HeaderHook name={"Faixas de Náilon"} to={"/loja/nylon"} />
				<HeaderHook name={"Faixas de Silicone"} to={"/loja/silicone"} />
				<HeaderHook name={"Faixas de Time"} to={"/loja/times"} />
				<HeaderHook name={"Acessórios"} to={"/loja/acessorios"} />
				<HeaderHook name={"Acompanhar pedido"} to={"/pedido"} />
				<HeaderHook name={"Contate-nos"} to={"/contato"} />
			</nav>
		</Container>
	)
}

const Container = styled.header`
	@media only screen and (min-width: 751px) {
		& {
			width: 100%;
			height: 20vh;
			position: fixed;
			top: 0px;
			background-color: #fff;
			z-index: 2;

			display: flex;
			flex-direction: column;
			justify-content: space-between;

			div {
				display: flex;
				flex-direction: column;
				margin-top: 1.5vw;

				section {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;

					.menu {
						display: none;
					}

					.logo {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 42vw;

						h1{
							font-size: 4vw;
							margin: 0px;
							color: #493436;
						}

						img {
							width: 5vw;
							margin: 0px;

						}
						:hover {
							cursor: pointer;
						}
					}

					div {
						display: flex;
						flex-direction: row;
						align-items: center;
						gap: 1vw;
						margin-top: 0px;

						img {
							width: 3vw;
							margin: 0px;

							:hover {
								cursor: pointer;
							}
						}
					}
					.desktop_Contaniner{
						position: absolute;
						left: 85vw;
					}
				}

				.mobileNav {
					display: none;
				}
			}

			nav {
				display: flex;
				flex-direction: row;
				justify-content: center;
				flex-wrap: wrap;
				align-items: center;
				row-gap: 2vw;
				column-gap: 0px;
				position: relative;
				top: -1vw;
			}
		}
	}

	@media only screen and (max-width: 750px) {
		& {
			box-shadow: 0px 2px 1vw rgba(0, 0, 0, 0.3);

			width: 100%;
			height: 15vh;
			position: fixed;
			top: 0px;
			background-color: #fff;
			z-index: 2;

			display: flex;
			justify-content: center;
			align-items: center;

			}

			div {
				section {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;

					width: 100vw;

					.menu {
						width: 8vw;
						margin: 0px;
						position: relative;
						left: 3.5vw;
						display: flex;
						justify-content: initial;
					}

					img {
						display: flex;
						width: 60vw;
						margin: auto;
						justify-content: center;
						align-items: center;
						position: relative;
						left: 8vw;

						:hover {
							cursor: pointer;
						}
					}

					div {
						display: flex;
						flex-direction: row;
						align-items: center;
						gap: 1vw;
						margin-top: 0px;
						margin-right: 10vw;

						.cart {
							display: flex;
							width: 10vw;
						}

						img {
							display: none;

							:hover {
								cursor: pointer;
							}
						}
					}
				}
			}

			.mobileNav {
				display: ${(props) => (props.isVisible ? "flex" : "none")};
				gap: 10vw;
				flex-direction: column;
				z-index: 3;
				background-color: white;

				height: 180vh;
				margin-top: 65vh;

				justify-content: center;

				img {
					display: flex;
					margin-left: auto;
					margin-right: 5vw;
					width: 15vw;

					position: relative;
					top: 5vw;
				}

				div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 1vw;
					a {
						text-decoration: none;
						font-size: 6vw;
						color: #604648;
					}
				}
			}
			nav {
				display: none;
			}
		}
	}
`
