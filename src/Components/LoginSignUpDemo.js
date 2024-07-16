// Login.js

import React, { useState } from 'react';
import './LoginSignUpDemo.css'; // Import CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === hash(password)) {
            setIsLoggedIn(true);
            setError('');
            // Redirect or set authenticated state as needed
        } else {
            setError('Invalid email or password');
            setIsLoggedIn(false);
        }
    };

    const hash = (password) => {
        // Replace with actual secure hashing function like bcrypt
        return password; // For demonstration, actual hash function should be used
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    if (isLoggedIn) {
        return (
            <div className="loggedIn">
                <h2>Welcome!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
