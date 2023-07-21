import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import rbi from '../../assets/icons/rbi.png';
import a from '../../assets/icons/plans/1.png';
import b from '../../assets/icons/plans/2.png';
import c from '../../assets/icons/plans/3.png';
import d from '../../assets/icons/plans/4.png';
import recommend_tag from '../../assets/images/elite/additonal_cashback.png';
import { popUp } from "@/elements/PopUp/PopUp";

const cardData = [
    {
        id: 1,
        cashBack: 0.25,
        title: `11`,
        type: `Fixed term: <b>6 Months</b>`,
        desc: `Saving for a medium term expense / goal`,
        typeForEvent: `fixed_term_6_months`,
        recommended: true,
        interest: `At maturity`,
        principal: `At maturity`,
        minInvestment: `25K`,
        lockInPeriod: `6 months`,
        detail: `Earning high and stable returns of up to 11% on the money you are saving for a medium term expense / goal. An effective way to grow your wealth over time. `
    },
    {
        id: 0,
        cashBack: 0.50,
        title: `12`,
        type: `Fixed term: <b>12 Months</b>`,
        desc: `Saving for a long term expense / goal`,
        typeForEvent: `fixed_term_12_months`,
        recommended: true,
        interest: `At maturity`,
        principal: `At maturity`,
        minInvestment: `25k`,
        lockInPeriod: `12 months`,
        detail: `Investors who seek to build a stable portfolio that can withstand market volatility and beat inflation. This can be helpful in achieving financial goals over time.`
    },
]
export default function AvailablePlansSection() {
    return (
        <section className="font-Inter relative" id='AvailablePlans'>
            <div className='max-w-screen-xl pt-16 mx-auto lg:px-8 overflow-hidden'>
                <div className="mx-4 lg:mx-0 mb-8 lg:mb-14 flex flex-col lg:flex-row justify-between items-center gap-4">
                    <span className="text-xl lg:text-3xl font-extrabold text-white">
                        Available Investment plans
                    </span>
                    <div className="flex items-center">
                        <Image
                            placeholder="empty"
                            src={rbi}
                            className=' h-[40px] lg:h-[56px] w-[40px] lg:w-[56px]'
                            alt='demo image'
                        />
                        <div className="self-center ml-5 text-white text-sm">
                            <p className="font-medium ">Secured with</p>
                            <p className="font-extrabold ">RBI regulated largest P2P-NBFC FAI₹CENT</p>
                        </div>
                    </div>
                </div>
                <Swiper
                    grabCursor={true}
                    slidesPerView={1.1}
                    spaceBetween={0}
                    className="ProAvailablePlansSection"
                    breakpoints={{
                        610: {
                            initialSlide: 0,
                            centeredSlides: false,
                            slidesPerView: 2,
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
                    <button className="bg-[rgba(233,212,158,0.10)] px-8 py-3 text-sm lg:text-xl font-medium rounded-full text-white">
                        Start investing with as low as ₹25k /-
                    </button>
                    <BlackButton onClick={() => popUp.open()} text='Invest now' className='px-8 lg:px-12 py-3 text-sm lg:text-xl font-extrabold' />
                </div>
            </div>
        </section >
    )
}


export function AvailablePlansCard({ data }) {
    return (
        <div className="text-white h-full w-full p-4 pt-8 rounded-2xl bg-[rgba(233,212,158,0.10)] flex flex-col relative">
            {data.recommended && <Image placeholder="empty" src={recommend_tag} className='absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 h-7 lg:h-9 object-contain' alt='demo image' />}
            <p className="font-medium text-center text-xl">Earn up to
                <span className='font-extrabold uni-wise-gradient2'> {data.title}% p.a.</span></p>
            <div className="bg-[rgba(255,255,255,0.10)] grow p-4 rounded-lg my-4 flex flex-col justify-between">
                <div className='text-sm lg:text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={a}
                        className='bg-white rounded-lg h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className=' '>Interest paid : </div>
                    <div className='font-bold '>{data.interest}</div>
                </div>
                <div className='text-sm lg:text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={b}
                        className='bg-white rounded-lg h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className=' '>Lock-in period : </div>
                    <div className='font-bold '>{data.lockInPeriod}</div>
                </div>
                <div className='text-sm lg:text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={c}
                        className='bg-white rounded-lg h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className=' '>Low risk : </div>
                    <div className='font-bold '>100% safe</div>
                </div>
                <div className='text-sm lg:text-base flex gap-2 items-center'>
                    <Image
                        placeholder="empty"
                        src={d}
                        className='bg-white rounded-lg h-[16px] lg:h-[24px] w-[16px] lg:w-[24px]'
                        alt='demo image'
                    />
                    <div className=' '>Principal repaid : </div>
                    <div className='font-bold '>{data.principal}</div>
                </div>
            </div>
            <p className="bg-[rgba(255,255,255,0.10)] p-3 text-xs font-semibold rounded-lg text-center border border-white">
                {data.desc}
            </p>
        </div>
    )
}
