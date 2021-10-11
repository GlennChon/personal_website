import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createContext, useContext, useEffect, useState } from 'react'
const viewportContext = createContext({})

export const ViewportProvider = ({ children }) => {
	const theme = useTheme()
	const [width, setWidth] = useState()
	const [height, setHeight] = useState()

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
		window.addEventListener('resize', handleWindowResize)
		handleWindowResize()
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return (
		<viewportContext.Provider
			value={{
				width,
				height,
			}}
		>
			{children}
		</viewportContext.Provider>
	)
}

export const useViewport = () => {
	const { width, height } = useContext(viewportContext)
	return {
		width,
		height,
	}
}
