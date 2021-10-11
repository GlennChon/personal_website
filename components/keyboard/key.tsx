import { Box } from '@mui/material'
import { ReactNode, useEffect, useState } from 'react'
interface ZColor {
	main: { primary: string; dark: string }
	accent: { primary: string; dark: string }
	special: { primary: string; dark: string }
}
interface XYColor {
	main: string
	accent: string
	special: string
}
const Key = ({
	char = '',
	size = 1,
	width,
	blank = false,
	variant = 'main',
}: {
	char: string
	size: number
	width?: number
	blank?: boolean
	variant?: string
}) => {
	const textColor: string = variant === 'main' ? '#5D5D6A' : '#EBDFC3'
	const zColor: ZColor = {
		main: { primary: '#EBDFC3', dark: '#CFC4AC' },
		accent: { primary: '#5D5D6A', dark: '#464650' },
		special: { primary: '#946062', dark: '#734B4C' },
	}
	const yColor: XYColor = {
		main: '#C8B68C',
		accent: '#242328',
		special: '#5D2C26',
	}
	const xColor: XYColor = {
		main: 'linear-gradient(to bottom, #FEFAC9, #D0BD8A)',
		accent: 'linear-gradient(to bottom, #696572, #7B7582)',
		special: 'linear-gradient(to bottom, #bc7377, #b46266)',
	}

	const [keyWidth, setKeyWidth] = useState<number>(0)
	const [keyHeight, setKeyHeight] = useState<number>(0)
	const [keyDepth, setKeyDepth] = useState<number>(0)

	useEffect(() => {
		const kWidth: number = width / 20
		setKeyWidth(kWidth)
		setKeyHeight(kWidth * 0.9)
		setKeyDepth(kWidth * 0.5)
	}, [width])

	return (
		<Box
			className="keycap"
			component="div"
			sx={{
				height: `${keyHeight}px`,
				width: `calc(${keyWidth}px * ${size})`,
				transition: '.05s ease',
				display: 'flex',
				position: 'relative',
				justifyContent: 'center',
				alignItems: 'center',
				visibility: blank ? 'hidden' : 'visible',
			}}
		>
			<Box
				className="key-front"
				component="div"
				sx={{
					height: `100%`,
					width: `100%`,
					transform: `rotateX(-90deg) translateZ(calc(${keyHeight}px / 2))`,
					bgcolor: yColor[`${variant}`],
					position: 'absolute',
				}}
			/>
			<Box
				className="key-back"
				component="div"
				sx={{
					height: `100%`,
					width: `100%`,
					transform: `rotateX(90deg) translateZ(calc(${keyHeight}px / 2))`,
					bgcolor: yColor[`${variant}`],
					position: 'absolute',
				}}
			/>
			<Box
				className="key-right"
				component="div"
				sx={{
					height: `100%`,
					width: `calc(100% / ${size})`,
					transform: `rotateY(90deg) translateZ(calc((${keyWidth}px * ${size}) / 2))`,
					background: xColor[`${variant}`],
					position: 'absolute',
				}}
			/>
			<Box
				className="key-left"
				component="div"
				sx={{
					height: `100%`,
					width: `calc(100% / ${size})`,
					transform: `rotateY(90deg) translateZ(calc((-${keyWidth}px * ${size}) / 2))`,
					background: xColor[`${variant}`],
					position: 'absolute',
				}}
			/>
			<Box
				className="key-top"
				component="div"
				sx={{
					height: `100%`,
					width: `100%`,
					transform: `rotateY(0deg) translateZ(${keyDepth}px)`,
					bgcolor: zColor[`${variant}`].primary,
					textAlign: 'center',
					position: 'absolute',
					backgroundImage: `radial-gradient(${
						zColor[`${variant}`].primary
					} 50%, ${zColor[`${variant}`].dark})`,
				}}
			>
				<Box
					className="key-text"
					component="span"
					sx={{
						fontSize: { xs: `calc(${keyWidth}px * (3.5 / 10))` },
						color: textColor,
						position: 'absolute',
						top: 0.75,
						left: 0.9,
					}}
				>
					{char}
				</Box>
			</Box>
		</Box>
	)
}

const KeyRow = ({
	width,
	children,
}: {
	width: number
	children: ReactNode
}) => {
	const [keyDepth, setKeyDepth] = useState<number>(0)

	useEffect(() => {
		const keyWidth: number = width / 16
		setKeyDepth(keyWidth * 0.5)
	}, [width])
	return (
		<Box
			className="key-row"
			component="div"
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
				width: '100%',
				transform: `translateZ(calc(${keyDepth}px / 2))`,
				p: '0 5px',
			}}
		>
			{children}
		</Box>
	)
}

export { KeyRow, Key }
