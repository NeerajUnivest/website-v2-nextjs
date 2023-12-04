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
        <section id="Ideas" className={` font-Inter  flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto lg:px-8 ${!isDark && 'bg-white'}`}>
            <div className="">
                {isLoading ?
                    <div className=" flex">
                        {[1, 2, 3, 4, 5,].map(ele =>
                            <div key={ele} className="overflow-hidden m-4 h-[164px] min-w-[144px] bg-white rounded-lg" />
                        )}
                    </div>
                    : <Swiper
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        autoplay={{
                            delay: 20000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
                        className="IdeasSection"
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
                                                    className='object-contain w-[24px]'
                                                    alt={ele.stockName}
                                                />}
                                            <div className="self-center ml-1">
                                                <p className="font-semibold text-sm">{ele.stockName}</p>
                                            </div>
                                        </div>
                                        <div className="text-[10px] font-bold mb-4 text-center">
                                            Target hit in {GetDays(ele.createdAt)} days
                                        </div>
                                    </div>
                                    <div className=" p-2 bg-[#26A649] text-center rounded-bl-lg rounded-br-lg ">
                                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xs not-italic font-bold leading-5"> Net gain : {((ele?.targetPrice - ele?.suggestedPrice) * 100 / ele?.targetPrice)?.toFixed(2)}%</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>}
            </div>

            <style >{`
                .IdeasSection {
                width: 100%;
                /* padding: 20px 0px; */
                }

                .IdeasSection .swiper-wrapper {
                height: 200px;
                display: flex;
                align-items: center;
                column-gap: 0px;
                }

                .IdeasSection .swiper-slide,
                .IdeasSection .swiper-slide-prev,
                .IdeasSection .swiper-slide-next {
                width: 154px;
                height: 154px;
                margin: 0px 10px;
                // transform: scale(0.9);
                transition: 500ms;
                border-radius: 10px;
                background: #f5f5f5;
                }

                .IdeasSection .swiper-slide-active {
                transform: scale(1);
                }

                @media (max-width: 746px) {

                .IdeasSection.swiper - slide,
                .IdeasSection.swiper - slide - prev,
                .IdeasSection.swiper - slide - next {
                margin: 0px 2px;
                }
                }
            `}</style>

            <div className=" m-auto mx-4">
                <p className=" text-[color:var(--neutral-300,#DFDFDF)] text-center text-xs not-italic font-normal leading-5">Disclaimer: Lorem ipsum dolor sit amet consectetur. Erat pretium scelerisque aliquet nisi nec viverra. </p>
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
                {datas.configs?.map(ele => <IdeasTermCard key={ele.term} data={ele} />)}
            </div>

        </section>
    )
}


export function IdeasTermCard({ data }) {
    return (
        <div style={{ backgroundImage: `url(${data?.largeImage})`, color: data?.textColor }} className=" relative w-full aspect-square  rounded-xl  m-auto flex flex-col justify-center bg-cover">
            <div className={` ${data?.newStocksCount > 0 ? '' : 'hidden'} absolute top-0 right-0 bg-gradient-to-r from-[#E75325] to-[#F69723] inline-flex justify-center items-center gap-0.5 px-2 py-0.5 rounded-[0px_8px_0px_4px] whitespace-nowrap `}> <p className="text-white text-[11px] font-medium">{data?.newStocksCount} New ideas</p> </div>
            <Image className={` ${data?.term === 'FUTURES' ? '' : 'hidden'} w-12 absolute right-[-2px] top-9 `} src={onlyProPlusIcon} alt='demo image' />
            <div className=" mx-3 mt-2 flex flex-col gap-2">
                <p className={`text-xl not-italic font-extrabold leading-8`} dangerouslySetInnerHTML={{ __html: data?.text?.replace('\n', '<br/>') }}></p>

                <div className=" flex flex-col justify-center items-start gap-1 px-2 py-1.5 rounded-lg bg-[#FFFFFF66] ">
                    <p className={`text-[10px] not-italic font-semibold leading-4`}>Avg. return</p>
                    <div>
                        <p className={`text-xs not-italic font-extrabold leading-5 whitespace-nowrap`} > {data?.term === 'FUTURES' ? '₹' : ''}{data?.avgReturn.toFixed(1)}{data?.term === 'FUTURES' ? 'k' : '%'} in {data?.avgDuration} days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}