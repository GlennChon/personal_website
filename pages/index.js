import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'
import useElementSize from '../utils/useElementSize'

export default function Home() {
	const objectContainerRef = useRef(null)
	const { width, height } = useElementSize(objectContainerRef)
	const [containerWidth, setContainerWidth] = useState(width - 100)

	useEffect(() => {
		setContainerWidth(width - 100)
	})

	return (
		<Box
			className="main"
			component={Grid}
			ref={objectContainerRef}
			container
			role="main"
			sx={{
				height: 'calc(100vh - 100px)',
				width: 'calc(100vw - 100px)',
				m: '50px',
				position: 'relative',
				// m: 'auto',
				// border: {
				// 	xs: '1px solid black',
				// 	sm: '1px solid orange',
				// 	md: '1px solid red',
				// 	lg: '1px solid green',
				// 	xl: '1px solid blue',
				// },
				// border: '1px solid orange',
			}}
		>
			{/* <h1>Glenn Chon</h1> */}
			<Box
				component={Grid}
				className="object-container"
				// container
				item
				sx={{
					height: `100%`,
					width: '100%',
					maxWidth: '1200px',
					// border: {
					// 	xs: '1px solid black',
					// 	sm: '1px solid orange',
					// 	md: '1px solid red',
					// 	lg: '1px solid green',
					// 	xl: '1px solid blue',
					// },
					m: '0 auto',
					'*, *::after, *::before': {
						'box-sizing': 'border-box',
						'transform-style': 'preserve-3d',
					},
				}}
			>
				<Monitor containerWidth={containerWidth}>Coming Soon...</Monitor>
				<Desk containerWidth={containerWidth}>
					<Keyboard containerWidth={containerWidth} />
				</Desk>
			</Box>

			{/* 
				Keyboard: WhiteFox
				Switches: Cherry MX Clear
				Keycaps: Jessica GMK Plum
			*/}
		</Box>
	)
}
