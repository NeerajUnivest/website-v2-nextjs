import Image from 'next/image';
import ratingLg from "../../assets/images/ratingLg.png";
import ratingLg_light from "../../assets/images/ratingLg_light.png";
import ratingIcon from "../../assets/Images/rating.png"
import downloadsCount from "../../assets/Images/downloadsCount.png"

export default function DownloadAppSection({ isDark = false }) {
    return (
        <section className="font-Inter bg-gradient-to-b from-[#F0FAFF] to-[#F4EDFF] lg:px-8 max-w-screen-xl lg:mx-auto ">
            <div className='px-4 py-8 flex flex-col gap-6'>
                <div className='flex flex-col justify-center items-center gap-8 px-2 py-0'>
                    <p className='text-[color:var(--neutral-900,#202020)] text-xl not-italic font-extrabold leading-8 text-center'>Download the Univest app now!</p>
                    <Image src={ratingIcon} className='w-[232px]  lg:w-[364px]' alt='rating' />
                </div>
                <div className='flex flex-col justify-center items-center gap-6 px-4 py-8'>
                    <button className='bg-[#202020] text-white flex w-[200px] h-10 justify-center items-center gap-2.5 shadow-[0px_3px_8px_0px_rgba(87,102,117,0.06),0px_6px_12px_0px_rgba(106,115,129,0.16)] px-0 py-3 rounded-[44px] border-2 border-solid border-white'>Download now</button>
                </div>
                <div className='m-auto'>
                    <Image src={downloadsCount} className='flex justify-center items-start gap-2 self-stretch px-2.5 py-1 rounded-lg' alt='rating' />
                </div>
            </div>
        </section >
    )
}
