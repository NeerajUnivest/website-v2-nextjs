import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import rbi from '../../assets/icons/rbi.png';
import a from '../../assets/icons/plans/1.png';
import b from '../../assets/icons/plans/2.png';
import c from '../../assets/icons/plans/3.png';
import d from '../../assets/icons/plans/4.png';

const cardData = [
    {
        id: 0,
        cashBack: 0.50,
        title: `12`,
        type: `Fixed term: <b>12 Months</b>`,
        desc: `Saving for a long term expense / goal`,
        typeForEvent: `fixed_term_12_months`,
        // icon: fixedPlanIcon,
        recommended: true,
        interest: `At maturity`,
        principal: `At maturity`,
        minInvestment: `25k`,
        lockInPeriod: `12 months`,
        detail: `Investors who seek to build a stable portfolio that can withstand market volatility and beat inflation. This can be helpful in achieving financial goals over time.`
    },
    {
        id: 1,
        cashBack: 0.25,
        title: `11`,
        type: `Fixed term: <b>6 Months</b>`,
        desc: `Saving for a medium term expense / goal`,
        typeForEvent: `fixed_term_6_months`,
        // icon: fixedPlanIcon,
        recommended: false,
        interest: `At maturity`,
        principal: `At maturity`,
        minInvestment: `25K`,
        lockInPeriod: `6 months`,
        detail: `Earning high and stable returns of up to 11% on the money you are saving for a medium term expense / goal. An effective way to grow your wealth over time. `
    },
    {
        id: 2,
        cashBack: null,
        title: `8.25`,
        type: `Freedom Plan: <b>No lock-in</b>`,
        desc: `Earning more while saving for upcoming expenses`,
        typeForEvent: `freedom_plan_mo_lock_in`,
        // icon: freedomPlanIcon,
        recommended: false,
        interest: `Accrued daily`,
        principal: `Anytime`,
        minInvestment: `25K`,
        lockInPeriod: `No lock-in `,
        detail: `Earning higher while saving for an upcoming expense / goal while having the freedom to withdraw funds any time without any restrictions.`
    },
]
export default function AvailablePlansSection() {
    return (
        <section className='font-Inter max-w-screen-xl py-16 lg:py-24 mx-auto lg:px-8 bg-[#FFFFFF]'>
            <div className="mx-4 lg:mx-0 mb-8 lg:mb-14 flex flex-col lg:flex-row justify-between items-center gap-4">
                <span className="text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Available Investment plans
                </span>
                <div className="flex items-center">
                    <Image
                        placeholder="empty"
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
                    610: {
                        initialSlide: 0,
                        centeredSlides: false,
                        slidesPerView: 2,
                        spaceBetween: 36
                    },
                    1020: {
                        initialSlide: 0,
                        centeredSlides: false,
                        slidesPerView: 3,
                        spaceBetween: 36
                    },
                }}
            >
                {cardData?.map((ele, i) =>
                    <SwiperSlide key={i}>
                        <AvailablePlansCard data={ele} />
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


export function AvailablePlansCard({ data }) {
    return (
        <div className="h-full w-full px-4 py-6 rounded-2xl bg-[#C9DDE680] flex flex-col">
            <p className="font-medium text-center text-xl">Earn up to
                <span className='font-extrabold text-[#437587]'> {data.title}% p.a.</span></p>
            <div className="bg-white grow px-3 py-4 rounded-lg my-4 flex flex-col justify-between">
                <div className='text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={a}
                        className=' h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className='text-[#606060] '>Interest paid : </div>
                    <div className='font-bold text-black'>{data.interest}</div>
                </div>
                <div className='text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={b}
                        className=' h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className='text-[#606060] '>Lock-in period : </div>
                    <div className='font-bold text-black'>{data.lockInPeriod}</div>
                </div>
                <div className='text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={c}
                        className=' h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className='text-[#606060] '>Low risk : </div>
                    <div className='font-bold text-black'>100% safe</div>
                </div>
                <div className='text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={d}
                        className=' h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className='text-[#606060] '>Principal repaid : </div>
                    <div className='font-bold text-black'>{data.principal}</div>
                </div>
            </div>
            <p className="bg-white p-3 text-xs font-semibold rounded-lg text-center">
                {data.desc}
            </p>
        </div>
    )
}
