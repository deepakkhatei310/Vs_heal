import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add('right-panel-active');
            });
            signInButton.removeEventListener('click', () => {
                container.classList.remove('right-panel-active');
            });
        };
    }, []);

    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const toggleSignUp = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    return (
        <>
            <div className="main_market">
            </div>
            <div className="from_container my-5">
                <div class="container signupthis" id="container">
                    <div class="form-container sign-up-container">
                        <form action="/" className="create_form">
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <Link to="/" class="social"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="/" class="social"><i class="fab fa-google-plus-g"></i></Link>
                                <Link to="/" class="social"><i class="fab fa-linkedin-in"></i></Link>
                            </div>
                            <span>or use your email for registration</span>
                            <input className="my_input" type="text" placeholder="Name" />
                            <input className="my_input" type="email" placeholder="Email" />
                            <input className="my_input" type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="/" className="create_form">
                            <h1>Sign in</h1>
                            <div class="social-container">
                                <Link to="/" class="social"><i class="fab fa-facebook-f"></i></Link>
                                <Link to="/" class="social"><i class="fab fa-google-plus-g"></i></Link>
                                <Link to="/" class="social"><i class="fab fa-linkedin-in"></i></Link>
                            </div>
                            <span>or use your account</span>
                            <input className="my_input" type="email" placeholder="Email" />
                            <input className="my_input" type="password" placeholder="Password" />
                            <Link to="/forgotpassword">Forgot your password?</Link>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={toggleSignUp}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={toggleSignUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
