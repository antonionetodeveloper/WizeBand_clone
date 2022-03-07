import styled from "styled-components"
import { Item } from "./Item"

export const Reviews = () => {
	return (
		<Container>
			<Item
				srcImage={"/home/reviews/review1/review.jpg"}
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

const Container = styled.section``
