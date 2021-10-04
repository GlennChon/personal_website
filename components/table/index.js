import { Box, Grid } from '@mui/material'
import React from 'react'
const Table = () => {
	return (
		<Grid
			className="desk"
			component={Grid}
			container
			sx={{
				width: '100%',
				display: { xs: 'none', md: 'inline-flex' },
			}}
		>
			<Box
				className="desk-top"
				component={Grid}
				item
				sx={{
					mt: '8vh',
					ml: '6.5vw',
					height: '10vw',
					width: '66vw',
					bgcolor: ' #372757',
					backgroundImage: 'linear-gradient(to top, #130a21 0%, #07000e 100%)',
					transform: 'skew(-60deg)',
					transformOrigin: 'left bottom',
				}}
			/>
			<Box
				className="desk-front"
				component={Grid}
				item
				sx={{
					ml: '6.5vw',
					height: '1vw',
					width: '66vw',
					background: '#1f1131',
				}}
			/>
			<Box
				className="desk-right"
				sx={{
					height: '1vw',
					width: '17.4vw',
					background: '#28183d',
					transform: 'skew(0deg, -30deg)',
					transformOrigin: 'left bottom',
				}}
			/>
		</Grid>
	)
}

export default Table
