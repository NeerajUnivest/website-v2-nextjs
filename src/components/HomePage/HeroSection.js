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
import Link from "next/link";
import ProHeroSection from "../ProPage/ProHeroSection";
import EliteHeroSectionNew from "../ElitePage2/EliteHeroSectionNew";
import ProAndPlusHeroSection from "../ProPage2/ProAndPlusHeroSection";

export default function HeroSection({ start_at }) {
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
                    delay: 40000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div className="block md:hidden">
                        <ProAndPlusHeroSection homePage={true} start_at={start_at} />
                    </div>
                    <div className="hidden md:block">
                        <ProHeroSection homePage={true} start_at={start_at} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="block md:hidden">
                        <EliteHeroSectionNew homePage={true} />
                    </div>
                    <div className="hidden md:block">
                        <EliteHeroSection homePage={true} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <StocksHeroSection homePage={true} />
                </SwiperSlide>
            </Swiper>
            <div className="absolute bottom-[-50px] lg:bottom-[-100px] z-[2] bg-no-repeat h-[110px] lg:h-[180px] w-full xxl:h-[220px] bg-cover" style={{ backgroundImage: `url(${heroBG.src})` }}>
                <div className="lg:px-8 pb-3 lg:pb-8 max-w-screen-xl mx-auto flex items-end justify-between h-full">
                    <div className="hidden lg:flex flex-col w-full lg:w-auto">
                        <HeroSearchBox type='web' />
                    </div>
                    <div className="flex items-center px-3 lg:px-0">
                        <Image src={users} className=' object-contain w-28' alt='rating' />
                        <p className='ml-2 lg:ml-4 text-xs lg:text-base text-black font-medium'>
                            Trusted by<br />
                            <b>800k+ </b>Indians
                        </p>
                        <Link rel="noreferrer" target="_blank" href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" className='mx-7' >
                            <BsApple color='#202020' size={36} />
                        </Link>

                        <Link rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.univest.capp"  >
                            <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width={32} height={32} className="w-8" alt='Google Play' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
