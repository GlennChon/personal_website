import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import {
	Battery90,
	FiveG,
	SignalCellularAlt,
	VolumeDown,
	Wifi,
} from '@mui/icons-material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

const toolbarIcon = {
	fontSize: '100%',
	color: 'white',
}
const mobileOnlyIcon = { ...toolbarIcon, display: { xs: 'flex', sm: 'none' } }
const desktopOnlyIcon = {
	...toolbarIcon,
	display: { xs: 'none', sm: 'flex' },
}

const Display = ({ wallpaper, children }) => {
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
			className="monitor-screen"
			component={Grid}
			container
			item
			direction="column"
			justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
			sx={{
				height: '100%',
				width: '100%',
				borderRadius: 1,
				background: `url(${wallpaper}) no-repeat 50% center / cover`,
			}}
		>
			<Box
				className="toolbar"
				component={Grid}
				container
				item
				order={{ sm: 2 }}
				direction="row"
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
				sx={{
					px: 1,
					bgcolor: {
						sm: 'rgb(46, 55, 67, .75)',
					},
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
					<Grid item>
						<IconButton aria-label="Mobile Menu Button">
							<CircleOutlinedIcon
								className="menu-button"
								sx={{
									position: 'absolute',
									right: -8,
									color: 'white',
									fontSize: '60%',
								}}
							/>
						</IconButton>
					</Grid>
				</Box>
				<Box
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
			<Box
				component={Grid}
				container
				item
				order={{ sm: 1 }}
				sx={{ flexGrow: 1, p: 1 }}
			>
				{children}
			</Box>
			<Grid
				className="mobile-bottom-toolbar"
				container
				item
				order={{ xs: 1 }}
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{
					display: { xs: 'flex', sm: 'none' },
					bgcolor: 'rgb(46, 55, 67, .33)',
				}}
			>
				<IconButton size="medium" aria-label="Mobile Menu Button" sx={{}}>
					<CircleOutlinedIcon
						fontSize="inherit"
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
