import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import moment from "moment/moment";
import useSWR from 'swr'
import { Autoplay } from "swiper";
import { FaClock } from "react-icons/fa";
import onlyProPlusIcon from "../../assets/Images/only_with_pro_plus.png"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const datas = {
    "configs": [
        {
            "term": "SHORT",
            "text": "Short\nterm ideas",
            "count": 27,
            "image": "https://storage.googleapis.com/production-univest/public_assets/short_term_ideas_smallpng.png",
            "largeImage": "https://storage.googleapis.com/app-assets-univest/Pro_plus_assets/idea_short.png",
            "textColor": "#98520B",
            "avgReturn": 4.93893849106064,
            "avgDuration": 22,
            "tradeSymbols": "ITC | ITC & 25 more",
            "newStocksCount": 0,
            "closedStocksCount": 175
        },
        {
            "term": "MEDIUM",
            "text": "Medium\nterm ideas",
            "count": 12,
            "image": "https://storage.googleapis.com/production-univest/public_assets/medium_term_ideas_small.png",
            "largeImage": "https://storage.googleapis.com/app-assets-univest/Pro_plus_assets/idea_medium.png",
            "textColor": "#00439D",
            "avgReturn": 10.810201701785887,
            "avgDuration": 103,
            "tradeSymbols": "NAM-INDIA | NBCC & 10 more",
            "newStocksCount": 1,
            "closedStocksCount": 36
        },
        {
            "term": "LONG",
            "text": "Long\nterm ideas",
            "count": 12,
            "image": "https://storage.googleapis.com/production-univest/public_assets/long_term_ideas_small.png",
            "largeImage": "https://storage.googleapis.com/app-assets-univest/Pro_plus_assets/idea_long.png",
            "textColor": "#005251",
            "avgReturn": 27.812774935357925,
            "avgDuration": 214,
            "tradeSymbols": "BHEL | CANBK & 10 more",
            "newStocksCount": 0,
            "closedStocksCount": 6
        },
        {
            "term": "FUTURES",
            "text": "Future\nideas",
            "count": 4,
            "image": "https://storage.googleapis.com/app-assets-univest/Pro_plus_assets/idea_futures.png",
            "largeImage": "https://storage.googleapis.com/app-assets-univest/Pro_plus_assets/idea_futures.png",
            "textColor": "#84026F",
            "avgReturn": -7275.678260869553,
            "avgDuration": 4,
            "tradeSymbols": "HAL23DECFUT | LALPATHLAB23NOVFUT & 2 more",
            "newStocksCount": 0,
            "closedStocksCount": 23
        }
    ],
    "note": "Returns are an average of closed trades",
    "pastPerformanceBtnText": "Past performance",
    "knowMoreBtnText": "Know more",
    "researchTeam": {
        "header": "Know our research team",
        "about": "About",
        "subHeader": "Research team",
        "experience": "75+ years of experience",
        "sebiLogo": "https://storage.googleapis.com/production-univest/public_assets/sebi_logo.png",
        "riaNumber": "INA000017639",
        "imageUrls": [
            {
                "name": "Ketan Sonalkar",
                "imageUrl": "https://storage.googleapis.com/production-univest/public_assets/researcher_1.png"
            },
            {
                "name": "Yashpal Arora",
                "imageUrl": "https://storage.googleapis.com/production-univest/public_assets/researcher_2.png"
            },
            {
                "name": "Sagar Wadhwa",
                "imageUrl": "https://storage.googleapis.com/production-univest/public_assets/researcher_3.png"
            }
        ],
        "shortDescription": "Univest's fully-owned subsidiary, Uniapps Global Research Pvt. Ltd, is a SEBI registered advisory firm ...",
        "longDescription": "Uniapps Global Research Pvt Ltd, a fully owned subsidiary of Univest, is a SEBI registered advisory firm (INA000017639). Led by Ketan Sonalkar, Uniapp’s research team boasts 75+ years of investing experience. Comprising Sr. Consultant Yashpal Arora and Sr. Research Analyst Sagar Wadhwa, they possess the proficiency to perform exhaustive research of fundamentals, technicals, and macroeconomic factors, they uncover investment prospects with substantial return potential across various timeframes.",
        "disclaimer": "Investment ideas suggested on the Univest app are only for informational/ educational purposes, and should not be construed as investment advice. Markets are subject to risk, investor discretion and diligence is advised."
    }
}

