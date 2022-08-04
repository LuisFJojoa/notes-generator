import axios from "axios";
export default axios.create({
  //  baseURL: "https://backend-ensolvers.herokuapp.com/api",
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json"
  }
});