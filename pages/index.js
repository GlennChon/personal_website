import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Monitor, Desk, Keyboard } from '../components'

export default function Home() {
	return (
		<Container maxWidth="lg">
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
					container
					item
					sx={{
						height: 'auto',
						width: '100%',
					}}
				>
					<Monitor>Coming Soon...</Monitor>
				</Box>
				<Box
					component={Grid}
					container
					item
					xs={12}
					sx={{
						height: 'auto',
						width: '100%',
					}}
				>
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
		</Container>
	)
}
