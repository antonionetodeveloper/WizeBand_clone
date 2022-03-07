import styled from "styled-components"

export const GlobalFooter = () => {
	return (
		<Container>
			<div className="Container_top">
				<div className="logo">
					<img
						src="//cdn.shopify.com/s/files/1/0091/1969/4914/files/R_WizeBand_Taupe_TRANSPARENT_400x.png?v=1638370040"
						alt="logo"
					/>
				</div>
				<div className="subscribe">
					<p>Inscreva-se para ofertas especiais e sorteios grátis</p>
					<div>
						<input type="text" placeholder="Seu email" />
						<button>INSCREVER</button>
					</div>
				</div>
				<div className="contact">
					<h3>Contate-nos:</h3>
					<a href="#">email@email.com</a>
					<p>
						(para devoluções entre em contato conosco) HORÁRIO DE
						ATENDIMENTO AO CLIENTE: Segunda a Sexta das 8h00 às 19h00
					</p>
				</div>
				<div className="list">
					<h3>PAGES:</h3>
					<ul>
						<li>Contato</li>
						<li>Sobre Nós</li>
						<li>FAQ</li>
						<li>Use e Cuide</li>
						<li>Tutorias</li>
						<li>Envio de FAQ</li>
						<li>Políticas de Reembolso</li>
						<li>Termos de Serviços</li>
						<li>Políticas de Privacidade</li>
						<li>Avaliações</li>
						<li>Acompanhar Pedido</li>
					</ul>
				</div>
			</div>
			<div className="Container_bottom">
				<div>
					<img src="/home/icons/facebook.svg" alt="facebook" />
					<img src="/home/icons/instagram.svg" alt="instagram" />
					<img src="/home/icons/twitter.svg" alt="twitter" />
					<img src="/home/icons/youtube.svg" alt="youtube" />
					<img src="/home/icons/tiktok.svg" alt="tiktok" />
					<img src="/home/icons/pinterest.svg" alt="pinterest" />
				</div>
				<div>
					<p>
						© 2021 ... ® é uma marca registrada da ... Todas as marcas
						comerciais são de propriedade de seus respectivos
						proprietários. Vendemos ... de ... de terceiros para uso com
						seu próprio ... Não vendemos nem incluímos quaisquer produtos
						fabricados ou autorizados pela ...
					</p>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.footer`
	& {
		height: 70vh;
		background-color: #e4d8d0;

		div.Container_top,
		div.Container_bottom {
			display: flex;
			gap: 2vw;
		}

		div.Container_top {
			padding-top: 2vw;

			p,
			h3 {
				margin-block-start: 0px;
				margin-top: 1.5vw;
			}

			div.logo {
				margin-top: 2vw;
				img {
					width: 20vw;
					:hover {
						cursor: pointer;
					}
				}
			}
			div.subscribe {
				p {
					margin-top: 1.5vw;
					font-size: 1.2vw;
					font-weight: 600;
					text-align: center;
					color: #493436;
					text-transform: uppercase;
				}

				div {
					display: flex;
					justify-content: center;

					input {
						border: 0px;
						border-top-left-radius: 5vw;
						border-top-right-radius: 0vw;
						border-bottom-right-radius: 0vw;
						border-bottom-left-radius: 5vw;

						text-align: center;
						font-size: 1.5vw;

						width: 15vw;

						:focus {
							box-shadow: 0 0 0 0;
							outline: 0;
						}
					}

					button {
						border: 0px;
						border-top-left-radius: 0vw;
						border-top-right-radius: 5vw;
						border-bottom-right-radius: 5vw;
						border-bottom-left-radius: 0vw;

						background-color: #493436;
						color: white;
						text-align: center;
						font-size: 1.5vw;

						padding: 1.5vw 1.5vw 1.5vw 1vw;

						transition: 0.2s;

						:hover {
							background-color: #846c65;
							cursor: pointer;
						}
					}
				}
			}

			div.contact {
				color: #493436;

				a {
					color: #493436;
				}

				p {
					font-weight: 300;
					font-size: 1.2vw;
					width: 20vw;
				}
			}

			div.list {
				color: #493436;

				ul {
					padding-inline-start: 1vw;

					li {
						font-size: 1.2vw;
						font-weight: 200;
						text-decoration: underline;

						:hover {
							font-weight: 400;
							cursor: pointer;
						}
					}
				}
			}
		}

		div.Container_bottom {
			display: flex;
			justify-content: center;
			align-items: center;

			div {
				width: 40vw;

				img {
					width: 5vw;
					transition: 500ms;

					:hover {
						cursor: pointer;
						width: 6vw;
					}
				}

				p {
					font-size: 1vw;
					font-weight: 200;
					text-align: justify;
				}
			}
		}
	}
`
