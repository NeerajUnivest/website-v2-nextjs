import React, { useEffect, useState, useContext } from 'react';
import InfoIcon from '../../../assets/icn/info.png';
import arrows from '../../../assets/compImages/arrowTwoWays.png';
import axios from 'axios';
import { ModalProvider } from '../../../contexts/StockPageModal';
import Image from 'next/image'

let roundBG = ['bg-[#BFA161]', 'bg-[#F36F23]', 'bg-[#107AC4]', 'bg-[#356DB1]', 'bg-[#BFA161]', 'bg-[#F36F23]', 'bg-[#107AC4]', 'bg-[#356DB1]']

const modalData = [
    {
        heading: `CMP, PE ratio, PB ratio, market cap, div yield`,
        details: `A stock's peers are companies which have similar business interests, operations and belong to the same industry sector. Comparing various metrics against peers can give valuable insights on whether the company's stock is over/under-valued and the company's growth outlook vs the industry as a whole.`
    }
]
function PeerComparison({ name }) {
    const modal = useContext(ModalProvider)


    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${name}/peer-comparison`)
            .then((response) => {
                setData(response.data);
                setShow(true)
            })

    }, [name])

    const openModalHandler = () => {
        modal.setTitle('Peer Comparison')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }

    return (
        <div className='relative overflow-hidden'>
            <div id='peer-comparison' className='absolute -top-44' />

            <Image src={arrows} alt="news" className='w-[64px] h-[93px] absolute top-0 right-0 -z-10 mx-4' />
            <div className='font-Inter text-[16px] text-black flex flex-row mx-4 mt-6 mb-4 font-semibold'>
                <div className='mr-4'>Peer Comparison</div>
                <button
                    className='w-[16px] h-[16px] self-center'
                    onClick={openModalHandler}
                >
                    <Image src={InfoIcon} alt='info' className='w-[16px] h-[16px] self-center' />
                </button>
            </div>
            <div className='ml-4 pr-4 my-3 flex flex-row font-Inter w-full overflow-x-scroll no-scrollbar'>
                <table className="table border-collapse swiper-no-swiping">
                    <thead>
                        <tr className='h-10'>
                            <th className='rounded sticky -left-[2px] bg-white text-[12px] text-[#979797] font-medium border border-[#E5E5E5] min-w-[130px]'>Stocks</th>
                            <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-[#E5E5E5] text-left min-w-[70px]'>P/B ratio</th>
                            <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-[#E5E5E5] text-left min-w-[70px]'>P/E ratio</th>
                            <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-[#E5E5E5] text-left min-w-[70px]'>Div yield</th>
                            <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-[#E5E5E5] text-left min-w-[80px]'>LTP</th>
                            <th className='px-2 text-[12px] text-[#979797] font-medium border border-x-0 border-[#E5E5E5] text-left min-w-[130px]'>Market Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!data?.[0] ? <tr className="m-4 bg-[#D9D9D9] w-full rounded-lg h-[260px] animate-pulse" /> :
                            data?.map((item, i) =>
                                <tr key={i} className='h-[52px]'>
                                    <td className='pt-2 sticky -left-[2px] bg-white text-[10px] text-[#1c1c1c] font-medium leading-[18px] px-2 min-w-[25vw] border border-[#E5E5E5] cursor-pointer' onClick={() => navigate(`/stocks/${item.finCode}?backTo=stocks`)}>
                                        <div className='flex flex-row font-Inter'>
                                            <div className={`mt-[3px] rounded-full h-[10px] w-[10px] ${roundBG[i]}`}></div>
                                            <div className=' text-[10px] leading-[16px] font-medium ml-1'>
                                                {(item.symbol === null || item.symbol === '') ? item.bseSymbol : item.symbol}</div>
                                        </div>
                                        <div className='text-[8px] leading-[12px] text-[#979797]'>{item.name}</div>
                                    </td>
                                    <td className='text-[12px] text-[#1c1c1c] font-medium leading-[18px] items-center px-2 border border-x-0 border-[#E5E5E5]'>
                                        {item.pbRatio.toFixed(2)}</td>
                                    <td className='text-[12px] text-[#1c1c1c] font-medium leading-[18px] items-center px-2 border border-x-0  border-[#E5E5E5]'>
                                        {item.peRatio.toFixed(2)} </td>
                                    <td className='text-[12px] text-[#1c1c1c] font-medium leading-[18px] items-center px-2 border border-x-0  border-[#E5E5E5]'>
                                        {item.divYield.toFixed(2)}</td>
                                    <td className='text-[12px] text-[#1c1c1c] font-medium leading-[18px] items-center px-2 border border-x-0  border-[#E5E5E5]'>
                                        {item.currentMarketPrice?.toFixed(2)}</td>
                                    <td className='text-[12px] text-[#1c1c1c] font-medium leading-[18px] items-center px-2 border border-x-0  border-[#E5E5E5]'>
                                        {(item.marketCap / 10000000)?.toFixed(2) + ' Cr.'}</td>
                                </tr>)}
                    </tbody>
                </table>
            </div>
            {/* <div className='ml-4 my-3 flex flex-row font-Inter'>
                <div className=''>
                    <div className='text-[12px] h-[40px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-r-[1px] border-[#E5E5E5] rounded-tl-[8px] flex flex-row justify-evenly items-center min-w-[30vw] md:min-w-[10vw]  border-[1px] '>Stocks
                    </div>
                    <div className=''>
                        {show ?
                            data.map((item, index) =>
                            (<div key={index} className='pl-2 py-2 h-[52px] flex flex-col justify-start border-l-[1px] border-b-[1px] border-r-[1px] border-[#E5E5E5] cursor-pointer' onClick={() => navigate(`/stocks/${item.finCode}?backTo=stocks`)}>
                                <div className='flex flex-row items-center'>
                                    <div className={`rounded-full h-[10px] w-[10px] ${roundBG[index]}`}></div>
                                    <div className='font-Inter text-[10px] leading-[18px] font-medium ml-1'>
                                        {(item.symbol === null || item.symbol === '') ? item.bseSymbol : item.symbol}</div>
                                </div>
                                <div className='text-[8px] text-[#979797]'>{item.name}</div>
                            </div>))
                            : <div className="mx-4 bg-[#D9D9D9] rounded-lg px-3 pt-5 pb-4 h-[305px] w-full animate-pulse"></div>}
                    </div>
                </div>
                <div className='overflow-x-auto w-3/4 scroller swiper-no-swiping'>
                    <div className='flex flex-row h-[40px]'>
                        <div
                            className='text-[12px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-t-[1px] border-[#E5E5E5] flex flex-row justify-start items-center px-2 min-w-[70px]'>
                            P/B ratio
                        </div>
                        <div
                            className='text-[12px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-t-[1px] border-[#E5E5E5] flex flex-row justify-start items-center px-2 min-w-[70px]'>
                            P/E ratio
                        </div>
                        <div
                            className='text-[12px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-t-[1px] border-[#E5E5E5] flex flex-row justify-start items-center px-2 min-w-[70px]'>
                            Div yield
                        </div>
                        <div
                            className='text-[12px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-t-[1px] border-[#E5E5E5] flex flex-row justify-start items-center px-2 min-w-[80px]'>
                            Ltp
                        </div>
                        <div
                            className='text-[12px] text-[#979797] font-medium leading-[18px] border-b-[1px] border-t-[1px] border-r-[1px] rounded-tr-[8px] flex flex-row justify-start items-center px-2 min-w-[120px] border-[#E5E5E5]'>
                            Market Capital
                        </div>
                    </div>

                    {show ?
                        data.map((item, index) =>
                        (<div className='flex flex-row h-[52px]' key={index}>
                            <div
                                className='flex flex-row justify-start items-center px-2 min-w-[70px] text-[12px] leading-[16px] font-medium border-b-[1px] border-[#E5E5E5] '>{item.pbRatio.toFixed(2)}
                            </div>
                            <div
                                className='flex flex-row justify-start items-center px-2 min-w-[70px] text-[12px] leading-[16px] font-medium border-b-[1px] border-[#E5E5E5]'>{item.peRatio.toFixed(2)}
                            </div>
                            <div
                                className='flex flex-row justify-start items-center px-2 min-w-[70px] text-[12px] leading-[16px] font-medium border-b-[1px] border-[#E5E5E5]'>{item.divYield.toFixed(2)}
                            </div>
                            <div
                                className='flex flex-row justify-start items-center px-2 min-w-[80px] text-[12px] leading-[16px] font-medium border-b-[1px] border-[#E5E5E5]'>{item.currentMarketPrice?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                            </div>
                            <div
                                className='flex flex-row justify-start items-center px-2 min-w-[120px] text-[12px] leading-[16px] font-medium  border-r-[1px] border-b-[1px] border-[#E5E5E5]'>{(item.marketCap / 10000000)?.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + ' Cr.'}
                            </div>
                        </div>))
                        : <div className="mx-4 bg-[#D9D9D9] rounded-lg px-3 pt-5 pb-4 h-[305px] w-full animate-pulse"></div>}
                </div>
            </div> */}
        </div>
    )
}

export default PeerComparison;