import { BlackButton, ScreenerCategoryChip } from "@/elements/Button/Button";
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import ScreenerCard from "../Screeners/ScreenerCard";
import { CiCircleChevLeft } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import 'swiper/css';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function ScreenersSection() {
    const { push } = useRouter();
    const [swiper, setSwiper] = useState(null);
    const [active, setActive] = useState(0);
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/screeners/v2`, fetcher)
    return (
        <section id="Screeners" className='font-Inter max-w-screen-xl mx-auto lg:px-8 py-32 bg-[#FFFFFF]'>
            <p className="my-8 lg:my-6 text-center text-xl lg:text-3xl font-extrabold text-black">
                Powered by robust algorithms built by a highly experienced research team.
            </p>
            <div className="mx-4 p-[1px] rounded-3xl bg-gradient-to-br to-[#ABC7ED] from-[#F1F6F8]">
                <p className="mt-6 lg:mt-16 ml-4 lg:ml-8 text-base lg:text-3xl font-semibold text-primary pb-2">
                    Popular screeners
                </p>
                {isLoading ?
                    <div className="flex gap-4">
                        {[0, 1, 2, 3, 4,].map(ele => <div key={ele} className={`bg-white w-[120px] min-w-[120px] h-[132px] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] border-[1px] border-[#E5E5E5] rounded-[12px] overflow-hidden shadow-md z-[1]`} />)}
                    </div>
                    : <Swiper
                        grabCursor={true}
                        initialSlide={0}
                        slidesPerView='auto'
                        spaceBetween={0}
                        onSwiper={setSwiper}
                        onSlideChange={(e => setActive(e.activeIndex))}
                        className="ScreenersSection relative "
                    >

                        {data?.data?.list?.screenersList?.filter(f => f.mobile)?.map((ele, i) =>
                            <SwiperSlide key={i}>
                                <ScreenerCard ele={ele} />
                            </SwiperSlide>)}

                    </Swiper>
                }
                <div className="flex justify-between items-center px-8  mt-6 mb-10 ">
                    <CiCircleChevLeft className='text-[20px] lg:text-[32px] ' color={active === 0 ? '#747474' : "#202020"} onClick={() => swiper.slidePrev()} />
                    <p className="text-center text-sm lg:text-xl font-semibold text-black">
                        <span className="text-app-red font-extrabold">New</span> screeners every month
                    </p>
                    <CiCircleChevLeft className='text-[20px] lg:text-[32px] rotate-180' color={5 < active ? '#747474' : "#202020"} onClick={() => swiper.slideNext()} />
                </div>
            </div>
            <div className="mx-4 mt-8 py-2 lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-x-5 lg:hidden">
                <div className="text-sm lg:text-base font-semibold text-black">
                    Explore by categories
                </div>
                <div className="grid grid-cols-2 lg:grid-flow-col grid-flow-row lg:grid-rows-1 gap-4">
                    {data?.data?.list?.screenersCategories?.map(ele => <ScreenerCategoryChip key={ele.categoryId} text={ele.categoryTitle} onClick={() => push('/screeners')} />)}
                </div>
                <BlackButton onClick={() => push('/screeners')} text='View all' className='px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>
            <div className="mx-4 py-2 mt-12 lg:flex items-center hidden">
                <div className="text-base font-semibold text-black mr-8">
                    Explore by categories
                </div>
                {data?.data?.list?.screenersCategories?.map(ele => <ScreenerCategoryChip key={ele.categoryId} text={ele.categoryTitle} onClick={() => push('/screeners')} />)}
                <BlackButton onClick={() => push('/screeners')} text='View all' className='ml-auto px-6 lg:px-8 py-2 text-sm lg:text-base font-extrabold' />
            </div>

            <style>{`
                .ScreenersSection .swiper {
                    width: 100%;
                    height: 100%;
                }
                
                .ScreenersSection .swiper-slide {
                    width: 120px;
                    height: 132px;
                    margin:  8px 0 8px 16px;
                }
                
                @media (min-width: 976px) {
                    .ScreenersSection .swiper-slide {
                        width: 200px;
                        height: 156px;
                        margin:  8px 0 8px 32px;
                    }
                }
                
            `}</style>
        </section>
    )
}

