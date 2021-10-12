import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
	Box,
	Backdrop,
	Button,
	ButtonGroup,
	buttonGroupClasses,
	Container,
	CssBaseline,
	Fade,
	Grid,
	IconButton,
	Link,
	Modal,
	Stack,
	Typography,
	SvgIcon,
} from '@mui/material'
import { PictureAsPdf } from '@mui/icons-material'
import { Monitor, Desk, Display, Keyboard } from '../components'
import MonitorBackgrounds from '../../public/assets/gifs/monitor'
import useElementSize from '../utils/useElementSize'
import { powerOn } from '../../styles/animations'

export default function Home() {
	const objectContainerRef = useRef(null)
	const { width, height } = useElementSize(objectContainerRef)
	const [switchWallpaper, setSwitchWallpaper] = useState<boolean>(false)
	const [containerXY, setContainerXY] = useState({ width: null, height: null })
	const [cvClick, setCvClick] = React.useState(false)
	const handleCvClick = () => setCvClick((prev) => !prev)
	//test
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
		setContainerXY({ width: width, height: height })
	}, [width, height])

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
					animation: `${powerOn} 1s ease-in-out`,
				}}
			>
				<Monitor
					containerWidth={containerXY.width}
					containerHeight={containerXY.height}
				>
					<Display wallpaper={wallpaperSrc} onMenuClick={handleCvClick}>
						<Stack
							direction="column"
							justifyContent="space-evenly"
							alignItems="flex-start"
							spacing={0}
						>
							<IconButton
								size="small"
								disableFocusRipple
								onClick={handleCvClick}
								sx={{
									color: 'white',
									border: 'none',
									width: '50px',
									height: '50px',
									borderRadius: 3,
									'&:hover': {
										background: 'rgb(255, 255, 255, 0.3)',
									},
								}}
							>
								<PictureAsPdf />
							</IconButton>
						</Stack>
					</Display>
				</Monitor>
				<Box
					component="div"
					sx={{
						position: 'relative',
						'*, *::after': {
							boxSizing: 'border-box',
							transformStyle: 'preserve-3d',
						},
					}}
				>
					<Desk containerWidth={containerXY.width}>
						<Keyboard containerWidth={containerXY.width} />
					</Desk>
				</Box>
				{/* modal */}
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
								height: '80%',
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
								check out:
							</Typography>
							<br />
							<br />
							<Link href="https://www.linkedin.com/in/glenn-chon/">
								LinkedIn
							</Link>
							<br />
							<br />
							<Link href="https://github.com/GlennChon">Github</Link>
							<br />
							<br />
							<Link href="https://fetchwork.io">FetchWork</Link>
						</Box>
					</Fade>
				</Modal>
			</Box>
		</Box>
	)
}
