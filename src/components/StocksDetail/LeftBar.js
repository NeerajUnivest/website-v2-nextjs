import { useEffect, useState, memo } from 'react';
import axios from "axios";
import moment from 'moment/moment';
import redArrow from '../../assets/icn/redArrow.png';
import greenArrow from '../../assets/icn/greenArrow.png';
import expertVerdictPhone from "../../assets/images/expertVerdictPhone.webp";
import DownloadNow from '../../elements/DownloadNow/DownloadNow';
import Image from 'next/image'



function LeftBar({ name, activeChartType, setActiveChartType }) {
    const [data, setData] = useState({});
    const [refresh, setRefresh] = useState(0);

    var time;
    useEffect(() => {
        if ((moment().format('H') >= 9) && (moment().format('H') <= 16)) {
            time = setInterval(() => setRefresh(refresh + 1), 5000)
            return () => clearInterval(time);
        }
    })
    useEffect(() => {
        let finCodes = [];
        finCodes.push(name);
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCodes}`)
            .then((res) => {
                if (res.data?.data?.list?.[0]) {
                    let obj = res.data?.data?.list?.[0]
                    setData(obj)
                }
            })
    }, [name, refresh]);

    const [dfBseLtpPrice, setDfBseLtpPrice] = useState(0);
    const [dfNseLtpPrice, setDfNseLtpPrice] = useState(0);
    useEffect(() => {
        setDfBseLtpPrice(data?.bseLtpPrice - data?.bseClosePrice)
        setDfNseLtpPrice(data?.nseLtpPrice - data?.nseClosePrice)
        data?.nseLtpPrice === null && setActiveChartType(2)
    }, [data])
    function stockUpDown(text, leading) {
        let key = activeChartType === 2 ? dfBseLtpPrice?.toFixed(2) : dfNseLtpPrice?.toFixed(2)
        switch (key > 0) {
            case true:
                return <div className={`flex flex-row font-Inter font-bold ml-2 mb-0.5 ${text} ${leading} tracking-[.5px] self-end text-[#26A649]`}>
                    <Image src={greenArrow} className='h-2.5 w-3 mr-1 mt-1.5' alt='icon' />
                    {activeChartType === 2 ?
                        data?.bseLtpPrice === null ? '- ' : dfBseLtpPrice?.toFixed(2) :
                        data?.nseLtpPrice === null ? '- ' : dfNseLtpPrice?.toFixed(2)}

                    ({activeChartType === 2 ?
                        data?.bseLtpPrice === null ? '-' : ((dfBseLtpPrice * 100) / data?.bseClosePrice)?.toFixed(2) + '%' :
                        data?.nseLtpPrice === null ? '-' : ((dfNseLtpPrice * 100) / data?.nseClosePrice)?.toFixed(2) + '%'})
                </div>
            case false:
                return <div className={`flex flex-row font-Inter font-bold ml-2 mb-0.5 ${text} ${leading} tracking-[.5px] self-end text-[#EB4E2C]`}>
                    <Image src={redArrow} className='h-2.5 w-3 mr-1 mt-1.5' alt='icon' />
                    {activeChartType === 2 ?
                        data?.bseLtpPrice === null ? '- ' : Math.abs(dfBseLtpPrice)?.toFixed(2) :
                        data?.nseLtpPrice === null ? '- ' : Math.abs(dfNseLtpPrice)?.toFixed(2)}

                    ({activeChartType === 2 ?
                        data?.bseLtpPrice === null ? '-' : ((dfBseLtpPrice * 100) / data?.bseClosePrice)?.toFixed(2) + '%' :
                        data?.nseLtpPrice === null ? '-' : ((dfNseLtpPrice * 100) / data?.nseClosePrice)?.toFixed(2) + '%'})
                </div>
        }
    }

    return <div className=' bg-white z-[9] sticky top-[74px] lg:top-[94px] pt-2'>
        <div className='mx-4 relative lg:pb-8'>
            <div className='mt-3 border border-1 p-2 rounded-md'>
                {data?.compName ?
                    <div className='flex flex-row'>
                        <div className='h-11 w-11 grid place-content-center mr-3'>
                            {data?.logoUrl === null || data?.logoUrl === '' ?
                                <div className='h-11 w-11 font-Inter font-extrabold text-[24px] text-[#606060] bg-[#ededed] text-center py-1 rounded-full '>
                                    {data?.compName && data?.compName?.slice(0, 1)}
                                </div> :
                                <div>
                                    <Image src={data?.logoUrl} alt='stock logo' width={44} height={44} />
                                </div>}
                        </div>
                        <div>
                            <div className='font-Inter font-extrabold text-[14px] text-[#0D0D0D] leading-[24px]'>
                                {data?.bseSymbol}
                            </div>
                            <div className='font-Inter font-medium text-[12px] text-[#858585] leading-[20px]'>
                                {data?.compName && data?.compName?.length > 25 ? data?.compName?.slice(0, 25) + '...' : data?.compName}
                            </div>
                        </div>
                    </div> : <div className="mr-20 bg-[#d9d9d9d9] rounded-lg px-3 py-3 h-[85px] animate-pulse"></div>}
                <div className='w-[60px] flex flex-row absolute top-2 right-2 mx-auto'>
                    <div className="w-full grid grid-cols-2 divide-x text-center">
                        {data?.nseLtpPrice &&
                            <div>
                                <button className={activeChartType === 1 ?
                                    'text-[#00439D] border-0 text-[12px] font-extrabold' : 'text-[#747474] text-[12px] font-medium'}
                                    onClick={() => setActiveChartType(1)}>
                                    NSE
                                </button>
                            </div>}
                        {data?.bseLtpPrice &&
                            <div>
                                <button className={activeChartType === 2 ? 'text-[#00439D] border-0 text-[12px] font-extrabold' :
                                    'text-[#747474] text-[12px] font-medium'}
                                    onClick={() => setActiveChartType(2)} >
                                    BSE
                                </button>
                            </div>}
                    </div>

                </div>
                {data?.compName &&
                    <div className={`ml-2 my-3 flex flex-row`}>
                        <div className='font-Inter font-extrabold text-[20px] text-black leading-[32px]'>
                            <span className='font-Robert'>₹</span>{activeChartType === 2 ? data?.bseLtpPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2 }) : data?.nseLtpPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </div>
                        {stockUpDown('text-[14px]', 'leading-[24px]')}
                    </div>}

                {(name < 100000000) && <div className=' p-3 hidden lg:flex'>
                    <button className='w-full text-[#FFFFFF] bg-[#00439D] outline-none rounded-[4px] py-1 font-medium border-[1px] border-[#FFFFFF]'>
                        Buy
                    </button>
                </div>}
            </div>
            <Image src={expertVerdictPhone} alt='kjvd' className='cursor-pointer w-full my-3' />
            <DownloadNow />
        </div>
    </div>
}
export default memo(LeftBar);