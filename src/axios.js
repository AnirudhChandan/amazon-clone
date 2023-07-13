import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/challenge-940e1/us-central1/api", //The API (cloud Function) URL
});

export default instance;
