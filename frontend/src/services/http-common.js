import axios from "axios";
export default axios.create({
  baseURL: "https://backend-ensolvers.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});