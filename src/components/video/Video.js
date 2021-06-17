import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFbVeOdpHjPmjEkLBCOpvPJC5eMg" alt="" />
                <span>10:23</span>
            </div>
            <div className="video__title">
                Create app is 5 minutes #made by chintu
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5m views •
                </span>
                <span> 5 day ago</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwngXVUOK3DI8g8BHFPtX7Gei9nok-D7yPAkUAo33=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
