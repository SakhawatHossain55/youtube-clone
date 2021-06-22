import moment from "moment";
import numeral from "numeral";
import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import "./_videoMetaData.scss";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(100000).format("0.a")} views •
            {moment("2020-06-6").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(100000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(100000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex align-items-center justify-content-between my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Backbench Coder</span>
            <span>{numeral(100000).format("0.a")} Subscriber</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText 
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          hic explicabo labore amet sint dolorem reiciendis inventore laboriosam
          voluptatibus iusto, molestiae accusantium quaerat rerum similique
          aliquid non quos corrupti eaque est odit suscipit quisquam corporis!
          Ab modi libero sit sapiente doloremque nobis porro, minima est enim
          doloribus. Illum, eaque tempore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          hic explicabo labore amet sint dolorem reiciendis inventore laboriosam
          voluptatibus iusto, molestiae accusantium quaerat rerum similique
          aliquid non quos corrupti eaque est odit suscipit quisquam corporis!
          Ab modi libero sit sapiente doloremque nobis porro, minima est enim
          doloribus. Illum, eaque tempore?
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
