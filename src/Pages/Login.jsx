import React, { useState, useEffect } from 'react'

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

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
    };

    return (
        <div className='login'>
            <section className="heading">
                <h1><i className="fa-solid fa-right-to-bracket"></i> Login</h1>
                <p>Please login to your account</p>
            </section>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Your email" />
                <label htmlFor="password">Enter your password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} placeholder="Your password" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
