import { Box, Grid } from '@mui/material'

import { glow } from '../../../styles/animations'

const Monitor = ({ sx, children }) => {
	return (
		<Box className="monitor" component={Grid} container sx={{ ...sx }}>
			<Box
				className="monitor"
				component={Grid}
				container
				item
				xs={12}
				sx={{
					display: 'flex',
					m: '0 auto',
					height: '100%',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					// animation: `${bounce} 2.5s ease-in-out`,
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
		</Box>
	)
}
export default Monitor
