import React from "react";

const VideoPlayer = props => {
  if (!props.selectedVideo) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={props.selectedVideo} src={videoSrc} />
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <iframe src={"#"} />
  //   </div>
  // );
};

export default VideoPlayer;
