import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className='main'>
                <form class="login">
                    <div className='l-title'>
                        <div className='logo-1'>
                            {/* <img src={require('../assets/Login_dog.png')} alt="" /> */}
                        </div>
                    </div>
                    <h2>SIGN UP</h2>
                    <p>Enter your credential to continue</p>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="submit" value="Sign Up" />
                    <div class="links">
                        <span>Already have an account ? </span>
                        <Link to="/SignIn"><a href="#">Sign In</a></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;