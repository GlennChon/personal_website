import { Box, TextField, IconButton, InputAdornment } from '@mui/material'
import { Search, Shop } from '@mui/icons-material'

const DrawerSearchBar = () => {
	const googleSearchUrl = 'https://www.google.com/search?q='

	const search = (e) => {
		let searchQuery = googleSearchUrl + e.target.value
		return window.open(searchQuery, '_blank')
	}

	const openPlayStore = () => {
		let cryptoContactsUrl =
			'https://play.google.com/store/apps/details?id=com.alignmentapps.cryptocontacts'
		return window.open(cryptoContactsUrl, '_blank')
	}

	return (
		<Box
			sx={{
				width: { xs: '100%', sm: '90%', md: '100%' },
				mx: 'auto',
				my: { xs: '5%', sm: '2%', md: '3%' },
			}}
		>
			<TextField
				id="search-bar"
				variant="outlined"
				type="text"
				placeholder="Search"
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						search(e)
					}
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={openPlayStore} sx={{ p: 0 }}>
								<Shop />
							</IconButton>
						</InputAdornment>
					),
				}}
				fullWidth
				sx={{
					bgcolor: 'white',
					borderRadius: 1,
					'& .MuiInputBase-input': {
						position: 'relative',
						height: '.25rem',
					},
				}}
			/>
		</Box>
	)
}
export default DrawerSearchBar
