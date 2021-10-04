import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Monitor, Table, Keyboard } from '../components'

export default function Home() {
	const isBrowser = typeof window !== 'undefined'
	const [windowInfo, setWindowInfo] = useState({
		height: isBrowser ? `${window.innerHeight}px` : '100vh',
		width: isBrowser ? `${window.innerWidth}px` : '100vw',
		keyboardScale: isBrowser ? window.innerWidth / 2000 : 0.5,
	})
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowInfo({
				height: `${window.innerHeight}px`,
				width: `${window.innerWidth}px`,
				keyboardScale: window.innerWidth / 2000,
			})
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	return (
		<Box
			component="div"
			role="main"
			sx={{
				background:
					'linear-gradient(0deg, rgba(101,13,137,1) 0%, rgba(38,20,71,1) 33%, rgb(0, 0, 0) 100%)',
				height: `${windowInfo.height}`,
				width: `${windowInfo.width}`,
				p: 3,
			}}
		>
			<Box
				sx={{
					height: '100%',
					position: 'relative',
					maxHeight: '1280px',
					maxWidth: '2032px',
				}}
			>
				<h1>Glenn Chon</h1>
				<Monitor>test</Monitor>
				<Table />
				<Keyboard scale={windowInfo.keyboardScale} />
				{windowInfo.keyboardScale}
				<div />
				{`${windowInfo.width}`}
			</Box>
		</Box>
	)
}
