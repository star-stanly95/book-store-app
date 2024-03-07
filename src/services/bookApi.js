import axios from 'axios';
import { get, post } from './api'

const BASE_URL = process.env.REACT_APP_BOOK_API_URL

const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Access-Control-Allow-Origin": "*" },
    withCredentials: true
});


const getEndPoint = async (endpoint, params = {}) => {
    try {
        const response = await get(api, endpoint, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const postEndPoint = async (endpoint, data = {}) => {
    try {
        const response = await post(api, endpoint, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getEndPoint, postEndPoint };