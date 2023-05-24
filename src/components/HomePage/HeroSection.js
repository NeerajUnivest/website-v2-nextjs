import { Swiper, SwiperSlide } from "swiper/react";
import EliteHeroSection from "../Elite/EliteHeroSection";
import StocksHeroSection from "../Stocks/StocksHeroSection";

export default function HeroSection() {
    return (
        <section className='relative'>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={0}
            >
                <SwiperSlide>
                    <StocksHeroSection />
                </SwiperSlide>
                <SwiperSlide>
                    <EliteHeroSection />
                </SwiperSlide>
            </Swiper>
            {/* <div className="absolute bottom-56 h-40 w-full z-10 bg-transparent">
                trans
            </div>
            <div className="absolute bottom-0 h-80 w-full z-10 bg-white">
                kfk
            </div> */}
        </section>
    )
}
