import "./videoItem.css";
import React from "react";
import VideoItem from "./videoItem";

const VideosList = props => {
  const newArr = props.listVideos.map(function(video) {
    return (
      <VideoItem
        video={video}
        onVideoSelected={props.onVideoSelected}
        key={video.id.videoId}
      />
    );
  });

  return <div className="ui relaxed divided list">{newArr}</div>;
};

export default VideosList;
