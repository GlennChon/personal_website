import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Backdrop, Fade, Grid, Modal, Typography } from '@mui/material'
import { GitHub, Description, LinkedIn, Pets, Email } from '@mui/icons-material'
import { Monitor, Desk, Display, Keyboard, Launchers } from '../components'
import MonitorBackgrounds from '../../public/assets/gifs/monitor'
import useElementSize from '../utils/useElementSize'
import { powerOn, signFlicker, signFlickerOn } from '../../styles/animations'

export default function Home() {
	const objectContainerRef = useRef(null)
	const { width } = useElementSize(objectContainerRef)
	const [switchWallpaper, setSwitchWallpaper] = useState<boolean>(false)
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
	const [cvClick, setCvClick] = useState(false)

	const handleCvClick = () => setCvClick((prev) => !prev)
	const openUrlClick = (url) => window.open(url, '_blank')

	const launchers = [
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
			//opens faux window with input and send button
			label: 'Send Message',
			icon: Email,
			onClick: handleCvClick,
			//() => openUrlClick('https://www.glennchon.com/'),
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
			{/* <h1>Glenn Chon</h1> */}

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
						// display: { xs: 'none', sm: 'flex' },
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
							fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
							animation: `${signFlickerOn} 5s normal 2s 1, ${signFlicker} 8s infinite 7s alternate`,
							border: '.4rem double primary.dark',
							borderRadius: 3,
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
					}}
				>
					<Display handleMenuClick={handleCvClick} wallpaper={wallpaperSrc}>
						<Launchers itemArr={launchers} />
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
				{/* tmp modal */}
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					open={cvClick}
					onClose={handleCvClick}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={cvClick}>
						<Box
							sx={{
								position: 'absolute',
								height: 'auto',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								width: 400,
								bgcolor: 'background.paper',
								border: '2px solid #000',
								boxShadow: 24,
								p: 4,
								color: 'white',
							}}
						>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2"
							>
								Coming Soon
							</Typography>
							<Typography id="transition-modal-description" sx={{ mt: 2 }}>
								Still spending nights working on this. In the mean time please
								check out the first four launcher icons or try typing on your
								keyboard.
							</Typography>
						</Box>
					</Fade>
				</Modal>
			</Box>
		</Box>
	)
}
