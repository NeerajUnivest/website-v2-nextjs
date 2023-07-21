import forEmpty from '../../assets/images/forEmpty.webp'
import viewChat from "../../assets/icn/viewChat.webp";
import Image from 'next/image'
import { Config } from '@/elements/Config';
import Link from 'next/link';
import { useSubscription } from 'react-stomp-hooks';
import { useState } from 'react';
import NseOrBsePrice from '@/elements/NseOrBsePrice/NseOrBsePrice';
import LivePriceBox from '@/elements/LivePriceBox/LivePriceBox';

const specialScreeners = ['TOP_RESULTS_TO_WATCH', 'MULTI_BAGGER_STOCKS'];


export default function StockCard({ ele, data, name }) {
    const [stockDetail, setStockDetail] = useState({})
    useSubscription(`/stock/live-price/${ele?.finCode}`, res => setStockDetail(JSON.parse(res.body)))
    return (
        <div className='px-4'>
            <div className='flex flex-row justify-between items-center font-Inter '>
                <Link href={Config.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName)} className='flex flex-row cursor-pointer'>
                    <div className='h-10 w-10 grid place-content-center mr-3'>
                        {ele.logoUrl === null || ele.logoUrl === '' ?
                            <div className='h-10 w-10 font-Inter font-extrabold text-[22px] text-[#606060] bg-[#ededed] text-center py-1 rounded-full'>
                                {ele.compName && ele.compName.slice(0, 1)}
                            </div> :
                            <div className='rounded-full overflow-hidden'>
                                <Image src={ele.logoUrl} width={40} height={40} alt='stock logo' className='max-h-10 max-w-10' />
                            </div>}
                    </div>
                    <div>
                        <div className='mt-1 font-Inter text-[12px] leading-[20px] text-[#202020] font-semibold'>
                            {ele.nseSymbol ? ele.nseSymbol : ele.bseSymbol}</div>
                        <div className='font-Inter text-[10px] leading-[16px] text-[#606060] font-normal'>
                            {ele.compName?.slice(0, 30)}
                        </div>
                    </div>
                </Link>
                <div>
                    <LivePriceBox ltpPrice={stockDetail.ltpPrice ?? ele.nseLtpPrice ?? ele.bseLtpPrice} textClass='text-[12px] leading-[20px] text-[#202020] font-semibold ' />
                    <NseOrBsePrice ltpPrice={stockDetail.ltpPrice ?? ele.nseLtpPrice ?? ele.bseLtpPrice} closePrice={ele.nseClosePrice ?? ele.bseClosePrice}
                        textClass='text-[10px] leading-[16px] font-medium ' />
                </div>
            </div>

            {data.param1 &&
                <div className='flex flex-row justify-between mt-2'>
                    {data.param1 &&
                        <div className="basis-1/3">
                            <div className='text-[10px] landing-[16px] font-medium text-[#606060]'>
                                {data.param1}:
                            </div>
                            <div className='text-[10px] landing-[16px] font-semibold text-[#202020]'>
                                {ele.param1}
                            </div>
                        </div>}
                    {data.param2 &&
                        <div className="basis-1/3 pl-4">
                            <div className='text-[10px] landing-[16px] font-medium text-[#606060]'>
                                {data.param2}:
                            </div>
                            <div className='text-[10px] landing-[16px] font-semibold text-[#202020]'>
                                {ele.param2}
                            </div>
                        </div>}
                    {data.param3 &&
                        <Link className='basis-1/3 flex flex-row cursor-pointer pt-1 justify-end items-center' href={ele.param3} rel="noreferrer" target="_blank">
                            <div className=' text-[#00439D] text-[10px] landing-[16px] font-semibold'>
                                View charts
                            </div>
                            <Image src={viewChat} alt='stock logo' className='ml-2 w-3 object-contain' />
                        </Link>}
                </div>}

            {data.param4 &&
                <div className='flex flex-row justify-between mt-2'>
                    {data.param4 &&
                        <div className="basis-1/3">
                            <div className='text-[10px] landing-[16px] font-medium text-[#606060]'>
                                {data.param4}:
                            </div>
                            <div className='text-[10px] landing-[16px] font-semibold text-[#202020]'>
                                {ele.param4}
                            </div>
                        </div>}
                    {data.param5 &&
                        <div className="basis-1/3 pl-4">
                            <div className='text-[10px] landing-[16px] font-medium text-[#606060]'>
                                {data.param5}:
                            </div>
                            <div className='text-[10px] landing-[16px] font-semibold text-[#202020]'>
                                {ele.param5}
                            </div>
                        </div>}
                    {data.param6 && <>
                        {specialScreeners.includes(name) ?
                            <div className="basis-1/3">
                                <div className='text-[10px] landing-[16px] font-medium text-[#606060] text-right'>
                                    {data.param6}:
                                </div>
                                <NseOrBsePrice ltpPrice={stockDetail?.ltpPrice ?? ele?.nseLtpPrice} closePrice={ele.param5 ?? ele.param4}
                                    textClass='text-[10px] leading-[16px] font-semibold text-right' />
                            </div> :
                            <div className="basis-1/3">
                                <div className='text-[10px] landing-[16px] font-medium text-[#606060] text-right'>
                                    {data.param6}:
                                </div>
                                <div className='text-[10px] landing-[16px] font-semibold text-[#202020] text-right'>
                                    {ele.param6}
                                </div>
                            </div>}
                    </>}
                </div>}

            <hr className='bg-[#E5E5E5] my-4'></hr>
        </div>
    )
}
