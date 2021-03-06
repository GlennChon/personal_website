import {
	Box,
	Grid,
	Paper,
	Popper,
	Slide,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { DrawerLaunchers, DrawerSearchBar } from './../../components'

const DrawerMenu = ({ ...props }) => {
	const { anchorEl, displayAreaRef, handleClose, open, xy, itemArr } = props
	const [menuAnchorEl, setMenuAnchorEl] = useState(null)
	const [menuXY, setMenuXY] = useState({ height: null, width: null })
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isMd = useMediaQuery(theme.breakpoints.down('md'))
	const [isCurrent, setIsCurrent] = useState(isMobile)
	useEffect(() => {
		if (isCurrent != isMobile) {
			handleClose()
			setIsCurrent(isMobile)
		}
		if (anchorEl) {
			let displayEl = null
			let height = xy.height
			let width = xy.width

			displayEl = anchorEl.parentNode
			if (isMobile) {
				height = height * 4 - 35
				width = width - 17
			} else if (isMd) {
				height = height - 51
				width = width - 16
			} else {
				height = height - 54
				width = width - 20
			}

			setMenuAnchorEl(displayEl)
			setMenuXY({
				width: width,
				height: height,
			})
		}
	}, [anchorEl, isMobile, isMd, xy.height, xy.width])

	return (
		<Box
			component={Popper}
			anchorEl={menuAnchorEl}
			open={open}
			placement="top"
			disablePortal={true}
			transition
			modifiers={[
				{
					name: 'preventOverflow',
					enabled: true,
					options: {
						altAxis: false,
						altBoundary: false,
						tether: true,
						rootBoundary: 'viewport',
					},
				},
			]}
			sx={{ position: 'relative', zIndex: 0 }}
		>
			{({ TransitionProps }) => (
				<Slide
					direction="up"
					{...TransitionProps}
					container={displayAreaRef.current}
				>
					<Box
						component={Paper}
						sx={{
							width: menuXY.width,
							height: menuXY.height,
							mb: 0,
							ml: { xs: 0, sm: 1 },
							border: '1px solid grey',
							px: { xs: 2, sm: 0, md: 2 },
							position: 'relative',
						}}
					>
						<Grid container>
							<Grid item xs={12}>
								<DrawerSearchBar />
							</Grid>
							<Grid item xs={12}>
								<DrawerLaunchers itemArr={itemArr} width={xy.width} />
							</Grid>
						</Grid>
					</Box>
				</Slide>
			)}
		</Box>
	)
}

export default DrawerMenu
