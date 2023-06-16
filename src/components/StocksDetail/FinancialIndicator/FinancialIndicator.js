import React, { useState, useContext } from 'react';
import InfoIcon from '../../../assets/icn/info.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'

import nextArrow from '../../../assets/icn/nextArrow.png';
import prevArrow from '../../../assets/icn/prevArrow.png';
import { ModalContext } from '../../../contexts/StockPageModal';

import FinancialCard from '../../../elements/FinancialIndCards/FinancialCard';

const modalData = [
    {
        heading: `Return on equity`,
        details: `ROE helps you understand how efficiently a firm is using its investors' money to generate profits`
    },
    {
        heading: `Earning per share`,
        details: `Earnings per share is a figure describing a company's profit per outstanding share of stock`
    },
    {
        heading: `Return on capital employed`,
        details: `ROCE tells you the amount of profit a company is generating per 1 rupee of the capital employed`
    },
    {
        heading: `Debt to equity`,
        details: `D/E Ratio Compares a company's total liabilities to its shareholder equity and can be used to evaluate how much leverage a company is using`
    },
    {
        heading: `Book value per share`,
        details: `takes the ratio of a firm's common equity divided by its number of shares outstanding`
    },
    {
        heading: `Return on asset`,
        details: `ROA measures how much profit a business is generating from its capital`
    },
    {
        heading: `Debt to asset ratio`,
        details: `Debt to asset ratio shows you how much business is owned by creditors compared with how much of the company's asset is owned by shareholders`
    },
]
function FinancialIndicator({ name }) {
    const modal = useContext(ModalContext)

    const [finIndicator, setFinIndicator] = useState(0);
    const [swiper, setSwiper] = useState(0);
    const slideTo = (index) => swiper.slideTo(index);

    const openModalHandler = () => {
        modal.setTitle('Financial indicators')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }

    const handleSlide = (n) => {
        setFinIndicator(n);
        slideTo(n);
    }

    return (<div>
        <div className='relative'>
            <div id='financial-indicators' className='absolute -top-44' />
            <button className='hidden md:flex p-[6px] w-[32px] h-[32px] absolute -top-0 right-20 bg-[#e8edf5] hover:bg-[#c5dcfd] rounded-full' onClick={() => swiper.slidePrev()}>
                <Image src={prevArrow} alt="close" className='h-full object-contain mx-auto' />
            </button>
            <button className='hidden md:flex p-[6px] w-[32px] h-[32px] absolute -top-0 right-8 bg-[#e8edf5] hover:bg-[#b9ceeb] rounded-full' onClick={() => swiper.slideNext()}>
                <Image src={nextArrow} alt="close" className='h-full object-contain mx-auto' />
            </button>

            <div className='font-Inter text-[16px] text-black flex flex-row mx-4 mt-6 mb-4 font-semibold md:mt-10'>
                <div className='mr-4'>Financial indicators</div>
                <button
                    className='w-[16px] h-[16px] self-center'
                    onClick={openModalHandler}
                >
                    <Image src={InfoIcon} alt='info' className='w-[16px] h-[16px] self-center' />
                </button>
            </div>
            <div className='md:hidden font-Inter text-[12px] flex flex-row justify-between my-4 overflow-x-auto no-scrollbar swiper-no-swiping'>
                <button
                    className={finIndicator === 0 ?
                        'rounded-[19px] px-3 py-1 ml-3 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 ml-3 font-medium '}
                    onClick={() => handleSlide(0)}
                >
                    ROE
                </button>
                <button
                    className={finIndicator === 1 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(1)}
                >
                    ROA
                </button>
                <button
                    className={finIndicator === 2 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(2)}
                >
                    EPS
                </button>
                <button
                    className={finIndicator === 3 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(3)}
                >
                    ROCE
                </button>
                {
                    // <button
                    //     className={finIndicator === 4 ?
                    //         'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                    //         'rounded-[19px] px-3 py-1 font-medium '}
                    //     onClick={() => handleSlide(4)}
                    // >
                    //     BVPS
                    // </button>
                }
                <button
                    className={finIndicator === 4 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold min-w-[120px]' :
                        'rounded-[19px] px-3 py-1 font-medium min-w-[110px]'}
                    onClick={() => handleSlide(4)}
                >
                    Debt to asset
                </button>
            </div>
            <div className="mt-8 mb-1 flex flex-row">
                <Swiper
                    spaceBetween={-10}
                    slidesPerView={1.1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.8
                        },
                    }}
                    keyboard={{ enabled: true }}
                    onSlideChange={(e) => setFinIndicator(e.activeIndex)}
                    onSwiper={setSwiper}
                >
                    <SwiperSlide>
                        <FinancialCard
                            number={1}
                            name={name}
                            indicator={"ROE"}
                            heading={"Return on equity"}
                            metric={"%"}
                            pos={1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FinancialCard
                            number={2}
                            name={name}
                            indicator={"ROA"}
                            heading={"Return on asset"}
                            metric={"%"}
                            pos={1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FinancialCard
                            number={3}
                            name={name}
                            indicator={"EPS"}
                            heading={"Earning per share"}
                            metric={"₹"}
                            pos={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FinancialCard
                            number={4}
                            name={name}
                            indicator={"ROCE"}
                            heading={"Return on capital employed"}
                            metric={"%"}
                            pos={1}
                        />
                    </SwiperSlide>
                    {
                        // <SwiperSlide>
                        //     <FinancialCard
                        //         number={5}
                        //         name={name}
                        //         indicator={"BVPS"}
                        //         heading={"Book value per share"}
                        //         metric={"₹"}
                        //         pos={0}
                        //     />
                        // </SwiperSlide>
                    }
                    <SwiperSlide>
                        <FinancialCard
                            number={5}
                            name={name}
                            indicator={"DTAR"}
                            heading={"Debt to asset ratio"}
                            metric={"%"}
                            pos={1}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
    )
}

export default FinancialIndicator;