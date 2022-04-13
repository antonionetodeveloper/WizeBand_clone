import styled from "styled-components"
import { Item } from "./Item"

export const Reviews = () => {
	return (
		<Container>
			<Item
				srcImage={"/home/reviews/depoimento2.jpg"}
				nameInitials={"SA"}
				name={"Suzana Almeida"}
				date={"25/01/2022"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/depoimento3.jpg"}
				nameInitials={"RC"}
				name={"Ricardo Costa"}
				date={"24/01/2022"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/depoimento4.jpeg"}
				nameInitials={"EI"}
				name={"Eduardo Inácio"}
				date={"11/01/2022"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/depoimento5.jpeg"}
				nameInitials={"JA"}
				name={"José Almeida"}
				date={"04/01/2022"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
			<Item
				srcImage={"/home/reviews/depoimento6.jpg"}
				nameInitials={"PH"}
				name={"Paulo Henrique"}
				date={"02/01/2022"}
				text={
					"Eu amo esta pulseira de silicone porque se encaixa perfeitamente, especialmente em pulsos mais finos, é muito confortável ..."
				}
			/>
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	justify-content: space-evenly;
	gap: 10vw;
	overflow-x: hidden;
	scroll-behavior: smooth;
`
