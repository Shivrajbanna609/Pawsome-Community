import React from 'react'

function Changepassword() {
    return (
        <>
            <div className='main'>
                <form class="login">
                    <div className='l-title'>
                        <div className='logo-1'>
                            {/* <img src={require('../assets/Login_dog.png')} alt="" /> */}
                        </div>
                    </div>
                    <h2>CHANGE PASSWORD</h2>
                    <p>Your new password must be different from used passwords  </p>
                    <input type="password" placeholder="Password" />
                    <label htmlFor="">Must be at least 8 character</label>
                    <input type="password" placeholder="Confirm Password " />
                    <label htmlFor="">Both password must match</label>
                    <input type="submit" value="Reset Password" />
                </form>
            </div>
        </>
    )
}

export default Changepassword;