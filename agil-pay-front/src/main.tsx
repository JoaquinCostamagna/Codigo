import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'

const theme = createTheme({
	palette: {
		primary: {
			main: '#01aea3',
		},
		secondary: {
			main: '#0163ae'
		},
		background: {
			default: "#fffcef"
		}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
		<ToastContainer
			theme="colored"
			position="top-right"
			autoClose={5000}
			limit={3}
			newestOnTop
			hideProgressBar={false}
			pauseOnFocusLoss={false}
			closeOnClick
			pauseOnHover
		/>
	</React.StrictMode>,
)
