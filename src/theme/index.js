import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import CoinbaseSansRegular from  "../../public/resources/fonts/CoinbaseSans-Regular-1.ttf";
import CoinbaseWoff from  "../../public/resources/fonts/CoinbaseSans-Regular.woff";
import CoinbaseWoff2 from  "../../public/resources/fonts/CoinbaseSans-Regular.woff2";
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
	// 	fontFamily: [
	// 	  "CoinbaseTextMedium",
	// 	  'sans-serif'
	// 	].join(','),
	// 	fontFamily: [
	// 		"Coinbase Sans"
	//    ].join(','),
	},
	components: {
		MuiCssBaseline: {
		  styleOverrides: `
			@font-face {
				font-family: 'Coinbase Sans';
				src: url(${CoinbaseWoff2}) format('woff2'),
					url(${CoinbaseWoff}) format('woff'),
					url(${CoinbaseSansRegular}) format('truetype');
				font-weight: 400;
				font-style: normal;
				font-display: swap;
			}
		  `,
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
		// MuiCssBaseline: {
		// 	styleOverrides: `
		// 	  @font-face {
		// 		font-family: 'CoinbaseTextMedium';
		// 		font-style: normal;
		// 		font-display: swap;
		// 		font-weight: 300;
		// 		src:  url(${CoinbaseTextMedium}) format('truetype');
		// 	  }
		// 	`,
		//   },
	  },
})

export default theme
