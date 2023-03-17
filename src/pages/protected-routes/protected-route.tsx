import { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {UserContext} from '../../App';

export default function ProtectedRoute(){
    // const userInfo = localStorage.getItem('user')||'';
    // const [user, setUser] = useState(userInfo);
 
    const {user} = useContext<any>(UserContext);
    return(
        <>
            {user?<Outlet />: <Navigate to="login" />}
            
        </>
    )
}