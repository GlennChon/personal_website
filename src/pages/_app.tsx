import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import { createContext, useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../../styles/createEmotionCache'
import {
	createTheme,
	responsiveFontSizes,
	useTheme,
} from '@mui/material/styles'
import '/styles/globals.css'
import { getDesignTokens } from '../../styles/theme'
import { ViewportProvider } from '../utils/ViewportProvider'

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
//test
function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	const ColorModeContext = createContext({ toggleColorMode: () => {} })
	const [mode, setMode] = useState('light')
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[],
	)

	const theme = useMemo(
		() => responsiveFontSizes(createTheme(getDesignTokens(mode))),
		[mode],
	)
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Glenn Chon</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<ViewportProvider>
						<CssBaseline />
						<Component {...pageProps} />
					</ViewportProvider>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</CacheProvider>
	)
}
export default MyApp
