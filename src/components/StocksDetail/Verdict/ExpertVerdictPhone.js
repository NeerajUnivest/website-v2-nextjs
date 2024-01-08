
import InfoIcon from '../../../assets/icn/info.png'
import expertVerdictPhone from "../../../assets/images/expertVerdictPhone.webp";
import Image from 'next/image'
import { useState, useEffect, useContext, Fragment, lazy, memo, Suspense } from 'react';
import axios from "axios";
import moment from 'moment';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import redArrow from '../../../assets/icn/redArrow.png';
import greenArrow from '../../../assets/icn/greenArrow.png';
import calendar from '../../../assets/icn/calendar.svg';
import peoples from '../../../assets/icn/peoples.svg';
import swipeArrow from '../../../assets/icn/swipeArrow.gif';
import red_arrow from '../../../assets/icn/red_arrow.png';
import green_arrow from '../../../assets/icn/green_arrow.png';
import yellowSqure from '../../../assets/icn/yellowSqure.png';
import axiosInterceptorInstance from '@/elements/axiosInterceptorInstance';
import Actions from '@/elements/Actions';
import { Mixpanel } from '@/elements/Mixpanel';
import { ModalProvider } from '@/contexts/StockPageModal';






const scoreTOCat = (score) => {
    switch (true) {
        case score > 75 || score === 'Buy' || score === 'VS' || score === 'S' || score === 'UP':
            return { main: '#148F36', bg: '#F5FFF7', logo: greenArrow, text: 'Very strong', icon: green_arrow };
        case (score <= 75 && score > 55) || score === 'Buy' || score === 'VS' || score === 'S' || score === 'UP':
            return { main: '#148F36', bg: '#F5FFF7', logo: greenArrow, text: 'Strong', icon: green_arrow };
        case (score <= 55 && score > 35) || score === 'Hold' || score === 'N':
            return { main: '#FFB133', bg: '#FFF9F0', logo: yellowSqure, text: 'Neutral' };
        case score <= 35 || score === 'Sell' || score === 'VW' || score === 'W' || score === 'DOWN':
            return { main: '#EB4E2C', bg: '#FFF7F5', logo: redArrow, text: 'Weak', icon: red_arrow }
        default:
            return { main: '#747474', bg: '#F5F5F5', logo: yellowSqure, text: 'NA' };
    }
}

const verdictDiv = (to, title) => {
    return <div className={`flex flex-col justify-center`}>
        <div className='font-Inter font-medium text-[10px] leading-[16px]'>
            {title}
        </div>
        <div className={`mt-1 flex justify-center`}>
            <Image src={scoreTOCat(to).logo} className='object-contain w-2 mr-1' alt='icon' />
            <div className='font-Inter font-semibold text-[10px] leading-[12px]' style={{ color: scoreTOCat(to).main }}>
                {scoreTOCat(to).text}
            </div>
        </div>
    </div>
}
const modalData = [
    {
        heading: "Profit growth",
        details: "Profit growth is a vital metric that helps determine how efficiently profit is being made for every rupee of revenue a company is earning."
    },
    {
        heading: "Revenue growth",
        details: "Revenue growth is a measurement of sales performance. Measured quarterly and yearly, revenue growth indicates the health and success of a business's sales."
    },
    {
        heading: "Peer comparison",
        details: "Peer comparison is a great indicator of how co.s key financial metrics(like: PE, PB, Debt to asset etc.) are performing against its peers in the industry and general market."
    },
    {
        heading: "Shareholding trend",
        details: "Sharing holding trend shows the confidence of promoters and the trust of domestic and international investment houses, in the company"
    },
    {
        heading: "ROE - ROCE",
        details: "ROE/ ROCE indicate how the company has been managing it's capitals and assets over the last few years in order to generate profits."
    }
]


