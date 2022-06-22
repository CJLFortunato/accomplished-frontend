import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout, reset } from '../Features/Auth/authSlice';

export function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header>
            <div className='logo'>
                <Link to='/'>Achievements</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button onClick={onLogout}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                        </button>
                    </li>) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <i className="fa-solid fa-right-to-bracket"></i>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <i className="fa-solid fa-user"></i>
                                Register
                            </Link>
                        </li>
                    </>)}

            </ul>
        </header >
    )
}
