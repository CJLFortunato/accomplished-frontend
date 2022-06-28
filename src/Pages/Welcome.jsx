import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function Welcome() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate, dispatch]);

    return (
        <div className='welcome'>
            <h1>Welcome to Accomplished!</h1>
            <p>Accomplished is a website where you can log all your greatest achievements and everything you accomplished, no matter how small.</p>
            <p>Sign up today to celebrate your accomplishments!</p>
            <div className="links-ctn">
                <Link to='/login'>
                    Login
                </Link>
                <Link to='/register'>
                    Register
                </Link>
            </div>
        </div>
    )
}
