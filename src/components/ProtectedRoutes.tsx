import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/shared-methods";

const ProtectedRoutes = (props) => {
    const location = useLocation();
    const isAuthenticated = useAuth();
    if (props.loggedIn) {
        return isAuthenticated ?
            <Outlet />
            :
            <Navigate to="/login" replace state={{ from: location }} />
    } else {
        return !isAuthenticated ?
            <Outlet />
            :
            <Navigate to="/Inicio" />
    }
}

export default ProtectedRoutes;