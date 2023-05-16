import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import { useTransition, animated } from 'react-spring'
import logoWhite from '../../assets/img/logoWhite.webp'
import Marquee from "react-fast-marquee";
import { useState } from "react";

const brokerList = [
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
]

const stocksList = [
    {
        compName: "Siemens Ltd.",
        symbol: "SIEMENS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE003A01024.png",
    },
    {
        compName: "HDFC Bank Ltd.",
        symbol: "HDFCBANK",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE040A01034.png",
    },
    {
        compName: "ITC Ltd.",
        symbol: "ITC",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE154A01025.png",
    },
    {
        compName: "Reliance Industries Ltd.",
        symbol: "RELIANCE",
        logoUrl: "https://univest-staging.s3.ap-south-1.amazonaws.com/stock_logos/INE002A01018.png",
    },
    {
        compName: "Power Grid Corporation Of India Ltd.",
        symbol: "POWERGRID",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE752E01010.png",
    },
    {
        compName: "Britannia Industries Ltd.",
        symbol: "BRITANNIA",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE216A01030.png",
    },
    {
        compName: "Grasim Industries Ltd.",
        symbol: "GRASIM",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE047A01021.png",
    },
    {
        compName: "Vedanta Ltd.",
        symbol: "VEDL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE205A01025.png",
    },
    {
        compName: "NTPC Ltd.",
        symbol: "NTPC",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE733E01010.png",
    },
    {
        compName: "Axis Bank Ltd.",
        symbol: "AXISBANK",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE238A01034.png",
    },
    {
        compName: "Pidilite Industries Ltd.",
        symbol: "PIDILITIND",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE318A01026.png",
    },
    {
        compName: "Indian Oil Corporation Ltd.",
        symbol: "IOC",
        logoUrl: "https://univest-staging.s3.ap-south-1.amazonaws.com/stock_logos/INE242A01010.png",
    },
    {
        compName: "Infosys Ltd.",
        symbol: "INFY",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE009A01021.png",
    },
    {
        compName: "Adani Enterprises Ltd.",
        symbol: "ADANIENT",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE423A01024.png",
    },
    {
        compName: "Wipro Ltd.",
        symbol: "WIPRO",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE075A01022.png",
    },
    {
        compName: "ICICI Bank Ltd.",
        symbol: "ICICIBANK",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE090A01021.png",
    },
    {
        compName: "Mahindra & Mahindra Ltd.",
        symbol: "M&M",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE101A01026.png",
    },
    {
        compName: "JSW Steel Ltd.",
        symbol: "JSWSTEEL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE019A01038.png",
    },
    {
        compName: "HCL Technologies Ltd.",
        symbol: "HCLTECH",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE860A01027.png",
    },
    {
        compName: "Adani Total Gas Ltd.",
        symbol: "ATGL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE399L01023.png",
    },
    {
        compName: "Tata Consultancy Services Ltd.",
        symbol: "TCS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE467B01029.png",
    },
    {
        compName: "LTIMindtree Ltd.",
        symbol: "LTIM",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE214T01019.png",
    },
    {
        compName: "Adani Ports and Special Economic Zone Ltd.",
        symbol: "ADANIPORTS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE742F01042.png",
    },
    {
        compName: "Nestle India Ltd.",
        symbol: "NESTLEIND",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE239A01016.png",
    },
    {
        compName: "Adani Transmission Ltd.",
        symbol: "ADANITRANS",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE931S01010.png",
    },
    {
        compName: "Hindalco Industries Ltd.",
        symbol: "HINDALCO",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE038A01020.png",
    },
    {
        compName: "Avenue Supermarts Ltd.",
        symbol: "DMART",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE192R01011.png",
    },
    {
        compName: "Tata Steel Ltd.",
        symbol: "TATASTEEL",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/TATASTEEL.png",
    },
    {
        compName: "SBI Life Insurance Company Ltd.",
        symbol: "SBILIFE",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE123W01016.png",
    },
    {
        compName: "Bajaj Auto Ltd.",
        symbol: "BAJAJ-AUTO",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE917I01010.png",
    },
    {
        compName: "Bharti Airtel Ltd.",
        symbol: "BHARTIARTL",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE397D01024.png",
    },
    {
        compName: "Titan Company Ltd.",
        symbol: "TITAN",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE280A01028.png",
    },
    {
        compName: "Kotak Mahindra Bank Ltd.",
        symbol: "KOTAKBANK",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE237A01028.png",
    },
    {
        compName: "Asian Paints Ltd.",
        symbol: "ASIANPAINT",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE021A01026.png",
    },
    {
        compName: "Hindustan Unilever Ltd.",
        symbol: "HINDUNILVR",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE030A01027.png",
    },
    {
        compName: "State Bank Of India",
        symbol: "SBIN",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE062A01020.png",
    },
    {
        compName: "Ultratech Cement Ltd.",
        symbol: "ULTRACEMCO",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE481G01011.png",
    },
    {
        compName: "Bajaj Finance Ltd.",
        symbol: "BAJFINANCE",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE296A01024.png",
    },
    {
        compName: "Housing Development Finance Corporation Ltd.",
        symbol: "HDFC",
        logoUrl: "https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png",
    },
    {
        compName: "Oil & Natural Gas Corporation Ltd.",
        symbol: "ONGC",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE213A01029.png",
    },
    {
        compName: "Coal India Ltd.",
        symbol: "COALINDIA",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE522F01014.png",
    },
    {
        compName: "Life Insurance Corporation of India",
        symbol: "LICI",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/LICI.png",
    },
    {
        compName: "Bajaj Finserv Ltd.",
        symbol: "BAJAJFINSV",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/BAJAJFINSV.png",
    },
    {
        compName: "Hindustan Zinc Ltd.",
        symbol: "HINDZINC",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE267A01025.png",
    },
    {
        compName: "HDFC Life Insurance Co Ltd.",
        symbol: "HDFCLIFE",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE795G01014.png",
    },
    {
        compName: "Maruti Suzuki India Ltd.",
        symbol: "MARUTI",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE585B01010.png",
    },
    {
        compName: "Sun Pharmaceutical Industries Ltd.",
        symbol: "SUNPHARMA",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE044A01036.png",
    },
    {
        compName: "Adani Green Energy Ltd.",
        symbol: "ADANIGREEN",
        logoUrl: "https://univest-prod.s3.ap-south-1.amazonaws.com/stock_logos/INE364U01010.png",
    }]


