import React from 'react'
import './loginScreen.scss'

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <h2>YouTube Clone</h2>
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button>Login With Google</button>
                <p>This Projects is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
