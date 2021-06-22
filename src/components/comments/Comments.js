import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
  const handleComment = () => {};

  return (
    <div className='comments'>
       <p>1234 Comments</p>
       <div className='my-2 comments__form d-flex w-100'>
       <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          className="rounded-circle mr-3"
          alt=""
        />
          <form onSubmit={handleComment} className='d-flex flex-grow-1'>
             <input
                type='text'
                className='flex-grow-1'
                placeholder='Write a comment...'
                // value={text}
                // onChange={e => setText(e.target.value)}
             />
             <button className='p-2 border-0'>Comment</button>
          </form>
       </div>
       <div className="comments__list">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
 )
};

export default Comments;
