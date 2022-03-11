import styled from "styled-components"
import { Post as Item } from "./Post"

export const Folder = () => {
	return (
		<Container>
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
			<Item imageSrc={"/home/instagram/insta1.jpg"} likes={50} />
		</Container>
	)
}

const Container = styled.section`
	& {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25vw;
		justify-content: center;
		align-items: center;
	}
`
