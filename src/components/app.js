import React from "react";
import SearchBar from "./searchBar";
import VideosList from "./videosList";
import VideoPlayer from "./videoPlayer";
import YoutubeAPI from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ""
  };

  youtubeApiRequest = () => {};

  formSubmit = async term => {
    const response = await YoutubeAPI.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelected = video => {
    this.setState({ selectedVideo: video.id.videoId });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar formSubmit={this.formSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                listVideos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
