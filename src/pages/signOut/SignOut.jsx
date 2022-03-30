import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
    let navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('jwt');
        navigate('/SignIn');
    },[]);
    return null;
};
