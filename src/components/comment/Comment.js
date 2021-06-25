import moment from "moment";
import React from "react";
import './_comment.scss';

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment__body">
          <p className="mb-1 comment__header">
              Sumit Day • {moment('2020-05-06').fromNow()}
          </p>
          <p className='mb-0'>Nice Video DUDE!!!</p>
      </div>
    </div>
  );
};

export default Comment;
