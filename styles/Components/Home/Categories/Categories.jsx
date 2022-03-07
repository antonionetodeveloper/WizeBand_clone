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
		margin: 5vw 0vw 5vw 0vw;

		div {
			display: flex;
			justify-content: center;
			margin: 2vw;
		}
	}
`
