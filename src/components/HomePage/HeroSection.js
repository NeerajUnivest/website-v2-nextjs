import { Swiper, SwiperSlide } from "swiper/react";
import EliteHeroSection from "../Elite/EliteHeroSection";
import HeroSearchBox from "@/elements/HeroSearchBox";
import StocksHeroSection from "../Stocks/StocksHeroSection";
import heroBG from "../../assets/images/heroBG.svg";
import { Pagination } from "swiper";

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
                className=''
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <StocksHeroSection show={false} />
                </SwiperSlide>
                <SwiperSlide>
                    <EliteHeroSection show={false} />
                </SwiperSlide>
            </Swiper>
            <div className="absolute -bottom-[2px] z-[9] bg-no-repeat h-[100px] lg:h-[200px] w-screen xxl:h-[270px] bg-cover bg-center" style={{ backgroundImage: `url(${heroBG.src})` }}>
                <div className=" max-w-screen-xl mx-auto flex items-center h-full">
                    <div className="flex flex-col ">
                        <HeroSearchBox />
                    </div>
                </div>
            </div>
        </section>
    )
}
