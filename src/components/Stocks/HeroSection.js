import Image from "next/image";
import hero from '../../assets/images/hero.png';
import HeroSideSection from "@/elements/HeroSideSection";

export default function HeroSection() {
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
        <p className="mt-5 lg:mt-2 text-center text-sm lg:text-base font-semibold text-[#414141]">POWERED with best research tools</p>
    </>
    )
}
