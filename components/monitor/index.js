import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { jsx, css, keyframes } from '@emotion/react'
const Wallpaper = '/static/images/retrowave.jpg'
const Monitor = ({ containerWidth, children }) => {
	const [screenWidth, setScreenWidth] = useState()
	const [screenHeight, setScreenHeight] = useState()
	const [maxContainerWidth] = useState(1000)

	useEffect(() => {
		const calculated =
			containerWidth < maxContainerWidth ? containerWidth : maxContainerWidth
		setScreenWidth(calculated)
		setScreenHeight(screenWidth * (9 / 21))
	})
	const glow = keyframes`
		from, 0%, 100%, to {
			box-shadow: 0 0 40px rgba(40, 62, 115, .4); 
		}
		20%, 80% { 
			box-shadow: 0 0 50px rgba(40, 62, 115, .5);
		}
		40%, 60% { 
			box-shadow: 0 0 60px rgba(40, 62, 115, .6);
		}
		50% {
			box-shadow: 0 0 70px rgba(40, 62, 115, .8);
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
				height: { xs: '100%', sm: `${screenHeight}px` },
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
					container
					item
					sx={{
						height: '100%',
						width: '100%',
						borderRadius: 1,
						backgroundImage: `url(${Wallpaper})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'cover',
						p: 1,
					}}
				>
					{children}
				</Box>
				<Box
					component="div"
					className="monitor-pwr"
					sx={{
						position: 'relative',
						borderRadius: '30%',
						top: '3px',
						left: '3px',
						height: '.2%',
						width: '1%',
						background: 'green',
					}}
				/>
			</Box>
		</Box>
	)
}
export default Monitor
