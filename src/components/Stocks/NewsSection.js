/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import moment from "moment/moment";
import useSWR from 'swr'
import { TbTriangleFilled } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { BlackButton, NewsCategoryChip } from "@/elements/Button/Button";
import conveyLogo from '../../assets/images/conveyLogo.png'
import Image from "next/image";
import { useRouter } from "next/router";
import { popUp } from "@/elements/PopUp/PopUp";
import Actions from "@/elements/Actions";


const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function NewsSection() {
    const router = useRouter();

    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/convey/news?page=0`, fetcher)
    return (
        <section id="News" className='font-Inter max-w-screen-xl mx-auto lg:px-8 py-10 bg-[#FFFFFF]'>
            <p className="mt-8 lg:mt-5 mb-8 lg:mb-10 text-center text-xl lg:text-3xl font-extrabold text-black">
                Now read all financial news<br className="lg:hidden" /> in about 60 words
            </p>
            <div className="mx-4 px-[1px] pt-6 pb-5 lg:pt-12 rounded-[32px] bg-gradient-to-tr to-[#ffd87d90] from-[#F1F1F1] relative">
                {isLoading ?
                    <div className="w-[246px] h-[256px] lg:w-[346px] lg:h-[350px]" />
                    : <Swiper
                        speed={500}
                        initialSlide={2}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        className="NewsSection"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {data.data?.map(ele =>
                            <SwiperSlide key={ele.id}>
                                <div className="p-3 overflow-hidden flex flex-col justify-between h-full select-none">
                                    <img className="rounded-lg mx-auto w-full h-[132px] lg:h-[164px] object-cover" src={ele.img_large} alt={ele.title} width={200} height={200} loading='lazy' decoding="async" data-nimg="1" />
                                    <p className="my-1 lg:my-2 line-clamp-2 text-xs lg:text-base font-bold text-black">
                                        {ele.title}
                                    </p>
                                    {ele.companies?.[0] &&
                                        <div className="flex items-center ">
                                            {ele.companies?.slice(0, 2).map((e, i) =>
                                                <div key={i} className='flex items-center font-Inter border-r border-[#EDEDED] pr-1 mr-1 cursor-pointer'
                                                // onClick={() => router.push(Actions.toStockDetail(ele.nseSymbol ?? ele.bseSymbol, ele.compName))}
                                                >
                                                    <span className="text-[10px] font-medium text-[#606060] mr-1.5">{e.nseSymbol ?? e.bseSymbol}</span>
                                                    <TbTriangleFilled size={8} color={e.stockStatus === 'DOWN' ? '#EB4E2C' : '#26A649'} />
                                                    <span className={`text-[10px] ml-1 ${e.stockStatus === 'DOWN' ? 'text-[#EB4E2C]' : 'text-[#26A649]'}`}>{e.todaysChange?.toFixed(2)}</span>
                                                </div>)}
                                            <span className="text-[10px] font-medium text-[#606060] mr-1.5">+3 stocks</span>
                                        </div>}
                                    <div className="flex items-center">
                                        <span className="text-[8px] font-medium text-[#414141]">{ele.source}</span>
                                        <span className="mx-2 h-[5px] w-[5px] bg-[#414141] rounded-full" />
                                        <span className="text-[8px] font-medium text-[#414141]">{moment(ele.createdAt).format("DD MMM YYYY")}</span>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>}
                <div className="flex items-center absolute bottom-6 lg:right-6 right-1/2 transform translate-x-1/2 lg:translate-x-0">
                    <p className="text-[10px] lg:text-sm font-medium text-[#414141] mr-2">
                        Powered by
                    </p>
                    <Image src={conveyLogo} alt='demo image' className="w-14 lg:w-20 object-contain" width={80} height={24} />
                </div>
            </div>
            <div className="mx-4 mt-8 py-2 flex flex-col items-center gap-y-4 lg:hidden">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                <div className="flex gap-3">
                    {[
                        {
                            "id": 1,
                            "title": "Stocks",
                            "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/candlestick.png"
                        },
                        {
                            "id": 2,
                            "title": "Business",
                            "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/growth.png"
                        },
                        {
                            "id": 3,
                            "title": "IPOs",
                            "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/ipo.png"
                        }
                    ]?.map(ele => <NewsCategoryChip key={ele.title} icon={ele.imageUrl} text={ele.title} />)}
                </div>
                <div className="flex gap-3">
                    {[
                        {
                            "id": 6,
                            "title": "Startups",
                            "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/start-up.png"
                        },
                        {
                            "id": 7,
                            "title": "World",
                            "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/worldwide.png"
                        }
                    ]?.map(ele => <NewsCategoryChip key={ele.title} icon={ele.imageUrl} text={ele.title} />)}
                </div>
                <BlackButton onClick={() => popUp.open()} text='Read on app' className='lg:ml-auto px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
            <div className="mx-4 py-2 mt-12 hidden lg:flex items-center gap-x-5 ">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                {[
                    {
                        "id": 1,
                        "title": "Stocks",
                        "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/candlestick.png"
                    },
                    {
                        "id": 2,
                        "title": "Business",
                        "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/growth.png"
                    },
                    {
                        "id": 3,
                        "title": "IPOs",
                        "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/ipo.png"
                    },
                    {
                        "id": 6,
                        "title": "Startups",
                        "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/start-up.png"
                    },
                    {
                        "id": 7,
                        "title": "World",
                        "imageUrl": "https://storage.googleapis.com/app-assets-univest/website-assets/worldwide.png"
                    }
                ]?.map(ele => <NewsCategoryChip key={ele.title} icon={ele.imageUrl} text={ele.title} />)}
                <BlackButton onClick={() => popUp.open()} text='Read on app' className='lg:ml-auto px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
            <style>{`

                .NewsSection .swiper-wrapper {
                    display: flex;
                    align-items: center;
                    column-gap: 0px;
                    padding-bottom: 40px;
                    height: 320px;
                }
                
                .NewsSection .swiper-slide {
                    margin: 0 12px;
                    transform: scale(1);
                    opacity: 0.5;
                    transition: 500ms;
                    border-radius: 15px;
                    background: #FFFFFF;
                    border: 1px solid #EDEDED;
                }
                
                .NewsSection .swiper-slide-active {
                    margin: 0 30px;
                    opacity: 1;
                    transform: scale(1.1);
                }
                
                .NewsSection .swiper-pagination-bullet {
                    background: #414141;
                    width: 14px;
                    height: 6px;
                    border-radius: 100px;
                    margin: 0px;
                }
                
                @media (max-width: 976px) {
                    .NewsSection .swiper-slide {
                    width: 232px;
                    height: 240px;
                    }
                
                    .NewsSection .swiper-wrapper {
                    height: 280px;
                    }
                
                    .NewsSection .swiper-slide-active {
                    margin: 0 12px;
                    }
                
                    .NewsSection .swiper-pagination-bullets {
                    left: 30% !important;
                    display: none;
                    }
                }
                
                @media (min-width: 976px) {
                    .NewsSection .swiper-slide {
                    width: 288px;
                    height: 290px;
                    }
                
                
                    .NewsSection .swiper-pagination-bullet {
                    background: #414141;
                    width: 20px;
                    height: 8px;
                    border-radius: 100px;
                    margin: 3px;
                    }
                }
                `}</style>
        </section>
    )
}
