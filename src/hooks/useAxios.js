/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
// import redInfo from "../assets/redInfo.svg";

axios.defaults.baseURL = 'https://api.univest.in';
export const useAxios = (axiosParams) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = useCallback(async () => {
        axios.request({
            ...axiosParams,
        }).then(res => {
            setData(res.data);
        }).catch(err => {
            // utils.setFeedback({
            //     show: true,
            //     icon: redInfo,
            //     text: `Something went wrong. Try again later`,
            //     style: "border-[#EB4E2C] bg-[#FFF7F5]",
            // })
        }).finally(() => setLoading(false))
    }, []);
    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading };
};