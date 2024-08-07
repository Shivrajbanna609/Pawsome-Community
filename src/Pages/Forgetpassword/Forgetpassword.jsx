import React from 'react'

function Forgetpassword() {
    return (
        <>
            <div className='main'>
                <form class="login">
                    <div className='l-title'>
                        <div className='logo-1'>
                            {/* <img src={require('../assets/Login_dog.png')} alt="" /> */}
                        </div>
                    </div>
                    <h2>FORGET PASSWORD</h2>
                    <p>Enter the email associated with your account and we’ll send an email with instruction to reset your password  </p>
                    <input type="password" placeholder="Enter Address" />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Forgetpassword;