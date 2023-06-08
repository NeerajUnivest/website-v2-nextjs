import Image from "next/image";
import hero from '../../assets/images/hero.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import sebi_logo from '../../assets/icons/sebi_logo.png';
import CountUpBox from "@/elements/CountUpBox";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";

export default function StocksHeroSection({ homePage }) {
    const router = useRouter();
    return (<>
        <section id="Hero" className="bg-[#EFF7FF]">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-40 max-w-screen-xl mx-auto'>
                <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8 relative">
                    <p className='ml-4 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141]'>
                        Stocks
                    </p>
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] lg:whitespace-nowrap'>
                        Invest with <br className="lg:hidden" /> <span className="uni-wise-gradient font-black">82%+ Accurate</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Buy-Sell-Hold insights
                    </div>
                    <div className='mt-8 lg:mt-11 ml-4 lg:ml-0  grid grid-cols-3 lg:grid-cols-6 justify-items-start gap-y-4 text-black'>
                        <div className="flex col-span-3">
                            <Image
                                placeholder="empty"
                                src={sebi_logo}
                                className=' h-[64px] lg:h-[64px] w-[64px] lg:w-[64px]'
                                alt='demo image'
                            />
                            <div className="self-center ml-5">
                                <p className="font-semibold text-base">Registered - <b>INA000017639</b></p>
                                <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                            </div>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base"><CountUpBox end={3.5} decimals={1} /> Lac+</p>
                            <p className="font-medium text-xs text-[#606060]">Active users</p>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base"><CountUpBox start={1000} end={1200} duration={2} /> Cr+</p>
                            <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                        </div>
                    </div>
                    {homePage ? <ExploreMore className='absolute -bottom-24 left-4 lg:bottom-32 lg:left-8' onClick={() => router.push('/stocks')} /> : <HeroSearchBox />}
                </div>
                <div className="basis-full md:basis-5/12 flex content-center mt-10 lg:mt-0">
                    <Image
                        placeholder="empty"
                        src={hero}
                        className={`lg:h-[550px] lg:w-[450px]  ${homePage ? 'ml-auto w-[210px] h-[280px] mr-8' : 'mx-auto w-[240px] h-[300px]'}`}
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
