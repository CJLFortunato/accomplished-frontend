import React, { useState, useEffect } from 'react'

export function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = formData;

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
        <div className='register'>
            <section className="heading">
                <h1><i class="fa-solid fa-user"></i> Register</h1>
                <p>Please create an account</p>
            </section>
            <form onSubmit={onSubmit}>
                <label for="name">Enter your name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} placeholder="Your name" />
                <label for="email">Enter your email</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Your email" />
                <label for="password">Enter your password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} placeholder="Your password" />
                <label for="password2">Confirm your password</label>
                <input type="password" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm your password" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
