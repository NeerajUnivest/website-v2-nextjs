import forEmpty from '../../assets/img/forEmpty.webp'
import viewChat from "../../assets/icn/viewChat.webp";
import Image from 'next/image'
import { useRouter } from 'next/router';


const ltpClosePrice = (ltp, close) => {
    return (ltp - close)?.toFixed(1);
}

const nseBsePrice = (nseLtpPrice, nseClosePrice, bseLtpPrice, bseClosePrice) => {
    if (nseLtpPrice) {
        return <div className={`text-[10px] leading-[16px] font-semibold flex flex-row justify-end
                    ${ltpClosePrice(nseLtpPrice, nseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(nseLtpPrice, nseClosePrice)}({Math.abs(ltpClosePrice(nseLtpPrice, nseClosePrice) * 100 / nseClosePrice).toFixed(1)}%)
        </div>
    } else {
        return <div className={`text-[10px] leading-[16px] font-medium flex flex-row justify-end
                    ${ltpClosePrice(bseLtpPrice, bseClosePrice) >= 0 ? 'text-[#26A649]' : 'text-[#EB4E2C]'}`}>
            {ltpClosePrice(bseLtpPrice, bseClosePrice)}({Math.abs(ltpClosePrice(bseLtpPrice, bseClosePrice) * 100 / bseClosePrice).toFixed(1)}%)
        </div>
    }
}


export default function StockCard({ data, name }) {
    const router = useRouter();

    const handleNavigate = (ele) => {
        router.push(Config.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName, ele.finCode))
    }
    return (
        <div className='px-4'>
            {data.list ? data.list?.map((ele, i) => {
                return (
                    <div key={i}>
                        <div className='flex flex-row justify-between items-center font-Inter'>
                            <div className='flex flex-row cursor-pointer' onClick={() => handleNavigate(ele)}>
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
                            </div>
                            <div>
                                <div className='text-[12px] leading-[20px] text-[#202020] font-semibold flex flex-row justify-end'>
                                    <span className='font-Robert'>₹</span>{ele.nseLtpPrice ? ele.nseLtpPrice : ele.bseLtpPrice}
                                </div>
                                {nseBsePrice(ele.nseLtpPrice, ele.nseClosePrice, ele.bseLtpPrice, ele.bseClosePrice)}
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
                                    <a className='basis-1/3 flex flex-row cursor-pointer pt-1 justify-end items-center' href={ele.param3}>
                                        <div className=' text-[#00439D] text-[10px] landing-[16px] font-semibold'>
                                            View charts
                                        </div>
                                        <Image src={viewChat} alt='stock logo' className='ml-2 w-3 object-contain' />
                                    </a>}
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
                                {data.param6 &&
                                    <div className="basis-1/3">
                                        <div className='text-[10px] landing-[16px] font-medium text-[#606060]'>
                                            {data.param6}:
                                        </div>
                                        <div className='text-[10px] landing-[16px] font-semibold text-[#202020]'>
                                            {ele.param6}
                                        </div>
                                    </div>}
                            </div>}

                        <hr className='bg-[#E5E5E5] my-4'></hr>
                    </div>
                )
            }) : <div className='pt-20 min-h-[70vh]'>
                <Image src={forEmpty} alt='icon' className='mx-auto' width={250} />
                <div className='text-center font-Inter text-[16px] landing-[28px] text-black font-semibold mt-3'>
                    Nothing to show for now
                </div>
                <div className='text-center font-Inter text-[12px] landing-[18px] text-[#414141] mt-2'>
                    Don’t worry we’l keep you posted
                </div>
            </div>}
        </div>
    )
}
