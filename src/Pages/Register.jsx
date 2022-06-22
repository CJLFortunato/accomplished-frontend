import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register, reset } from '../Features/Auth/authSlice';
import { Spinner } from '../Components/Spinner';

export function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {

        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset);

    }, [user, isError, isLoading, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => {
            return ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            };
            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className='register'>
            <section className="heading">
                <h1><i className="fa-solid fa-user"></i> Register</h1>
                <p>Please create an account</p>
            </section>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Enter your name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} placeholder="Your name" />
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Your email" />
                <label htmlFor="password">Enter your password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} placeholder="Your password" />
                <label htmlFor="password2">Confirm your password</label>
                <input type="password" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm your password" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
