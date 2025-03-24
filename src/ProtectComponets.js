import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import Auth from './AuthContext.js'

const ProtectComponent = ({ children }) => {

    const auth = useContext(Auth);
    if (auth.user) {
        return { children }
    }

    return <Navigate to='/login' replace></Navigate>
};

export default ProtectComponent;
