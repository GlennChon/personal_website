import {
	Description,
	Email,
	GitHub,
	LinkedIn,
	Pets,
	Collections,
} from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React, {
	forwardRef,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import MonitorBackgrounds from '../../public/assets/mp4/monitor'
import { powerOn, signFlicker, signFlickerOn } from '../../styles/animations'
import {
	Desk,
	Display,
	DrawerMenu,
	EmailForm,
	Keyboard,
	Launchers,
	Monitor,
	Window,
} from '../components'
import useElementSize from '../utils/useElementSize'
import useGoogleAnalytics from '../utils/useGoogleAnalytics'
// import { useWeather } from 'utils/WeatherProvider'


const DisplayChildren = forwardRef((props, ref: Ref<HTMLDivElement>) => {
	return <div ref={ref}>{props.children}</div>
})
export default function Home() {
	useGoogleAnalytics()
	const objectContainerRef = useRef(null)
	const { width } = useElementSize(objectContainerRef)
	const [switchWallpaper, setSwitchWallpaper] = useState<boolean>(false)
	const [showWindow, setShowWindow] = useState<boolean>(false)
	const [showComingSoonWindow, setShowComingSoonWindow] =
		useState<boolean>(false)
	const [monitorXY, setMonitorXY] = useState({
		width: null,
		height: null,
		mHeight: null,
	})

	const [deskXYZ, setDeskXYZ] = useState({
		width: null,
		height: null,
		depth: null,
	})

	const [boardXYZ, setBoardXYZ] = useState({
		width: null,
		height: null,
		depth: null,
	})
	const [WindowContents, setWindowContents] = useState<JSX.Element>(<></>)
	const displayAreaRef = useRef()
	// get weather

	// const weather = useWeather()

	const [menuAnchorEl, setMenuAnchorEl] = useState(null)
	const [menuOpen, setMenuOpen] = useState(Boolean(menuAnchorEl))
	const handleMenuClick = (event) => {
		setMenuAnchorEl(event.currentTarget)
		setMenuOpen((prev) => !prev)
	}

	const handleMenuClose = () => {
		setMenuAnchorEl(null)
		setMenuOpen(false)
	}

	const openUrlClick = useCallback((url) => {
		window.open(url, '_blank')
	}, [])

	const handleModalOpen = (DynamicComponent) => {
		setWindowContents(DynamicComponent)
		setShowWindow(true)
	}
	const handleModalClose = () => setShowWindow(false)

	const handleComingSoonOpen = (DynamicComponent) => {
		setWindowContents(DynamicComponent)
		setShowComingSoonWindow(true)
	}
	const handleComingSoonClose = () => setShowComingSoonWindow(false)

	const launchers = [
		{
			label: 'FetchWork',
			icon: Pets,
			onClick: () => openUrlClick('https://www.fetchwork.io'),
		},
		{
			label: 'Résumé',
			icon: Description,
			onClick: () =>
				openUrlClick('https://glennchon.com/assets/docs/Glenn_Chon_Resume.pdf'),
		},
		{
			/*Send Email*/
			//opens modal
			label: 'Send Message',
			icon: Email,
			onClick: () => handleModalOpen(<EmailForm />),
		},
	]

	const menuLaunchers = [
		{
			label: 'FetchWork',
			icon: Pets,
			onClick: () => openUrlClick('https://www.fetchwork.io'),
		},
		{
			label: 'Gallery',
			icon: Collections,
			onClick: () => handleComingSoonOpen(<span>Coming Soon!</span>),
		},
		{
			label: 'GitHub',
			icon: GitHub,
			onClick: () => openUrlClick('https://www.github.com/glennchon'),
		},
		{
			label: 'LinkedIn',
			icon: LinkedIn,
			onClick: () => openUrlClick('https://www.linkedin.com/in/glenn-chon'),
		},
		{
			label: 'Résumé',
			icon: Description,
			onClick: () =>
				openUrlClick('https://glennchon.com/assets/docs/Glenn_Chon_Resume.pdf'),
		},
		{
			/*Send Email*/
			//opens modal
			label: 'Send Message',
			icon: Email,
			onClick: () => handleModalOpen(<EmailForm />),
		},
	]

	// alternates switchWallpaper boolean every 2.5 minutes
	useEffect(() => {
		const interval = setInterval(() => {
			setSwitchWallpaper((prev) => !prev)
		}, 150000)
		return () => clearInterval(interval)
	})
	// prevents wallpaper switch on window resize
	const wallpaperSrc = useMemo(() => {
		const wallpapers = Object.keys(MonitorBackgrounds)
		return MonitorBackgrounds[
			wallpapers[`${Math.floor(Math.random() * wallpapers.length)}`]
		]
	}, [switchWallpaper])

	// const Weather = () => {
	// 	return weather.display
	// }

	useEffect(() => {
		const baseWidth = width * 0.8
		const boardWidth = baseWidth * (1 / 3)
		setMonitorXY({
			width: baseWidth,
			height: baseWidth * (9 / 21),
			mHeight: baseWidth * (9 / 5),
		})
		setDeskXYZ({
			width: baseWidth,
			height: baseWidth * (1 / 3),
			depth: (baseWidth * (1 / 3)) / 20,
		})
		setBoardXYZ({
			width: boardWidth,
			height: boardWidth * (4.375 / 12.5),
			depth: boardWidth * (0.575 / 12.5),
		})
	}, [width])

	return (
		<>
			<Box
				component={Grid}
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				maxWidth="lg"
				sx={{
					height: '100%',
					m: 'auto',
				}}
			>
				<Box
					className="object-container"
					ref={objectContainerRef}
					component={Grid}
					xs={11}
					item
					sx={{
						height: '100%',
						width: '100%',
						animation: `${powerOn} 1s ease-in-out`,
					}}
				>
					<Grid
						item
						sx={{
							position: 'relative',
							mb: { xs: 3, sm: 6 },
						}}
					>
						<Typography
							sx={{
								m: 'auto',
								width: { xs: '250px', md: '300px', lg: '350px' },
								fontFamily: "'Neon Tubes 2'",
								textAlign: 'center',
								p: 1,
								color: 'primary.dark',
								border: '.4rem double primary.dark',
								borderRadius: 3,
								fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
								animation: `${signFlickerOn} 5s normal 1s 1, ${signFlicker} 8s infinite 6s alternate`,
								textShadow: 'none',
								boxShadow: 'none',
							}}
						>
							Glenn Chon
						</Typography>
					</Grid>
					<Monitor
						sx={{
							height: { xs: monitorXY.mHeight, sm: monitorXY.height },
							width: monitorXY.width,
							m: 'auto',
							zIndex: 5,
							position: 'relative',
						}}
					>
						<Display handleMenuClick={handleMenuClick} wallpaper={wallpaperSrc}>
							<Box
								className="display-child-container"
								component={DisplayChildren}
								ref={displayAreaRef}
								sx={{
									height: '100%',
									width: '100%',
									border: '1px solid red',
								}}
							>
								<Launchers itemArr={launchers} />
								<DrawerMenu
									anchorEl={menuAnchorEl}
									displayAreaRef={displayAreaRef}
									xy={{
										height: monitorXY.height,
										width: monitorXY.width,
									}}
									open={menuOpen}
									handleClose={handleMenuClose}
									itemArr={menuLaunchers}
								/>
							</Box>
						</Display>
					</Monitor>
					<Box
						className="desk-setup-container"
						component="div"
						sx={{
							position: 'relative',
							'*, *::after': {
								boxSizing: 'border-box',
								transformStyle: 'preserve-3d',
							},
						}}
					>
						<Desk
							xyz={{
								height: deskXYZ.height,
								width: deskXYZ.width,
								depth: deskXYZ.depth,
							}}
						>
							<Keyboard
								xyz={{
									height: boardXYZ.height,
									width: boardXYZ.width,
									depth: boardXYZ.depth,
								}}
							/>
						</Desk>
					</Box>
					<Window
						title="Send Message"
						open={showWindow}
						handleClose={handleModalClose}
					>
						{WindowContents}
					</Window>
					{/* tmp modal */}
					<Window
						title="Work in Progress"
						open={showComingSoonWindow}
						handleClose={handleComingSoonClose}
					>
						{WindowContents}
					</Window>
				</Box>
			</Box>
		</>
	)
}
