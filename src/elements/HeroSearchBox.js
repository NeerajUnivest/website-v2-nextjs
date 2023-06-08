import { BsTelephone } from "react-icons/bs";
import { BlackButton } from "./Button/Button";

export default function HeroSideSection() {
    return (<>
        <p className='mt-10 lg:mt-14 mb-1 mx-5 lg:mx-1 text-sm lg:text-base font-medium text-[#414141]'>
            Connect with wealth advisor today
        </p>
        <div className='ml-4 lg:ml-0 min-w-[300px]  w-[calc(100vw-32px)] sm:w-[480px] h-10 lg:h-14 flex items-center bg-[#FFF] rounded-full border border-[#606060] text-xs lg:text-base font-medium'>
            <BsTelephone className='h-4 lg:h-14 ml-4 lg:ml-6' color="#747474" size={24} />
            <input className='w-[200px] caret-primary ml-2.5 lg:ml-4 text-[#747474]' type="email" placeholder='Enter your mobile number' required />
            <BlackButton className='whitespace-nowrap px-3 lg:px-6 h-full ml-auto' text='Get free advice' />
        </div>
    </>
    )
}
