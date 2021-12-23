import React, { createElement } from 'react'
import { IconButton, Typography } from '@mui/material'

const LauncherIcon = ({ icon, label, color = 'white', onClick, sx }) => {
	return (
		<IconButton
			size="small"
			disableFocusRipple
			onClick={onClick}
			sx={{
				color: color,
				border: 'none',
				width: '54px',
				height: '54px',
				display: 'flex',
				flexDirection: 'column',
				m: 1,
				background: 'rgb(13,13,13, 0.5)',
				'&:hover': {
					background: 'rgb(255, 255, 255, 0.3)',
				},
				...sx,
			}}
		>
			{createElement(icon)}
			<Typography sx={{ fontSize: { xs: '.4em', sm: '.45em', md: '.5em' } }}>
				{label}
			</Typography>
		</IconButton>
	)
}

export default LauncherIcon
