import Image from 'next/image'
import Link from 'next/link';
import { BsApple } from 'react-icons/bs';

export default function DownloadNow() {
    return (
        <div className='w-full hidden lg:flex flex-col justify-center space-y-6 bg-[#D0F4FF] rounded-2xl p-3'>
            <div className='font-Inter font-black text-[18px] leading-[24px] text-[#202020] text-center '>
                Get advices, ideas, exit plan
                and, much more.
                <div className='mt-2 font-Inter text-[14px] font-normal leading-[20px] text-[#717171]'>
                    Download the app
                </div>
            </div>
            <div className='mx-auto max-w-[240px] flex flex-row justify-center gap-2'>
                <Link href="https://play.google.com/store/apps/details?id=com.univest.capp" className="flex items-center border rounded-lg px-2 py-1.5 w-32 transition hover:opacity-75 bg-black">
                    <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width={18} height={18} className="w-5" alt='Google Play' />
                    <div className="text-left ml-2 text-gray-200">
                        <p className='text-[8px]'>Download on </p>
                        <p className="text-[10px]"> Google Play </p>
                    </div>
                </Link>
                <Link href="https://apps.apple.com/us/app/univest-empowering-wealth/id6443753518" className="flex items-center border rounded-lg px-2 py-1.5 w-32 transition hover:opacity-75 bg-black">
                    <BsApple color='#FFFFFF' size={20} />
                    <div className="text-left ml-2 text-gray-200">
                        <p className='text-[8px]'>Download on </p>
                        <p className="text-[10px]"> Apple Store </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
