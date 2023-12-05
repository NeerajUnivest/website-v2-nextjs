import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import { FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { useGetAxios } from "@/hooks/useGetAxios";
import locked_icon from '@/assets/icons/icon_locked.png'
import Image from "next/image";
import Actions from "@/elements/Actions";

export default function IdeasSectionLive({ isDark = false }) {
    const { fetchData, data, loading } = useGetAxios('')

    useEffect(() => {
        fetchData(`resources/users/trade-cards-web`)
    }, [])
    return (
        <>
            <section id="Ideas" className={` font-Inter whitespace-nowrap flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-0 lg:px-8 ${!isDark && 'bg-white'}`}>
                <div className="text-white px-4 flex flex-row justify-between ">
                    <div className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">Live trade ideas</div>
                    <div className=" bg-white text-green-600 flex items-center gap-2 border border-[color:var(--success-600,#26A649)] px-3 py-0.5 rounded-[20px] border-solid ">
                        <div className="bg-green-600 w-1.5 h-1.5 rounded-md"></div>
                        <div className="text-[color:var(--success-600,#26A649)] text-center text-sm not-italic font-bold leading-6"> {data?.data?.list.length} Live</div>
                    </div>
                </div>
                <div className="">
                    {loading ?
                        <div className="IdeasSectionLive flex">
                            {[1, 2, 3, 4, 5,].map(ele =>
                                <div key={ele} className="swiper-slide" />
                            )}
                        </div>
                        : <Swiper
                            grabCursor={true}
                            initialSlide={0}
                            slidesPerView='auto'
                            spaceBetween={0}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay]}
                            className="IdeasSectionLive"
                        >
                            {[...data?.data?.list, ...data?.data?.list,]?.map((ele, i) =>
                                <SwiperSlide key={`${ele.id}-${i}`} >
                                    <div className=" relative overflow-hidden flex flex-col justify-between h-full w-full bg-fixed  rounded-lg border-[#BADDFA] bg-cover">
                                        {ele?.term === 'FUTURES' && <div className=" text-[color:var(--Pearl-White,#FFF)] text-[8px] not-italic font-medium leading-3   flex justify-center items-center gap-0.5 px-1 py-0 rounded-sm bg-gradient-to-br from-[#E75325] to-[#F69723] absolute mt-1 ml-[100px] ">New</div>}
                                        <div className=" h-full flex flex-col mx-2 gap-2">
                                            <div className=" border-l-[1px] border-r-[1px] border-b-[1px] rounded-bl-xl rounded-br-xl border-[#BADDFA]  mt-0">
                                                <div className={`flex flex-row items-center justify-center gap-[4px] py-[2px] ${ele?.term === 'FUTURES' ? 'pr-3' : ''} `}>
                                                    <div className="flex items-center justify-center"><FaClock color={ele.term === 'SHORT' ? "#B43C30" : ele.term === 'LONG' ? "#005251" : (ele.term === 'MEDIUM' ? "#00439D" : '#84026F')} size={"10px"} /></div>
                                                    <p className={` ${ele.term === 'SHORT' ? 'text-[#B43C30]' : (ele.term === 'LONG' ? 'text-[#005251]' : (ele.term === 'MEDIUM' ? 'text-[#00439D]' : 'text-[#84026F]'))} text-[10px] not-italic font-semibold leading-4`} > {ele?.term === 'SHORT' ? 'Short' : (ele?.term === 'MEDIUM' ? 'Medium' : (ele?.term === 'LONG' ? 'Long' : 'Future'))} {ele?.term === 'FUTURES' ? '' : 'Term'} </p>
                                                </div>
                                            </div>
                                            <p className="text-[color:var(--neutral-700,#606060)] text-[8px] not-italic font-medium leading-3 flex justify-center items-center">Shared {moment(ele.createdAt, 'm').fromNow()}</p>

                                            <div className=" bg-gradient-to-r from-[#3c3c3c] to-[#333333] flex flex-col justify-center items-center gap-3 shrink-0 backdrop-blur-[3px] p-2 rounded-md">
                                                <div className=" bg-green-600 text-[10px] rounded-sm p-[2px] text-white font-normal ">
                                                    <span>Potential left : {ele.term === 'FUTURES' ? `₹${Actions.putComma(ele.potentialLeft, 0)}` : `${Actions.putComma(ele.potentialLeft, 1)}%`}</span>
                                                </div>
                                                <div>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-[10px] not-italic font-bold leading-[18px]">Target</p>
                                                        <div className="w-16 h-2.5 rounded-xl bg-gradient-to-r from-[#575757] to-[#979797]"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=" bg-white rounded-lg flex flex-row justify-center items-center px-[12px] py-[2px]">
                                                        <Image className="w-3" src={locked_icon} alt="demo" />
                                                        <button className="text-[color:var(--neutral-900,#202020)] text-[10px] not-italic font-semibold leading-4">Unlock FREE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)}
                        </Swiper>}
                </div>

                <style >{`
                .IdeasSectionLive {
                width: 100%;
                /* padding: 20px 0px; */
                }

                .IdeasSectionLive .swiper-wrapper {
                height: 200px;
                display: flex;
                align-items: center;
                column-gap: 0px;
                }

                .IdeasSectionLive .swiper-slide,
                .IdeasSectionLive .swiper-slide-prev,
                .IdeasSectionLive .swiper-slide-next {
                width: 144px;
                height: 174px;
                margin: 0px 10px;
                transition: 500ms;
                border-radius: 10px;
                background: #f5f5f5;
                }


                @media (max-width: 746px) {

                .IdeasSectionLive.swiper - slide,
                .IdeasSectionLive.swiper - slide - prev,
                .IdeasSectionLive.swiper - slide - next {
                margin: 0px 2px;
                }
                }
            `}</style>
                <p className="whitespace-normal mx-4 text-[#DFDFDF] text-center text-xs not-italic font-normal leading-5">
                    Lorem ipsum dolor sit amet consectetur. Erat pretium scelerisque aliquet nisi nec viverra.
                </p>
            </section>
            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}
