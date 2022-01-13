import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async popularVideos() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items;
  }
}
export default Youtube;
