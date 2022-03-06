import HeaderHook from "./HeaderHook"
import styled from "styled-components"

export const GlobalHeader = () => {
	return (
		<Container>
			<div>
				<section>
					<img
						src="//cdn.shopify.com/s/files/1/0091/1969/4914/files/R_WizeBand_Metal_Gold_TRANSPARENT_7674fe0e-67e2-4645-830b-7992beba77bc_256x.png?v=1638369771"
						alt="logo"
					/>
					<div>
						<img
							src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
							alt="user"
						/>
						<img
							src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
							alt="search"
						/>
						<img
							src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-dollar-money-currency-those-icons-lineal-those-icons-3.png"
							alt="moeda"
						/>
						<img
							src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-cart-ecommerce-icongeek26-outline-icongeek26.png"
							alt="carrinho"
						/>
					</div>
				</section>
			</div>
			<nav>
				<HeaderHook name={"Home"} />
				<HeaderHook name={"Catálogo"} />
				<HeaderHook name={"Faixas de Couro"} />
				<HeaderHook name={"Faixas de Náilon"} />
				<HeaderHook name={"Faixas de Silicone"} />
				<HeaderHook name={"Faixas de Metal"} />
				<HeaderHook name={"Acessórios"} />
				<HeaderHook name={"Acompanhar pedido"} />
				<HeaderHook name={"Contate-nos"} />
			</nav>
		</Container>
	)
}

const Container = styled.header`
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
`
