import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'

export default function Home() {
	return (
		<Box
			className="main"
			component={Grid}
			container
			role="main"
			sx={{
				height: '100%',
				width: '100%',
				m: 'auto',
				// position: 'relative',
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
				// container
				item
				sx={{
					height: { xs: '100%' },
					// height: '100%',
					width: '100%',
					maxWidth: { xs: '100%', sm: '1200px' },
					maxHeight: { xs: '50%' },
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
