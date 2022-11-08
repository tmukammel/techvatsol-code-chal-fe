import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from './main.theme.types';
import { THEME_CONFIG } from '../config/theme.config';

export const theme = ((options: ThemeOptions) => {
	return createTheme({
		palette: {
			background: {
				default: options.background_default,
				paper: options.background_paper
			},
			common: {
				white: '#fff',
				black: '#000'
			},
			text: {
				primary: options.text_primary,
				secondary: options.text_secondary
			}
		},
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			].join(',')
		}
	});
})(THEME_CONFIG);
