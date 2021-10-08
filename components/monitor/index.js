import { Box, Grid } from '@mui/material'
const Wallpaper = '/static/images/retrowave.jpg'
const Monitor = (props) => {
	return (
		<Box
			className="monitor-container"
			component={Grid}
			container
			sx={{
				height: 'calc(70vw * 0.5)',
				width: '100%',
				maxHeight: '412px',
			}}
		>
			<Box
				className="monitor"
				component={Grid}
				container
				item
				xs={10}
				sx={{
					maxWidth: '1920px',
					m: '0 auto',
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
						'box-shadow':
							'0 0 5px rgba(40, 62, 115, .4), 0 0 10px rgba(40, 62, 115, .4), 0 0 15px rgba(40, 62, 115, .1), 0 0 20px rgba(40, 62, 115, .4), 0 0 40px rgba(40, 62, 115, .4), 0 0 60px rgba(40, 62, 115, .4)',
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
						{props.children}
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
		</Box>
	)
}
export default Monitor
