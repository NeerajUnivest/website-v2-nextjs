import React from 'react'
import { Autoplay, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/effect-coverflow";
import Image from 'next/image';
import play from "@/assets/images/play.png";
import no_hidden_charges from '../../assets/icons/no_hidden_charges.png';
import insights from '../../assets/icons/insights.png';
import portfolio_analysis from '../../assets/icons/portfolio_analysis.png';
import interest_rate from '../../assets/icons/interest_rate.png';


export default function WhyUnivestSection() {
    return (
        <section className=' px-4 lg:px-8 py-20 bg-[#F5F5F5] font-Inter'>
            <div className='max-w-screen-xl mx-auto flex flex-col '>
                <p className="text-center text-xl lg:text-5xl font-extrabold text-[#202020]">
                    Why Univest?
                </p>
                <p className=" mt-5 lg:mt-4 text-center text-xl font-semibold text-[#747474]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div className='flex flex-col-reverse lg:flex-col pt-11 lg:pt-12 gap-16'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row lg:grid-rows-1 gap-x-8 gap-y-14 mx-4 lg:mx-16">
                        <IconBox icon={no_hidden_charges} name='No hidden<br/>charges' />
                        <IconBox icon={insights} name='Buy-Sell-Hold<br/>insights' />
                        <IconBox icon={portfolio_analysis} name='Free portfolio<br/>analysis' />
                        <IconBox icon={interest_rate} name='Best returns<br/>offered' />
                    </div>
                    <Swiper
                        initialSlide={1}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.4}
                        spaceBetween={0}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 200,
                            depth: 50,
                            scale: 0.8,
                            modifier: 1,
                            slideShadows: true
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 100,
                                    depth: 100,
                                    scale: 0.9,
                                    modifier: 0.9,
                                    slideShadows: true
                                }
                            },
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="WhyUnivestSection"
                    >
                        <SwiperSlide>
                            <Image src={play} className='w-full h-full rounded-3xl' alt='play' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={play} className='w-full h-full rounded-3xl' alt='play' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={play} className='w-full h-full rounded-3xl' alt='play' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}


export function IconBox({ icon, name }) {
    return (
        <div className='flex flex-col'>
            <Image src={icon} className='w-[46px] h-[46px] mx-auto' alt='icon' />
            <p className=" mt-5 lg:mt-4 text-center text-base lg:text-2xl font-semibold text-[#202020]"
                dangerouslySetInnerHTML={{ __html: name }} />
        </div>
    )
}
