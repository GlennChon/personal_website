import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { glow } from '../../../styles/animations'

const Monitor = ({ containerWidth, containerHeight, children }) => {
	const [screenWidth, setScreenWidth] = useState<number>(0)
	const [screenHeight, setScreenHeight] = useState<number>(0)
	const [mobileScreenHeight, setMobileScreenHeight] = useState<number>(0)

	useEffect(() => {
		setScreenWidth(containerWidth * 0.8)
		setScreenHeight(screenWidth * (9 / 21))

		const maxMobileHeight = screenWidth * (4 / 9)
		const mobileHeight: number =
			containerHeight < maxMobileHeight ? containerHeight : maxMobileHeight
		setMobileScreenHeight(mobileHeight)
	})

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
						top: 4.5,
						right: 0,
						left: 0,
						height: '1px',
						width: '20%',
						background: 'silver',
						display: { xs: 'flex', sm: 'none' },
					}}
				/>
				{children}
			</Box>
		</Box>
	)
}
export default Monitor
