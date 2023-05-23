import { useState, createContext, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from './utils/shared-methods';
import { PaletteMode, ThemeProvider } from '@mui/material'
import { ThemeOptions, createTheme } from '@mui/material/styles'
import './App.scss'
import LandingPage from './pages/LandingPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';

function App() {
	const [user, setUser] = useState({});
	const onLoadMode = localStorage.getItem('darkMode');

	const [darkMode, setDarkMode] = useState(onLoadMode === 'true' ? true : false);


	useEffect(() => {
		if (darkMode) document.body.classList.add('dark');
		console.log('Se monta el app');
	}, [])

	const getDesignTokens = (mode: PaletteMode) => ({
		palette: {
			mode,
			...(mode === 'light'
				? {
					// palette values for light mode
					primary: { main: '#40e0d0' },
					secondary: { main: '#0163ae' }
				}
				: {
					// palette values for dark mode
					primary: { main: '#40e0d0', },
					secondary: { main: '#0163ae' }
				}),
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
				'"Segoe UI Symbol"',
			].join(','),
		},
	});

	const theme = createTheme(getDesignTokens(darkMode ? 'dark' : 'light'));


	const toggleDarkMode = () => {
		const isDarkMode = !darkMode;
		localStorage.setItem('darkMode', isDarkMode.toString())
		setDarkMode(isDarkMode);
		document.body.classList.toggle('dark');
	}

	const location = useLocation();
	const navigate = useNavigate();

	const login = (token: string, loggedUser: any) => {
		const newUser = {
			authToken: token,
			...loggedUser
		}
		setUser(newUser);
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify(newUser));
		if (location.state?.from) {
			navigate(location.state.from);
		}
		else {
			navigate('/Inicio');
		}
	}

	const logout = () => {
		setUser({});
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Box className='flex flex-col h-[100dvh] bg-skin-background'>
					<Routes>
						<Route element={<ProtectedRoutes />}>
							<Route path="/" element={<LandingPage />} />
							<Route path="/login" element={<Login handleLogin={login} />} />
							<Route path="/register" element={<h1>Registrarse</h1>} />
						</Route>
						<Route element={<ProtectedRoutes loggedIn />}>
							<Route element={<NavBar handleLogout={logout} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
								<Route path="/Inicio" element={<h1>Inicio</h1>} />
								<Route path="/Perfil" element={<h1>Perfil</h1>} />
								<Route path="/Actividad" element={<h1>Actividad</h1>} />
								<Route path="/Operaciones" element={<h1>Operaciones</h1>} />
								<Route path="/Transferir" element={<h1>Transferir</h1>} />
								<Route path="/*" element={<h1>Not found</h1>} />
							</Route>
						</Route>
					</Routes>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default App
