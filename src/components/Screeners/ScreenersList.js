/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from "axios";
import ScreenerCard from './ScreenerCard'
import LazyScreenersList from './LazyScreenersList';

export default function ScreenersList({ data }) {

    const [screener, setScreener] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        // utils.changeTitle('Screeners')
        // window.scroll(0, 0);
        // axios.get(`https://uat-api.univest.in/resources/screeners/v2`)
        //     .then((res) =>
        //         setScreener(res.data.data.list)
        //     ).then(() => setTimeout(() => setLoading(false), 200))
    }, []);

    return (
        <div className='relative'>

            {loading ? <LazyScreenersList />
                :
                data.screenersCategories?.map((cat, i) =>
                    <div className='font-Inter flex flex-col mt-4  lg:mt-6' key={i}>
                        <div className='font-semibold text-[#00439D] text-[16px] leading-[20px] lg:text-[32px] lg:leading-[40px]'>
                            {cat.categoryTitle}
                        </div>
                        <div className='font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                            {cat.categoryDescription}
                        </div>
                        <div className="my-2 lg:mt-4 lg:mb-6 flex flex-row overflow-x-auto no-scrollbar">
                            {data.screenersList?.filter(f => f.categoryId === cat.categoryId)?.map((ele, i) =>
                                <ScreenerCard key={i} data={ele} />
                            )}
                        </div>
                    </div>
                )}

        </div >
    )
}