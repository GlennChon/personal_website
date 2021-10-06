import { Box, Grid } from '@mui/material'
import React from 'react'
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

const Desk = (props) => {
	return (
		<Box
			className="desk-container"
			component={Grid}
			container
			sx={{
				height: 'calc(70vw * 0.5)',
				width: '100%',
				maxHeight: '412px',
				border: '1px solid red',
				'*, *::after, *::before': {
					m: 0,
					p: 0,
					'box-sizing': 'border-box',
					'transform-style': 'preserve-3d',
				},
			}}
		>
			<Box
				className="desk"
				component={Grid}
				container
				item
				xs={10}
				sx={{
					height: '100%',
					width: '100%',
					m: '0 auto',
					// change perspective
					transform:
						// 'perspective(2000px) rotateX(180deg) rotateY(0deg) rotateZ(0deg)',
						'perspective(2000px) rotateX(75deg) rotateY(0deg) rotateZ(0deg)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					className="desk-front"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						borderRadius: '5px',
						borderTop: '1px solid rgb(55, 53, 59, 0.2)',
						borderBottom: {
							xs: '.25vw dotted rgb(226, 91, 10, 0.6)',
							md: '2.5px dotted rgb(226, 91, 10, 0.6)',
						},
						bottom: 75,
						width: '100%',
						height: '10px',
						transform: 'rotateX(-90deg) translateZ(80px)',
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-back"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						top: 75,
						width: '100%',
						height: '10px',
						transform: 'rotateX(90deg) translateZ(80px)',
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-right"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						right: -255,
						width: '10px',
						height: '100%',
						transform: 'rotateY(90deg) translateZ(-250px)',
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-left"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						left: 245,
						// right: 0,
						width: '10px',
						height: '100%',
						transform: 'rotateY(90deg) translateZ(-250px)',
						position: 'absolute',
					}}
				/>
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
				{/* <Box
					className="desk-right-inner"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '3px solid rgb(55, 53, 59, 0.2)',
						right: -245,
						// right: 0,
						width: '10px',
						height: '100%',
						transform: 'rotateY(90deg) translateZ(-250px)',
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-right-outer"
					component={Grid}
					item
					sx={{
						'&::before': {
							bgcolor: 'rgba(255, 255, 255, 0.2)',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '3px solid rgb(55, 53, 59, 0.2)',
						right: -252,
						// right: 0,
						width: '10px',
						height: '100%',
						transform: 'rotateY(90deg) translateZ(-250px)',
						position: 'absolute',
					}}
				/>{' '} */}

				<Box
					className="desk-top"
					component={Grid}
					item
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(52, 50, 50, .3), rgb(219, 242, 254, .2) )',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						width: '100%',
						height: '100%',
						transform: 'rotateY(0deg) translateZ(5px)',
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-bottom"
					component={Grid}
					item
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(52, 50, 50, .3), rgb(219, 242, 254, .2) )',
							'backdrop-filter':
								'blur(10px) saturate(100%) contrast(45%) brightness(130%)',
							content: "''",
							height: '100%',
							width: '100%',
							position: 'absolute',
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						width: '100%',
						height: '100%',
						transform: 'rotateY(180deg) translateZ(5px)',
						position: 'absolute',
					}}
				/>
			</Box>
		</Box>
		// </Box>
	)
}

export default Desk
