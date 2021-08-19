import axios from "axios";
//const apikey = "ce2cd2a272535ed78b02d47570778045";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