export default function ProAndPlusIdeasSection({ isDark = false }) {
    const { data, isLoading } = useSWR(`${process.env.apiBaseURL}/resources/trade-cards/hit`, fetcher)
    const GetDays = (startDate) => {
        const timeEnd = moment(Date.now());
        const diff = timeEnd.diff(startDate);
        const diffDuration = moment.duration(diff)
        return diffDuration.days();
    }

    return (
        <section id="Ideas" className={`  flex flex-col gap-8 bg-gradient-to-b from-[#202020] to-[#202020]  max-w-screen-xl py-6 lg:py-24 mx-auto px-4 lg:px-8 ${!isDark && 'bg-white'}`}>
            <div className="">
                {isLoading ?
                    <div className=" flex">
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
                                <div className="overflow-hidden flex flex-col justify-between h-full w-full bg-fixed bg-[length:144px_164px] ">
                                    <div className=" h-full flex flex-col justify-between border-2 rounded-t-lg border-[#BADDFA] border-b-transparent">
                                        <div className=" p-2 border-l-[1px] border-r-[1px] border-b-[1px] rounded-bl-xl rounded-br-xl border-[#BADDFA] mr-2 ml-2 mt-0">
                                            <div className="pl-2 pr-2 flex flex-row justify-around">
                                                <div className="flex items-center justify-center"><FaClock color={ele.term === 'SHORT' ? "#B43C30" : ele.term === 'LONG' ? "#005251" : "#00439D"} size={"10px"} /></div>
                                                <p className={`text-[${ele.term === 'SHORT' ? '#B43C30' : (ele.term === 'LONG' ? '#005251' : (ele.term === 'MEDIUM' ? '#00439D' : ''))}] text-[10px] not-italic font-semibold leading-4`} >{ele?.term} TERM </p>
                                            </div>
                                        </div>
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
                                                <p className="font-semibold text-sm">{ele.stockName}</p>
                                            </div>
                                        </div>
                                        <div className="text-[10px] font-bold py-1 text-center">
                                            Target hit in {GetDays(ele.createdAt)} days
                                        </div>
                                    </div>
                                    <div className=" p-2 bg-[#26A649] text-center rounded-bl-lg rounded-br-lg ">
                                        <p className="text-[color:var(--Pearl-White,#FFF)] text-xs not-italic font-bold leading-5"> Net gain : {((ele?.targetPrice - ele?.suggestedPrice) * 100 / ele?.targetPrice)?.toFixed(2)}%</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>}
            </div>

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

            <div className="m-auto">
                <p className=" text-[color:var(--neutral-300,#DFDFDF)] text-center text-xs not-italic font-normal leading-5">Disclaimer: Lorem ipsum dolor sit amet consectetur. Erat pretium scelerisque aliquet nisi nec viverra. </p>
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {datas.configs?.map(ele => <IdeasTermCard data={ele} />)}

                {/* <IdeasTermCard data={{ name: 'Short', count: 12 }} />
                <IdeasTermCard data={{ name: 'Medium', count: 3 }} />
                <IdeasTermCard data={{ name: 'Long', count: 4, isNew: true }} /> */}
            </div>

        </section>
    )
}


export function IdeasTermCard({ data }) {
    return (
        <div style={{ backgroundImage: `url(${data?.largeImage})`, color: data?.textColor }} className=" relative  rounded-xl  m-auto py-4 bg-cover">
            <div className={` ${data?.count > 0 ? '' : 'hidden'} absolute top-0 right-0 bg-gradient-to-r from-[#E75325] to-[#F69723] inline-flex justify-center items-center gap-0.5 px-2 py-0.5 rounded-[0px_8px_0px_4px] whitespace-nowrap `}> <p className="text-white text-[11px] font-medium">{data?.count} New ideas</p> </div>
            <Image className={` ${data?.term === 'FUTURES' ? '' : 'hidden'} w-12 absolute right-[-2px] top-9 `} src={onlyProPlusIcon} alt='demo image' />
            <div className=" mx-3 mt-2 flex flex-col gap-2">
                <div>
                    <p className={`text-xl not-italic font-extrabold leading-8`}>{data?.term}</p>
                    <p className={`text-xl not-italic font-extrabold leading-8`}>{data?.term !== 'FUTURES' ? 'term' : ''} ideas</p>
                </div>
                <div className=" flex w-[132px] flex-col justify-center items-start gap-1 px-2 py-1.5 rounded-lg bg-[#FFFFFF66] ">
                    <p className={`text-[10px] not-italic font-semibold leading-4`}>Avg. return</p>
                    <div>
                        <p className={`text-xs not-italic font-extrabold leading-5 whitespace-nowrap`} > {data?.term === 'FUTURES' ? '₹' : ''}{data?.avgReturn.toFixed(1)}{data?.term === 'FUTURES' ? 'k' : '%'} in {data?.avgDuration} days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}