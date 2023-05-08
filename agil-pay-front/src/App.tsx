import { useState } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './App.scss'
import LandingPage from './pages/LandingPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';

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
			navigate('/home');
		}
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login handleLogin={login} />} />
				<Route path="/register" element={<h1>Registrarse</h1>} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/About" element={<h1>About</h1>} />
					<Route path="/Profile" element={<h1>Profile</h1>} />
					<Route path="/*" element={<h1>Not found</h1>} />
				</Route>
			</Routes>
		</>
	)
}

export default App
