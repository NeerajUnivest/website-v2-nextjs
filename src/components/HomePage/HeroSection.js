import { Swiper, SwiperSlide } from "swiper/react";
import EliteHeroSection from "../Elite/EliteHeroSection";
import HeroSearchBox from "@/elements/HeroSearchBox";
import StocksHeroSection from "../Stocks/StocksHeroSection";
import heroBG from "../../assets/images/heroBG.svg";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import rating from "@/assets/Images/rating.png";

export default function HeroSection() {
    return (
        <section className='relative'>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                className='HeroSection'
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <StocksHeroSection show={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <EliteHeroSection show={false} />
                </SwiperSlide>
            </Swiper>
            <div className="absolute -bottom-[2px] z-[2] bg-no-repeat h-[110px] lg:h-[180px] w-screen xxl:h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${heroBG.src})` }}>
                <div className="lg:pb-6 max-w-screen-xl mx-auto flex items-end justify-between h-full">
                    <div className="flex flex-col ">
                        <HeroSearchBox />
                    </div>
                    <Image src={rating} className='hidden lg:block h-[40px] w-[232px] lg:h-[66px] lg:w-[364px]' alt='rating' />
                </div>
            </div>
        </section>
    )
}
