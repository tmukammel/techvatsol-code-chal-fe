import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from '@mui/material';
// import { useTheme } from '@mui/system';
// import { theme } from './themes/main.theme';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';

// const theme = useTheme();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		<CssBaseline />
		<App />
		{/* </ThemeProvider> */}
	</React.StrictMode>
);