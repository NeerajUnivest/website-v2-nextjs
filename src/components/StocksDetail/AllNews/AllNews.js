import React, { useState, useEffect } from 'react'
import axios from "axios";
import Image from 'next/image'
import forEmpty from '../../../assets/img/forEmpty.webp'
import NewsCard from '../../../elements/NewsCard/NewsCard';

function AllNews({ name }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/news?fin-code=${name}`)
            .then((res) => setData(res.data))
    }, [name]);

    return (
        <div className='mx-4 mt-2 min-h-[86vh]'>
            {data[0] ? data.map((ele, i) => {
                return data[0] && <NewsCard data={ele} name={name} key={i} />
            }) : <div className='pt-16'>
                <Image src={forEmpty} alt='icon' className='mx-auto' width={250} />
                <div className='text-center font-Inter text-[16px] landing-[28px] text-black font-semibold mt-3'>
                    Nothing to show for now
                </div>
                <div className='text-center font-Inter text-[12px] landing-[18px] text-[#414141] mt-2'>
                    Don’t worry we’l keep you posted
                </div>
            </div>}
        </div>)
}

export default AllNews