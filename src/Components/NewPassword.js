import React, { useState } from 'react'
import './NewPassword.css';
import { useNavigate } from 'react-router-dom';

export default function NewPassword() {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = () => {
        if (newPassword === '' || confirmPassword === '') {
            alert("Please Fill the Details Properly");
        } else {
            if (newPassword === confirmPassword) {
                localStorage.setItem("New Password", newPassword);
                localStorage.setItem("Confirm New Password", confirmPassword);
                alert("Password Changed Successfully");
                setTimeout(() => {
                    navigate('/');
                }, 0.5 * 1000);
            } else {
                alert("Passwords don't Match... Please Enter Correct Details");
            }
        }
    }

    return (
        <>
            <div className="prnt-navbar">
                <div className="hd-navbar">
                    <h2>Set New Password</h2>
                </div>
                <div className="password-inputs">
                    <input type="text" onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' />
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm New Password' />
                </div>
                <div className="change-password-btn">
                    <button onClick={handleChangePassword}>Change Password</button>
                </div>
            </div>
        </>
    )
}
