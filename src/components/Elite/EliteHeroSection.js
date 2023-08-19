import Image from "next/image";
import heroHome from '../../assets/images/hero_image_elite_home-min.png';
import hero from '../../assets/images/hero_image_elite-min.png';
import univest_elite from '../../assets/images/univest_elite.png';
import HeroSearchBox from "@/elements/HeroSearchBox";
import Marquee from "react-fast-marquee";
import rbi from '../../assets/icons/rbi.gif';
import CountUpBox from "@/elements/CountUpBox";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";




export default function EliteHeroSection({ homePage }) {
    const router = useRouter();
    return (<>
        <section id="Hero" className="bg-light-blue overflow-hidden">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-28 max-w-screen-xl mx-auto'>
                <div className="lg:mt-12 font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8 relative">
                    <Image
                        placeholder="empty"
                        src={univest_elite}
                        className='ml-4 lg:ml-0 h-[32px] lg:h-[40px] object-contain max-w-[140px] lg:max-w-[160px]'
                        alt='demo image'
                    />
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] whitespace-nowrap'>
                        Earn up to{homePage ? <br className="lg:hidden" /> : <br />}<span className="text-[#437587] font-black">12% p.a.</span> with Elite.
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Withdraw anytime
                    </div>
                    {homePage &&
                        <div className='mt-8 ml-4 lg:ml-0  grid grid-cols-2 lg:grid-cols-5 justify-items-start gap-y-4 text-black'>
                            <div className="flex col-span-2">
                                <Image
                                    placeholder="empty"
                                    src={rbi}
                                    className=' h-[48px] lg:h-[56px] w-[48px] lg:w-[56px] bg-black rounded-full'
                                    alt='demo image'
                                />
                                <div className="self-center ml-5">
                                    <p className="font-medium text-[10px] text-[#606060]">Partnered with</p>
                                    <p className="font-semibold text-base">Registered <b>NBFC - P2P</b></p>
                                </div>
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base"><CountUpBox end={3.5} decimals={1} /> Lac+</p>
                                <p className="font-medium text-xs text-[#606060]">Active users</p>
                            </div>
                            <div className="self-center">
                                <p className="font-semibold text-base"><CountUpBox start={3000} end={4000} duration={3} /> Cr+</p>
                                <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                            </div>
                        </div>}
                    {homePage ?
                        <ExploreMore className='absolute -bottom-16 left-4 lg:bottom-28 lg:left-8' onClick={() => router.push('/elite')} /> :
                        <HeroSearchBox />}
                </div>
                <div className={`basis-full md:basis-5/12 flex content-center relative ${homePage ? 'mt-20 lg:mt-10' : 'mt-6'}`}>
                    <div className='rounded-full absolute left-10 lg:left-3 top-[100px] bg-gradient-to-r from-[#62606022] to-[#0914328c] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] blur-3xl opacity-50' />
                    <Image
                        placeholder="blur"
                        src={homePage ? heroHome : hero}
                        className={`lg:w-[500px] lg:min-w-[500px] object-contain z-[1] ${homePage ? 'ml-auto w-[50%]  mr-8 lg:mr-0' : 'mx-auto w-[80%]'}`}
                        alt='demo image'
                    />
                </div>
            </div>
        </section>
        {!homePage &&
            <Marquee
                speed={90}
                delay={1}
                gradient={true}
                gradientWidth={60}
                gradientColor={[255, 172, 41]}>
                <div className='select-none flex items-center gap-x-12 lg:gap-x-16 p-4 bg-gradient-to-t from-[#FF8415] to-[#FFCA3F] -mx-1'>
                    <span className="text-base lg:text-2xl font-semibold text-black">
                        Hassle free withdrawals
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
                        Hassle free withdrawals
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
                        Hassle free withdrawals
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
