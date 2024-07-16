import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css';

export default function LoginSignUp(props) {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [type, setType] = useState('password');
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        navigate('/RecoverAcc');
    }

    const handleSignUpNow = () => {
        navigate('/SignUpForm');
    }

    const RememberMe = (event) => {
        if (email === '' || password === '') {
            alert("Fill the details properly");
        } else {
            setIsChecked(event.target.checked);
        }
    };

    const handleLogin = (e) => {
        const email_val = setEmail(e.target.value);
        const password_val = setPassword(e.target.value);
        if (email_val === props.user.email && password_val === props.user.password) {
            alert("Logged-In Successfully");
            setTimeout(() => {
                navigate('/Quiz');
            }, 0.5 * 1000);
        } else {
            alert("Incorrect Email or Password");
        }
    }

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to Log-Out") === true) {
            localStorage.removeItem(props.user);
            setTimeout(() => {
                alert("Log-Out was Successful");
            }, 0.5 * 1000);
        }
    }

    const handleShowPassword = () => {
        
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    }
   
    return (
        <>
            <div className="navbar-prnt">
                <div className="navbar-hd">
                    <h2>LOGIN</h2>
                </div>
                <div className="email-pass">
                    <input type="email" name='email' placeholder='Email Address' />
                    <input type={type} id='pass' onChange={handleShowPassword} name='password' placeholder='Password' />
                </div>
                <div className="show-pass">
                    <button disabled={!inputValue} onClick={handleShowPassword}>Show Password</button>
                </div>
                <div className="remember-me">
                    <input type="checkbox" checked={isChecked} onChange={RememberMe} />
                    <label htmlFor="">Remember Me</label>
                    <p onClick={handleForgotPassword}>Forgot Password?</p>
                </div>
                <div className="btn">
                    <button onClick={handleLogin}>LOGIN</button>
                    <button onClick={handleLogout}>LOGOUT</button>
                </div>
                <div className="msg">
                    <p>Not a member? <span onClick={handleSignUpNow}>SignUp Now</span></p>
                </div>
            </div>
        </>
    )
}
