import Prasanth from "../../assets/img/Prasanth+Kuller.webp";
import Ankush from "../../assets/img/Ankush+Kumar.webp";
import Piyush from "../../assets/img/Piyush+Gupta.webp";
import Amresh from "../../assets/img/Amresh+Kumar.webp";
import Vijay from "../../assets/img/Vijay+Rathi.webp";
import Raghav from "../../assets/img/Raghav+Bhushan.jpg";
import Ravi from "../../assets/img/Ravi+Kumar.jpg";
import ratingLg from "../../assets/images/ratingLg.png";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

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
    return (
        <section className='font-Inter max-w-screen-xl py-16 lg:py-24 mx-auto lg:px-8 bg-[#FFFFFF]'>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center lg:justify-between my-10">
                <div className="">
                    <p className="font-medium text-base lg:text-3xl text-black">Trusted by <span className='font-extrabold'>400k+ users</span></p>
                    <p className="font-semibold text-xs lg:text-2xl text-[#414141]">Read what they say about us</p>
                </div>
                <Image src={ratingLg} className='h-[40px] w-[232px] lg:h-[66px] lg:w-[364px]' alt='rating' />
            </div>
            <Swiper
                grabCursor={true}
                initialSlide={1}
                slidesPerView='auto'
                spaceBetween={16}
                centeredSlides={true}
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
                // navigation={false}
                // modules={[Navigation]}
                className="UserFeedbacksSection"
            >
                {commentsData?.map(ele =>
                    <SwiperSlide key={ele.name}>
                        <AvailablePlansCard data={ele} />
                    </SwiperSlide>)}
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
                <BsStarHalf color='#FFB133' size={20} />
            </div>
            <p className='my-4 lg:w-10/12 text-base font-medium text-[#606060] grow'>
                {data.comment}
            </p>
            <div>
                <p className={`text-sm font-semibold`}>
                    {data.name}
                </p>
                <p className='mt-1 text-sm text-[#606060]'>
                    {data.details}
                </p>
            </div>
        </div>
    )
}
