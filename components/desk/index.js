import { Box, Grid } from '@mui/material'
import React from 'react'

const Desk = (props) => {
	return (
		<Box
			className="desk"
			component={Grid}
			container
			item
			xs={10}
			alignItems="center"
			justifyContent="center"
			sx={{
				display: { xs: 'none', sm: 'flex' },
				height: '50%',
				width: '100%',
				m: '10% auto 0',
				// change perspective
				transform:
					'perspective(1000px) rotateX(65deg) rotateY(0deg) rotateZ(0deg)',
				// 'perspective(2000px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)',
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
			>
				{props.children}
			</Box>
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
	)
}

export default Desk
