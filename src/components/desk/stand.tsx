import { Box, Grid } from '@mui/material'
import React, { ReactNode } from 'react'

const SupportBar = () => {
	return (
		<Box
			className="desk-bar"
			component={Grid}
			container
			item
			direction="row"
			justifyContent="center"
			xs={6}
			sx={{
				height: '80%',
				m: '0 auto',
				transform: {
					xs: 'translateZ(-2.2vw)',
					sm: 'translateZ(-1.5vw)',
					md: 'translateZ(-1.2vw)',
					lg: 'translateZ(-10px)',
				},
			}}
		>
			<Box
				className="bar-right"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					height: '100%',
					width: '1vw',
					maxWidth: '10px',
					transform: {
						xs: 'rotateY(90deg) translateZ(-.5vw)',
						md: 'rotateY(90deg) translateZ(-5px)',
					},
					position: 'absolute',
				}}
			/>
			<Box
				className="bar-left"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					height: '100%',
					width: '1vw',
					maxWidth: '10px',
					transform: {
						xs: 'rotateY(90deg) translateZ(.5vw)',
						md: 'rotateY(90deg) translateZ(5px)',
					},
					position: 'absolute',
				}}
			/>
			<Box
				className="bar-top"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					height: '100%',
					width: '1vw',
					maxWidth: '10px',
					transform: {
						xs: 'rotateY(180deg) translateZ(-.5vw)',
						md: 'rotateY(180deg) translateZ(-5px)',
					},
					position: 'absolute',
				}}
			/>
			<Box
				className="bar-bottom"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					height: '100%',
					width: '1vw',
					maxWidth: '10px',
					transform: {
						xs: 'rotateY(180deg) translateZ(.5vw)',
						md: 'rotateY(180deg) translateZ(5px)',
					},
					position: 'absolute',
				}}
			/>
			<Box
				className="bar-front"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					top: { xs: '27.2vw', lg: 321 },
					height: '1vw',
					width: '1vw',
					maxHeight: '10px',
					maxWidth: '10px',
					transform: 'rotatex(90deg)',
					position: 'absolute',
				}}
			/>
			<Box
				className="bar-back"
				component={Grid}
				item
				sx={{
					border: '1.5px solid #1C1C1C',
					bgcolor: '#131315',
					bottom: { xs: '27.2vw', lg: 321 },
					height: '1vw',
					width: '1vw',
					maxHeight: '10px',
					maxWidth: '10px',
					transform: 'rotatex(90deg)',
					position: 'absolute',
				}}
			/>
		</Box>
	)
}
const Stand = () => {
	return (
		<Box
			className="desk-stand"
			component={Grid}
			container
			item
			direction="row"
			justifyContent="center"
			sx={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<SupportBar />
			<SupportBar />
		</Box>
	)
}
export default Stand
