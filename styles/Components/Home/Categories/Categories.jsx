import styled from "styled-components"
import { Category } from "./Category"

export const Categories = () => {
	return (
		<Container>
			<h2>Escolha por categoria</h2>
			<div>
				<Category srcImage={"/home/categories/metal_band.jpg"} to={"/"} />
				<Category srcImage={"/home/categories/metal_band.jpg"} to={"/"} />
				<Category srcImage={"/home/categories/metal_band.jpg"} to={"/"} />
				<Category srcImage={"/home/categories/metal_band.jpg"} to={"/"} />
			</div>
		</Container>
	)
}

const Container = styled.section`
	& {
		@media only screen and (min-width: 751px) {
			margin: 5vw 0vw 5vw 0vw;

			div {
				display: flex;
				justify-content: center;
				margin: 2vw;
			}
		}

		@media only screen and (max-width: 750px) {
			margin: 5vw 0vw 5vw 0vw;

			h2 {
				font-size: 8vw;
			}

			div {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				margin: 2vw;
			}
		}
	}
`
