import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'
import useElementSize from '../utils/useElementSize'

export default function Home() {
	const objectContainerRef = useRef(null)
	const { width, height } = useElementSize(objectContainerRef)

	return (
		<Box
			className="main"
			component={Grid}
			ref={objectContainerRef}
			container
			role="main"
			sx={{
				height: 'calc(100% - 100px)',
				width: 'calc(100% - 100px)',
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
				border: '1px solid orange',
			}}
		>
			{/* <h1>Glenn Chon</h1> */}
			<Box
				component={Grid}
				className="object-container"
				// container
				item
				sx={{
					height: { xs: '100%', sm: `calc(${width}px * (9/21))` },
					width: '100%',
					maxWidth: '1200px',
					maxHeight: 'calc(1200px * (9 / 21))',
					border: {
						xs: '1px solid black',
						sm: '1px solid orange',
						md: '1px solid red',
						lg: '1px solid green',
						xl: '1px solid blue',
					},
					m: '0 auto',
					'*, *::after, *::before': {
						'box-sizing': 'border-box',
						'transform-style': 'preserve-3d',
					},
				}}
			>
				<Monitor>Coming Soon...</Monitor>
				<Desk>
					<Keyboard />
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
