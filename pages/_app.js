import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Container, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'

import '/styles/globals.css'
import { DarkTheme, LightTheme } from '../styles/theme'
import { ViewportProvider } from '../utils/ViewportProvider'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<ViewportProvider>
				<Head>
					<title>Glenn Chon</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={DarkTheme}>
					<Box
						component="div"
						sx={{
							height: '100%',
							width: '100%',
						}}
					>
						<CssBaseline />
						<Component {...pageProps} />
					</Box>
				</ThemeProvider>
			</ViewportProvider>
		</CacheProvider>
	)
}
export default MyApp
