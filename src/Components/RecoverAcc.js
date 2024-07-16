import React, { useRef } from 'react'
import './RecoverAcc.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export default function RecoverAcc() {
    const navigate = useNavigate();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ih5tfhq', 'template_l0pywbw', form.current, {
                publicKey: 'JnJP3sWCXnkUMfiNm',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("OTP Sent");
                    setTimeout(() => {
                        navigate('/SubmitOTP');
                    }, 1 * 1000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("OTP Not Sent");
                },
            );      
    };

    return (
        <>
            <div className="recover-acc-parent">
                <div className="recover-acc-heading">
                    <h2>Recover your Account</h2>
                </div>
                <div className="form-em-name">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Enter your Name' /> <br />
                        <input type="email" name="user_email" placeholder='Enter your Email' />
                        <div className="submit-btn">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
