import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
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
