import { Swiper, SwiperSlide } from "swiper/react";
import EliteHeroSection from "../Elite/EliteHeroSection";
import HeroSearchBox from "@/elements/HeroSearchBox";
import StocksHeroSection from "../Stocks/StocksHeroSection";
import heroBG from "@/assets/images/heroBG.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ratingLg from "@/assets/images/ratingLg.png";

export default function HeroSection() {
    return (
        <section className='relative lg:mb-20'>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                className='HeroSection'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <StocksHeroSection show={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <EliteHeroSection show={false} />
                </SwiperSlide>
            </Swiper>
            <div className="absolute bottom-[-50px] lg:bottom-[-100px] z-[2] bg-no-repeat h-[110px] lg:h-[180px] w-full xxl:h-[220px] bg-cover" style={{ backgroundImage: `url(${heroBG.src})` }}>
                <div className="lg:px-8 pb-3 lg:pb-8 max-w-screen-xl mx-auto flex items-end justify-between h-full">
                    <div className="flex flex-col ">
                        <HeroSearchBox />
                    </div>
                    <Image src={ratingLg} className='hidden lg:block h-[40px] w-[232px] lg:h-[66px] lg:w-[364px]' alt='rating' />
                </div>
            </div>
        </section>
    )
}
