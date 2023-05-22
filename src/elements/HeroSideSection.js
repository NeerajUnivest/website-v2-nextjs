import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { BlackButton } from "./Button/Button";
import sebi_logo from '../assets/icons/sebi_logo.png';

export default function HeroSideSection() {
    return (<>
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
        <p className='mt-10 lg:mt-14 mb-1 mx-5 lg:mx-4 text-sm lg:text-base font-medium text-[#414141]'>
            Connect with wealth advisor today
        </p>
        <div className='ml-4 lg:ml-0  w-[calc(100vw-32px)] sm:w-[480px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
            <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
            <input className='w-[200px] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type="email" placeholder='Enter your mobile number' required />
            <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-full ml-auto' text='Get free advice' />
        </div>
    </>
    )
}
