import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import useSWR from 'swr'
import { FaClock } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FcLock } from "react-icons/fc";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function LiveIdeasSection({ isDark = false }) {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const GetDays = (startDate) => {
        const timeEnd = moment(Date.now());
        const diff = timeEnd.diff(startDate);
        const diffDuration = moment.duration(diff)
        return diffDuration.days();
    }

    const [swiper, setSwiper] = useState(null);
    const [active, setActive] = useState(0);
    console.log(data?.data?.list);

    return (
        <>
            <section id="Ideas" className={` flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
                <div className="text-white borde flex flex-row justify-between ">
                    <div className="text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">Live trade ideas</div>
                    <div className=" bg-white text-green-600 flex items-center gap-2 border border-[color:var(--success-600,#26A649)] px-3 py-0.5 rounded-[20px] border-solid ">
                        <div className="bg-green-600 w-1.5 h-1.5 rounded-md"></div>
                        <div className="text-[color:var(--success-600,#26A649)] text-center text-sm not-italic font-bold leading-6"> {data?.data?.list.length} Live</div>
                    </div>
                </div>
                <div className="">
                    {isLoading ?
                        <div className=" flex">
                            {[1, 2, 3, 4, 5,].map(ele =>
                                <div key={ele} className="overflow-hidden m-4 h-[164px] min-w-[144px] bg-white rounded-lg" />
                            )}
                        </div>
                        : <Swiper
                            grabCursor={true}
                            initialSlide={0}
                            slidesPerView='auto'
                            spaceBetween={0}
                            onSwiper={setSwiper}
                            onSlideChange={(e => setActive(e.activeIndex))}
                            className="LiveIdeasSection"
                        >
                            {[...data?.data?.list, ...data?.data?.list,]?.map((ele, i) =>
                                <SwiperSlide key={`${ele.id}-${i}`} >
                                    <div className=" relative overflow-hidden flex flex-col justify-between h-full w-full bg-fixed bg-[length:144px_164px] rounded-lg border-[#BADDFA] ">
                                        {ele?.term === 'FUTURE' && <div className=" text-[color:var(--Pearl-White,#FFF)] text-[8px] not-italic font-medium leading-3   flex justify-center items-center gap-0.5 px-1 py-0 rounded-sm bg-gradient-to-br from-[#E75325] to-[#F69723] absolute mt-1 ml-[90px] ">New</div>}
                                        <div className=" h-full flex flex-col mx-2 gap-[8px]">
                                            <div className=" border-l-[1px] border-r-[1px] border-b-[1px] rounded-bl-xl rounded-br-xl border-[#BADDFA]  mt-0">
                                                <div className=" flex flex-row justify-items-start pl-4 gap-2 py-[2px]">
                                                    <div className="flex items-center justify-center"><FaClock color={ele.term === 'SHORT' ? "#B43C30" : ele.term === 'LONG' ? "#005251" : "#00439D"} size={"10px"} /></div>
                                                    <p className={`text-[${ele.term === 'SHORT' ? '#B43C30' : (ele.term === 'LONG' ? '#005251' : (ele.term === 'MEDIUM' ? '#00439D' : ''))}] text-[10px] not-italic font-semibold leading-4`} >{ele?.term} {ele?.term === 'FUTURE' ? '' : 'TERM'} </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <div className="text-[color:var(--neutral-700,#606060)] text-[8px] not-italic font-medium leading-3 flex justify-center items-center"> <p>Shared {GetDays(ele.createdAt)} days ago</p> </div>
                                                <div>
                                                    <CiBookmark />
                                                </div>
                                            </div>
                                            <div className=" bg-gradient-to-r from-[#3c3c3c] to-[#333333] flex flex-col justify-center items-center gap-3 shrink-0 backdrop-blur-[3px] p-2 rounded-md">
                                                <div className=" bg-green-600 text-[10px] rounded-sm p-[2px] text-white font-normal ">
                                                    <span>Potential left : ₹34,422</span>
                                                </div>
                                                <div>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-[10px] not-italic font-bold leading-[18px]">Target</p>
                                                        <div className="w-16 h-2.5 rounded-xl bg-gradient-to-r from-[#575757] to-[#979797]"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=" bg-white rounded-lg flex flex-row justify-center items-center px-[12px] py-[2px]">
                                                        <FcLock />
                                                        <button className="text-[10px] ">Unlock FREE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)}
                        </Swiper>}
                </div>

                <style >{`
                .LiveIdeasSection {
                width: 100%;
                /* padding: 20px 0px; */
                }

                .LiveIdeasSection .swiper-wrapper {
                height: 200px;
                display: flex;
                align-items: center;
                column-gap: 0px;
                }

                .LiveIdeasSection .swiper-slide,
                .LiveIdeasSection .swiper-slide-prev,
                .LiveIdeasSection .swiper-slide-next {
                width: 154px;
                height: 174px;
                margin: 0px 10px;
                transition: 500ms;
                border-radius: 10px;
                background: #f5f5f5;
                }


                @media (max-width: 746px) {

                .LiveIdeasSection.swiper - slide,
                .LiveIdeasSection.swiper - slide - prev,
                .LiveIdeasSection.swiper - slide - next {
                margin: 0px 2px;
                }
                }
            `}</style>
                <div className="">
                    <p className=" m-auto text-[color:var(--neutral-300,#DFDFDF)] text-center text-xs not-italic font-normal leading-5">Lorem ipsum dolor sit amet consectetur. Erat pretium scelerisque aliquet nisi nec viverra.</p>
                </div>
            </section>
            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}
