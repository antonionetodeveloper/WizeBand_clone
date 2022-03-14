import styled from "styled-components"

export const GlobalFooter = () => {
	return (
		<Container>
			<div className="qualities">
				<div>
					<img
						src="https://img.icons8.com/ios-filled/100/000000/airplane-mode-on.png"
						alt="icon"
					/>
					<div>
						<h4>FRETE INTERNACIONAL GRATUITO</h4>
						<span>Com rastreamento ao vivo e atualizações.</span>
					</div>
				</div>
				<div>
					<img
						src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-credit-card-fintech-kmg-design-detailed-outline-kmg-design-2.png"
						alt="icon"
					/>
					<div>
						<h4>GARANTIA DE 100% DO DINHEIRO DE VOLTA</h4>
						<span>Sempre faremos o certo para você.</span>
					</div>
				</div>
				<div>
					<img
						src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-email-notifications-justicon-lineal-justicon.png"
						alt="icon"
					/>
					<div>
						<h4>SUPORTE AO CLIENTE EM TEMPO ÚTIL</h4>
						<span>Estamos prontos para servir e ajudar.</span>
					</div>
				</div>
				<div>
					<img
						src="https://img.icons8.com/ios/100/000000/calendar--v1.png"
						alt=""
					/>
					<div>
						<h4>DEVOLUÇÕES E REEMBOLSOS FÁCEIS DE 60 DIAS</h4>
						<span>
							Basta entrar em contato com nossa equipe de suporte.
						</span>
					</div>
				</div>
			</div>
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
					<a href="#">
						<img src="/home/icons/facebook.svg" alt="facebook" />
					</a>
					<a href="#">
						<img src="/home/icons/instagram.svg" alt="instagram" />
					</a>
					<a href="#">
						<img src="/home/icons/pinterest.svg" alt="pinterest" />
					</a>
					<a href="#">
						<img src="/home/icons/twitter.svg" alt="twitter" />
					</a>
					<a href="#">
						<img src="/home/icons/youtube.svg" alt="youtube" />
					</a>
					<a href="#">
						<img src="/home/icons/tiktok.svg" alt="tiktok" />
					</a>
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
		@media only screen and (min-width: 751px) {
			background-color: #e4d8d0;
			color: #493436;

			div.qualities {
				background-image: url("https://cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_375x.jpg?v=1633437640%20375w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_410x.jpg?v=1633437640%20410w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_520x.jpg?v=1633437640%20520w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_576x.jpg?v=1633437640%20576w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_768x.jpg?v=1633437640%20768w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_992x.jpg?v=1633437640%20992w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_1024x.jpg?v=1633437640%201024w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_1280x.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
				background-attachment: fixed;

				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				gap: 5vw;

				padding: 4vw;

				div {
					display: flex;
					align-items: center;
					gap: 1vw;

					width: 20vw;
					flex-direction: row;
					img {
						width: 4vw;
						height: 4vw;
					}

					div {
						display: flex;
						flex-direction: column;

						h4,
						span {
							margin: 0px;
							line-height: 1.2vw;
						}

						h4 {
							font-size: 1.2vw;
						}
						span {
							font-size: 1.1vw;
							font-weight: 200;
						}
					}
				}
			}

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
					margin-left: 1vw;
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

		@media only screen and (max-width: 750px) {
			background-color: #e4d8d0;
			color: #493436;

			div.qualities {
				background-image: url("https://cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_375x.jpg?v=1633437640%20375w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_410x.jpg?v=1633437640%20410w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_520x.jpg?v=1633437640%20520w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_576x.jpg?v=1633437640%20576w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_768x.jpg?v=1633437640%20768w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_992x.jpg?v=1633437640%20992w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_1024x.jpg?v=1633437640%201024w,//cdn.shopify.com/s/files/1/0091/1969/4914/files/VaiksemAdobeStock_272499478_1280x.jpg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
				background-attachment: fixed;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 15vw;

				padding: 4vw;

				div {
					display: flex;
					align-items: center;
					gap: 1vw;

					width: 80vw;
					img {
						width: 20vw;
						height: 20vw;
					}

					div {
						display: flex;
						flex-direction: column;

						h4,
						span {
							margin: 0px;
							line-height: 5vw;
						}

						h4 {
							font-size: 5vw;
						}
						span {
							font-size: 4vw;
							font-weight: 200;
						}
					}
				}
			}

			div.Container_top,
			div.Container_bottom {
				display: flex;
				flex-direction: column;
				gap: 15vw;
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
					margin-left: 1vw;
					img {
						display: flex;
						margin: auto;
						width: 70vw;
						:hover {
							cursor: pointer;
						}
					}
				}
				div.subscribe {
					p {
						margin-top: 1.5vw;
						font-size: 4vw;
						font-weight: 600;
						text-align: center;
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
							font-size: 5vw;

							width: 50vw;

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
							font-size: 5vw;

							padding: 3vw 3vw 3vw 2vw;

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
					text-align: center;

					a {
						color: #493436;
					}

					p {
						display: flex;
						margin: auto;
						margin-top: 5vw;
						font-weight: 300;
						font-size: 4vw;
						width: 80vw;
					}
				}

				div.list {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: #493436;

					ul {
						padding-inline-start: 1vw;

						li {
							font-size: 4vw;
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
				flex-direction: column;
				justify-content: center;
				align-items: center;

				div {
					width: 90vw;

					img {
						width: 15vw;
					}

					p {
						font-size: 3vw;
						font-weight: 200;
						text-align: justify;
					}
				}
			}
		}
	}
`
