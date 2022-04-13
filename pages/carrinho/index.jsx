/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Head from "next/head"

import { Main } from "../../styles/Cart"
import { Item } from "./Components/Item"

import { GlobalHeader as Header } from "../../styles/Components/Global/GlobalHeader"
import { GlobalFooter as Footer } from "../../styles/Components/Global/GlobalFooter"

export default function Cart() {
	const [cartList, setCartList] = useState([])

	useEffect(() => {
		async function getCartInfo() {
			if (typeof window !== "undefined") {
				const cartListJson = await JSON.parse(localStorage.getItem("CART"))
				setCartList((preventState) => [...preventState, cartListJson])
			}
		}
		getCartInfo()
	}, [])

	return (
		<>
			<Head>
				<title>WizeBand</title>
			</Head>

			<Header />

			<Main>
				<div className="items">
					{cartList[0] ? ( //verificação se o indície 0 existe
						cartList[0][0].title ? ( //verifica se o intem 0 é vazio
							cartList.map((storage) =>
								storage.map((item, index) => {
									return (
										<Item
											key={index}
											title={item.title}
											price={parseInt(
												item.priceRange.minVariantPrice.amount,
											).toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}
											img={item.images.edges[0].node.transformedSrc}
										/>
									)
								}),
							)
						) : (
							<p>Selecione algum item</p>
						)
					) : (
						<p>Selecione algum item</p>
					)}
				</div>
				<div>
					<p>itens comprados</p>
				</div>
			</Main>

			<Footer />
		</>
	)
}
