import Image from "next/image";
import hero from '../../assets/images/hero.png';
import univest_elite from '../../assets/images/univest_elite.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import Marquee from "react-fast-marquee";
import sebi_logo from '../../assets/icons/rbi.png';
import CountUpBox from "@/elements/CountUpBox";




export default function EliteHeroSection({ show }) {
    return (<>
        <section id="Hero" className="bg-light-blue">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-40 max-w-screen-xl mx-auto'>
                <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8">
                    {/* <div className='ml-4 w-20 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${univest_elite.src})` }}>
                        Elite
                    </div> */}
                    <Image
                        placeholder="empty"
                        src={univest_elite}
                        className='ml-4 lg:ml-0 h-[32px] lg:h-[40px] object-contain max-w-[140px] lg:max-w-[160px]'
                        alt='demo image'
                    />
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] whitespace-nowrap'>
                        Earn up to  <span className="text-[#437587] font-black">12% p.a.</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        with Elite
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
                                <p className="font-semibold text-base">Registered - INA000017639</p>
                                <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                            </div>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base"><CountUpBox end={3.5} decimals={1}/> Lac+</p>
                            <p className="font-medium text-xs text-[#606060]">Active users</p>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base"><CountUpBox start={1000} end={1200} duration={3}/> Cr+</p>
                            <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                        </div>
                    </div>
                    {show && <HeroSearchBox />}
                </div>
                <div className="basis-full md:basis-5/12 flex content-center mt-10 lg:mt-0">
                    <div className='mx-auto h-[300px] lg:h-[550px]'>
                        <Image
                            placeholder="empty"
                            src={hero}
                            className=' h-[300px] lg:h-[550px] object-contain'
                            alt='demo image'
                        />
                    </div>
                </div>
            </div>
        </section>
        {show &&
            <Marquee
                speed={30}
                delay={1}>
                <div className='select-none flex items-center gap-x-12 lg:gap-x-16 p-4 bg-gradient-to-t from-[#FF8415] to-[#FFCA3F] -mx-1'>
                    {/* TODO */}
                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        <span className="text-lg lg:text-3xl font-extrabold uni-wise-gradient mr-4">
                            100%
                        </span>
                        withdrawals honoured
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />
                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        <span className="text-lg lg:text-3xl font-extrabold uni-wise-gradient mr-4">
                            100%
                        </span>
                        withdrawals honoured
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />
                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Withdraw anytime
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />

                    <span className="text-base lg:text-2xl font-semibold text-black">
                        <span className="text-lg lg:text-3xl font-extrabold uni-wise-gradient mr-4">
                            100%
                        </span>
                        withdrawals honoured
                    </span>
                    <span className="h-[12px] w-[12px] bg-black rounded-full" />
                </div>
            </Marquee>
        }
    </>
    )
}
