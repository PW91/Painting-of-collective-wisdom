import axios from "axios";

const api = {};

api.getItems = () => {
  return axios.get("/api/items");
};

api.postItem = item => {
  return axios.post("/api/items", {
    word: item.word,
    color: item.color,
    x: item.x,
    y: item.y,
    deg: item.deg,
    size: item.size,
    font: item.font
  });
};

api.deleteItem = id => {
  return axios.delete(`/api/items/${id}`);
};

export default api;
