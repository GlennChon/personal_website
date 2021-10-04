import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { black } from '@mui/material/colors'

export const DarkTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'dark',
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
		},
		background:
			'linear-gradient(0deg, rgba(101,13,137,1) 0%, rgba(38,20,71,1) 60%, rgba(13,2,33,1) 100%)',
	}),
)

export const LightTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'light',
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
		},
	}),
)
