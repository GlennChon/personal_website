import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Desk = ({ containerWidth, children }) => {
	const [deskWidth, setDeskWidth] = useState()
	const [deskHeight, setDeskHeight] = useState()
	const [deskDepth, setDeskDepth] = useState()
	const [maxContainerWidth] = useState(1000)

	useEffect(() => {
		const calculated =
			containerWidth < maxContainerWidth ? containerWidth : maxContainerWidth
		setDeskWidth(calculated)
		setDeskHeight(deskWidth * (1 / 3))
		setDeskDepth(deskHeight / 20)
	})

	return (
		<Box
			className="desk-container"
			component="div"
			sx={{
				display: 'flex',
				m: '0 auto',
				height: `${deskHeight}px`,
				width: `${deskWidth}px`,
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Box
				className="desk"
				component="div"
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: '100%',
					width: '100%',
					// change perspective
					transform:
						'perspective(1000px) rotateX(65deg) rotateY(0deg) rotateZ(0deg)',
					// 'perspective(2000px) rotateX(90deg) rotateY(0deg) rotateZ(0deg)',
					position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					className="desk-front"
					component="div"
					sx={{
						'&::before': {
							//displays frosted glass in older browser
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.3), rgb(219, 242, 254, .2) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						borderRadius: '5px',
						borderTop: '1px solid rgb(46, 55, 67, .5)',
						borderBottom: {
							xs: '.25vw dotted rgb(226, 91, 10, 0.6)',
							md: '2.5px dotted rgb(226, 91, 10, 0.6)',
						},
						height: `${deskDepth}px`,
						width: '100%',
						transform: `rotateX(-90deg) translateZ(calc(${deskHeight}px / 2))`,
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-back"
					component="div"
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.3), rgb(219, 242, 254, .2) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						border: '1px solid rgb(46, 55, 67, .5)',
						width: '100%',
						height: `${deskDepth}px`,
						transform: `rotateX(90deg) translateZ(calc(${deskHeight}px / 2))`,
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-right"
					component="div"
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.3), rgb(219, 242, 254, .2) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						border: '1px solid rgb(46, 55, 67, .5)',
						width: `${deskDepth}px`,
						height: `100%`,
						transform: `rotateY(90deg) translateZ(calc(${deskWidth}px / 2))`,
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-left"
					component="div"
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.3), rgb(219, 242, 254, .2) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						border: '1px solid rgb(46, 55, 67, .5)',
						width: `${deskDepth}px`,
						height: `100%`,
						transform: `rotateY(90deg) translateZ(calc(-${deskWidth}px / 2))`,
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-bottom"
					component="div"
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.3), rgb(219, 242, 254, .2) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						border: '1px solid rgb(46, 55, 67, .5)',
						width: `${deskWidth}px`,
						height: `${deskHeight}px`,
						transform: `rotateY(180deg) translateZ(calc(${deskDepth}px /2))`,
						position: 'absolute',
					}}
				/>
				<Box
					className="desk-top"
					component="div"
					sx={{
						'&::before': {
							backgroundImage:
								'linear-gradient(to bottom, rgb(115, 158, 167, 0.6), rgb(219, 242, 254, .3) )',
							filter: 'blur(1px)',
							content: "''",
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						},
						border: '1px solid rgb(55, 53, 59, 0.2)',
						borderRadius: '5px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						width: `${deskWidth}px`,
						height: `${deskHeight}px`,
						transform: `rotateY(0deg) translateZ(calc(${deskDepth}px / 2))`,
						position: 'relative',
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	)
}

export default Desk