export default function ExpertVerdictPhone({ name, activeChartType, }) {
    const modal = useContext(ModalProvider)

    const [data, setData] = useState({});
    const [cardData, setCardData] = useState({});
    const [selected, setSelected] = useState(['NA', 'NA']);
    const [term, setTerm] = useState(0);
    const [shimmer, setShimmer] = useState(true);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axiosInterceptorInstance.get(`/resources/stock-details/${name}`)
            .then((res) => {
                if (res.data?.shortTermVerdict) {
                    setData(res.data)
                    setSelected([
                        res.data?.longTermVerdict ? res.data.longTermVerdict : 'NA',
                        res.data?.shortTermVerdict ? res.data.shortTermVerdict : 'NA'
                    ])
                    axiosInterceptorInstance.get(`/resources/stock-details/stock-verdict/${name}`).then((res) =>
                        setCardData(res.data.data.list)
                    )
                }
                setLoading(false)
            })


        // axiosInterceptorInstance.get(`/resources/users/user-info`)
        //     .then((res) => {
        //         if (res.data.data.term === "LONG") {
        //             setTerm(0)
        //         }
        //     })
    }, [name]);


    const handleHowCal = (cta_text) => {
        modal.setTitle('How is fundamental calculated?')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }

    const handleSwitch = () => {
        setShimmer(false)
        Mixpanel.track(
            'cta_clicked',
            {
                'page': 'stock_page',
                'fincode': name,
                'cta_text': 'verdict_toggle',
                'verdict_preference': term ? 'short_term' : 'long_term'
            }
        )
        setTerm(term ? 0 : 1)
        if (!document.cookie.replace(/(?:(?:^|.*;\s*)verdictSwitcher\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
            document.cookie = `verdictSwitcher=true;path=/`;
        }
        setInterval(() => setShimmer(true), 500)
    }

    var todayPrice = data.nseLtpPrice ? data.nseLtpPrice : data.bseLtpPrice;

    return (
        <>
            <div id='verdict_card' data-aos="xxxx-xx">
                <div className='my-3 lg:my-6 py-4 lg:py-8 rounded-md lg:rounded-2xl relative' style={{ background: scoreTOCat(selected[term]).bg }}>
                    <div className='flex flex-row mx-4 mb-6 justify-between items-center'>
                        <div className='font-Inter text-[16px] text-black font-semibold'>Expert verdict</div>
                        <Image src={InfoIcon} alt='info' className='ml-2 mr-auto w-[16px] h-[16px] self-center' onClick={handleHowCal} />
                        {data.shortTermVerdict &&
                            <div className={` h-10 w-36 rounded-full border border-1 flex flex-row justify-center items-center shadow-inner ${'bg-[#FFF]'}`}>
                                <div className={`font-Inter text-[10px] leading-[12px]  ${term ? 'font-semibold' : 'font-medium'}`} style={{ color: term ? scoreTOCat(selected[term]).main : '#747474' }}>
                                    Near<br /> term
                                </div>
                                <div className='justify-between items-center mx-3'>
                                    <div className='rounded-full w-[34px] h-[18px] flex items-center relative' onClick={handleSwitch}
                                        style={{ backgroundColor: scoreTOCat(selected[term]).main }}>
                                        <div className={`bg-[#ffff] rounded-full w-4 h-4 absolute ease-out duration-300 shadow ${term ? 'left-[1px]' : 'left-[17px]'}`}>
                                        </div>
                                    </div>
                                </div>
                                <div className={`font-Inter text-[10px] leading-[12px]  ${term ? 'font-medium' : 'font-semibold'}`} style={{ color: term ? '#747474' : scoreTOCat(selected[term]).main }}>
                                    Long<br /> term
                                </div>
                            </div>
                        }
                    </div>
                    {(!loading && shimmer) ? <>
                        <div id='verdictScroll' className='grid grid-flow-col grid-rows-1 overflow-x-auto no-scrollbar swiper-no-swiping'>
                            <div className={`flex flex-col py-5 justify-between ml-4 min-w-[300px] border rounded-lg bg-white
                        ${data.shortTermVerdict ? 'h-[200px] w-[80vw] lg:w-11/12' : 'h-[150px] w-[92vw] lg:w-11/12'}`} style={{ borderColor: `${scoreTOCat(selected[term]).main}aa` }}>
                                <div className="flex flex-row justify-start">
                                    <div className='grid pl-3 content-center'>
                                        <div onClick={() => handleHowCal('verdict_text')}
                                            className={`w-[56px] h-[56px] mx-auto border-2 rounded-full`}
                                            style={{ borderColor: scoreTOCat(selected[term]).main, color: scoreTOCat(selected[term]).main, background: scoreTOCat(selected[term]).bg }}>
                                            <div className='font-Inter font-semibold text-sm text-center mt-4 pt-0.5'>
                                                {selected[term]}
                                            </div>
                                        </div>
                                    </div>
                                    {data.shortTermVerdict ?
                                        <div className="grid content-center">
                                            <div className='font-Inter font-extrabold text-[12px] leading-[16px] text-left ml-2 mr-1'>
                                                Experts maintain a “{selected[term]}” rating
                                            </div>
                                            <div className="p-1 flex flex-row items-center">
                                                <Image src={peoples} alt='info' className='h-4 ml-1 min-w-[16px] mr-2' />
                                                <div className='mt-2 font-Inter font-medium text-[10px] leading-[12px] text-left '>
                                                    <b>{term ? Actions.putComma(data.numberOfUsersViewedShortTerm) : Actions.putComma(data.numberOfUsersViewedLongTerm)}</b> users have seen this verdict
                                                </div>
                                            </div>
                                        </div>
                                        : <div className="basis-9/12 grid content-center">
                                            <div className='font-Inter font-normal text-xs lg:text-sm text-left ml-2 mr-1'>
                                                Not available for this stock.
                                                Verdict is only available for the top 2000 nifty stocks.
                                            </div>
                                        </div>}
                                </div>
                                {data.shortTermVerdict ? <>
                                    <div className="h-7 p-1 flex flex-row mx-3 content-center border rounded" style={{ borderColor: scoreTOCat(selected[term]).main, color: scoreTOCat(selected[term]).main, background: scoreTOCat(selected[term]).bg }}>
                                        <div className='ml-1'>
                                            <Image src={calendar} alt='info' className='h-[18px]' />
                                        </div>
                                        <Swiper
                                            speed={500}
                                            modules={[Autoplay]}
                                            height={20}
                                            direction='vertical'
                                            spaceBetween={0}
                                            autoplay={{
                                                delay: 4000,
                                            }}
                                            loop={true}
                                            slidesPerView={1}
                                        >
                                            <SwiperSlide>
                                                <div className={`font-Inter text-[10px] leading-[18px] font-normal text-[#414141] rounded`}>
                                                    Entered
                                                    <b> <span style={{ color: scoreTOCat(selected[term]).main }}>
                                                        {selected[term]} zone </span></b> on
                                                    <b> {moment.unix(term ? data.shortTermVerdictChangeTime : data.longTermVerdictChangeTime).format("DD MMM 'YY")}</b> at <b>₹{term ? Actions.putComma(data.ltpPriceShortDate) : Actions.putComma(data.ltpPriceLongDate)}</b>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`font-Inter text-[10px] leading-[18px] font-normal text-[#414141] rounded flex`}>
                                                    Price moved
                                                    <Image src={(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate)) >= 0 ? greenArrow : redArrow} className='object-contain w-2 mx-1' alt='icon' />
                                                    <b className='mr-[2px]'>
                                                        {(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate)) >= 0 ?
                                                            <span className={`${(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate)) >= 0 ? 'text-[#148F36]' : 'text-[#EB4E2C]'}`}>
                                                                {Actions.putComma(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate))} ({((todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate)) * 100 / (term ? data.ltpPriceShortDate : data.ltpPriceLongDate))?.toFixed(2)}%)
                                                            </span>
                                                            :
                                                            <span className={`${(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate)) >= 0 ? 'text-[#148F36]' : 'text-[#EB4E2C]'}`}>
                                                                {Actions.putComma(todayPrice - (term ? data.ltpPriceShortDate : data.ltpPriceLongDate))} ({(((term ? data.ltpPriceShortDate : data.ltpPriceLongDate) - todayPrice) * 100 / (term ? data.ltpPriceShortDate : data.ltpPriceLongDate))?.toFixed(2)}%)
                                                            </span>}
                                                    </b>since then
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="mx-3 flex justify-between">
                                        {verdictDiv(data.fundamentalScore, 'Fundamentals',)}
                                        {verdictDiv(data.trendShort, 'Short term trend',)}
                                        {verdictDiv(data.trendLong, 'Long term trend',)}
                                    </div>
                                </> :
                                    <div className="flex flex-row justify-between my-4">
                                        <div className='basis-7/12 grid pl-3 content-center'>
                                            <div className='font-Inter font-normal text-[10px] lg:text-xs text-left ml-2 mr-1'>
                                                Don’t worry, you can request for a verdict on this stock.
                                            </div>
                                        </div>
                                        <div className="basis-5/12 grid content-center">
                                            <button className='ml-auto mr-4 rounded-[4px] px-4 py-2 border-[1px] border-[#00439D] text-[#00439D] outline-none font-medium text-xs lg:text-sm font-Inter active:bg-[#00439D] active:text-[#ffffff]'
                                                onClick={() => Mixpanel.track('cta_clicked', {
                                                    'page': 'stock_page',
                                                    'fincode': name,
                                                    'cta_text': 'request_verdict',
                                                })}>
                                                Request verdict
                                            </button>
                                        </div>
                                    </div>}
                            </div>
                            {cardData?.trendList &&
                                <div className='ml-4 p-3 h-[200px] w-[85vw] lg:w-[360px] min-w-[300px] border rounded-lg bg-white overflow-y-auto no-scrollbar swiper-no-swiping flex flex-col justify-between'
                                    style={{ borderColor: `${scoreTOCat(selected[term]).main}aa` }}>
                                    {cardData?.trendList?.map((ele, i) =>
                                        <div key={i} className={`flex items-center justify-start`}>
                                            <Image src={scoreTOCat(ele.pattern).icon} className='object-contain w-3 mr-2' alt='icon' />
                                            <div className='font-med text-[#606060] text-[10px] leading-[16px]'>
                                                <b className='text-[#202020]'>{ele.header}</b><br />
                                                {ele.subheader}
                                            </div>
                                        </div>)}
                                </div>}
                            {cardData?.fundamentalVerdicts &&
                                <div className='ml-4 h-[200px] w-[85vw] lg:w-[360px] min-w-[300px] border rounded-lg bg-white'
                                    style={{ borderColor: `${scoreTOCat(selected[term]).main}aa` }}>
                                    <div className={`my-2 flex justify-center font-Inter`}>
                                        <div className='font-semibold text-[#202020] text-[12px] leading-[16px]'>
                                            Fundamentals:
                                        </div>
                                        <Image src={scoreTOCat(data.fundamentalScore).logo} className='object-contain w-3 mx-1.5' alt='icon' />
                                        <div className='font-semibold text-[12px] leading-[16px]' style={{ color: scoreTOCat(data.fundamentalScore).main }}>
                                            {scoreTOCat(data.fundamentalScore).text}
                                        </div>
                                    </div>
                                    <div className="mx-3 flex justify-between ">
                                        <div className='mr-[10px] flex flex-col border rounded basis-1/3 py-1 pl-2'>
                                            <div className='font-Inter font-semibold text-[10px] leading-[14px]'>
                                                Revenue<br />
                                                growth
                                            </div>
                                            <div className='mt-1 flex'>
                                                <Image src={scoreTOCat(cardData?.fundamentalVerdicts[1]?.score).logo} className='object-contain w-2 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.fundamentalVerdicts[1]?.score).main }}>
                                                    {scoreTOCat(cardData?.fundamentalVerdicts[1]?.score).text}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mr-[10px] flex flex-col border rounded basis-1/3 py-1 pl-2'>
                                            <div className='font-Inter font-semibold text-[10px] leading-[14px]'>
                                                Peer <br />comparison
                                            </div>
                                            <div className='mt-1 flex'>
                                                <Image src={scoreTOCat(cardData?.fundamentalVerdicts[2]?.score).logo} className='object-contain w-2 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.fundamentalVerdicts[2]?.score).main }}>
                                                    {scoreTOCat(cardData?.fundamentalVerdicts[2]?.score).text}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col border rounded basis-1/3 py-1 pl-2'>
                                            <div className='font-Inter font-semibold text-[10px] leading-[14px]'>
                                                ROCE/<br />
                                                ROE
                                            </div>
                                            <div className='mt-1 flex'>
                                                <Image src={scoreTOCat(cardData?.fundamentalVerdicts[4]?.score).logo} className='object-contain w-2 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.fundamentalVerdicts[4]?.score).main }}>
                                                    {scoreTOCat(cardData?.fundamentalVerdicts[4]?.score).text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-3">
                                        <div className='mr-3 flex flex-col border rounded basis-1/3 py-1 pl-2'>
                                            <div className='font-Inter font-semibold text-[10px] leading-[14px]'>
                                                Share<br /> holding
                                            </div>
                                            <div className='mt-1 flex'>
                                                <Image src={scoreTOCat(cardData?.fundamentalVerdicts[3]?.score).logo} className='object-contain w-2 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.fundamentalVerdicts[3]?.score).main }}>
                                                    {scoreTOCat(cardData?.fundamentalVerdicts[3]?.score).text}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mr-3 flex flex-col border rounded basis-1/3 py-1 pl-2'>
                                            <div className='font-Inter font-semibold text-[10px] leading-[14px]'>
                                                Profit <br />
                                                growth
                                            </div>
                                            <div className='mt-1 flex'>
                                                <Image src={scoreTOCat(cardData?.fundamentalVerdicts[0]?.score).logo} className='object-contain w-2 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.fundamentalVerdicts[0]?.score).main }}>
                                                    {scoreTOCat(cardData?.fundamentalVerdicts[0]?.score).text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`mt-3 flex justify-center font-Inter text-[10px] leading-[16px] font-medium text-[#00439D]`}
                                        onClick={() => handleHowCal('how_is_it_calculated')}>
                                        How is this calculated?
                                    </div>
                                </div>}
                            {data.shortTermVerdict &&
                                <div className='mx-4 px-3 h-[200px] w-[85vw] lg:w-[360px] min-w-[300px] border rounded-lg bg-white'
                                    style={{ borderColor: `${scoreTOCat(selected[term]).main}aa` }}>
                                    <div className='my-2 font-semibold text-[#202020] text-[12px] leading-[24px] text-center'>
                                        Momentum
                                    </div>
                                    <div className='flex'>
                                        <div className=' w-1/2 mr-3 flex flex-col border rounded py-2'
                                            style={{ borderColor: scoreTOCat(cardData?.momentumLongTermScore).main }}>
                                            <div className='font-Inter font-semibold text-[10px] text-center leading-[16px]'>
                                                Long term trend
                                            </div>
                                            <div className='mt-2 flex justify-center'>
                                                <Image src={scoreTOCat(cardData?.momentumLongTermScore).logo} className='object-contain w-3 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.momentumLongTermScore).main }}>
                                                    {scoreTOCat(cardData?.momentumLongTermScore).text}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/2 flex flex-col border rounded  py-2'
                                            style={{ borderColor: scoreTOCat(cardData?.momentumShortTermScore).main }}>
                                            <div className='font-Inter font-semibold text-[10px] text-center leading-[16px]'>
                                                Short term trend
                                            </div>
                                            <div className='mt-2 flex justify-center'>
                                                <Image src={scoreTOCat(cardData?.momentumShortTermScore).logo} className='object-contain w-3 mr-1' alt='icon' />
                                                <div className='font-Inter font-semibold text-[10px] leading-[16px]' style={{ color: scoreTOCat(cardData?.momentumShortTermScore).main }}>
                                                    {scoreTOCat(cardData?.momentumShortTermScore).text}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 font-semibold text-[#414141] text-[12px] leading-[16px]'>
                                        What are technical indicators?
                                    </div>
                                    <div className='mt-1 font-medium text-[#606060] text-[10px] leading-[14px]'>
                                        {cardData?.momentumText}
                                    </div>
                                </div>}
                        </div>
                    </> :
                        <div className="ml-4 w-[80vw] lg:w-11/12 min-w-[300px] bg-[#efefefe3] rounded-lg h-[200px] animate-pulse" />}

                    {data.shortTermVerdict &&
                        <div className={`mt-2 lg:mt-4 flex items-center justify-center`}>
                            <div className={`font-Inter text-[10px] lg:text-xs font-medium text-[#606060]`}>
                                Swipe to see the detailed analysis
                            </div>
                            <Image src={swipeArrow} className='object-contain w-4 lg:w-5 -rotate-90 ml-1' alt='icon' />
                        </div>}

                </div>
            </div>
        </>
    )
}
