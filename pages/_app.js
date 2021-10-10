import Head from 'next/head'
import { createContext, useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Container, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'
import {
	createTheme,
	responsiveFontSizes,
	useTheme,
} from '@mui/material/styles'
import '/styles/globals.css'
import { getDesignTokens } from '../styles/theme'
import { ViewportProvider } from '../utils/ViewportProvider'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
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
						<Box
							component="div"
							sx={{
								height: '100%',
								width: '100%',
							}}
						>
							<Component {...pageProps} />
						</Box>
					</ViewportProvider>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</CacheProvider>
	)
}
export default MyApp

// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

//

// function MyApp() {
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }
