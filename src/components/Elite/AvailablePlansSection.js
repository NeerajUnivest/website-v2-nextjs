import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import rbi from '../../assets/icons/rbi.png';
import a from '../../assets/icons/plans/1.png';
import b from '../../assets/icons/plans/2.png';
import c from '../../assets/icons/plans/3.png';
import d from '../../assets/icons/plans/4.png';

export default function AvailablePlansSection() {
    return (
        <section className='font-Inter max-w-screen-xl py-16 lg:py-24 mx-auto lg:px-8 bg-[#FFFFFF]'>
            <div className="mx-4 lg:mx-0 mb-8 lg:mb-14 flex flex-col lg:flex-row justify-between items-center gap-4">
                <span className="text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Available Investment plans
                </span>
                <div className="flex items-center">
                    <Image
                        placeholder="blur"
                        src={rbi}
                        className=' h-[40px] lg:h-[56px] w-[40px] lg:w-[56px]'
                        alt='demo image'
                    />
                    <div className="self-center ml-5 text-base text-black">
                        <p className="font-medium ">Secured with</p>
                        <p className="font-extrabold ">RBI regulated NBFC-P2P</p>
                    </div>
                </div>
            </div>
            <Swiper
                initialSlide={1}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.3}
                spaceBetween={0}
                className="AvailablePlansSection"
                breakpoints={{
                    768: {
                        initialSlide:0,
                        centeredSlides: false,
                        slidesPerView: 3,
                        spaceBetween: 36
                    },
                }}
            >
                {[1, 2, 3]?.map(ele =>
                    <SwiperSlide key={ele}>
                        <AvailablePlansCard />
                    </SwiperSlide>)}
            </Swiper>
            <div className="mt-6 flex flex-col justify-center items-center gap-8">
                <button className="bg-[#C9DDE680] px-8 py-3 text-sm lg:text-xl font-medium rounded-full">
                    Start investing with as low as ₹25k /-
                </button>
                <BlackButton onClick={() => alert('TODO')} text='Invest now' className='px-8 lg:px-12 py-3 text-sm lg:text-xl font-extrabold' />
            </div>
        </section>
    )
}


export function AvailablePlansCard() {
    return (
        <div className="h-full w-full px-4 py-6 rounded-2xl bg-[#C9DDE680] flex flex-col">
            <p className="font-medium text-center text-xl">Earn up to
                <span className='font-extrabold text-[#437587]'> 12% p.a.</span></p>
            <div className="bg-white grow px-3 py-4 rounded-lg my-4 flex flex-col justify-between">
                {[1, 2, 3, 4]?.map((ele, i) =>
                    <div key={i} className='text-base flex gap-2 items-center'>
                        <Image
                            placeholder="blur"
                            src={a}
                            className=' h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                            alt='demo image'
                        />
                        <div className='text-[#606060] '>Interest paid : </div>
                        <div className='font-bold text-black'>At maturity</div>
                    </div>
                )}
            </div>
            <p className="bg-white p-3 text-xs font-semibold rounded-lg text-center">
                Ideal when saving for a long term expense/goal
            </p>
        </div>
    )
}
