import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/action/auth.action'
import './loginScreen.scss'

const LoginScreen = () => {
    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect(() => {
        if(accessToken) {
            history.push('/')
        }
    }, [accessToken, history])

    return (
        <div className="login">
            <div className="login__container">
                <h2>YouTube Clone</h2>
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick = {handleLogin}>Login With Google</button>
                <p>This Projects is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
