import Image from "next/image";
import hero from '../../assets/images/hero.png';
import HeroSideSection from "@/elements/HeroSideSection";
import Marquee from "react-fast-marquee";

export default function HeroSection() {
    return (<>
        <section id="Hero" className="bg-light-blue">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-40 max-w-screen-xl mx-auto'>
                <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8">
                    <p className='ml-4 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141]'>
                        Elite
                    </p>
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] whitespace-nowrap'>
                        Earn up to  <span className="text-[#437587] font-black">12% p.a.</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        with Elite
                    </div>
                    <HeroSideSection />
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
        <Marquee
            speed={30}
            delay={1}>
            <div className='select-none flex items-center gap-x-12 lg:gap-x-24 p-4 bg-gradient-to-t from-[#FF8415] to-[#FFCA3F]'>
                {/* TODO */}
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Hassle free withdrawals
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
                <span className="text-lg lg:text-3xl font-extrabold uni-wise-gradient ">
                    100%
                </span>
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Withdraw anytime
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Hassle free withdrawals
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Hassle free withdrawals
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Withdraw anytime
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
                <span className="text-base lg:text-2xl font-semibold text-black">
                    Hassle free withdrawals
                </span>
                <span className="h-[5px] w-[5px] bg-black rounded-full" />
            </div>
        </Marquee>
    </>
    )
}
