
import { popUp } from "@/elements/PopUp/PopUp"
import Image from "next/image";
import proPremIcon from "../../assets/images/proPrem_icon.png"
import proPlusIcon2 from "@/assets/images/proPlus_icon2.png"
import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';
import sebi_new_logo_white from '../../assets/images/sebi_logo_new 1.png';
import yashpal_arora from '@/assets/images/yashpal_arora.png';
import ketan_sonalkar from '@/assets/images/ketan_sonalkar.png';
import sagar_wadhwa from '@/assets/images/sagar_wadhwa.png';
import vaibhav from '@/assets/images/vaibhav.png';
import Ankit from '@/assets/images/Ankit.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useContext, useEffect, useState } from "react";
import { useGetAxios } from "@/hooks/useGetAxios";
import BenefitsSection from "./BenefitsSection";
import { UserDetailProvider } from "@/contexts/UserDetailContext";
import { planSectionPopUp } from "@/elements/PopUp/PlanSectionPopUp";
import Actions from "@/elements/Actions";


export default function PlandAndSubscriptionSection({ isDark = false }) {
    const [swiper, setSwiper] = useState(null);
    const { fetchData, data } = useGetAxios('')

    useEffect(() => {
        fetchData(`/resources/pro-membership/plans`)
    }, [])
    return (
        <>
            <section className={`font-Inter flex flex-col gap-8 max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
                <div className="flex flex-col gap-5">
                    <p className=" text-white text-xl md:text-3xl text-center font-extrabold">Available memberships</p>
                    <BenefitsSection />
                </div>
            </section>
            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
            <section className={`font-Inter flex flex-col gap-8 max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
                <p className="text-white text-center text-xl md:text-3xl font-extrabold leading-8">Our pricing of subscription</p>
                <div className="flex flex-col md:flex-row ">
                    <div className="md:basis-1/2">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="w-[156px] text-sm  flex-row gap-1 proGradient  flex justify-center items-center py-1.5 rounded-lg" >
                                <div className="flex flex-row ">
                                    <span className="font-extrabold" >PR</span>
                                    <Image className="w-4 object-contain" src={proPremIcon} alt='demo image' />
                                </div>
                                <span className="font-extrabold">plans</span>
                            </div>
                        </div>

                        <div className='max-w-screen-xl mx-auto lg:px-8 overflow-hidden'>
                            <div className="flex gap-3 lg:gap-6 justify-between mt-4 lg:mt-6">
                                {data?.pro_plans_list?.filter(f => !f.planId?.includes('plan_000') && !f.planId?.includes('timesprime_3'))
                                    .map(ele => <PlansCard key={ele.planId} planName={ele.planName} data={ele} />)}
                            </div>
                        </div>
                    </div>
                    <div className="md:basis-1/2 mt-8 md:mt-0">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="w-[156px] text-white text-sm  flex-row gap-1 proPlusGradient  flex justify-center items-center py-1.5 rounded-lg" >
                                <div className="flex flex-row ">
                                    <span className="font-extrabold" >PR</span>
                                    <Image className="w-4 object-contain" src={proPlusIcon2} alt='demo image' />
                                </div>
                                <span className="font-extrabold"> <span className="italic">Plus</span> plans</span>
                            </div>
                        </div>

                        <div className='max-w-screen-xl mx-auto lg:px-8 overflow-hidden'>
                            <div className="flex gap-3 lg:gap-6 justify-between mt-4 lg:mt-6">
                                {data?.pro_plus_plans_list?.map(ele => <PlansCard isPlus={true} key={ele.planId} planName={ele.planName} data={ele} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>

            <section className={` font-Inter flex flex-col gap-4 max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
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
                <div className=" lg:px-14">
                    <div className="self-stretch text-white text-center text-base not-italic font-extrabold leading-7">
                        <p>Pillars of advisory team</p>
                    </div>
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
                                slidesPerView: 2,
                                centeredSlides: false,
                                spaceBetween: 32,
                            },
                            1024: {
                                slidesPerView: 3,
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
                            { name: 'Sagar Wadhwa ', img: sagar_wadhwa, disc: 'Senior research analyst' },
                            { name: 'Ankit Kumar Jaiswal', img: Ankit, disc: 'Sr. equity research analyst' },
                            { name: 'Vaibhave Monga', img: vaibhav, disc: 'Equity research analyst' }
                        ]?.map(ele =>
                            <SwiperSlide key={ele.name}>
                                <AdvisoryTeamCard data={ele} isDark={isDark} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <p className=" text-[#BCBCBC] text-center text-sm not-italic font-medium leading-6 mt-5">Backed up with 100+ years of investing experience, led by SEBI registered advisor Ketan Sonalkar along with Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa</p>
            </section>

            <div className="w-full h-1 shrink-0 bg-[#414141]"></div>
        </>
    )
}



export function PlansCard({ data, planName, isPlus }) {
    const userDetail = useContext(UserDetailProvider)
    return (
        <div onClick={() => {
            if (userDetail?.userData?.authToken) {
                planSectionPopUp.open(isPlus)
            } else {
                userDetail?.inputRef?.current?.focus()
            }
        }}
            className={`font-Inter relative border-2 ${isPlus ? (planName !== '6 months' ? 'border-[#F2EEFF]' : 'border-[#D3C3FF]') : (planName !== '6 months' ? 'border-[#FFEDD1]' : 'border-[#FFC970]')} rounded-xl  w-full font-Inter flex flex-col font-extrabold bg-white `}>
            {data?.recommended &&
                <div className={`absolute left-[-5px] top-6 md:top-10 bg-gradient-to-br from-[#141E30] to-[#333] px-1 py-0.5 rounded-[0px_2px_2px_0px`}>
                    <p className="text-white text-[8px] md:text-xs not-italic font-extrabold leading-3">Recommended</p>
                </div>}
            <p className={` ${isPlus ? (planName !== '6 months' ? 'bg-[#F2EEFF] font-semibold' : 'bg-[#D3C3FF] font-extrabold ') : (planName !== '6 months' ? 'bg-[#FFEDD1] font-semibold' : 'bg-[#FFC970] font-extrabold')}  py-1.5 lg:py-2.5 text-[14px] lg:text-lg text-center rounded-t-lg`}>
                {planName}
            </p>
            <p className="mt-2.5 lg:mt-4 text-base lg:text-2xl text-center">
                ₹{data.discountedAmount?.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
            <del className="text-[#606060] w-full text-center text-sm lg:text-xl font-medium">
                ₹{Actions.putComma(data.displayAmount)}
            </del>
            <div className="py-2.5 flex justify-center font-semibold">
                <span className={`whitespace-nowrap text-white rounded-md text-[10px] lg:text-lg text-center ${isPlus ? 'bg-[#3C305F]' : 'bg-[#5C3900]'} py-1 px-2 lg:px-5`}>
                    Save {Actions.putComma(((data.displayAmount - data.discountedAmount) * 100 / data.displayAmount), 0)}%
                </span>
            </div>
        </div >
    )
}

export function AdvisoryTeamCard({ data, isDark }) {
    return (
        <div className={`font-Inter mt-5 lg:mt-10 flex rounded-lg py-2.5 px-4  ${isDark ? 'bg-[#363636]' : ' bg-white shadow-[0_6px_12px_rgba(106,115,129,0.16),0_3px_8px_rgba(87,102,117,0.06)]'}`}>
            <Image
                src={data.img}
                alt='demo image'
                className="rounded-full h-[48px] lg:h-[64px] w-[48px] lg:w-[64px]"
            />
            <div className="self-center ml-5">
                <p className={isDark ? 'font-semibold text-sm lg:text-xl text-white' : 'font-semibold text-sm lg:text-xl text-black'}>{data.name}</p>
                <p className={isDark ? "ont-medium text-xs lg:text-base text-[#dfdfdf] line-clamp-1" : " line-clamp-1 font-medium text-xs lg:text-base text-[#747474]"}>{data.disc}</p>
            </div>
        </div>
    )
}
