import { useState, useEffect, memo } from 'react';
import Marquee from "react-fast-marquee";

import axios from "axios";
import { host } from '../../Config';

const ltpClosePrice = (ltp, close) => {
    return (ltp - close)?.toFixed(1);
}

const nseBsePrice = (nseLtpPrice, nseClosePrice, bseLtpPrice, bseClosePrice) => {
    if (nseLtpPrice) {
        return <div className={`text-[14px] leading-[20px] font-semibold flex flex-row 
                    ${ltpClosePrice(nseLtpPrice, nseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(nseLtpPrice, nseClosePrice)}({Math.abs(ltpClosePrice(nseLtpPrice, nseClosePrice) * 100 / nseClosePrice).toFixed(1)}%)
        </div>
    } else {
        return <div className={`text-[14px] leading-[20px] font-semibold flex flex-row
                    ${ltpClosePrice(bseLtpPrice, bseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(bseLtpPrice, bseClosePrice)}({Math.abs(ltpClosePrice(bseLtpPrice, bseClosePrice) * 100 / bseClosePrice).toFixed(1)}%)
        </div>
    }
}

const Ticker = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = () => {
        axios.get(`${host}/resources/stock-details/indian-main-indices`)
            .then((res) => setData(res.data?.data.list))
    }
    return (
        <Marquee
            speed={30}
            delay={3}
            pauseOnHover
            gradientColor={[21, 30, 40]}
            gradientWidth={20}
            onCycleComplete={apiCall}
            className='z-10 py-1 overflow-hidden bg-[#151e28]'>
            {data?.map((ele, i) => (
                <div className='px-3 whitespace-nowrap flex flex-row border-r select-none cursor-pointer' key={i}>
                    <div className='font-Inter font-medium text-[16px] leading-[22px] text-[#fff] mx-1' >
                        {ele.compName}
                    </div>
                    <div className='font-Inter leading-[20px] font-medium text-[14px] text-[#fff] mx-2'>
                        {ele.nseLtpPrice ? ele.nseLtpPrice : ele.bseLtpPrice}
                    </div>
                    {nseBsePrice(ele.nseLtpPrice, ele.nseClosePrice, ele.bseLtpPrice, ele.bseClosePrice)}
                </div>
            ))}
        </Marquee>
    )
}


export default memo(Ticker);