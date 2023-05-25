import Image from "next/image";
import sebi_logo from '../../assets/icons/sebi_logo.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import { useAxios } from "@/hooks/useAxios";
import { Autoplay } from "swiper";
import mini_trade_card from '../../assets/images/mini_trade_card.png';


export default function IdeasSection() {
    const { data, loading } = useAxios({ method: 'GET', url: `/resources/trade-cards/hit` });
    return (
        <section id="Ideas" className='max-w-screen-xl py-6 lg:py-32 mx-auto px-4 lg:px-8 bg-[#FFFFFF]'>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:mb-6">
                <span className="text-center text-xl lg:text-3xl font-extrabold text-[#414141]">
                    Investment & trading ideas
                </span>
                <div className="flex">
                    <Image
                        placeholder="blur"
                        src={sebi_logo}
                        className=' h-[64px] lg:h-[64px] w-[64px] lg:w-[64px]'
                        alt='demo image'
                    />
                    <div className="self-center ml-5">
                        <p className="font-semibold text-base">Registered - INA000017639</p>
                        <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full lg:max-w-[32%]">
                    <p className="mt-10 text-center text-base lg:text-xl font-extrabold text-[#414141]">
                        Pillars of advisory AdvisoryTeamCard
                    </p>
                    {/* <div className="flex flex-row lg:flex-col overflow-x-scroll"> */}
                    <AdvisoryTeamCard name='Ketan Sonalkar' disc='Lorem ipsum dolor sit amet' />
                    <AdvisoryTeamCard name='Yashpal Arora' disc='Lorem ipsum dolor sit amet' />
                    <AdvisoryTeamCard name='Sagar Wadhwa' disc='Lorem ipsum dolor sit amet' />
                    {/* </div> */}
                </div>
                <div className="w-full lg:max-w-[60%]">
                    <div className="flex justify-evenly items-center">
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
                        <div className="flex items-center justify-center mb-5 text-sm font-medium text-[#F5F5F5] gap-1">
                            <span>Past performance </span>
                            <span className="uni-wise-gradient2 font-black text-sm lg:text-xl">81.4% Accuracy</span>
                            <span className="font-semibold text-sm lg:text-xl"> | Hit: 35 | Miss: 8</span>
                        </div>
                        {!loading &&
                            <Swiper
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
                                                // placeholder='blur'
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
            <p className='mt-8 text-center text-sm lg:text-base font-medium text-[#414141]'>
                Backed up with 100+ years of investing experience, led by SEBI registered advisor Ketan Sonalkar along with Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa
            </p>
        </section>
    )
}


export function AdvisoryTeamCard(
    {
        dp = 'https://univest-prod.s3.ap-south-1.amazonaws.com/superstars/rakesh_jhujhunwala.png',
        name,
        disc
    }
) {
    return (
        <div className="mt-5 lg:mt-10 flex font-Inter rounded-lg py-2.5 px-4 shadow-[0_6px_12px_rgba(106,115,129,0.16),0_3px_8px_rgba(87,102,117,0.06)]">
            <Image
                src={dp}
                width={64}
                height={64}
                alt='demo image'
                className="rounded-full h-[48px] lg:h-[64px] w-[48px] lg:w-[64px]"
            />
            <div className="self-center ml-5">
                <p className="font-semibold text-sm lg:text-xl text-black">{name}</p>
                <p className="font-medium text-xs lg:text-base text-[#747474]">{disc}</p>
            </div>
        </div>
    )
}
