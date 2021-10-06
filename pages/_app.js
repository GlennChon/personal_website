import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'

import '/styles/globals.css'
import { DarkTheme, LightTheme } from '../styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Container>
				<Head>
					<title>Glenn Chon</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={DarkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		</CacheProvider>
	)
}
