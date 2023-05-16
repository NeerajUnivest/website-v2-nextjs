import Image from 'next/image'

import playStore from "../../assets/img/playStore.webp";
import appStore from "../../assets/img/appStore.webp";

export default function DownloadNow() {
    return (
        <div className='w-full hidden lg:flex flex-col justify-center space-y-6 bg-[#D0F4FF] rounded-2xl p-4'>
            <div className='font-Inter font-black text-[18px] leading-[24px] text-[#202020] text-center '>
                Get advices, ideas, exit plan
                and, much more.
                <div className='mt-2 font-Inter text-[14px] font-normal leading-[20px] text-[#717171]'>
                    Download the app
                </div>
            </div>
            <div className='mx-auto max-w-[240px] flex flex-row justify-center'>
                <a href='https://play.google.com/store/apps/details?id=com.univest.capp' target='_blank'>
                    <div className='mr-5 h-9 bg-black rounded-full px-5 grid content-center'>
                        <Image src={playStore} className='w-[76px]' alt='logo' />
                    </div>
                </a>
                <a href='https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518' target='_blank'>
                    <div className='h-9 bg-black rounded-full px-5 grid  content-center '>
                        <Image src={appStore} className='w-[76px]' alt='logo' />
                    </div>
                </a>
            </div>
        </div>
    )
}
