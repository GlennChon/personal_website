import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { LauncherIcon } from 'components'
import { useEffect } from 'react'

const DrawerLaunchers = ({ itemArr = [], width }) => {
	const theme = useTheme()

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	let iconMargin
	useEffect(() => {
		let margin = 0.25
		let displayWidth = 0
		let sumIconWidth = 0
		let iconWidth = 62
		if (isMobile) {
			displayWidth = width - 20
			sumIconWidth = iconWidth * 4
			margin = (displayWidth - sumIconWidth) / 8
		} else {
			displayWidth = width - 50
			sumIconWidth = iconWidth * 5
			margin = (displayWidth - sumIconWidth) / 10
		}
		console.log(displayWidth, sumIconWidth, margin)
		if (width) {
			iconMargin = margin
		}
	}, [width])

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
						mx: `${iconMargin}px`,
					}}
				/>,
			),
		)
		return iconLaunchers
	}

	return (
		<Box
			component="div"
			className="menu-container"
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
				m: 0,
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'flex-start', //{ xs: 'space-evenly', sm: 'flex-start' },
				alignContent: 'flex-start', //{ xs: 'space-evenly', sm: 'flex-start' },
			}}
		>
			{clickableIcons()}
		</Box>
	)
}

export default DrawerLaunchers
