import React, { useEffect, useState } from 'react';
import axios from "axios";
import redArrow from '../../assets/icn/redArrow.png';
import greenArrow from '../../assets/icn/greenArrow.png';
import moment from 'moment/moment';
import Image from 'next/image'



function StocksHeader({ name, activeChartType, setActiveChartType }) {
    const [nseBseData, setNseBseData] = useState([]);
    const [data, setData] = useState({});
    const [refresh, setRefresh] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 24;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            !isVisible &&      // to limit setting state only the first time         
                setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    var time;
    useEffect(() => {
        if ((moment().format('H') >= 9) && (moment().format('H') <= 15)) {
            time = setInterval(() => setRefresh(refresh + 1), 5000)
            return () => clearInterval(time);
        }
    })
    useEffect(() => {
        let finCodes = [];
        finCodes.push(name);
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCodes}`)
            .then((res) => {
                let stockDatas = res.data?.data?.list?.[0]
                if (stockDatas) {
                    let obj = stockDatas
                    setData(obj)
                    setNseBseData([{},
                    {
                        ltpPrice: stockDatas.nseLtpPrice ? stockDatas.nseLtpPrice : '-',
                        closePrice: stockDatas.nseClosePrice ? stockDatas.nseClosePrice : '-',
                        dfPrice: stockDatas.nseLtpPrice - stockDatas.nseClosePrice
                    },
                    {
                        ltpPrice: stockDatas.bseLtpPrice ? stockDatas.bseLtpPrice : '-',
                        closePrice: stockDatas.bseClosePrice ? stockDatas.bseClosePrice : '-',
                        dfPrice: stockDatas.bseLtpPrice - stockDatas.bseClosePrice
                    }
                    ])
                }
            })
    }, [name, refresh]);

    function stockUpDown(text, leading) {
        return <div className={`flex flex-row font-Inter font-bold ml-2 mb-0.5 ${text} ${leading} tracking-[.5px] self-end
                ${nseBseData[activeChartType]?.dfPrice > 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'} `}>
            <Image src={nseBseData[activeChartType]?.dfPrice > 0 ? greenArrow : redArrow} className='h-2.5 mr-1 mt-1.5' width={10} alt='icon' />
            {(nseBseData[activeChartType]?.dfPrice)?.toFixed(2)}
            ({((nseBseData[activeChartType]?.dfPrice * 100) / nseBseData[activeChartType]?.closePrice)?.toFixed(2)})
        </div>
    }

    return <React.Fragment>

        <div className={`shadow font-Inter text-[12px] leading-[20px] text-[#0D0D0D] w-full h-[58px] flex flex-row fixed 
        top-[48px] lg:top-[94px] z-[2] bg-white justify-between px-4 ease-in-out duration-500 ${!isVisible && 'opacity-0 '}`}>
            <div className={`mt-2 mr-auto overflow-hidden`}>
                <div className={`flex flex-row ease-in-out duration-500 relative top-0 ${!isVisible && 'top-14 opacity-0'}`}>
                    <div>
                        <div className='font-Inter font-extrabold text-[14px] text-[#0D0D0D] leading-[24px]'>
                            {data?.nseSymbol ?? data?.bseSymbol}
                        </div>
                        <div className='flex flex-row'>
                            <div className='font-Inter font-extrabold text-[12px] text-black leading-[20px]'><span
                                className='font-Robert'>₹</span>
                                {nseBseData[activeChartType]?.ltpPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                            </div>
                            {stockUpDown('text-[12px]', 'leading-[20px]')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-4 mt-20 relative'>
            <div className='my-4'>
                {data.compName ?
                    <div className={`flex flex-row ease-in-out duration-500  ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
                        <div className='h-11 w-11 grid place-content-center mr-3'>
                            {data.logoUrl === null || data.logoUrl === '' ?
                                <div className='h-11 w-11 font-Inter font-extrabold text-[24px] text-[#606060] bg-[#ededed] text-center py-1 rounded-full '>
                                    {data.compName && data.compName.slice(0, 1)}
                                </div> :
                                <Image src={data.logoUrl} alt='stock logo' width={44} height={44} />}
                        </div>
                        <div>
                            <div className='font-Inter font-extrabold text-[14px] text-[#0D0D0D] leading-[24px]'>
                                {data.bseSymbol}
                            </div>
                            <div className='font-Inter font-medium text-[12px] text-[#858585] leading-[20px]'>
                                {data.compName && data.compName.length > 25 ? data.compName.slice(0, 25) + '...' : data.compName}
                            </div>
                        </div>
                    </div> : <div className="mr-20 bg-[#d9d9d9d9] rounded-lg px-3 py-3 h-[85px] animate-pulse"></div>}
                <div className={`ml-2 my-3 flex flex-row ease-in-out duration-500 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
                    <div className='font-Inter font-extrabold text-[20px] text-black leading-[32px]'>
                        <span className='font-Robert'>₹</span>
                        {nseBseData[activeChartType]?.ltpPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                    {stockUpDown('text-[14px]', 'leading-[24px]')}
                </div>
            </div>
            <div className='w-[60px] flex flex-row absolute bottom-0 right-0 mx-auto'>
                <div className="w-full grid grid-cols-2 divide-x text-center">
                    {data.nseLtpPrice &&
                        <div>
                            <button className={activeChartType === 1 ?
                                'text-[#00439D] border-0 text-[12px] font-extrabold' : 'text-[#747474] text-[12px] font-medium'}
                                onClick={() => setActiveChartType(1)}>
                                NSE
                            </button>
                        </div>}
                    {data.bseLtpPrice &&
                        <div>
                            <button className={activeChartType === 2 ? 'text-[#00439D] border-0 text-[12px] font-extrabold' :
                                'text-[#747474] text-[12px] font-medium'}
                                onClick={() => setActiveChartType(2)} >
                                BSE
                            </button>
                        </div>}
                </div>

            </div>
        </div>
    </React.Fragment>
}
export default React.memo(StocksHeader);