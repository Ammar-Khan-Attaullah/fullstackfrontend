import axios from "axios";

const api = axios.create({
    baseURL: "https://fullstackbackend-api.herokuapp.com/",
    // baseURL:'http://localhost:8000'
});

export default api;