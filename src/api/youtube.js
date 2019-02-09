import Axios from "axios";

const KEY = "AIzaSyD92E-273REX3w-oTK76J3WNKeFLp62F-g";

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
