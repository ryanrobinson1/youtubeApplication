import Axios from "axios";

const youtubeApi = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 10000,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

export default youtubeApi;
