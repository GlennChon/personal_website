import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createContext, useContext, useEffect, useState } from 'react'
const viewportContext = createContext({})

export const ViewportProvider = ({ children }) => {
	const theme = useTheme()
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)
	const [isMobile, setIsMobile] = useState(false)
	const queryMobile = !useMediaQuery(theme.breakpoints.up('md'))

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
		window.addEventListener('resize', handleWindowResize)

		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	useEffect(() => {
		const checkMobile = () => {
			const ua = navigator.userAgent
			setIsMobile(
				/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
					ua,
				) || queryMobile,
			)
		}
		checkMobile()
	}, [queryMobile])

	return (
		<viewportContext.Provider
			value={{
				width,
				height,
				isMobile,
			}}
		>
			{children}
		</viewportContext.Provider>
	)
}

export const useViewport = () => {
	const { width, height, isMobile } = useContext(viewportContext)
	return {
		width,
		height,
		isMobile,
	}
}
