import { useState } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './App.scss'
import LandingPage from './pages/LandingPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';

function App() {

	const [user, setUser] = useState({});

	const location = useLocation();
	const navigate = useNavigate();

	const login = (token: string) => {
		setUser({
			authToken: token,
			username: 'Joaquin',
		});
		localStorage.setItem('token', token);
		console.log(location);
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
	}

	return (
		<>
			<Box className='flex flex-col h-[100dvh] bg-skin-light'>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login handleLogin={login} />} />
					<Route path="/register" element={<h1>Registrarse</h1>} />
					<Route element={<ProtectedRoutes />}>
						<Route element={<NavBar handleLogout={logout} />}>
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
		</>
	)
}

export default App
