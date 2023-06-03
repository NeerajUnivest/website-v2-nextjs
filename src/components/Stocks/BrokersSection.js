import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import { useTransition, animated, useInView } from 'react-spring'
import logoWhite from '../../assets/img/logoWhite.webp'
import Marquee from "react-fast-marquee";
import { useState } from "react";

const brokerList = [
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
    }]


export default function BrokersSection() {
    const [state, setState] = useState(0);
    const [ref, inView] = useInView()
    const transitions = useTransition(state, {
        key: state,
        from: { opacity: 1, scale: 1 },
        enter: { opacity: 0.2, scale: 0.9 },
        leave: { opacity: 1, scale: 1 },
        config: { duration: 200 },
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
            </div>
            <Marquee
                play={inView}
                speed={50}
                delay={2}
                pauseOnHover>
                <div className='flex overflow-y-auto gap-x-8 py-12 lg:py-16 mx-4'>
                    {/* TODO */}
                    {stocksList
                        .map((ele, i) =>
                            <div key={i} className='flex justify-center items-center rounded-xl px-4 py-2 shadow-md bg-white'>
                                <Image src={ele.logoUrl} width='32' height='32' className='w-8 lg:w-10 object-contain' alt='icon' />
                                <span className="ml-2 text-sm lg:text-base font-semibold text-black">
                                    {ele.symbol}
                                </span>
                            </div>)}
                </div>
            </Marquee>
        </section>
    )
}