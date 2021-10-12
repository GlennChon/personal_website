import { keyframes } from '@emotion/react'

const glow = keyframes`
from, 0%, 100%, to {
	box-shadow: 0 0 60px rgba(40, 62, 115, .4); 
}
20%, 80% { 
	box-shadow: 0 0 80px rgba(40, 62, 115, .6);
}
40%, 60% { 
	box-shadow: 0 0 100px rgba(40, 62, 115, .8);
}
50% {
	box-shadow: 0 0 120px rgba(40, 62, 115, .9);
}

`

const powerOn = keyframes`
	0% {
		background: #fff !important;
		animation-timing-function: ease-in;
		transform: scale(0, 0.0001) translate3d(0, 0, 0);
		-webkit-filter: brightness(50);
		filter: brightness(50);
	}
	70% {
		background: #fff !important;
		transform: scale(1.3, 0.001) translate3d(0, 0, 0);
		-webkit-filter: brightness(10);
		filter: brightness(10);
	}
	100% {
		background: #fff !important;
		transform: scale(1, 1.3) translate3d(0, 0, 0);
		-webkit-filter: brightness(1);
		filter: brightness(1);
		opacity: 1;
	}
`
export { glow, powerOn }
