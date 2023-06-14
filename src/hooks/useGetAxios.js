/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.apiBaseURL;
export const useGetAxios = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async (url) => {
        axios.get(url).then(res => {
            setLoading(false)
            setData(res.data);
        })
    }, []);
    return { fetchData, data, loading };
};