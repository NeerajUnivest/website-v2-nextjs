import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import { useTransition, animated, useInView } from 'react-spring'
import logoWhite from '../../assets/images/logoWhite.webp'
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Link from "next/link";
import { popUp } from "@/elements/PopUp/PopUp";
import { Config } from "@/elements/Config";

const brokerList = [
    'https://storage.googleapis.com/app-assets-univest/broker_logos/alice_blue.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/axis_securities.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/edelweiss.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/fundzbazar.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/hdfc_securities.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/icici_securities.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/kotak_securities.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/angel_broking.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/dhan.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/groww.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/iifl.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/kite.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/motilal_oswal.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/trustline.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/upstox.png',
    'https://storage.googleapis.com/app-assets-univest/broker_logos/fivepaisa.png'
]

const stocksList = [
    {
        compName: "PB Fintech Ltd.",
        symbol: "POLICYBZR",
        finCode: 254493,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694005985061_POLICYBZR.png",
    },
    {
        compName: "Dr. Reddy's Laboratories Ltd.",
        symbol: "DRREDDY",
        finCode: 100124,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006167790_INE089A01023.png",
    },
    {
        compName: "One97 Communications Ltd.",
        symbol: "PAYTM",
        finCode: 208883,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006149583_PAYTM.png",
    },
    {
        compName: "Manappuram Finance Ltd.",
        symbol: "MANAPPURAM",
        finCode: 131213,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006155403_INE522D01027.png",
    },
    {
        compName: "Bharat Dynamics Ltd.",
        symbol: "BDL",
        finCode: 212705,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/INE171Z01018.png",
    },
    {
        compName: "Indiamart Intermesh Ltd.",
        symbol: "INDIAMART",
        finCode: 290269,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006180950_INDIAMART.png",
    },
    {
        compName: "Bajaj Auto Ltd.",
        symbol: "BAJAJ-AUTO",
        finCode: 200132,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006094627_INE917I01010.png",
    },
    {
        compName: "SRF Ltd.",
        symbol: "SRF",
        finCode: 103806,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006185205_INE647A01010.png",
    },
    {
        compName: "Abbott India Ltd.",
        symbol: "ABBOTINDIA",
        finCode: 100488,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694005952897_INE358A01014.png",
    },
    {
        compName: "Dalmia Bharat Ltd.",
        symbol: "DALBHARAT",
        finCode: 293380,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006234918_INE00R701025.png",
    },
    {
        compName: "Alkem Laboratories Ltd.",
        symbol: "ALKEM",
        finCode: 212427,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006064389_INE540L01014.png",
    },
    {
        compName: "Cholamandalam Investment and Finance Company Ltd.",
        symbol: "CHOLAFIN",
        finCode: 111243,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006184844_INE121A01024.png",
    },
    {
        compName: "Nestle India Ltd.",
        symbol: "NESTLEIND",
        finCode: 100790,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006078256_INE239A01016.png",
    },
    {
        compName: "JK Lakshmi Cement Ltd.",
        symbol: "JKLAKSHMI",
        finCode: 100380,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006109451_INE786A01032.png",
    },
    {
        compName: "Jindal Stainless (Hisar) Ltd.",
        symbol: "JSLHISAR",
        finCode: 279682,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006070439_INE455T01018.png",
    },
    {
        compName: "KEI Industries Ltd.",
        symbol: "KEI",
        finCode: 117569,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006174982_INE878B01027.png",
    },
    {
        compName: "Shriram City Union Finance Ltd.",
        symbol: "SHRIRAMCIT",
        finCode: 132498,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006057475_INE722A01011.png",
    },
    {
        compName: "Sonata Software Ltd.",
        symbol: "SONATSOFTW",
        finCode: 132221,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006080793_INE269A01021.png",
    },
    {
        compName: "The Ramco Cements Ltd.",
        symbol: "RAMCOCEM",
        finCode: 100260,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006007000_INE331A01037.png",
    },
    {
        compName: "Aster DM Healthcare Ltd.",
        symbol: "ASTERDM",
        finCode: 221033,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006093474_INE914M01019.png",
    },
    {
        compName: "Ultratech Cement Ltd.",
        symbol: "ULTRACEMCO",
        finCode: 132538,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006145519_INE481G01011.png",
    },
    {
        compName: "Cyient Ltd.",
        symbol: "CYIENT",
        finCode: 132175,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006225165_INE136B01020.png",
    },
    {
        compName: "Zydus Lifesciences Ltd.",
        symbol: "ZYDUSLIFE",
        finCode: 132321,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694005961041_INE010B01027.png",
    },
    {
        compName: "AIA Engineering Ltd.",
        symbol: "AIAENG",
        finCode: 132683,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006141578_AIAENG.png",
    },
    {
        compName: "IIFL Finance Ltd.",
        symbol: "IIFL",
        finCode: 132636,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006205085_IIFL.png",
    },
    {
        compName: "Bosch Ltd.",
        symbol: "BOSCHLTD",
        finCode: 100530,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006097564_INE323A01026.png",
    },
    {
        compName: "Aegis Logistics Ltd.",
        symbol: "AEGISCHEM",
        finCode: 100003,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006076339_INE208C01025.png",
    },
    {
        compName: "Varun Beverages Ltd.",
        symbol: "VBL",
        finCode: 209550,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006085148_INE200M01013.png",
    },
    {
        compName: "Indian Bank",
        symbol: "INDIANB",
        finCode: 132814,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006017384_INE562A01011.png",
    },
    {
        compName: "Triveni Turbine Ltd.",
        symbol: "TRITURBINE",
        finCode: 226076,
        logoUrl: "https://storage.googleapis.com/production-univest/stock_logos/1694006130213_TRITURBINE.png",
    }
]


