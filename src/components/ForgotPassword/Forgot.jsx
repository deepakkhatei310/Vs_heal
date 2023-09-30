import React from 'react'

const Forgot = () => {
    return (
        <>
            <div className="main_market">
            </div>
            <div className="forgot_card my-5">
                <div className="container">
                    <form className='forgot_form'>
                        <div className="forgot_form_head">
                            <h1>Lost password</h1>
                            <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Username or email</label>
                            <input type="text" className="form-control" name='forgotpass' placeholder='Username or email'/>
                        </div>
                        <button type="submit" className="btn btn-success btn_lsot">Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forgot
