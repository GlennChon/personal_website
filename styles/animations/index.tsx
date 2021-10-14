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
		filter: brightness(50);
		filter: brightness(0%);
	}
	70% {
		background: #fff !important;
		transform: scale(1.3, 0.001) translate3d(0, 0, 0);
		filter: brightness(10);
		filter: brightness(50%);
	}
	100% {
		background: #fff !important;
		transform: scale(1, 1) translate3d(0, 0, 0);
		filter: brightness(1);
		filter: brightness(1);
		opacity: 1;
	}
`

const bounce = keyframes`
	0%, {transform: translate3d(0,-100%,0);}
	20%, 53%, 80% {
		transform: translate3d(0,0,0);
		display: block;
	}
	40%, 43% {
		transform: translate3d(0, -30px, 0);
	}
	70% {
		transform: translate3d(0, -15px, 0);
	}
	90% {
		transform: translate3d(0,-4px,0);
	}
`
const fadeIn = keyframes`
	from { opacity: 0; }
	to   { opacity: 1; }
`

export { bounce, fadeIn, glow, powerOn }
