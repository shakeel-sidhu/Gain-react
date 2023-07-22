import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import CoinbaseSansRegular from  "../../public/resources/fonts/CoinbaseSans-Regular-1.ttf";
import CoinbaseSansMedium  from "../../public/resources/fonts/CoinbaseText-Medium-1.ttf";

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
		  "CoinbaseSansMedium",
		  'sans-serif'
		].join(','),
		fontFamily: [
			"CoinbaseSansRegular",
			'sans-serif'
	   ].join(','),
	},
	components: {
		MuiCssBaseline: {
		  styleOverrides: `
			@font-face {
			  font-family: 'CoinbaseSansRegular';
			  font-style: normal;
			  font-display: swap;
			  font-weight: 400;
			  src: local('Raleway'), local('Raleway-Regular'), url(${CoinbaseSansRegular}) format('woff2');
			  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			}
		  `,
		},
		MuiCssBaseline: {
			styleOverrides: `
			  @font-face {
				font-family: 'CoinbaseSansMedium';
				font-style: normal;
				font-display: swap;
				font-weight: 300;
				src: local('Raleway'), local('Raleway-Regular'), url(${CoinbaseSansMedium}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			  }
			`,
		  },
	  },
})

export default theme
