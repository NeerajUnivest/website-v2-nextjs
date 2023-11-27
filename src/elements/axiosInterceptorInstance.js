import axios from 'axios';
import Actions from './Actions';


const axiosInterceptorInstance = axios.create({
    baseURL: 'https://uat-api.univest.in/', // Replace with your API base URL
});

axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        if (Actions.getCookie("auth_token")) {
            if (config.headers) config.headers = { 'Authorization': `Bearer ${Actions.getCookie("auth_token")}` };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;