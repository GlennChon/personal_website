import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'

export default function Home() {
	const isBrowser = typeof window !== 'undefined'
	const [windowInfo, setWindowInfo] = useState({
		height: isBrowser ? `${window.innerHeight}px` : '100vh',
		width: isBrowser ? `${window.innerWidth}px` : '100vw',
		scale: isBrowser ? window.innerWidth / 2000 : 0.5,
	})
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowInfo({
				height: `${window.innerHeight}px`,
				width: `${window.innerWidth}px`,
				scale: window.innerWidth / 2000,
			})
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	return (
		<Box
			component={Grid}
			container
			role="main"
			sx={{
				height: '100%',
				width: '100%',
				maxHeight: '100%',
				position: 'relative',
				m: 'auto',
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
				item
				sx={{
					// border: '1px solid blue',
					height: 'auto',
					width: '100%',
				}}
			>
				<Monitor>Coming Soon...</Monitor>
			</Box>
			<Box
				component={Grid}
				item
				sx={{
					// border: '1px solid blue',
					height: 'auto',
					width: '100%',
				}}
			>
				<Desk scale={windowInfo.scale} />
			</Box>
			<Box
				component={Grid}
				item
				sx={{
					// border: '1px solid blue',
					height: 'auto',
					width: '100%',
				}}
			>
				<Keyboard scale={windowInfo.scale} />
			</Box>
			{/* 
				Keyboard: WhiteFox
				Switches: Cherry MX Clear
				Keycaps: Jessica GMK Plum
				*/}
		</Box>
	)
}
