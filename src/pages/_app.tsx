import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import createEmotionCache from '../../styles/createEmotionCache'
import { theme } from '../../styles/theme'
import { ViewportProvider } from '../utils/ViewportProvider'
import '/styles/globals.css'
//snow
import { Snow } from 'components/seasonal/winter'
import { Box } from '@mui/material'

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
//test
function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Glenn Chon</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<script src="/__ENV.js" />
			</Head>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						height: '100%',
						width: '100%',
						position: 'absolute',
						left: 0,
						top: 0,
						overflow: 'hidden',
					}}
				>
					<Snow />
				</Box>
				<ViewportProvider>
					<CssBaseline />
					<Component {...pageProps} />
				</ViewportProvider>
			</ThemeProvider>
		</CacheProvider>
	)
}
export default MyApp
