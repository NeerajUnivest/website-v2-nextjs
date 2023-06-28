
import viewChat from "../../assets/icn/viewChat.webp";
import Image from 'next/image'
import { Config } from "@/elements/Config";
import Link from "next/link";


const ltpClosePrice = (ltp, close) => {
    return (ltp - close)?.toFixed(1);
}

const nseBsePrice = (nseLtpPrice, nseClosePrice, bseLtpPrice, bseClosePrice) => {
    if (nseLtpPrice) {
        return <div className={`min-w-[110px] max-w-[110px] mr-4 text-[14px] leading-[24px] font-semibold 
                    ${ltpClosePrice(nseLtpPrice, nseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(nseLtpPrice, nseClosePrice)}({Math.abs(ltpClosePrice(nseLtpPrice, nseClosePrice) * 100 / nseClosePrice)?.toFixed(1)}%)
        </div>
    } else {
        return <div className={`min-w-[110px] max-w-[110px] mr-4 text-[14px] leading-[24px] font-medium 
                    ${ltpClosePrice(bseLtpPrice, bseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(bseLtpPrice, bseClosePrice)}({Math.abs(ltpClosePrice(bseLtpPrice, bseClosePrice) * 100 / bseClosePrice)?.toFixed(1)}%)
        </div>
    }
}

export default function StockCard({ data }) {

    return <div className='overflow-x-auto no-scrollbar mx-4'>
        <div className='my-4 flex bg-[#CFE8FC] flex-row justify-between items-center font-Inter font-medium text-[14px] leading-[24px] text-[#414141]'>
            <div className='shadow-[1px_0px_2px_rgba(0,0,0,0.16)] sticky left-5 z-[9] min-w-[360px] max-w-[360px] flex flex-row mr-10 bg-[#CFE8FC] py-3'>
                <div className=' w-[180px]'>
                    Symbol
                </div>
                <div className='min-w-[180px]'>
                    Stock Name
                </div>

            </div>

            {data.param1 &&
                <div className='min-w-[110px] max-w-[110px] mr-4'>
                    {data.param1}
                </div>}
            {data.param2 &&
                <div className='min-w-[110px] max-w-[110px] mr-4'>
                    {data.param2}
                </div>}
            {data.param4 &&
                <div className='min-w-[110px] max-w-[110px] mr-4'>
                    {data.param4}
                </div>}
            {data.param5 &&
                <div className='min-w-[110px] max-w-[110px] mr-4'>
                    {data.param5}
                </div>}
            {data.param6 &&
                <div className='  min-w-[110px] max-w-[110px] mr-4'>
                    {data.param6}
                </div>}

            <div className=' min-w-[110px] max-w-[110px] px-4 bg-[#CFE8FC] py-3'>
                CMP
            </div>
            <div className=' min-w-[110px] max-w-[110px] px-4 bg-[#CFE8FC] py-3'>
                Change
            </div>
            {data.param3 &&
                <div className='min-w-[130px]  bg-[#CFE8FC] py-6'>
                </div>}
        </div>
        {data.list?.map((ele, i) => <div key={i}>
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
                {data.param6 &&
                    <div className=' min-w-[110px] max-w-[110px] mr-4'>
                        {ele.param6}
                    </div>}

                <div className={`min-w-[110px] max-w-[110px] mr-4 text-[14px] leading-[24px] font-semibold text-[#414141]`}>
                    <span className='font-Robert'>₹ </span>
                    {ele.nseLtpPrice ? ele.nseLtpPrice?.toFixed(2) : ele.bseLtpPrice?.toFixed(2)}
                </div>

                {nseBsePrice(ele.nseLtpPrice, ele.nseClosePrice, ele.bseLtpPrice, ele.bseClosePrice)}

                {data.param3 &&
                    <Link className='flex flex-row cursor-pointer  min-w-[130px] max-w-[130px] items-center' href={ele.param3} rel="noreferrer" target="_blank">
                        <div className=' text-[#00439D] mr-4'>
                            View charts
                        </div>
                        <Image src={viewChat} alt='stock logo' className='mt-1 w-4' />
                    </Link>}
            </div>
            <hr />
        </div>)}
    </div>
}
