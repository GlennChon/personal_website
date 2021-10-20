import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { useRouter } from 'next/router'
import env from '@beam-australia/react-env'

const GA_MEASUREMENT_ID = env('ANALYTICS_ID')
const useGoogleAnalytics = () => {
	const router = useRouter()

	useEffect(() => {
		ReactGA.initialize(GA_MEASUREMENT_ID)
	}, [])

	useEffect(() => {
		const currentPath = router.basePath
		ReactGA.send({ hitType: 'pageview', page: currentPath })
		console.log(currentPath)
	}, [router])
}

export default useGoogleAnalytics
