import Image from "next/image";
import sebi_logo from '@/assets/icons/sebi_logo.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import useSWR from 'swr'
import { Autoplay } from "swiper";
import mini_trade_card from '@/assets/images/mini_trade_card.png';
import yashpal_arora from '@/assets/images/yashpal_arora.png';
import ketan_sonalkar from '@/assets/images/ketan_sonalkar.png';
import sagar_wadhwa from '@/assets/images/sagar_wadhwa.png';


const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function IdeasSection() {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    return (
        <section id="Ideas" className='max-w-screen-xl py-6 lg:py-32 mx-auto px-4 lg:px-8 bg-[#FFFFFF]'>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:mb-6">
                <span className="text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Investment & trading ideas
                </span>
                <div className="flex my-6 lg:my-0">
                    <Image
                        placeholder="empty"
                        src={sebi_logo}
                        className=' h-[40px] lg:h-[64px] w-[40px] lg:w-[64px]'
                        alt='demo image'
                    />
                    <div className="self-center ml-4 lg:ml-5">
                        <p className="font-semibold text-sm lg:text-base">Registered - <b>INA000017639</b></p>
                        <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full lg:max-w-[32%]">
                    <p className="mt-10 text-center text-base lg:text-xl font-extrabold text-[#414141]">
                        Pillars of advisory team
                    </p>
                    {[
                        { name: 'Ketan Sonalkar', img: ketan_sonalkar, disc: 'SEBI registered advisor' },
                        { name: 'Yashpal Arora', img: yashpal_arora, disc: 'Senior consultant' },
                        { name: 'Sagar Wadhwa', img: sagar_wadhwa, disc: 'Senior Research Analyst' },
                    ].map(ele =>
                        <AdvisoryTeamCard key={ele.name} data={ele} />
                    )}
                </div>
                <div className="w-full lg:max-w-[60%]">
                    <div className="flex justify-evenly items-center lg:px-10">
                        <div className="rounded-full border-[12px] lg:border-[20px] border-black  p-[3px] lg:p-[5px]">
                            <div className="border-4 lg:border-[6px] border-black ring-4 lg:ring-[6px] ring-[#98520B]
                            flex justify-center items-center rounded-full w-20 h-20 lg:w-[110px] lg:h-[110px] bg-white bg-gradient-to-l to-[#F0943640] from-[#F09436BF]">
                                <span className="font-extrabold text-center text-sm lg:text-xl text-[#98520B]">Short<br />term</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-20 h-20 lg:w-[120px] lg:h-[120px] bg-white bg-gradient-to-l to-[#00439D40] from-[#00439D99]">
                            <span className="font-medium text-center text-sm lg:text-xl text-[#00439D]">Medium<br />term</span>
                        </div>
                        <div className="flex justify-center items-center rounded-full w-20 h-20 lg:w-[120px] lg:h-[120px] bg-white bg-gradient-to-l to-[#006B6A40] from-[#006B6A80]">
                            <span className="font-medium text-center text-sm lg:text-xl text-[#005251]">Long<br />term</span>
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
                                {data?.data?.list?.map(ele =>
                                    <SwiperSlide key={ele.id} >
                                        <div className="overflow-hidden flex flex-col justify-between h-full w-full bg-fixed bg-[length:144px_164px] " style={{ backgroundImage: `url(${mini_trade_card.src})` }} >
                                            <span className="mt-9 ml-3 text-[8px] font-medium text-[#606060]">
                                                Shared on {moment(ele.createdAt).format("DD MMM YYYY")}
                                            </span>
                                            <div className="flex ml-3">
                                                <Image
                                                    src={ele.logoUrl}
                                                    width={24}
                                                    height={24}
                                                    className='object-contain w-[24px]'
                                                    alt={ele.stockName}
                                                />
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
                                                Net gain <span className="text-[#26A649] text-sm font-extrabold">{((ele?.targetPrice - ele?.suggestedPrice) * 100 / ele?.targetPrice)?.toFixed(2)}%</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>)}
                            </Swiper>}
                    </div>
                </div>
            </div>
            <p className='mt-8 text-center text-sm lg:text-lg font-medium text-[#414141]'>
                Backed up with 100+ years of investing experience, led by SEBI registered advisor Ketan Sonalkar<br className="hidden lg:flex" /> along with Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa
            </p>


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


export function AdvisoryTeamCard({ data }) {
    return (
        <div className="mt-5 lg:mt-10 flex font-Inter rounded-lg py-2.5 px-4 shadow-[0_6px_12px_rgba(106,115,129,0.16),0_3px_8px_rgba(87,102,117,0.06)]">
            <Image
                src={data.img}
                width={64}
                height={64}
                alt='demo image'
                className="rounded-full h-[48px] lg:h-[64px] w-[48px] lg:w-[64px]"
            />
            <div className="self-center ml-5">
                <p className="font-semibold text-sm lg:text-xl text-black">{data.name}</p>
                <p className="font-medium text-xs lg:text-base text-[#747474]">{data.disc}</p>
            </div>
        </div>
    )
}