export default function BrokersSection() {
    const [state, setState] = useState(0);

    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 1 },
        enter: { opacity: 0.2 },
        leave: { opacity: 1 },
        config: { duration: 400 },
        onRest: (_a, _b, item) => {
            if (state > 3) {
                setState(0)
            } else {
                setState(state + 1)
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <section className='bg-[#F5F5F5] py-[72px] font-Inter'>
            <div className="max-w-screen-xl mx-auto lg:px-8" >
                <p className="text-center text-xl lg:text-5xl font-black text-black">
                    Integrated with India’s Top 16+ brokers
                </p>
                <p className="mt-4 lg:mt-3 text-center text-sm lg:text-4xl font-medium text-black">
                    Get Buy-Sell-Hold insights on over 2000 stocks
                </p>
                <div className="flex justify-center items-center mt-[48px] lg:mt-[96px] mb-[32px] lg:mb-[64px]">
                    <div className="h-[72px] w-[72px] px-3 lg:px-4 lg:h-[160px] lg:w-[160px] bg-[#FFFFFF] border-2 border-[#EDEDED] rounded-full flex place-content-center">
                        {transitions((style, i) => (
                            <animated.img
                                style={style}
                                src={brokerList[state]}
                                className='w-full object-contain'
                                alt='broker logo'
                            />
                        ))}
                        {/* <Image src='https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png' width='160' height='160' className='w-full object-contain' alt='icon' /> */}
                    </div>
                    <div className="text-[32px] lg:text-[64px] mx-[32px] lg:mx-[48px]">
                        🤝
                    </div>
                    <div className="h-[72px] w-[72px] px-3 lg:px-4 lg:h-[160px] lg:w-[160px] bg-primary rounded-full flex place-content-center">
                        <Image src={logoWhite} className='w-full object-contain' alt='icon' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    {/* TODO */}
                    <BlackButton text='Link broker account' onClick={() => null} />
                </div>

                <Marquee
                    speed={30}
                    delay={2}
                    pauseOnHover>
                    <div className='flex overflow-y-auto gap-x-8 py-12 lg:py-16 mx-4'>
                        {/* TODO */}
                        {stocksList
                            .map((ele, i) =>
                                <div key={i} className='flex justify-center items-center rounded-xl px-4 py-2 shadow-md'>
                                    <Image src={ele.logoUrl} width='32' height='32' className='w-8 lg:w-10 object-contain' alt='icon' />
                                    <span className="ml-2 text-sm lg:text-base font-semibold text-black">
                                        {ele.symbol}
                                    </span>
                                </div>)}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}