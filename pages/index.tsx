import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'
import useElementSize from '../utils/useElementSize'
import MonitorBackgrounds from '../public/assets/gifs/monitor/index.jsx'

export default function Home() {
	const objectContainerRef = useRef(null)
	const { width, height } = useElementSize(objectContainerRef)
	const [switchWallpaper, setSwitchWallpaper] = useState<boolean>(false)

	// alternates switchWallpaper boolean every 5 minutes
	useEffect(() => {
		const interval = setInterval(() => {
			setSwitchWallpaper((prev) => !prev)
		}, 300000)
		return () => clearInterval(interval)
	})
	// prevents wallpaper switch on window resize
	const wallpaperSrc = useMemo(() => {
		const wallpapers = Object.keys(MonitorBackgrounds)
		return MonitorBackgrounds[
			wallpapers[`${Math.floor(Math.random() * wallpapers.length)}`]
		]
	}, [switchWallpaper])

	return (
		<Box
			component={Grid}
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			maxWidth="lg"
			sx={{
				height: '100%',
				m: 'auto',
			}}
		>
			{/* <h1>Glenn Chon</h1> */}
			<Box
				className="object-container"
				ref={objectContainerRef}
				component={Grid}
				xs={11}
				item
				sx={{
					height: '100%',
					position: 'relative',
					'*, *::after': {
						boxSizing: 'border-box',
						transformStyle: 'preserve-3d',
					},
				}}
			>
				<Monitor
					containerWidth={width}
					containerHeight={height}
					wallpaper={wallpaperSrc}
				>
					Coming Soon...
				</Monitor>

				<Desk containerWidth={width}>
					<Keyboard containerWidth={width} />
				</Desk>
			</Box>
		</Box>

		// Keyboard: WhiteFox
		// Switches: Cherry MX Clear
		// Keycaps: Jessica GMK Plum
	)
}
