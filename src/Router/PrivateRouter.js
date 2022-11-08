import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <button className="btn loading">loading</button>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;