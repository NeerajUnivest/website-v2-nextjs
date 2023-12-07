import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import useSWR from 'swr'
import { Autoplay } from "swiper";
import { FaClock } from "react-icons/fa";
import onlyProPlusIcon from "../../assets/images/only_with_pro_plus.png"
import axiosInterceptorInstance from "@/elements/axiosInterceptorInstance";
import { useEffect, useState } from "react";
import Actions from "@/elements/Actions";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ProAndPlusIdeasSection({ isDark = false }) {

    const [datas, setData] = useState({})

    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const GetDays = (startDate) => {
        const timeEnd = moment(Date.now());
        const diff = timeEnd.diff(startDate);
        const diffDuration = moment.duration(diff)
        return diffDuration.days();
    }
    useEffect(() => {
        axiosInterceptorInstance.get(`/resources/trade-cards/trade-cards-summary-v2`)
            .then(res => setData(res?.data))
    }, [])


    return (
        <section id="Ideas" className={` font-Inter  flex flex-col gap-8 md:gap-20 max-w-screen-xl py-6 lg:py-20 mx-auto lg:px-8 ${!isDark && 'bg-white'}`}>
            <div className="">
                {isLoading ?
                    <div className="IdeasSectionHit flex pt-8">
                        {[1, 2, 3, 4, 5,].map(ele =>
                            <div key={ele} className=" swiper-slide" />
                        )}
                    </div>
                    : <Swiper
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
                        className="IdeasSectionHit"
                    >
                        {[...data?.data?.list, ...data?.data?.list,]?.map((ele, i) =>
                            <SwiperSlide key={`${ele.id}-${i}`} >
                                <div className="overflow-hidden flex flex-col justify-between h-full w-full bg-fixed bg-[length:144px_164px] ">
                                    <div className=" h-full flex flex-col justify-between border-2 rounded-t-lg border-[#BADDFA] border-b-transparent">
                                        <div className="flex justify-center gap-2 px-2 py-1 border-l-[1px] border-r-[1px] border-b-[1px] rounded-bl-xl rounded-br-xl border-[#BADDFA] mr-2 ml-2 mt-0">
                                            <div className="flex items-center justify-center"><FaClock color={ele.term === 'SHORT' ? "#B43C30" : ele.term === 'LONG' ? "#005251" : "#00439D"} size={10} /></div>
                                            <div className={`text-[${ele.term === 'SHORT' ? '#B43C30' : (ele.term === 'LONG' ? '#005251' : (ele.term === 'MEDIUM' ? '#00439D' : ''))}] text-[10px] font-semibold`}>{ele?.term === 'SHORT' ? 'Short' : (ele?.term === 'MEDIUM' ? 'Medium' : (ele?.term === 'LONG' ? 'Long' : 'Future'))} {ele?.term === 'FUTURES' ? '' : 'Term'} </div>
                                        </div>
                                        <div className="flex justify-center">
                                            {ele.logoUrl &&
                                                <Image
                                                    src={ele.logoUrl}
                                                    width={24}
                                                    height={24}
                                                    className='object-contain w-[24px] md:w-6'
                                                    alt={ele.stockName}
                                                />}
                                            <p className="self-center ml-1 font-semibold text-sm md:text-base text-black">{ele.stockName}</p>
                                        </div>
                                        <div className="text-[10px] md:text-xs font-bold mb-3 text-center text-black">
                                            Target hit in {GetDays(ele.createdAt)} days
                                        </div>
                                    </div>
                                    <div className=" p-2 bg-[#26A649] text-center rounded-bl-lg rounded-br-lg ">
                                        <p className="text-white text-xs md:text-sm not-italic font-bold leading-5"> Net gain: {((ele?.targetPrice - ele?.suggestedPrice) * 100 / ele?.targetPrice)?.toFixed(2)}%</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>}
            </div>

            <style >{`
                .IdeasSectionHit {
                    border-radius: 24px;
                    border: 2px solid #606060;
                width: 100%;
                /* padding: 20px 0px; */
                }

                .IdeasSectionHit .swiper-wrapper {
                height: 200px;
                display: flex;
                align-items: center;
                column-gap: 0px;
                }

                .IdeasSectionHit .swiper-slide,
                .IdeasSectionHit .swiper-slide-prev,
                .IdeasSectionHit .swiper-slide-next {
                width: 154px;
                height: 142px;
                margin: 0px 8px;
                transition: 500ms;
                border-radius: 12px;
                background: #FFF;
                }

                @media (max-width: 746px) {
                    .IdeasSectionHit {
                    border-radius: 0;
                    border: 0px solid var(--neutral-700, #606060);
                }
                    .IdeasSectionHit.swiper - slide,
                    .IdeasSectionHit.swiper - slide - prev,
                    .IdeasSectionHit.swiper - slide - next {
                    margin: 0px 20px;
                    }
                }
            `}</style>

            <p className="block md:hidden mx-auto text-[color:var(--neutral-300,#DFDFDF)] text-center text-xs not-italic font-normal leading-5">
                Past performance does not guarantee any future returns.<br />
                All investments are subject to market risk
            </p>

            <div className=" grid grid-cols-2 gap-4 md:flex md:justify-between md:gap-0 mx-4 md:mx-0">
                {datas.configs?.map(ele => <IdeasTermCard key={ele.term} data={ele} />)}
            </div>

        </section>
    )
}


export function IdeasTermCard({ data }) {
    return (
        <div style={{ backgroundImage: `url(${data?.largeImage})`, color: data?.textColor }} className=" w-full md:w-[232px] relative aspect-square  rounded-xl  mx-auto md:mx-0 flex flex-col justify-center bg-cover overflow-hidden">
            {data?.newStocksCount > 0 &&
                <div className={` absolute top-0 right-0 bg-gradient-to-r from-[#E75325] to-[#F69723] px-2 md:px-3 py-0.5 md:py-1 rounded-[0px_8px_0px_4px] whitespace-nowrap text-white text-[10px] font-medium md:text-sm md:font-semibold`}>
                    {data?.newStocksCount} New ideas
                </div>}
            {data?.term === 'FUTURES' &&
                <Image className={` w-12 md:w-20 absolute right-[-2px] -md:right-1 top-9 md:top-12`} src={onlyProPlusIcon} alt='demo image' />}

            <div className=" mx-3 md:mx-4 mt-2 flex flex-col gap-2 md:gap-4">
                <p className={`text-xl md:text-3xl not-italic font-extrabold leading-8`} dangerouslySetInnerHTML={{ __html: data?.text?.replace('\n', '<br/>') }}></p>

                <div className=" flex flex-col justify-center items-start gap-1 px-2 py-1.5 rounded-lg bg-[#FFFFFF66] ">
                    <p className={`text-[10px] md:text-sm not-italic font-semibold `}>Avg. return</p>
                    <p className={`text-xs md:text-lg not-italic font-extrabold leading-5 whitespace-nowrap`} > {data?.term === 'FUTURES' ? `₹${Actions.putComma(data?.avgReturn, 0)}` : `${data?.avgReturn.toFixed(0)}%`} in {data?.avgDuration} days</p>
                </div>
            </div>
        </div>
    )
}