const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
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
					background: { default: 'rgb(11, 16, 21)', paper: 'rgb(11, 16, 21)' },
			  }
			: {
					// palette values for dark mode
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
					background: { default: 'rgb(11, 16, 21)', paper: 'rgb(11, 16, 21)' },
			  }),
	},
})

export { getDesignTokens }
