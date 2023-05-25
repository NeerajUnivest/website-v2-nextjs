import Image from "next/image";
import hero from '../../assets/images/hero.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import sebi_logo from '../../assets/icons/sebi_logo.png';

export default function StocksHeroSection({ show }) {
    return (<>
        <section id="Hero" className="bg-light-blue">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-40 max-w-screen-xl mx-auto'>
                <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8">
                    <p className='ml-4 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141]'>
                        Stocks
                    </p>
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Invest with <span className="uni-wise-gradient font-black">82%+ Accurate</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Buy-Sell-Hold insights
                    </div>
                    <div className='mt-8 lg:mt-11 ml-4 lg:ml-0  grid grid-cols-3 lg:grid-cols-6 justify-items-start gap-y-4 text-black'>
                        <div className="flex col-span-3">
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
                        <div className="self-center">
                            <p className="font-semibold text-base">3.5 Lac+</p>
                            <p className="font-medium text-xs text-[#606060]">Active users</p>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base">1,200 Cr+</p>
                            <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                        </div>
                    </div>
                    {show && <HeroSearchBox />}
                </div>
                <div className="basis-full md:basis-5/12 flex content-center mt-10 lg:mt-0">
                    <div className='mx-auto h-[300px] lg:h-[550px]'>
                        <Image
                            placeholder="blur"
                            src={hero}
                            className=' h-[300px] lg:h-[550px] object-contain'
                            alt='demo image'
                        />
                    </div>
                </div>
            </div>
        </section>
        {show &&
            <p className="mt-5 lg:mt-2 text-center text-sm lg:text-base font-semibold text-[#414141]">POWERED with best research tools</p>}
    </>
    )
}