export default function BrokersSection() {
    const [state, setState] = useState(0);
    const [ref, inView] = useInView()
    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 1, scale: 1 },
        enter: { opacity: 0.2, scale: 0.9 },
        leave: { opacity: 1, scale: 1 },
        config: { duration: 400 },
        onRest: (_a, _b, item) => {
            if (_a.value?.opacity === 0.2) {
                if (state > brokerList.length - 2) {
                    setState(0)
                } else {
                    setState(state + 1)
                }
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <section className='bg-[#F5F5F5] py-[72px] font-Inter'>
            <div className="max-w-screen-xl mx-auto lg:px-8" ref={ref}>
                <p className="text-center text-xl lg:text-5xl font-black text-black">
                    Integrated with India’s Top 16+ brokers
                </p>
                <p className="mt-4 lg:mt-10 text-center text-sm lg:text-4xl font-medium text-black">
                    Get Buy-Sell-Hold insights on over 2000 stocks
                </p>
                <div className="flex justify-center items-center mt-[48px] lg:mt-[96px] mb-[32px] lg:mb-[64px]">
                    <div className="h-[72px] w-[72px] px-2 lg:px-3 lg:h-[160px] lg:w-[160px] bg-[#FFFFFF] border-2 border-[#EDEDED] rounded-full flex place-content-center">
                        {inView &&
                            transitions((style, i) => (
                                <animated.img
                                    style={style}
                                    src={brokerList[state]}
                                    className='w-full object-contain overflow-hidden'
                                    alt='broker logo'
                                />
                            ))}
                    </div>
                    <div className="text-[32px] lg:text-[64px] mx-[32px] lg:mx-[48px]">
                        🤝
                    </div>
                    <div className="h-[72px] w-[72px] px-3 lg:px-4 lg:h-[160px] lg:w-[160px] bg-primary rounded-full flex place-content-center">
                        <Image src={logoWhite} className='w-full object-contain' alt='icon' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <BlackButton text='Link broker account' onClick={() => popUp.open()} />
                </div>
            </div>
            <Marquee
                play={inView}
                speed={90}
                delay={2}
                gradient={true}
                gradientWidth={10}
                gradientColor={[245, 245, 245]}
                pauseOnHover>
                <div className='flex overflow-y-auto gap-x-8 py-12 lg:py-16 mx-4'>
                    {stocksList
                        .map((ele, i) =>
                            <Link href={Config.toStockDetail(ele.symbol, ele.compName)} key={i}
                                className='flex justify-center items-center rounded-xl px-4 py-2 shadow-md bg-white'>
                                <Image src={ele.logoUrl} width='32' height='32' className='w-8 lg:w-10 object-contain' alt='icon' />
                                <span className="ml-2 text-sm lg:text-base font-semibold text-black">
                                    {ele.symbol}
                                </span>
                            </Link>)}
                </div>
            </Marquee>
        </section>
    )
}