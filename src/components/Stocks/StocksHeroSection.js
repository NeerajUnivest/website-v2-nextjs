import Image from "next/image";
import heroHome from '../../assets/images/hero_image_stocks_home-min.png';
import hero from '../../assets/images/hero_image_stocks-min.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import sebi_new_logo from '@/assets/icons/sebi_new_logo.png';

import CountUpBox from "@/elements/CountUpBox";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { popUp } from "@/elements/PopUp/SEBIPopUp";

export default function StocksHeroSection({ homePage }) {
    const router = useRouter();
    return (<>
        <section id="Hero" className="bg-[#E1F0FF] overflow-hidden">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-28 max-w-screen-xl mx-auto '>
                <div className="lg:mt-12 font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8 relative">
                    <p className='ml-4 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141]'>
                        Stocks
                    </p>
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] lg:whitespace-nowrap'>
                        Invest with {homePage ? <br className="lg:hidden" /> : <br />} <span className="uni-wise-gradient font-black">Highly Accurate</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Buy-Sell-Hold insights
                    </div>
                    {homePage &&
                        <div className='mt-8 ml-4 lg:ml-0  grid grid-cols-2 lg:grid-cols-5 justify-items-start gap-y-4 text-black'>
                            <div className="flex col-span-2 items-center" onClick={() => popUp.open()}>
                                <Image
                                    placeholder="empty"
                                    src={sebi_new_logo}
                                    className='object-contain w-[40px] lg:w-[64px]'
                                    alt='demo image'
                                />
                                <p className={`font-semibold text-base lg:text-2xl mx-2 text-black`}>Registered</p>
                                <AiOutlineInfoCircle color='#202020' className='text-[16px]  lg:text-[20px]' />
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base"><CountUpBox end={4} decimals={1} /> Lac+</p>
                                <p className="font-medium text-xs text-[#606060]">Active users</p>
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base"><CountUpBox start={1000} end={1200} duration={2} /> Cr+</p>
                                <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                            </div>
                        </div>}
                    {homePage ?
                        <ExploreMore className='absolute -bottom-16 left-4 lg:bottom-24 lg:left-8' onClick={() => router.push('/stocks')} />
                        : <HeroSearchBox />}
                </div>
                <div className={`basis-full md:basis-5/12 flex content-center relative ${homePage ? 'mt-6 lg:mt-4' : 'mt-6'}`}>
                    <div className='rounded-full absolute left-10 lg:left-3 top-[100px] bg-gradient-to-r from-[#62606022] to-[#0914328c] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] blur-3xl opacity-50' />
                    <Image
                        placeholder="blur"
                        src={homePage ? heroHome : hero}
                        className={`lg:w-[500px] lg:min-w-[500px] object-contain z-[1] ${homePage ? 'ml-auto w-[70%] mr-8 lg:mr-0' : 'mx-auto w-[80%]'}`}
                        alt='demo image'
                    />
                </div>
            </div>
        </section>
        {!homePage &&
            <p className="mt-5 lg:mt-2 text-center text-sm lg:text-base font-semibold text-[#414141]">POWERED with best research tools</p>}
    </>
    )
}
