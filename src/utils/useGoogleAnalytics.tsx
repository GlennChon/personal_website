import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = 'G-XQ3BRPPVT0'

export default function useGoogleAnalytics() {
	const location = useLocation()
	useEffect(() => {
		ReactGA.initialize(GA_MEASUREMENT_ID)
	}, [])

	useEffect(() => {
		const currentPath = location.pathname + location.search + location.hash
		ReactGA.send({ hitType: 'pageview', page: currentPath })
	}, [location])
}
