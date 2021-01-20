import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID s5RnyeXEqh2XhwzuEqWnHGuZPvrUgImj9ZoWWWXYBSI",
  },
});
