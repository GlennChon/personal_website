import { Box, Grid, Typography } from '@mui/material'
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
		color: 'white',
		my: 'auto',
		fontSize: '1.5em',
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
					className="monitor-screen"
					component={Grid}
					item
					sx={{
						height: '100%',
						width: '100%',
						borderRadius: 1,
						p: 1,
					}}
				>
					<Image
						alt="Mountains"
						src={wallpaper}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
					{children}
					<Box
						component="div"
						className="monitor-pwr"
						sx={{
							position: 'absolute',
							borderRadius: '30%',
							bottom: -5,
							left: '3px',
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
							top: -4.5,
							right: 0,
							left: 0,
							height: '1px',
							width: '20%',
							background: 'silver',
							display: { xs: 'flex', sm: 'none' },
						}}
					/>
					<Box
						className="toolbar"
						component={Grid}
						container
						direction="row"
						alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							height: '100%',
							width: '100%',
							color: 'white',
							fontSize: `calc(100% * .4)`,
						}}
					>
						<Grid
							container
							item
							direction="column"
							justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
							sx={{
								height: { xs: '2.5%', sm: '6%' },
								mx: 'auto',
								width: '100%',
								bgcolor: { sm: 'rgb(46, 55, 67, .75)' },
							}}
						>
							<Grid item sx={{ ...toolbarIcon, display: { sm: 'none' } }}>
								{time}
							</Grid>
							<Grid
								item
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-end',
									px: 1,
								}}
							>
								<VolumeDown sx={toolbarIcon} />
								<Wifi sx={toolbarIcon} />
								<FiveG sx={mobileOnlyIcon} />
								<SignalCellularAlt sx={mobileOnlyIcon} />
								<Battery90 sx={mobileOnlyIcon} />
								<Box sx={{ ...desktopOnlyIcon, ml: 1 }}>{time}</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default Monitor
