import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
    const isAuthenticated = localStorage.getItem("isLoggedin");

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
