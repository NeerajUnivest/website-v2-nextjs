
import logo from "../assets/Images/logo.webp";
import playStore from "../assets/Images/playStore.webp";
import appStore from "../assets/Images/appStore.webp";
import video from "../assets/icons/video.webp";
import Image from 'next/image'

export default function InviteSection() {
    return (
        <div className='w-full lg:w-11/12 ml-auto flex flex-col justify-center space-y-6'>
            <div className=''>
                <Image src={logo} className='hidden lg:flex lg:w-44 object-contain' alt='logo' />
            </div>
            <div className='font-Inter font-black text-[18px] leading-[24px] text-[#000000] text-center lg:text-left lg:text-[30px] lg:leading-[44px] lg:text-[#00439D]'>
                Get trade ideas, portfolio insights,
                <br /> exit plan, and much more.
                <div className='mt-2 font-Inter text-[14px] font-normal leading-[20px] text-[#717171] lg:text-[22px] lg:leading-[32px]'>
                    One-stop solution for all your investment needs
                </div>
            </div>
            {/*<div className='mx-auto lg:mx-0  w-[300px] lg:w-[300px] relative'>
                <input className='w-full bg-[#D9E9FF] focus:caret-[#00439D] rounded-[30px] h-9 lg:h-12 px-6 font-Inter text-[#00439D] text-[12px] leading-[24px]' type="email" placeholder='Enter your number' required />
                <Image src={wtsp} className=' h-9 lg:h-12 absolute right-0 top-0' alt='logo' />
            </div>*/}
            <div className='mx-auto lg:mx-0 w-[300px] lg:w-[344px] flex flex-row justify-center'>
                <a href='https://play.google.com/store/apps/details?id=com.univest.capp' target='_blank' rel="noreferrer">
                    <div className='mr-5 lg:mr-8 h-9 lg:h-12 bg-black rounded-full px-5 lg:px-7 grid content-center'>
                        <Image src={playStore} className='w-[76px] lg:w-[100px]' alt='logo' width={100} />
                    </div>
                </a>
                <a href='https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518' target='_blank' rel="noreferrer">
                    <div className='h-9 lg:h-12 bg-black rounded-full px-5 lg:px-7 grid  content-center '>
                        <Image src={appStore} className='w-[76px] lg:w-[100px]' alt='logo' width={100} />
                    </div>
                </a>
            </div>
            <div className='mx-auto lg:mx-0 w-[300px] lg:w-[344px] flex flex-row justify-center lg:justify-start '>
                <a href='https://youtu.be/Y_AqmfAIVc0' target='_blank' rel="noreferrer">
                    <div className=''>
                        <Image src={video} className='w-10 lg:w-14' alt='logo' width={100} />
                    </div>
                </a>
                <div className='font-Inter text-[14px] lg:text-[20px] font-semibold leading-[32px] mt-1 lg:mt-3 ml-3'>
                    How Univest works?
                </div>
            </div>
        </div>
    )
}
