import { createTheme } from '@mui/material/styles'
const theme = createTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		background: { default: '#0D0D0D', paper: '#0D0D0D' },
	},
	typography: {
		fontFamily: ['"Audiowide"', 'Lato'].join(','),
		// overline: { textTransform: 'uppercase' },
	},
})

export { theme }
