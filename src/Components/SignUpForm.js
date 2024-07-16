import React, { useState } from 'react';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';
import LoginSignUp from './LoginSignUp';

const SignUp = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert(`Passwords Don't Match... Please Enter Correct Passwords`);
        } else {
            const currentUser=JSON.parse(localStorage.getItem('user'))||[];
            currentUser.push(user);
            localStorage.setItem('user', JSON.stringify(currentUser));
            alert('Registration Successful');
            setTimeout(() => {
                navigate("/");
            }, 1 * 1000);
        }
    };
    return (
        <>
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder='Name' value={user.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder='Email' value={user.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="number" id="phone" name="phone" placeholder='Phone' value={user.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" id="password" name="password" placeholder='Password' value={user.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="password" id="confirmPassword" placeholder='Confirm Password' name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <LoginSignUp data={user}/>
        </>
    );
};

export default SignUp;
