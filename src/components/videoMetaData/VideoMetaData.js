import moment from "moment";
import numeral from "numeral";
import React from "react";
import { useEffect } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ShowMoreText from "react-show-more-text";
import { getChannelDetails } from "../../redux/action/channel.action";
import "./_videoMetaData.scss";

const VideoMetaData = ({ video, videoId }) => {

  // const { channelId, channelTitle, description, title, publishedAt } = snippet
  // const { viewCount, likeCount, dislikeCount } = statistics
console.log(video?.statistics.dislikeCount);
  console.log(video?.snippet.channelId);

  const dispatch = useDispatch();

  // const {snippet, channelSnippet} = useSelector(state => state.getChannelDetails.channel) 

  useEffect(() => {
    dispatch(getChannelDetails(video?.snippet.channelId))
  },[dispatch, (video?.snippet.channelId)])

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{video?.snippet.title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(video?.statistics.viewCount).format("0.a")} views •
            {moment(video?.snippet.publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(video?.statistics.likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(video?.statistics.dislikeCount).format("0.a")}
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
            <span>{video?.snippet.channelTitle}</span>
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
            expanded={false}>
         {video?.snippet.description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
