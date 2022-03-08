import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Item } from "./Item"

export const Reviews = () => {
	const carousel = useRef(null)

	useEffect(() => {
		setInterval(() => {
			handleRightClick()
		}, 50)
	}, [])

	const handleRightClick = () => {
		carousel.current.scrollLeft += 1
	}

	return (
		<Container ref={carousel}>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/review.jpg"}
				nameInitials={"AF"}
				name={"Antônio Fernandes"}
				date={"24/01/2023"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
		</Container>
	)
}

const Container = styled.section`
	& {
		margin-top: 10vw;
		display: flex;
		justify-content: space-evenly;
		gap: 10vw;
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
`
