import { Swiper, SwiperSlide } from "swiper/react";
import EliteHeroSection from "../Elite/EliteHeroSection";
import HeroSearchBox from "@/elements/HeroSearchBox";
import StocksHeroSection from "../Stocks/StocksHeroSection";
import heroBG from "@/assets/images/heroBG.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import users from "@/assets/icons/users.png";
import { BsApple } from "react-icons/bs";

export default function HeroSection() {
    return (
        <section className='relative lg:mb-20 font-Inter'>
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
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <StocksHeroSection homePage={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <EliteHeroSection homePage={true} />
                </SwiperSlide>
            </Swiper>
            <div className="absolute bottom-[-50px] lg:bottom-[-100px] z-[2] bg-no-repeat h-[110px] lg:h-[180px] w-full xxl:h-[220px] bg-cover" style={{ backgroundImage: `url(${heroBG.src})` }}>
                <div className="lg:px-8 pb-3 lg:pb-8 max-w-screen-xl mx-auto flex items-end justify-between h-full">
                    <div className="flex flex-col ">
                        <HeroSearchBox />
                    </div>
                    <div className="hidden lg:flex items-center">
                        <Image src={users} className=' h-[48px] w-[112px]' alt='rating' />
                        <p className='ml-4 text-base text-black font-medium'>
                            Trusted by<br />
                            <b>500k+ </b>Indians
                        </p>
                        <BsApple color='#202020' size={36} className='mx-7' />
                        <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width={32} height={32} className="w-8" alt='Google Play' />
                    </div>
                </div>
            </div>
        </section>
    )
}
