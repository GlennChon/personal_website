import { Box, Grid } from '@mui/material'
const Wallpaper = '/static/images/retrowave.jpg'
const Monitor = (props) => {
	return (
		<Box
			className="monitor-container"
			component={Grid}
			container
			xs={12}
			sx={{
				height: 'calc(60vw * 0.4285)',
				width: '100%',
				p: 1,
			}}
		>
			<Grid
				className="monitor"
				container
				xs={7}
				item
				sx={{
					height: '100%',
					width: '60%',
					m: '0 auto',
				}}
			>
				<Box
					className="monitor-bezel"
					component={Grid}
					container
					xs={11}
					item
					sx={{
						height: '100%',
						width: '100%',
						borderRadius: 2,
						bgcolor: 'black',
						border: { xs: '1px solid #C0C0C0', md: '2px solid #C0C0C0' },
						p: 1,
						zIndex: 1,
						'box-shadow':
							'0 0 5px rgba(40, 62, 115, .4), 0 0 10px rgba(40, 62, 115, .4), 0 0 15px rgba(40, 62, 115, .1), 0 0 20px rgba(40, 62, 115, .4), 0 0 40px rgba(40, 62, 115, .4), 0 0 60px rgba(40, 62, 115, .4)',
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
							backgroundImage: `url(${Wallpaper})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center',
							backgroundSize: 'cover',
						}}
					>
						{props.children}
					</Box>
					<Box
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
				<Grid
					className="monitor-right-container"
					container
					xs={1}
					item
					sx={{
						height: '100%',
						width: 'auto',
						display: { xs: 'none', md: 'inline' },
						p: {
							md: '.65% 0',
							lg: '.6% 0',
							xl: '.55% 0',
						},
					}}
				>
					<Box
						className="monitor-right"
						component={Grid}
						item
						sx={{
							height: '100%',
							width: '20%',
							position: 'relative',
							left: {
								md: '-10%',
								lg: '-9%',
								xl: '-5.5%',
							},
							borderRadius: '0 10px 10px',
							backgroundImage: 'linear-gradient(white 0%, gray 100%)',
							transform: 'perspective( 15vw ) rotateY( 45deg )',
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
export default Monitor
