import React from 'react'
import { Box } from '@mui/material'
import LauncherIcon from './launcherIcon'

const Launchers = ({ itemArr = [] }) => {
	const clickableIcons = () => {
		let iconLaunchers = []
		itemArr.map((item, i) =>
			iconLaunchers.push(
				<LauncherIcon
					key={i}
					icon={item.icon}
					label={item.label}
					onClick={item.onClick}
					sx={{
						flex: `0 0 auto`,
						borderRadius: { xs: '15%', sm: 1 },
					}}
				/>,
			),
		)
		return iconLaunchers
	}

	return (
		<>
			<Box
				component="div"
				className="desktop-display-container"
				sx={{
					height: '100%',
					width: '100%',
					display: 'flex',
					m: 'auto',
					p: 2,
					flexDirection: { xs: 'row', sm: 'column' },
					flexWrap: 'wrap',
					justifyContent: { xs: 'space-evenly', sm: 'flex-start' },
					alignContent: { xs: 'space-evenly', sm: 'flex-start' },
				}}
			>
				{clickableIcons()}
			</Box>
		</>
	)
}

export default Launchers
