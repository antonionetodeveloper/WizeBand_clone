/* eslint-disable react/prop-types */
import styled from "styled-components"

import { FontCollor } from "../_Colors"

export default function HeadHook({ name, to }) {
	return (
		<Container>
			<a href={to}>
				<span className="hover-underline-animation">{name}</span>
			</a>
		</Container>
	)
}

const Container = styled.button`
	/* From cssbuttons.io by @alexmaracinaru */
	& {
		border: none;
		background: none;

		a {
			text-decoration: none;

			span {
				color: ${FontCollor};
				padding-bottom: 7px;
				font-size: 10pt;
				font-weight: 600;
				padding: 1vw;
				text-transform: uppercase;
			}
		}

		:hover {
			cursor: pointer;
		}

		:hover .hover-underline-animation:after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}

		.hover-underline-animation {
			position: relative;
			color: ${FontCollor};

			:after {
				content: "";
				position: absolute;
				width: 100%;
				transform: scaleX(0);
				height: 0.2vw;
				bottom: 0;
				left: 0;
				background-color: ${FontCollor};
				transform-origin: bottom left;
				transition: transform 0.25s ease-out;
			}
		}
	}
`
