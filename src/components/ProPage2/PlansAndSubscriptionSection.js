
import { popUp } from "@/elements/PopUp/PopUp"
import Image from "next/image";
import proIcon from "../../assets/Images/pro_icon.png"
import proPlusIcon from "../../assets/Images/proPlus_icon.png"
import vector from "../../assets/Images/Vector.png"
import greenTickIcon from "../../assets/Images/green_tick_icon.png"
import crossTickIcon from "../../assets/Images/cross_tick.png"
import proPlusPremIcon from "../../assets/Images/proPlusPrem_icon.png"
import proPremIcon from "../../assets/Images/proPrem_icon.png"
import proPlusIcon2 from "@/assets/Images/proPlus_icon2.png"
import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';
import sebi_new_logo_white from '../../assets/Images/sebi_logo_new 1.png';
import yashpal_arora from '@/assets/images/yashpal_arora.png';
import ketan_sonalkar from '@/assets/images/ketan_sonalkar.png';
import sagar_wadhwa from '@/assets/images/sagar_wadhwa.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { useGetAxios } from "@/hooks/useGetAxios";
import BenefitsSection from "./BenefitsSection";


export default function PlandAndSubscriptionSection({ isDark = false }) {
    const [swiper, setSwiper] = useState(null);
    const { fetchData, data } = useGetAxios('')

    useEffect(() => {
        fetchData(`/resources/pro-membership/plans`)
    }, [])
    return (
        <>
            <section className={` flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>

                {/* Membership */}
                <div className="flex flex-col gap-5">
                    <div>
                        <p className=" text-[color:var(--Pearl-White,#FFF)] text-xl not-italic font-extrabold leading-8">Available memberships</p>
                    </div>
                    <BenefitsSection />
                </div>

            </section>

            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>

            <section className={` flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
                <div>
                    <p className="text-[color:var(--Pearl-White,#FFF)] text-center text-xl not-italic font-extrabold leading-8">Our Pricing of subscription</p>
                </div>
                <div>
                    <div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className=" text-sm  flex-row gap-1 bg-gradient-to-t from-[#FF8415] to-[#FFCA3F]  flex justify-center items-center pl-[38px] pr-[37.287px] py-1.5 rounded-lg" >
                                <div className="flex flex-row ">
                                    <p className="font-extrabold" >PR</p>
                                    <div className="flex justify-center items-center"><Image className="w-4" src={proPremIcon} alt='demo image' /></div>
                                </div>
                                <span className="font-extrabold">plans</span>
                            </div>
                        </div>

                        <div className='max-w-screen-xl mx-auto px-4 lg:px-8 overflow-hidden'>
                            <div className="flex gap-3 lg:gap-6 justify-between mt-6 lg:mt-14">
                                {data?.pro_plans_list?.map((ele, i) => <PlansCard key={ele.planId} planName={ele.planName} data={ele} />)}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className=" text-white text-sm  flex-row gap-1 bg-gradient-to-tl  from-[#1A379E] to-[#C379FE]  flex justify-center items-center pl-[38px] pr-[37.287px] py-1.5 rounded-lg" >
                                <div className="flex flex-row ">
                                    <p className="font-extrabold" >PR</p>
                                    <div className="flex justify-center items-center"><Image className="w-4" src={proPlusIcon2} alt='demo image' /></div>
                                </div>
                                <span className="font-extrabold"> Plus plans</span>
                            </div>
                        </div>

                        <div className='max-w-screen-xl mx-auto px-4 lg:px-8 overflow-hidden'>
                            <div className="flex gap-3 lg:gap-6 justify-between mt-6 lg:mt-14">
                                {data?.pro_plus_plans_list?.map((ele, i) => <PlansCard isPlus={true} key={ele.planId} planName={ele.planName} data={ele} />)}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </section>

            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>

            <section className={` flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:mb-6">
                    <span className={`text-center text-xl lg:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-[#414141]'}`}>
                        Investment & trading ideas
                    </span>
                    <div className="flex my-6 lg:my-0 items-center" onClick={() => popUp.open()}>
                        <Image
                            placeholder="empty"
                            src={isDark ? sebi_new_logo_white : sebi_new_logo}
                            className=' w-[40px] lg:w-[64px]'
                            alt='demo image'
                        />
                        <div className="mx-2">
                            <p className={`font-semibold text-base lg:text-2xl  ${isDark ? 'text-white' : 'text-black'}`}>Registered - INA000017639</p>
                            <p className="text-[color:var(--neutral-700,#606060)] text-[10px] not-italic font-medium leading-4">Uniapps, a wholly owned subsidiary of Univest</p>
                        </div>
                    </div>
                </div>
                <div className=" lg:px-14 ">
                    <Swiper
                        grabCursor={true}
                        initialSlide={1}
                        loop={true}
                        slidesPerView={1.2}
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
                    >
                        {[
                            { name: 'Ketan Sonalkar ', img: ketan_sonalkar, disc: 'SEBI registered advisor' },
                            { name: 'Yashpal Arora ', img: yashpal_arora, disc: 'Senior consultant' },
                            { name: 'Sagar Wadhwa ', img: sagar_wadhwa, disc: 'Senior Research Analyst' },
                            { name: 'Ketan Sonalkar', img: ketan_sonalkar, disc: 'SEBI registered advisor' },
                            { name: 'Yashpal Arora', img: yashpal_arora, disc: 'Senior consultant' },
                            { name: 'Sagar Wadhwa', img: sagar_wadhwa, disc: 'Senior Research Analyst' },
                        ]?.map(ele =>
                            <SwiperSlide key={ele.name}>
                                <AdvisoryTeamCard data={ele} isDark={isDark} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className=" text-[#BCBCBC] text-center text-sm not-italic font-medium leading-6">
                    <p >Backed up with 100+ years of investing experience, led by SEBI registered advisor Ketan Sonalkar along with Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa</p>
                </div>
            </section>

            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}



export function PlansCard({ data, planName, isPlus }) {
    return (
        <div className={` relative border-2 ${isPlus ? (planName !== '6 months' ? 'border-[#F2EEFF]' : 'border-[#D3C3FF]') : (planName !== '6 months' ? 'border-[#FFEDD1]' : 'border-[#FFC970]')} rounded-xl  w-full font-Inter flex flex-col font-extrabold bg-white p-`}>
            <div className={`${planName.includes('12') ? '' : 'hidden'} absolute left-[-5px] top-6 bg-gradient-to-br from-[#141E30] to-[#333] px-1 py-0.5 rounded-[0px_2px_2px_0px`}>
                <p className="text-[color:var(--Pearl-White,#FFF)] text-[8px] not-italic font-extrabold leading-3">Recommended</p>
            </div>
            <p className={` ${isPlus ? (planName !== '6 months' ? 'bg-[#F2EEFF]' : 'bg-[#D3C3FF]') : (planName !== '6 months' ? 'bg-[#FFEDD1]' : 'bg-[#FFC970]')}  py-1.5 lg:py-5 text-[10px] lg:text-3xl text-center rounded-t-lg`}>
                {planName}
            </p>
            <div>
                <p className="mt-3.5 lg:mt-7 text-sm lg:text-4xl text-center">
                    ₹{data.discountedAmount?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
                <p className="mt-2.5 lg:mt-7 text-sm lg:text-4xl text-center">
                    <del className="text-[#606060] text-xs lg:text-3xl font-medium">₹{data.displayAmount?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</del>
                </p>
            </div>
            <div className="py-2 lg:py-6 flex justify-center">
                <span className={`text-white rounded-md text-[10px] lg:text-2xl text-center ${isPlus ? 'bg-[#3C305F]' : 'bg-[#5C3900]'} py-1 px-2 lg:px-5`}>
                    Save {((data.displayAmount - data.discountedAmount) * 100 / data.displayAmount)?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}%
                </span>
            </div>
        </div >
    )
}

export function AdvisoryTeamCard({ data, isDark }) {
    return (
        <div className={`mt-5 lg:mt-10 flex font-Inter rounded-lg py-2.5 px-4  ${isDark ? 'bg-[#525457]' : ' bg-white shadow-[0_6px_12px_rgba(106,115,129,0.16),0_3px_8px_rgba(87,102,117,0.06)]'}`}>
            <Image
                src={data.img}
                alt='demo image'
                className="rounded-full h-[48px] lg:h-[64px] w-[48px] lg:w-[64px]"
            />
            <div className="self-center ml-5">
                <p className={isDark ? 'font-semibold text-sm lg:text-xl text-white' : 'font-semibold text-sm lg:text-xl text-black'}>{data.name}</p>
                <p className={isDark ? "ont-medium text-xs lg:text-base text-[#dfdfdf]" : "font-medium text-xs lg:text-base text-[#747474]"}>{data.disc}</p>
            </div>
        </div>
    )
}
