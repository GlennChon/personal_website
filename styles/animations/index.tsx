import { keyframes } from '@emotion/react'

const glow = keyframes`
	from, 0% {
		box-shadow: 0 0 100px 20px rgba(40, 62, 115, .4); 
	}
	100%, to {
		box-shadow: 0 0 140px 20px rgba(40, 62, 115, .8);
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

const fadeIn = keyframes`
	from { opacity: 0; }
	to   { opacity: 1; }
`
const signColorOn = '#bc13fe'
const signColorOff = '#001037'

const signFlickerOn = keyframes`
	from, 0%, 19%, 21%, 54%, 56%, 59%, 61%, 79%, 81%, 89%, 91%, 99%{
		color: ${signColorOff};      
		text-shadow: none;
		box-shadow: none;

		border: .4rem double ${signColorOff};
	}
	20%, 55%, 60%,   {
		border: .4rem double #fff;
		box-shadow: 0 0 .2rem #fff,
		0 0 .2rem #fff,
		0 0 2rem ${signColorOn},
		0 0 0.8rem ${signColorOn},
		0 0 2.8rem ${signColorOn},
		inset 0 0 1.3rem ${signColorOn};
		
	}
	80% { 
		color: #fff;
		text-shadow:
			0 0 4px #fff,
			0 0 11px #fff,
			0 0 19px #fff,
			0 0 40px ${signColorOn},
			0 0 80px ${signColorOn},
			0 0 90px ${signColorOn},
			0 0 100px ${signColorOn},
			0 0 150px ${signColorOn};

		box-shadow: none;
	}
	90%, 100%, to { 
		color: #fff;
		text-shadow:
			0 0 4px #fff,
			0 0 11px #fff,
			0 0 19px #fff,
			0 0 40px ${signColorOn},
			0 0 80px ${signColorOn},
			0 0 90px ${signColorOn},
			0 0 100px ${signColorOn},
			0 0 150px ${signColorOn};

		box-shadow: 0 0 .2rem #fff,
		0 0 .2rem #fff,
		0 0 2rem ${signColorOn},
		0 0 0.8rem ${signColorOn},
		0 0 2.8rem ${signColorOn},
		inset 0 0 1.3rem ${signColorOn};
		border: .4rem double #fff;
	}

`
const signFlicker = keyframes`
	from, 0%, 19.8%, 20.2%, 23.8%, 24.2%, 54.8%, 55.2%, 100%, to {
		color: #fff;
		text-shadow:
			0 0 4px #fff,
			0 0 11px #fff,
			0 0 19px #fff,
			0 0 40px ${signColorOn},
			0 0 80px ${signColorOn},
			0 0 90px ${signColorOn},
			0 0 100px ${signColorOn},
			0 0 150px ${signColorOn};
		
		box-shadow: 0 0 .2rem #fff,
		0 0 .2rem #fff,
		0 0 2rem ${signColorOn},
		0 0 0.8rem ${signColorOn},
		0 0 2.8rem ${signColorOn},
		inset 0 0 1.3rem ${signColorOn};
		border: .4rem double #fff;
	}
	20%, 24%, 55% { 
		color: ${signColorOff};
		text-shadow: none;

		box-shadow: 0 0 .2rem #fff,
		0 0 .2rem #fff,
		0 0 2rem ${signColorOn},
		0 0 0.8rem ${signColorOn},
		0 0 2.8rem ${signColorOn},
		inset 0 0 1.3rem ${signColorOn};  
		border: .4rem double ${signColorOn};
	}
`

export { fadeIn, glow, powerOn, signFlicker, signFlickerOn }
