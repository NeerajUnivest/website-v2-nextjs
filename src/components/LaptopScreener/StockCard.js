
import viewChat from "../../assets/icn/viewChat.webp";
import Image from 'next/image'
import { Config } from "@/elements/Config";
import Link from "next/link";
import NseOrBsePrice from "@/elements/NseOrBsePrice/NseOrBsePrice";
import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import LivePriceBox from "@/elements/LivePriceBox/LivePriceBox";

const specialScreeners = ['TOP_RESULTS_TO_WATCH', 'MULTI_BAGGER_STOCKS'];


export default function StockCard({ data, ele, i, name }) {
    const [stockDetail, setStockDetail] = useState({})
    useSubscription(`/stock/live-price/${ele?.finCode}`, res => setStockDetail(JSON.parse(res.body)))

    return <>
        <div className='flex flex-row justify-between items-center font-Inter font-semibold text-[14px] leading-[24px] text-[#414141]'>
            <Link href={Config.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName)} className='shadow-[1px_0px_2px_rgba(0,0,0,0.16)] px-1 py-2.5 mr-10 sticky left-5 bg-white flex flex-row min-w-[360px] max-w-[360px] cursor-pointer'>
                <div className='h-11 w-11 grid place-content-center'>
                    {ele.logoUrl === null || ele.logoUrl === '' ?
                        <div className='h-11 w-11 font-Inter font-extrabold text-[24px] text-[#606060] bg-[#ededed] text-center  rounded-full pt-2.5'>
                            {ele.compName?.slice(0, 1)}
                        </div> :
                        <div>
                            <Image src={ele.logoUrl} alt='stock logo' width={40} height={40} className='max-h-10 max-w-10 ' />
                        </div>}
                </div>
                <div className='pt-2.5 ml-3 lg:ml-4 text-[14px] leading-[24px] text-[#202020] font-semibold w-[140px]'>
                    {ele.nseSymbol ? ele.nseSymbol : ele.bseSymbol}
                </div>
                <div className='pt-2.5 text-[14px] leading-[24px] text-[#606060] font-normal w-[190px]'>
                    {ele.compName?.length > 20 ? ele.compName?.slice(0, 20) + '...' : ele.compName}
                </div>
            </Link>

            {data.param1 &&
                <div className=' min-w-[110px] max-w-[110px] mr-4'>
                    {ele.param1}
                </div>}
            {data.param2 &&
                <div className=' min-w-[110px] max-w-[110px] mr-4'>
                    {ele.param2}
                </div>}
            {data.param4 &&
                <div className=' min-w-[110px] max-w-[110px] mr-4'>
                    {ele.param4}
                </div>}
            {data.param5 &&
                <div className=' min-w-[110px] max-w-[110px] mr-4'>
                    {ele.param5}
                </div>}
            {data.param6 && <>
                {specialScreeners.includes(name) ?
                    <div className=' min-w-[110px] max-w-[110px] mr-4'>
                        <NseOrBsePrice ltpPrice={stockDetail?.ltpPrice ?? ele?.nseLtpPrice} closePrice={ele.param5 ?? ele.param4}
                            textClass='' />
                    </div> :
                    <div className=' min-w-[110px] max-w-[110px] mr-4'>
                        {ele.param6}
                    </div>}
            </>}
            <div className={`min-w-[110px] max-w-[110px] mr-4 flex`}>
                <LivePriceBox ltpPrice={stockDetail.ltpPrice ?? ele.nseLtpPrice ?? ele.bseLtpPrice} textClass='text-[14px] leading-[24px] font-semibold text-[#414141]' />
            </div>

            <NseOrBsePrice ltpPrice={stockDetail.ltpPrice ?? ele.nseLtpPrice ?? ele.bseLtpPrice} closePrice={ele.nseClosePrice ?? ele.bseClosePrice}
                textClass='whitespace-nowrap min-w-[110px] max-w-[110px] mr-4 text-[14px] leading-[24px] font-semibold' />

            {data.param3 &&
                <Link className='flex flex-row cursor-pointer  min-w-[130px] max-w-[130px] items-center' href={ele.param3} rel="noreferrer" target="_blank">
                    <div className=' text-[#00439D] mr-4'>
                        View charts
                    </div>
                    <Image src={viewChat} alt='stock logo' className='mt-1 w-4' />
                </Link>}
        </div>
        <hr />
    </>
}
