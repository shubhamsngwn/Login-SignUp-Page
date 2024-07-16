import React, { useState } from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

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

    const navigate = useNavigate();
    const [type, setType] = useState('password');
    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSignUpDetails = () => {
        if (name === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
            alert("Fill the details properly");
        }
        if (!isChecked) {
            alert('You must agree to the terms and conditions.');
        } else {
            localStorage.setItem('Name', name);
            localStorage.setItem('Email', email);
            localStorage.setItem('Phone', phone);
            localStorage.setItem('Password', password);
            localStorage.setItem('ConfirmPassword', confirmPassword);
            if (password === confirmPassword) {
                alert("Successfully Signed-In");
                setTimeout(() => {
                    navigate('/Quiz');
                }, 0.5 * 1000);
            } else {
                alert("Passwords don't Match... Please Enter Correct Details");
            }
        }
    }

    const handleCheckboxChange = (event) => {
        if (name === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
            alert("Fill the details properly");
        } else {
            setIsChecked(event.target.checked);
        }
    }

    const handleChangePassword = (e) => {
        setConfirmPassword(e.target.value);
        setInputValue(e.target.value);
    }

    const handleShowPassword = () => {
        if (name === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
            alert("Please fill all the details");
        } else {
            if (type === 'password') {
                setType('text');
            } else {
                setType('password');
            }
        }
    }

    return (
        <>
            <div className="navbar-parent">
                <div className="navbar-head">
                    <h2>SIGN-UP</h2>
                </div>
                <div className="inputs">
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <input type={type} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type={type} onChange={handleChangePassword} placeholder='Confirm Password' value={confirmPassword} required />
                </div>
                <div className="pass-show">
                    <button disabled={!inputValue} onClick={handleShowPassword}>Show Password</button>
                </div>
                <div className="terms-conditions">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <p>I Agree To The Terms And Conditions</p>
                </div>
                <div className="signup-btn">
                    <button disabled={setIsChecked === 'true'} onClick={handleSignUpDetails}>SIGNUP</button>
                </div>
            </div>
        </>
    )
}
