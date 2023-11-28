/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import axiosInterceptorInstance from '@/elements/axiosInterceptorInstance';

export const useGetAxios = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async (url) => {
        axiosInterceptorInstance.get(url)
            .then(res => {
                setLoading(false)
                setData(res.data);
            })
    }, []);
    return { fetchData, data, loading };
};