import React from 'react'
import { Autoplay, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/effect-coverflow";
import play from "@/assets/images/play.png";
import Image from 'next/image';


export default function WhyUnivestSection() {
    return (
        <section className=' px-4 lg:px-8 py-20 bg-[#F5F5F5] font-Inter'>
            <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>

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
                        depth: 1,
                        scale: 0.8,
                        modifier: 1,
                        slideShadows: false
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 250,
                                depth: 100,
                                scale: 0.9,
                                modifier: 0.9,
                                slideShadows: false
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
        </section>
    )
}
