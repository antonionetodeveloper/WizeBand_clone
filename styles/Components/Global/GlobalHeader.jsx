import HeaderHook from "./HeaderHook"
import styled from "styled-components"
import { useState } from "react"

export const GlobalHeader = () => {
	const [isMobileMenuVisible, setisMobileMenuVisible] = useState(false)

	return (
		<Container isVisible={isMobileMenuVisible}>
			<h1>WizeBand</h1>
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
					<img
						src="//cdn.shopify.com/s/files/1/0091/1969/4914/files/R_WizeBand_Metal_Gold_TRANSPARENT_7674fe0e-67e2-4645-830b-7992beba77bc_256x.png?v=1638369771"
						alt="logo"
					/>
					<div className="desktop_Contaniner">
						<a href="/login/entrar">
							<img
								src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
								alt="user"
							/>
						</a>
						<a href="#">
							<img
								src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
								alt="search"
							/>
						</a>
						<a href="#">
							<img
								src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-dollar-money-currency-those-icons-lineal-those-icons-3.png"
								alt="moeda"
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
						<a href="/loja/metal">Faixas de Metal</a>
						<a href="/loja/acessorios">Acessórios</a>
						<a href="/pedido">Acompanhar Pedido</a>
						<a href="/contato">Contate-nos</a>
					</div>
					<div>
						<a href="/login/entrar">Entrar</a>
						<a href="/login/registro">Registrar</a>
						<a href="#">Proucurar</a>
					</div>
				</nav>
			</div>
			<nav>
				<HeaderHook name={"Home"} to={"/"} />
				<HeaderHook name={"Catálogo"} to={"/loja/catalogo"} />
				<HeaderHook name={"Faixas de Couro"} to={"/loja/couro"} />
				<HeaderHook name={"Faixas de Náilon"} to={"/loja/nylon"} />
				<HeaderHook name={"Faixas de Silicone"} to={"/loja/silicone"} />
				<HeaderHook name={"Faixas de Metal"} to={"/loja/metal"} />
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

			h1 {
				display: none;
			}

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

					img {
						margin: auto;
						margin-left: 40vw;

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
						margin-right: 3vw;

						img {
							width: 3vw;
							margin: 0px;

							:hover {
								cursor: pointer;
							}
						}
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

			h1 {
				display: none;
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
