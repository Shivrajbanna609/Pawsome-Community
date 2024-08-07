import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='main'>
                <form class="login">
                    <div className='l-title'>
                        <div className='logo-1'>
                            <img src={require('../../assets/cat_face_main_page.png')} alt="" />
                        </div>
                    </div>
                    <h2>SIGN IN</h2>
                    <p>Enter your e-mail and password </p>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div class="links">
                        <a href="#">Forgot Password ! </a>
                    </div>
                    <input type="submit" value="Sign In" />
                    <div class="links">
                        <span>Don’t have an account ? </span>
                        <Link to="/SignUp"><a href="#">Sign Up</a></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;