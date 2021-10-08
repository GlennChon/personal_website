import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useViewport } from '../../utils/ViewportProvider'
const Board = (props) => {
	const { width, height } = useViewport()
	const [boardWidth, setBoardWidth] = useState()
	const [boardHeight, setBoardHeight] = useState()
	const [boardDepth, setBoardDepth] = useState()
	useEffect(() => {
		const bWidth = width / 3
		const maxBWidth = 1280 / 3
		const calculatedWidth = bWidth < maxBWidth ? bWidth : maxBWidth
		setBoardWidth(calculatedWidth)
		setBoardHeight(calculatedWidth * 0.35)
		setBoardDepth(calculatedWidth * (1 / 25.75))
	})
	//32.7025 /1.27
	return (
		<Box
			className="keyboard"
			component="div"
			sx={{
				height: `${boardHeight}px`,
				width: `${boardWidth}px`,
				// change perspective
				transform: `perspective(10000px) rotateX(0deg) rotateY(0deg) rotateZ(3deg) translatez(calc(${boardDepth}px / 2))`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Box
				className="keyboard-front"
				component="div"
				sx={{
					width: `100%`,
					height: `calc(${boardDepth}px)`,
					transform: `rotateX(-90deg) translateZ(calc(${boardHeight}px / 2))`,
					bgcolor: '#BCBCBC',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-back"
				component="div"
				sx={{
					width: `100%`,
					height: `${boardDepth}px`,
					transform: `rotateX(90deg) translateZ(calc(${boardHeight}px / 2))`,
					bgcolor: '#ADADAD',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-right"
				component="div"
				sx={{
					width: `${boardDepth}px`,
					height: `100%`,
					transform: `rotateY(90deg) translateZ(calc(${boardWidth}px / 2}))`,
					bgcolor: '#ADADAD',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-left"
				component="div"
				sx={{
					width: `${boardDepth}px`,
					height: `100%`,
					transform: `rotateY(90deg) translateZ(calc(-${boardWidth}px / 2))`,
					bgcolor: '#BCBCBC',
					position: 'absolute',
				}}
			/>
			<Box
				className="keyboard-top"
				component="div"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					width: `100%`,
					height: `100%`,
					transform: `rotateY(0deg) translateZ(calc(${boardDepth}px / 2))`,
					background: 'linear-gradient(to bottom, #dbf2fe, #343232)',
					position: 'absolute',
					border: '0.1px solid slategray',
					borderRadius: '1px',
				}}
			>
				{props.children}
			</Box>
			<Box
				className="keyboard-bottom"
				component="div"
				sx={{
					width: `${boardWidth}px`,
					height: `${boardHeight}px`,
					transform: `rotateY(180deg) translateZ(calc(${boardDepth}px /2))`,
					bgcolor: '#eae7e5',
					position: 'absolute',
					boxShadow:
						'-10px 30px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5), 0px 0px 5px rgb(28, 28, 28, .5), 0px 30px 5px rgb(28, 28, 28, .5)',
				}}
			/>
		</Box>
	)
}
export { Board }
