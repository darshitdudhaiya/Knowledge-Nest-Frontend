import axios from "axios";
import { environment } from "../environment/Environment";


const instance = axios.create({
    baseURL: `${environment.baseurl}`
});

instance.interceptors.request.use((config) => {
    const authToken = localStorage.getItem('token');
    config.params = config.params || {};
    config.headers['Authorization'] = `Bearer ${authToken}`;
    return config;
})

export default instance;