import * as React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'
import {
	Battery90,
	FiveG,
	SignalCellularAlt,
	VolumeDown,
	Wifi,
} from '@mui/icons-material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

const Monitor = ({ containerWidth, containerHeight, wallpaper, children }) => {
	const [screenWidth, setScreenWidth] = useState<number>(0)
	const [screenHeight, setScreenHeight] = useState<number>(0)
	const [mobileScreenHeight, setMobileScreenHeight] = useState<number>(0)
	const [time, setTime] = useState<string>()

	useEffect(() => {
		setScreenWidth(containerWidth * 0.8)
		setScreenHeight(screenWidth * (9 / 21))

		const maxMobileHeight = screenWidth * (414 / 896)
		const mobileHeight: number =
			containerHeight < maxMobileHeight ? containerHeight : maxMobileHeight
		setMobileScreenHeight(mobileHeight)
	})
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

	const toolbarIcon = {
		fontSize: '100%',
		color: 'white',
	}
	const mobileOnlyIcon = { ...toolbarIcon, display: { xs: 'flex', sm: 'none' } }
	const desktopOnlyIcon = {
		...toolbarIcon,
		display: { xs: 'none', sm: 'flex' },
	}

	const glow = keyframes`
		from, 0%, 100%, to {
			box-shadow: 0 0 60px rgba(40, 62, 115, .4); 
		}
		20%, 80% { 
			box-shadow: 0 0 80px rgba(40, 62, 115, .6);
		}
		40%, 60% { 
			box-shadow: 0 0 100px rgba(40, 62, 115, .8);
		}
		50% {
			box-shadow: 0 0 120px rgba(40, 62, 115, .9);
		}
	
	`

	return (
		<Box
			className="monitor"
			component={Grid}
			container
			item
			xs={12}
			sx={{
				display: 'flex',
				m: '0 auto',
				height: { xs: `${mobileScreenHeight}px`, sm: `${screenHeight}px` },
				minHeight: { xs: `${screenWidth * 2}px`, sm: `${screenHeight}px` },
				maxHeight: { xs: `${containerHeight}px`, sm: '100%' },
				width: `${screenWidth}px`,
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Box
				className="monitor-bezel"
				component={Grid}
				container
				item
				sx={{
					height: '100%',
					width: '100%',
					borderRadius: 2,
					bgcolor: 'black',
					border: { xs: '1px solid #C0C0C0', md: '2px solid #C0C0C0' },
					p: 1,
					animation: `${glow} 3s ease-in alternate infinite`,
				}}
			>
				<Box
					component="div"
					className="monitor-pwr"
					sx={{
						position: 'absolute',
						borderRadius: '30%',
						bottom: 4,
						left: 10,
						height: '.2%',
						minHeight: '1px',
						width: '1%',
						background: 'green',
						display: { xs: 'none', sm: 'flex' },
					}}
				/>
				<Box
					component="div"
					className="phone-speaker"
					sx={{
						position: 'absolute',
						m: '0 auto',
						top: 2.5,
						right: 0,
						left: 0,
						height: '1px',
						width: '20%',
						background: 'silver',
						display: { xs: 'flex', sm: 'none' },
					}}
				/>
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
								<IconButton aria-label="Mobile Menu Button" sx={{}}>
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
									fontSize: '68%',
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
			</Box>
		</Box>
	)
}
export default Monitor
