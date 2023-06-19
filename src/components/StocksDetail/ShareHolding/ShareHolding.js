import React, { useState, useContext } from 'react';
import InfoIcon from '../../../assets/icn/info.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';
import axios from "axios";
import nextArrow from '../../../assets/icn/nextArrow.png';
import prevArrow from '../../../assets/icn/prevArrow.png';
import { ModalProvider } from '../../../contexts/StockPageModal';
import Image from 'next/image'

import OverallCard from '../../../elements/HoldingsCards/OverallCard/OverallCard';
import FIICard from '../../../elements/HoldingsCards/FIICard/FIICard';
import PromotersCard from '../../../elements/HoldingsCards/PromotersCard/PromotersCard';
import PublicCard from '../../../elements/HoldingsCards/PublicCard/PublicCard';
import MFundCard from '../../../elements/HoldingsCards/MFundCard/MFundCard';


const modalData = [
    {
        heading: `Promoter - FII - ODI - Retails - MFs`,
        details: `Apart from retail investors, a company’s shares are held by promoters, foreign & domestic institutions and mutual funds.`
    },
    {
        heading: `Promoter`,
        details: `Promoters are the ship captains and control the company’s direction. Promoter holdings reflects the trust and optimism it's promoters have in the company`
    },
]

function ShareHolding({ name }) {
    const modal = useContext(ModalProvider)

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [holder, setHolder] = useState(0);
    const [swiper, setSwiper] = useState(0);

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/${name}/holdings/all`)
            .then((res) => {
                setData(res.data);
                setTimeout(() => setLoading(false), 300)
            })
    }, [name])

    const slideTo = (index) => swiper.slideTo(index);

    const openModalHandler = () => {
        modal.setTitle('Peer Comparison')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }

    const handleSlide = (n) => {
        setHolder(n);
        slideTo(n);
    }

    return (<div>
        <div className='relative'>
            <div id='holdings' className='absolute -top-44' />

            <button className='hidden md:flex p-[6px] w-[32px] h-[32px] absolute -top-0 right-20 bg-[#e8edf5] hover:bg-[#b9ceeb] rounded-full' onClick={() => swiper.slidePrev()}>
                <Image src={prevArrow} alt="close" className='h-full mx-auto object-contain' />
            </button>
            <button className='hidden md:flex p-[6px] w-[32px] h-[32px] absolute -top-0 right-8 bg-[#e8edf5] hover:bg-[#b9ceeb] rounded-full' onClick={() => swiper.slideNext()}>
                <Image src={nextArrow} alt="close" className='h-full mx-auto object-contain' />
            </button>

            <div className='font-Inter text-[16px] text-black flex flex-row mx-4 mt-6 mb-4 font-semibold  md:mt-10'>
                <div className='mr-4'>Holdings</div>
                <button
                    className='w-[16px] h-[16px] self-center'
                    onClick={openModalHandler}
                >
                    <Image src={InfoIcon} alt='info' className='w-[16px] h-[16px] self-center' />
                </button>
            </div>
            <div className='md:hidden font-Inter text-[12px] flex flex-row justify-between my-4 overflow-x-auto no-scrollbar swiper-no-swiping'>
                <button
                    className={holder === 0 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ml-3' :
                        'rounded-[19px] px-3 py-1 font-medium  ml-3'}
                    onClick={() => handleSlide(0)}
                >
                    All
                </button>
                <button
                    className={holder === 1 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(1)}
                >
                    FII
                </button>
                <button
                    className={holder === 2 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(2)}
                >
                    Promoters
                </button>
                <button
                    className={holder === 3 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold ' :
                        'rounded-[19px] px-3 py-1 font-medium '}
                    onClick={() => handleSlide(3)}
                >
                    Public
                </button>
                <button
                    className={holder === 4 ?
                        'rounded-[19px] px-3 py-1 bg-[#EFF6FF] text-[#00439D] outline-none font-semibold min-w-[130px]' :
                        'rounded-[19px] px-3 py-1 font-medium min-w-[120px]'}
                    onClick={() => handleSlide(4)}
                >
                    Mutual funds
                </button>
            </div>

            <div className="flex mt-8 mb-1 flex-row">
                {loading ? <div className="mx-4 bg-[#D9D9D9] rounded-lg px-3 pt-5 pb-4 h-[305px] w-full animate-pulse"></div>
                    :
                    <Swiper
                        autoHeight
                        spaceBetween={-10}
                        slidesPerView={1.1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2.8
                            },
                        }}
                        onSlideChange={(e) => setHolder(e.activeIndex)}
                        onSwiper={setSwiper}
                    >
                        <SwiperSlide>
                            <OverallCard data={data} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FIICard
                                data={data}
                                number={1}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PromotersCard
                                data={data}
                                number={2}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PublicCard
                                data={data}
                                number={3}
                                heading={"Return on capital employed"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MFundCard
                                data={data}
                                number={4}
                                heading={"Return on capital employed"}
                            />
                        </SwiperSlide>
                    </Swiper>}
            </div>
        </div>
    </div>
    )
}

export default ShareHolding;