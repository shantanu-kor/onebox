import React, { useEffect } from 'react';
import logo from '../assets/Login/Header.png';
import LoginCard from '../components/LoginCard';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { search } = useLocation();

    const params = new URLSearchParams(search);
    const token = params.get('token');
    if (token) {
        localStorage.setItem("token", token);
    }
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(authActions.setTrue());
            navigate('/');
        }
    }, []);

    return (
        <div className='bg-black'>
            <img src={logo} className="mx-auto border-b-[1px] border-[#343A40] md:w-full" />
            <br />
            <br />
            <LoginCard />
        </div>
    )
}

export default Login;