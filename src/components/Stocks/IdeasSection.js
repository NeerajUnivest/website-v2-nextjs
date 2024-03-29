import Image from "next/image";
import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';
import sebi_new_logo_white from '@/assets/icons/sebi_new_logo_white.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import useSWR from 'swr'
import { Autoplay } from "swiper";
import mini_trade_card from '@/assets/images/mini_trade_card.png';
import yashpal_arora from '@/assets/images/yashpal_arora.png';
import ketan_sonalkar from '@/assets/images/ketan_sonalkar.png';
import sagar_wadhwa from '@/assets/images/sagar_wadhwa.png';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { popUp } from '../../elements/PopUp/SEBIPopUp';


const getClass = (term) => {
    switch (term) {
        case 'SHORT':
            return 'text-[#98520B] border-[#98520B]';
        case 'MEDIUM':
            return 'text-[#00439D] border-[#00439D]';
        case 'LONG':
            return 'text-[#005251] border-[#005251]';
    }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function IdeasSection({ isDark = false }) {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    return (
        <section id="Ideas" className={`max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
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
                    <p className={`font-semibold text-base lg:text-2xl mx-2 ${isDark ? 'text-white' : 'text-black'}`}>Registered</p>
                    <AiOutlineInfoCircle color={isDark ? '#FFF' : '#202020'} className='text-[16px]  lg:text-[20px]' />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full lg:max-w-[32%] hidden">
                    <p className={`mt-10 text-center text-base lg:text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#414141]'}`}>
                        Pillars of advisory team
                    </p>
                    {[
                        { name: 'Ketan Sonalkar', img: ketan_sonalkar, disc: 'SEBI registered advisor' },
                        { name: 'Yashpal Arora', img: yashpal_arora, disc: 'Senior consultant' },
                        { name: 'Sagar Wadhwa', img: sagar_wadhwa, disc: 'Senior Research Analyst' },
                    ].map(ele =>
                        <AdvisoryTeamCard key={ele.name} data={ele} isDark={isDark} />
                    )}
                </div>
                <div className="w-full lg:max-w-[60%]-">
                    <div className="flex justify-evenly items-center lg:px-52">
                        <div className="rounded-full border-[12px] lg:border-[20px] border-black  p-[3px] lg:p-[5px]">
                            <div className="border-4 lg:border-[6px] border-black ring-4 lg:ring-[6px] ring-[#98520B]
                            flex justify-center items-center rounded-full w-16 h-16 lg:w-[110px] lg:h-[110px] bg-white bg-gradient-to-l to-[#F0943640] from-[#F09436BF]">
                                <span className="font-extrabold text-center text-[10px] lg:text-xl text-[#98520B]">Short<br />term</span>
                            </div>
                        </div>
                        <div className="rounded-full border-[12px] lg:border-[20px] border-black  p-[3px] lg:p-[5px]">
                            <div className="border-4 lg:border-[6px] border-black ring-4 lg:ring-[6px] ring-[#00439D]
                            flex justify-center items-center rounded-full w-16 h-16 lg:w-[110px] lg:h-[110px] bg-white bg-gradient-to-l to-[#00449d30] from-[#00449d91]">
                                <span className="font-extrabold text-center text-[10px] lg:text-xl text-[#00439D]">Medium<br />term</span>
                            </div>
                        </div>
                        <div className="rounded-full border-[12px] lg:border-[20px] border-black  p-[3px] lg:p-[5px]">
                            <div className="border-4 lg:border-[6px] border-black ring-4 lg:ring-[6px] ring-[#005251]
                            flex justify-center items-center rounded-full w-16 h-16 lg:w-[110px] lg:h-[110px] bg-white bg-gradient-to-l to-[#00525133] from-[#005251b5]">
                                <span className="font-extrabold text-center text-[10px] lg:text-xl text-[#005251]">Long<br />term</span>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-14 lg:-mt-20 pt-16 lg:pt-24 pb-4  bg-[#202020] rounded-3xl">
                        <div className="flex flex-col lg:flex-row items-center justify-center mb-5 text-sm font-medium text-[#F5F5F5] gap-1">
                            <span>Past performance </span>
                            <div>
                                <span className="uni-wise-gradient2 font-black text-sm lg:text-xl">{data?.data?.targetAccuracy?.toFixed(2) ?? '89.87'}% Accuracy</span>
                                <span className="font-semibold text-sm lg:text-xl"> | Hit: {data?.data?.hit ?? '71'} | Miss: {data?.data?.miss ?? '8'}</span>
                            </div>
                        </div>
                        {isLoading ?
                            <div className="flex">
                                {[1, 2, 3, 4, 5,].map(ele =>
                                    <div key={ele} className="overflow-hidden m-4 h-[164px] min-w-[144px] bg-white rounded-lg" />
                                )}
                            </div>
                            : <Swiper
                                grabCursor={true}
                                loop={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay]}
                                className="IdeasSection"
                            >
                                {[...data?.data?.list, ...data?.data?.list,]?.map((ele, i) =>
                                    <SwiperSlide key={`${ele.id}-${i}`} >
                                        <div className="overflow-hidden flex flex-col justify-between h-full w-full bg-fixed bg-[length:144px_164px] "
                                        //  style={{ backgroundImage: `url(${mini_trade_card.src})` }} 
                                        >
                                            <div className={`mt-3 ml-3 text-[8px] font-medium border w-[50px] rounded-full text-center ${getClass(ele.term)}`}>
                                                {ele.term}
                                            </div>
                                            <span className="ml-3 text-[8px] font-medium text-[#606060]">
                                                Shared on {moment(ele.createdAt).format("DD MMM YYYY")}
                                            </span>
                                            <div className="flex ml-3">
                                                {ele.logoUrl &&
                                                    <Image
                                                        src={ele.logoUrl}
                                                        width={24}
                                                        height={24}
                                                        className='object-contain w-[24px]'
                                                        alt={ele.stockName}
                                                    />}
                                                <div className="self-center ml-1">
                                                    <p className="font-semibold text-xs">{ele.stockName}</p>
                                                    <p className="line-clamp-1 font-medium text-[8px] text-[#747474]">
                                                        {ele.compName}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-[#EBFFEF] text-[#26A649] text-[10px] font-bold py-1 text-center">
                                                Target hit
                                            </div>
                                            <div className="mb-2 text-[#747474] text-[10px] text-center">
                                                Net gain <span className="text-[#26A649] text-sm font-extrabold">{ele?.netGain?.toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>)}
                            </Swiper>}
                    </div>
                </div>
            </div>
            {/* <p className={`mt-8 text-center text-sm lg:text-lg font-medium ${isDark ? 'text-[#bcbcbc]' : 'text-[#414141]'}`}>
                Backed up with 75+ years of investing experience, led by SEBI registered advisor Ketan Sonalkar<br className="hidden lg:flex" /> along with Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa
            </p> */}


            <style >{`
                .IdeasSection {
                width: 100%;
                /* padding: 20px 0px; */
                }

                .IdeasSection .swiper-wrapper {
                height: 200px;
                display: flex;
                align-items: center;
                column-gap: 0px;
                }

                .IdeasSection .swiper-slide,
                .IdeasSection .swiper-slide-prev,
                .IdeasSection .swiper-slide-next {
                width: 144px;
                height: 164px;
                margin: 0px 10px;
                transform: scale(0.9);
                transition: 500ms;
                border-radius: 10px;
                background: #f5f5f5;
                border: 2px solid #BADDFA;
                }

                .IdeasSection .swiper-slide-active {
                transform: scale(1);
                }

                @media (max-width: 746px) {

                .IdeasSection.swiper - slide,
                .IdeasSection.swiper - slide - prev,
                .IdeasSection.swiper - slide - next {
                margin: 0px 2px;
                }
                }
            `}</style>
        </section>
    )
}


export function AdvisoryTeamCard({ data, isDark }) {
    return (
        <div className={`mt-5 lg:mt-10 flex font-Inter rounded-lg py-2.5 px-4  ${isDark ? 'bg-[#525457]' : ' bg-white shadow-[0_6px_12px_rgba(106,115,129,0.16),0_3px_8px_rgba(87,102,117,0.06)]'}`}>
            <Image
                src={data.img}
                width={64}
                height={64}
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
