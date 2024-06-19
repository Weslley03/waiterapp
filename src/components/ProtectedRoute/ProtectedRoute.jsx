import React from "react";
import { Navigate, Outlet, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute(){
    
    const token = Cookies.get('token');
    const userCategory = localStorage.getItem('categoria')
    const { categoria } = useParams();

    if(!token){
        return <Navigate to='/Auth'/>
    }

    if(categoria && userCategory !== categoria){
        return <Navigate to='/not-authorized'/>
    }

    return(
        <Outlet />
    )
}

export default ProtectedRoute;