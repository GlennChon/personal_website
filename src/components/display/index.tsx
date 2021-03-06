import {
	Battery90,
	CircleOutlined,
	FiveG,
	SignalCellularAlt,
	VolumeDown,
	Wifi,
} from '@mui/icons-material'
import { Box, Grid, IconButton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fadeIn } from '../../../styles/animations'

const toolbarIcon = {
	fontSize: '100%',
	color: 'white',
}
const mobileOnlyIcon = { ...toolbarIcon, display: { xs: 'flex', sm: 'none' } }
const desktopOnlyIcon = {
	...toolbarIcon,
	display: { xs: 'none', sm: 'flex' },
}

const Display = ({ wallpaper, handleMenuClick, children }) => {
	const [time, setTime] = useState<string>()
	useEffect(() => {
		let interval = setInterval(() => {
			setTime(
				Intl.DateTimeFormat('en', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				}).format(new Date()),
			)
		}, 1000)
		return () => clearInterval(interval)
	})
	return (
		<Box
			className="display-screen"
			component={Grid}
			container
			item
			direction="column"
			justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
			alignItems="center"
			sx={{
				height: '100%',
				width: '100%',
				borderRadius: 1,
				animation: `${fadeIn} 1s ease`,
				position: 'relative',
				zIndex: 4,
			}}
		>
			<Box
				className="display-wallpaper"
				component="video"
				autoPlay
				muted
				loop
				sx={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					objectFit: 'cover',
					zIndex: 0,
				}}
			>
				<source src={`${wallpaper}`} type="video/mp4" />
			</Box>
			<Box
				className="display-desktop"
				component={Grid}
				container
				item
				order={{ xs: 2, sm: 1 }}
				sx={{
					height: '80%',
					width: '100%',
					flexGrow: 1,
					zIndex: 3,
				}}
			>
				{children}
			</Box>
			<Box
				className="display-taskbar"
				component={Grid}
				container
				item
				order={{ xs: 1, sm: 2 }}
				direction="row"
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
				sx={{
					px: 1,
					bgcolor: {
						sm: 'rgb(46, 55, 67, .75)',
					},

					zIndex: 3,
				}}
			>
				<Box
					className="menu-btn-container"
					component={Grid}
					container
					item
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					sm={6}
					sx={{
						...desktopOnlyIcon,
						justifySelf: 'center',
					}}
				>
					<Grid item sx={{ position: 'relative', right: -13 }}>
						<IconButton
							aria-label="Mobile Menu Button"
							size="small"
							onClick={handleMenuClick}
						>
							<CircleOutlined
								className="menu-button"
								sx={{
									color: 'white',
									// fontSize: '60%',
								}}
							/>
						</IconButton>
					</Grid>
				</Box>
				<Box
					className="taskbar-icons-container"
					component={Grid}
					container
					item
					direction="row"
					alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
					justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
					xs={12}
					sm={6}
				>
					<Box
						className="time"
						component={Grid}
						item
						xs={3}
						sm={3}
						md={2}
						order={{ xs: 1, sm: 2 }}
						sx={{
							...toolbarIcon,
							fontSize: '60%',
							textAlign: { xs: 'left', sm: 'center' },
						}}
					>
						<span>{time}</span>
					</Box>
					<Grid item order={{ xs: 2, sm: 1 }}>
						<Stack
							className="icon-container-item"
							direction="row"
							justifyContent="flex-end"
							alignItems="center"
						>
							<VolumeDown sx={toolbarIcon} />
							<Wifi sx={toolbarIcon} />
							<FiveG sx={mobileOnlyIcon} />
							<SignalCellularAlt sx={mobileOnlyIcon} />
							<Battery90 sx={mobileOnlyIcon} />
						</Stack>
					</Grid>
				</Box>
			</Box>
			<Grid
				className="mobile-bottom-toolbar"
				container
				item
				order={{ xs: 3 }}
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{
					display: { xs: 'flex', sm: 'none' },
					bgcolor: 'rgb(46, 55, 67, .33)',
					zIndex: 3,
				}}
			>
				<IconButton
					size="small"
					aria-label="Mobile Menu Button"
					onClick={handleMenuClick}
				>
					<CircleOutlined
						sx={{
							...mobileOnlyIcon,
							color: 'white',
						}}
					/>
				</IconButton>
			</Grid>
		</Box>
	)
}
export default Display
