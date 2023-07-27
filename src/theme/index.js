import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import CoinbaseSansRegular from  "../../public/resources/fonts/CoinbaseSans-Regular-1.ttf";
import CoinbaseTextMedium  from "../../public/resources/fonts/CoinbaseText-Medium-1.ttf";

// Create a theme instance.
const theme = createTheme({
	components: {
		MuiCssBaseline: {
		  styleOverrides: `
			@font-face {
			  font-family: 'CoinbaseSansRegular';
			  font-style: normal;
			  font-display: swap;
			  font-weight: 400;
			  src: url(${CoinbaseSansRegular}) format('truetype');
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
			"CoinbaseSansRegular",
			'sans-serif'
	   ].join(','),
	},
})

export default theme
