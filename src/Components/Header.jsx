import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/'>Achievements</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <i class="fa-solid fa-user"></i>
                        Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}
