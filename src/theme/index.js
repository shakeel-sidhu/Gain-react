import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import CoinbaseSansRegular from  "../../public/resources/fonts/CoinbaseSans-Regular-1.ttf";
import CoinbaseTextMedium  from "../../public/resources/fonts/CoinbaseText-Medium-1.ttf";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	typography:{
		fontFamily: [
		  "CoinbaseTextMedium",
		  'sans-serif'
		].join(','),
		fontFamily: [
			"Coinbase Sans",
			'sans-serif'
	   ].join(','),
	},
	components: {
		MuiCssBaseline: {
		  styleOverrides: `
			@font-face {
				font-family: 'Coinbase Sans';
				src: url('CoinbaseSans-Regular.woff2') format('woff2'),
					url('CoinbaseSans-Regular.woff') format('woff');
				font-weight: 400;
				font-style: normal;
				font-display: swap;
			}
		  `,
		},
		MuiCssBaseline: {
			styleOverrides: `
			  @font-face {
				font-family: 'CoinbaseTextMedium';
				font-style: normal;
				font-display: swap;
				font-weight: 300;
				src:  url(${CoinbaseTextMedium}) format('truetype');
			  }
			`,
		  },
	  },
})

export default theme
