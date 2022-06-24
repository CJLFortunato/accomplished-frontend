import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { login, reset } from '../Features/Auth/authSlice';
import { Spinner } from '../Components/Spinner';

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

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

        dispatch(reset());

    }, [user, isError, isLoading, isSuccess, message, navigate, dispatch]);

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

        const userData = {
            email,
            password
        };

        dispatch(login(userData));

    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className='login'>
            <section className="heading">
                <h1><i className="fa-solid fa-right-to-bracket"></i> Login</h1>
                <p>Please login to your account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
