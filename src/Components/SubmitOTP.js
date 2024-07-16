import React from 'react'
import './SubmitOTP.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function RecoverAcc(props) {
    const navigate = useNavigate();

    const handleOTP = () => {
        alert("Successfully Logged-In");
        setTimeout(() => {
            navigate("/NewPassword");
        }, 1 * 1000);
    }
    
    return (
        <>
            <div className="verification-parent">
                <div className="verification-heading">
                    <h2>Verification</h2>
                </div>
                <div className="otp">
                    <TextField fullWidth type='number' label="Enter the OTP" id="otp-input" InputProps={{
                        inputProps: { min: 100000, max: 999999 }
                    }}/>
                </div>
                <div className="submit-otp-btn">
                    <button onClick={handleOTP}>Verify OTP</button>
                </div>
            </div>
        </>
    )
}
