import axios from "axios";

const API = axios.create({

   baseURL: "http://localhost:5000/api/auth" || process.env.API_URL,

});

export default API;