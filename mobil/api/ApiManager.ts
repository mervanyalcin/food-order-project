import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'http://192.168.1.105:5000/api',
    responseType: 'json',
    withCredentials: true
})

export default ApiManager