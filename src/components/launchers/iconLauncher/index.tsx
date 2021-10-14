import React, { createElement } from 'react'
import { IconButton, Typography } from '@mui/material'

const IconLauncher = ({ icon, label, onClick, sx }) => {
	return (
		<IconButton
			size="small"
			disableFocusRipple
			onClick={onClick}
			sx={{
				color: 'white',
				border: 'none',
				width: '50px',
				height: '50px',
				display: 'flex',
				flexDirection: 'column',
				m: 1,
				'&:hover': {
					background: 'rgb(255, 255, 255, 0.3)',
				},
				...sx,
			}}
		>
			{createElement(icon)}
			<Typography sx={{ fontSize: { xs: '.6em', sm: '.4em', md: '.5em' } }}>
				{label}
			</Typography>
		</IconButton>
	)
}

export default IconLauncher
