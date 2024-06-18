import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute(){
    
    const token = Cookies.get('token');

    return(
        token ? <Outlet /> : <Navigate to='/auth'/>
    )
}

export default ProtectedRoute;