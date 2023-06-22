import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import InfoIcon from '../../../assets/icn/info.png'
import { ModalProvider } from '../../../contexts/StockPageModal';
import Image from 'next/image'

import key from '../../../assets/compImages/key.png';

const modalData = [
    {
        heading: 'PE ratio',
        details: `PE ratio shows what the market is willing to pay today for a stock based on its future earnings`
    }, {
        heading: `PB ratio`,
        details: `PB ratio measures the market's valuation of a company relative to the current value of the assets on its books, if they were to be sold
        immediately`
    }, {
        heading: `Dividend yield`,
        details: `Dividend yield tells you the percentage of a company's share price that it pays out in dividends each year`
    }, {
        heading: `Market cap`,
        details: `Market Cap is the total market value of all of a company's outstanding shares`
    }, {
        heading: `RSI`,
        details: `RSI is a measurement used to assess the price momentum of a stock .`
    }, {
        heading: `50 DMA`,
        details: `50 DMA shows you the average closing price of a stock over the previous 50 days`
    }, {
        heading: `200 DMA`,
        details: `200 DMA shows you the average closing price of a stock over the previous 200 days`
    }, {
        heading: `Volume`,
        details: `Volume tells you the total number of shares traded yesterday`
    },
]

function KeyIndicatorCard({ name }) {
    const modal = useContext(ModalProvider)

    const [data, setData] = useState({});


    useEffect(() => {

        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${name}/key-indicators`)
            .then((response) => {
                setData(response.data);
            });
    }, [name]);


    const openModalHandler = () => {
        modal.setTitle('Key indicators')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }


    return (
        <section id='key-indicators' className='relative'>
            <Image src={key} alt="news" className='w-[80px] h-[54px] absolute top-0 right-0 -z-10 mx-4' />
            <div className=' flex flex-row mx-4 mt-6 mb-4  md:mt-10'>
                <div className='font-Inter text-[16px] text-black mr-4 font-semibold'>Key indicators</div>
                <button className=' w-[16px] h-[16px] self-center'
                    onClick={openModalHandler} >
                    <Image src={InfoIcon} alt='info' className='w-[16px] h-[16px] self-center' />
                </button>
            </div>
            <div className='rounded-[12px] shadow-[0_1px_1px_rgba(0,0,0,0.16)] border-[1px]
                    border-[#E5E5E5] mx-4 my-1 py-4 '>
                <div className='mx-3 font-semibold text-[#232A31] text-[12px] leading-[18px] font-Inter'>
                    Fundamentals
                </div>
                <div className='mx-3font-Inter font-medium text-[12px] flex flex-row md:hidden'>
                    <div className='w-1/2 mx-3 my-1'>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797]  text-[12px]'>P/E</div>
                            <div className='text-[12px] '>{data.peRatio}</div>
                        </div>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>P/B</div>
                            <div className='text-[12px]'>{data.pbRatio}</div>
                        </div>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>Div Yield</div>
                            <div className='text-[12px]'>{data.divYield}%</div>
                        </div>
                    </div>
                    <div className='w-1/2 mx-3 my-1'>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>Sector P/E</div>
                            <div className='text-[12px]'>{data.sectorPE}</div>
                        </div>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>Mkt cap</div>
                            <div className='text-[12px] font-Inter'><span className='font-Robert'></span>
                                {data.marketCapital?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}Cr</div>
                        </div>
                    </div>
                </div>

                {/*for big screeen */}
                <div className='mx-3 font-Inter font-medium text-[12px] hidden md:flex flex-row'>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797]  text-[12px]'>P/E</div>
                        <div className='text-[12px] '>{data.peRatio}</div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>P/B</div>
                        <div className='text-[12px]'>{data.pbRatio}</div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>Div Yield</div>
                        <div className='text-[12px]'>{data.divYield}%</div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>Sector P/E</div>
                        <div className='text-[12px]'>{data.sectorPE}</div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>Mkt cap</div>
                        <div className='text-[12px] font-Inter'><span className='font-Robert'></span>
                            {data.marketCapital?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}Cr</div>
                    </div>
                </div>
                <div className='mx-3 font-semibold text-[#232A31] text-[12px] leading-[18px] font-Inter'>
                    Technicals
                </div>
                <div className='font-Inter font-medium text-[12px] flex flex-row md:hidden'>
                    <div className='w-1/2 mx-3 my-1'>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>14D - RSI</div>
                            <div className='text-[12px]'>{data.fourteenDaysRSI !== 'NaN' && data.fourteenDaysRSI?.toFixed(2)}</div>
                        </div>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>50 DMA</div>
                            <div className='text-[12px] font-Inter'>
                                <span className='font-Robert'>₹</span>
                                {data.fiftyDMA?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 mx-3 my-1'>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>Volume*</div>
                            <div className='text-[12px] font-Inter'>
                                {data.volume > 99999 ? (`${(data.volume / 100000)?.toFixed(2)} L`) : data.volume}
                            </div>
                        </div>
                        <div className='flex flex-row justify-between my-[12px]'>
                            <div className='text-[#979797] text-[12px]'>200 DMA</div>
                            <div className='text-[12px] font-Inter'>
                                <span className='font-Robert'>₹</span>
                                {data.twoHundredDMA?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                            </div>
                        </div>
                    </div>
                </div>

                {/*for big screeen */}
                <div className='mx-3 font-Inter font-medium text-[12px] hidden md:flex flex-row '>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>14D - RSI</div>
                        <div className='text-[12px]'>{data.fourteenDaysRSI !== 'NaN' && data.fourteenDaysRSI?.toFixed(2)}</div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>Volume*</div>
                        <div className='text-[12px] font-Inter'>
                            {data.volume > 99999 ? (`${(data.volume / 100000)?.toFixed(2)} L`) : data.volume}
                        </div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>50 DMA</div>
                        <div className='text-[12px] font-Inter'>
                            <span className='font-Robert'>₹</span>
                            {data.fiftyDMA?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                    <div className='w-1/5 my-[12px]'>
                        <div className='text-[#979797] text-[12px]'>200 DMA</div>
                        <div className='text-[12px] font-Inter'>
                            <span className='font-Robert'>₹</span>
                            {data.twoHundredDMA?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
                <div className='text-[#666666] text-[10px] leading-[12px] font-normal font-Inter mx-3'>* Volume
                    figures are from last trading day
                </div>
            </div>
        </section>
    )
}

export default React.memo(KeyIndicatorCard);