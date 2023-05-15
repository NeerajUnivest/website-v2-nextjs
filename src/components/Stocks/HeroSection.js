import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import hero from '../../assets/Images/hero.png';

export default function HeroSection() {
    return (<>
        <div className="bg-light-blue">
            <div className='flex flex-col lg:flex-row pt-32 lg:pt-40 max-w-screen-xl mx-auto'>
                <div className="font-Inter basis-full md:basis-7/12 flex flex-col content-center lg:pl-8">
                    <p className='ml-4 lg:ml-0 text-base lg:text-2xl font-medium text-[#414141]'>
                        Stocks
                    </p>
                    <div className='mt-4 lg:mt-8 ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020] whitespace-nowrap'>
                        Invest with <span className="uni-wise-gradient font-black">82%+ Accurate</span>
                    </div>
                    <div className='ml-4 lg:ml-0 text-[28px] lg:text-[52px] font-semibold text-[#202020]'>
                        Buy-Sell-Hold insights
                    </div>
                    <div className='mt-8 lg:mt-11 ml-4 lg:ml-0 max-w-[550px] lg:w-11/12 grid grid-cols-2 lg:grid-cols-4 justify-items-start gap-y-4 text-black'>
                        <div className="flex col-span-2">
                            <div>sebi</div>
                            <div>
                                <p className="font-semibold text-base">Registered - INA000017639</p>
                                <p className="font-medium text-[10px] text-[#606060]">Uniapps, a wholly owned subsidiary of Univest</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-semibold text-base">3.5 Lac+</p>
                            <p className="font-medium text-xs text-[#606060]">Active users</p>
                        </div>
                        <div className="">
                            <p className="font-semibold text-base">1,200 Cr+</p>
                            <p className="font-medium text-xs text-[#606060] whitespace-nowrap">Worths portfolio connected</p>
                        </div>
                    </div>
                    <p className='mt-10 lg:mt-14 mb-1 mx-5 lg:mx-4 text-sm lg:text-base font-medium text-[#414141]'>
                        Connect with wealth advisor today
                    </p>
                    <div className='ml-4 lg:ml-0  w-[calc(100vw-32px)] sm:w-[480px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
                        <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
                        <input className='w-[200px] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type="email" placeholder='Enter your mobile number' required />
                        <span className='whitespace-nowrap px-3 lg:px-6 flex items-center h-full text-[#FFF] rounded-full bg-[#333333] ml-auto'>
                            Get free advice
                        </span>
                    </div>
                </div>
                <div className="basis-full md:basis-5/12 flex content-center mt-10 lg:mt-0">
                    <div className='mx-auto h-[300px] lg:h-[550px]'>
                        <Image
                            src={hero}
                            className=' h-[300px] lg:h-[550px] object-contain'
                            alt='demo image'
                            width={'auto'}
                            height={'auto'}
                        />
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-5 lg:mt-2 text-center text-sm lg:text-base font-semibold text-[#414141]">POWERED with best research tools</p>
    </>
    )
}
