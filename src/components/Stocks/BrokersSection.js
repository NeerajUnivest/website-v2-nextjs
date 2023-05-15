import { BlackButton } from "@/elements/Button/Button";
import Image from "next/image";
import { useTransition, animated } from 'react-spring'
import logoWhite from '../../assets/Images/logoWhite.webp'
import Marquee from "react-fast-marquee";
import { useState } from "react";
const brokerList = [
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Growww.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Kite.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/dhan.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Upstox.png',
    'https://univest.s3.ap-south-1.amazonaws.com/broker-logos-new/Trustline.png',
]
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
                    gradientColor={[21, 30, 40]}
                    gradientWidth={15}
                    pauseOnHover>
                    <div className='flex overflow-y-auto gap-x-8 py-12 lg:py-16 mx-4'>
                        {/* TODO */}
                        {[
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                            { symbol: 'HDFC', logo: 'https://univest.s3.ap-south-1.amazonaws.com/stock_logos/INE001A01036.png' },
                        ]
                            .map((ele, i) =>
                                <div key={i} className='flex justify-center items-center rounded-xl px-4 py-2 shadow-md'>
                                    <Image src={ele.logo} width='32' height='32' className='w-8 lg:w-10 object-contain' alt='icon' />
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