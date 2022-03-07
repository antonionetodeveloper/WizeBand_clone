/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"

export const Carousel = (props) => {
	const [seconds, setSeconds] = useState(0)
	const [slide, setSlide] = useState(1)

	useEffect(() => {
		setInterval(() => {
			setSeconds(event => event + 1)
    }, 1000)
	}, [])

	const carousel = useRef(null)

	const handleLeftClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

	const handleRightClick = (e) => {
		e.preventDefault()
		carousel.current.scrollLeft += carousel.current.offsetWidth
	}

	return (
		<Container>
			<button onClick={handleLeftClick}>
				<img
					className="back"
					src="https://img.icons8.com/material-rounded/96/E4D8D0/circled-chevron-right.png"
				/>
			</button>
			<button onClick={handleRightClick}>
				<img
					className="next"
					src="https://img.icons8.com/material-rounded/96/E4D8D0/circled-chevron-right.png"
				/>
			</button>
			<div ref={carousel}>
				<Image
					src={props.src1}
					alt="Carousel"
					height={600}
					width={1500}
					quality={100}
					priority
				/>
				<Image
					src={props.src2}
					alt="Carousel"
					height={700}
					width={1500}
					quality={100}
				/>
				<Image
					src={props.src3}
					alt="Carousel"
					height={700}
					width={1500}
					quality={100}
				/>
			</div>
		</Container>
	)
}

const Container = styled.section`
	& {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 98.964vw;

		button {
			border: 0px;
			position: absolute;
			background-color: transparent;

			z-index: 1;

			img {
				width: 6vw;
				filter: drop-shadow(1px 2px 5px #585858);
				transition: 0.5s;

				:hover {
					filter: drop-shadow(4px 4px 10px #585858);
				}
			}

			.back {
				transform: rotate(180deg);

				position: relative;
				left: -40vw;
			}

			.next {
				position: relative;
				right: -40vw;
			}

			:hover {
				cursor: pointer;
			}
		}

		div {
			height: 80vh;
			display: flex;
			background: rgba(0, 0, 0, 0.2);
			backdrop-filter: blur(15 px);

			overflow-x: hidden;
			scroll-behavior: smooth;

			img,
			span {
				width: 100%;
				flex: none;
			}
		}
	}
`
