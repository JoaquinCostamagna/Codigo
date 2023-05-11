import { useState, createContext, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from './utils/shared-methods';
import './App.scss'
import LandingPage from './pages/LandingPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import { Box } from '@mui/material';

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		console.log('Se monta el app');
	}, [])


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
			<Box className='flex flex-col h-[100dvh] bg-skin-light'>
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<Login handleLogin={login} />} />
						<Route path="/register" element={<h1>Registrarse</h1>} />
					</Route>
					<Route element={<ProtectedRoutes loggedIn />}>
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
