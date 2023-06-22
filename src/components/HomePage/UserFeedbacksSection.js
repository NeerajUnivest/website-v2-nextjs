import Prasanth from "../../assets/rating/Prasanth+Kuller.webp";
import Ankush from "../../assets/rating/Ankush+Kumar.webp";
import Piyush from "../../assets/rating/Piyush+Gupta.webp";
import Amresh from "../../assets/rating/Amresh+Kumar.webp";
import Vijay from "../../assets/rating/Vijay+Rathi.webp";
import Raghav from "../../assets/rating/Raghav+Bhushan.jpg";
import Ravi from "../../assets/rating/Ravi+Kumar.jpg";
import ratingLg from "../../assets/images/ratingLg.png";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsStarFill, } from 'react-icons/bs';
import { Autoplay, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const commentsData = [
    {
        name: 'Prashant Khuller',
        details: 'Category Head, UDAAN.com',
        img: Prasanth,
        comment: 'The app looks great. All the required data is readily available. Very easy and intuitive to use as well.',
    },
    {
        name: 'Ankush Rajput',
        details: 'Co-Founder, SAHI COIN',
        img: Ankush,
        comment: 'Just linked my profile and those buy, sell and hold insights were mind blowing. The more i explore the more I love the app.',
    },
    {
        name: 'Piyush Gupta',
        details: 'Head of Digital Partnerships TATA AIA ',
        img: Piyush,
        comment: 'The app looks very smooth and clean. The UI design of the app is lit!',
    },
    {
        name: 'Amresh kumar',
        details: 'Chief product officer, Crofarm',
        img: Amresh,
        comment: 'Highly impressed by the overall app. Amazing UI with a smooth experience. True perfection.',
    },
    {
        name: 'Vijay Rathi',
        details: 'Technology Leader PRECISELY',
        img: Vijay,
        comment: 'Great exploration, pioneerin the new segment..All the best Univest India.',
    },
    {
        name: 'Raghav Bhushan',
        details: 'Software architect, Expedia',
        img: Raghav,
        comment: 'Highly impressed by the overall app. Amazing UI with a smooth experience. True perfection.',
    },
    {
        name: 'Ravi Kumar',
        details: 'Software Architect, Inshorts',
        img: Ravi,
        comment: 'Absolutely loved the app. Look and feel is really amazing. Screeners tab switching experience is great. All the general market content is also available here with easy to understand insights.',
    }
]

export default function UserFeedbacksSection() {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className='font-Inter max-w-screen-xl pb-6 lg:pb-10 pt-16 lg:pt-24 mx-auto lg:px-8 bg-[#FFFFFF]'>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center lg:justify-between my-10">
                <div className="">
                    <p className="hidden lg:flex font-medium text-base lg:text-4xl text-black mb-3 whitespace-pre">Trusted by<span className='font-extrabold'> 400k+ users</span></p>
                    <p className="font-extrabold lg:font-semibold text-xl lg:text-2xl text-[#414141]">Read what they say about us</p>
                </div>
                <Image src={ratingLg} className='h-[40px] w-[232px] lg:h-[66px] lg:w-[364px]' alt='rating' />
            </div>
            <Swiper
                grabCursor={true}
                initialSlide={1}
                loop={true}
                slidesPerView='auto'
                spaceBetween={16}
                centeredSlides={true}
                onSwiper={setSwiper}
                breakpoints={{
                    768: {
                        centeredSlides: false,
                        spaceBetween: 32,
                    },
                    1024: {
                        centeredSlides: false,
                        spaceBetween: 32,
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Pagination]}
                className="UserFeedbacksSection relative"
            >
                <div className="hidden absolute inset-y-0 left-0 z-10 lg:flex items-center justify-start backdrop-blur bg-[#ffffff] w-20">
                    <BsArrowRight size={40} className=' rotate-180' color="#747474" onClick={() => swiper.slidePrev()} />
                </div>
                {commentsData?.map(ele =>
                    <SwiperSlide key={ele.name}>
                        <AvailablePlansCard data={ele} />
                    </SwiperSlide>)}

                <div className="hidden absolute inset-y-0 right-0 z-10 lg:flex items-center justify-end backdrop-blur bg-[#ffffff] w-20">
                    <BsArrowRight size={40} className='' color="#747474" onClick={() => swiper.slideNext()} />
                </div>
            </Swiper>
        </section>
    )
}



export function AvailablePlansCard({ data }) {
    return (
        <div className="h-full w-full p-6 rounded-2xl bg-white border  flex flex-col">
            <div className='flex items-center gap-2'>
                <Image src={data.img} className='mr-2 h-[48px] w-[48px] lg:h-[64px] lg:w-[64px] border-4 border-white rounded-full shadow-inner' alt={data.name} />
                <BsStarFill color='#FFB133' size={20} />
                <BsStarFill color='#FFB133' size={20} />
                <BsStarFill color='#FFB133' size={20} />
                <BsStarFill color='#FFB133' size={20} />
                <BsStarFill color='#FFB133' size={20} />
                {/* <BsStarHalf color='#FFB133' size={20} /> */}
            </div>
            <p className='my-4 lg:w-10/12 text-sm lg:text-base font-medium text-[#606060] grow'>
                {data.comment}
            </p>
            <div>
                <p className={`text-xs lg:text-sm font-semibold`}>
                    {data.name}
                </p>
                <p className='mt-1 text-xs lg:text-sm text-[#606060]'>
                    {data.details}
                </p>
            </div>
        </div>
    )
}
