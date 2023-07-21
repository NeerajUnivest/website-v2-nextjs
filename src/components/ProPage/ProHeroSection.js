import Image from "next/image";
import heroHome from '../../assets/images/hero_image_elite_home-min.png';
import hero from '../../assets/images/hero_image_stocks_home-min.png';
import sebi_logo from '../../assets/icons/sebi_logo_white.png';
import proIcon from '../../assets/images/proIcon.png';

import HeroSearchBox from "@/elements/HeroSearchBox";
import CountUpBox from "@/elements/CountUpBox";
import { ExploreMore } from "@/elements/Button/Button";
import { useRouter } from "next/router";




export default function ProHeroSection({ homePage }) {
    const router = useRouter();
    return (
        <section id="Hero" className=" overflow-hidden bg-[#202020ad]">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-28 max-w-screen-xl mx-auto'>
                <div className="lg:mt-12 font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8 relative">
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-bold text-[#202020] whitespace-nowrap uni-wise-gradient2 flex items-center'>
                        Univest <Image src={proIcon} alt='icon' className="w-[72px] h-8 lg:w-[122px] lg:h-[52px] ml-4" />
                    </div>
                    <div className='ml-4 lg:ml-0 text-base lg:text-xl font-semibold text-white'>
                        Starts @₹199/month
                    </div>
                    <div className='mt-8 ml-4 lg:ml-0  grid grid-cols-3 lg:grid-cols-6 justify-items-start gap-y-4 text-black'>
                        <div className="flex col-span-3">
                            <Image
                                placeholder="empty"
                                src={sebi_logo}
                                className=' h-[48px] lg:h-[64px] w-[48px] lg:w-[64px]'
                                alt='demo image'
                            />
                            <div className="self-center ml-5">
                                <p className="font-semibold text-base text-white">Registered - <b>INA000017639</b></p>
                                <p className="font-medium text-[10px] text-white">Uniapps, a wholly owned subsidiary of Univest</p>
                            </div>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base text-white"><CountUpBox end={4} decimals={1} /> Lac+</p>
                            <p className="font-medium text-xs text-white">Active users</p>
                        </div>
                        <div className="self-center">
                            <p className="font-semibold text-base text-white"><CountUpBox start={1000} end={1200} duration={2} /> Cr+</p>
                            <p className="font-medium text-xs text-white whitespace-nowrap">Worths portfolio connected</p>
                        </div>
                    </div>
                    {homePage ?
                        <ExploreMore className='absolute -bottom-16 left-4 lg:bottom-28 lg:left-8' onClick={() => router.push('/pro')} /> :
                        <HeroSearchBox isDark={true} />}
                </div>
                <div className={`basis-full md:basis-5/12 flex content-center relative ${homePage ? 'mt-28 lg:mt-10' : 'mt-6'}`}>
                    <div className='rounded-full absolute left-10 lg:left-3 top-[100px] bg-gradient-to-r from-[#62606022] to-[#0914328c] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] blur-3xl opacity-50' />
                    <Image
                        placeholder="blur"
                        src={homePage ? heroHome : hero}
                        className={`lg:w-[500px] lg:min-w-[500px] object-contain z-[1] ${homePage ? 'ml-auto w-[70%]  mr-8 lg:mr-0' : 'mx-auto w-[80%]'}`}
                        alt='demo image'
                    />
                </div>
            </div>
            {!homePage &&
                <div className="bg-black flex justify-center py-6 lg:py-8">
                    <p className="font-Inter font-bold text-white text-sm lg:text-2xl">PRO membership benefits</p>
                </div>}
        </section>
    )
}
