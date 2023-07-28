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
	},
	components: {
		MuiCssBaseline: {
		  styleOverrides: `
			@font-face {
				font-family: 'CoinbaseTextMedium';
				src: url(${CoinbaseTextMedium}) format('truetype');
				font-weight: 500;
				font-style: normal;
				font-display: swap;
			}
			@font-face {
				font-family: 'CoinbaseTextMedium';
				font-style: normal;
				font-display: swap;
				font-weight: normal;
				src:  url(${CoinbaseSansRegular}) format('truetype');
			  }
		  `,
		},
	  },
})

export default theme
