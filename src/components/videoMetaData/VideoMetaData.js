import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="VideoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2020-05-06").fromNow()}
          </span>

          <div>
            <span className="mr3">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
            </span>
            <span className="mr3">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            class="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Backbench coder</span>
            <span>{numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="VideoMetaData__description">
        <ShowMoreText 
        lines={3}
        more="SHOW MORE"
        less="SHOW LESS"
        anchorClass="showMoreText"
        expanded={false}
        >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt error
        at placeat commodi deleniti ad fugiat facere nisi veniam, a earum
        officiis sed sunt recusandae ab? Porro, expedita pariatur enim, ex
        similique a dicta fugit omnis nulla nemo est vero suscipit quam
        repellendus obcaecati animi praesentium quae ratione, accusantium alias!
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
