import moment from 'moment'
import React from 'react'
import './_comment.scss'

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="rounded-circle mr-3"
            alt="" 
            />
            <div className="comment__body">
                <p className="comment_header mb-1">
                    Sumit Dey • {moment("2020-09-09").fromNow()}
                </p>
                <p className="mb-0">Nice Video DUDE!!</p>
            </div>
        </div>
    )
}

export default Comment
