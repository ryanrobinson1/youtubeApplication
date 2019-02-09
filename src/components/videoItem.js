import React from "react";

const VideoItem = props => {
  return (
    <div
      onClick={() => {
        props.onVideoSelected(props.video);
      }}
      className="item video-item"
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />

      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
        {/* <div className="description">
          <p>{props.video.snippet.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default VideoItem;
