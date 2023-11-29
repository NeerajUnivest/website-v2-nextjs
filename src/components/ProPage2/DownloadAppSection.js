import Image from 'next/image';
import ratingLg from "../../assets/images/ratingLg.png";
import ratingLg_light from "../../assets/images/ratingLg_light.png";
import ratingIcon from "../../assets/Images/rating.png"
import downloadsCount from "../../assets/Images/downloadsCount.png"
import usersIcon from "src/assets/icons/users_icon.png"
import { BlackButton } from '@/elements/Button/Button';

export default function DownloadAppSection({ isDark = false }) {
    return (
        <section className="font-Inter bg-gradient-to-b from-[#F0FAFF] to-[#F4EDFF] lg:px-8 max-w-screen-xl lg:mx-auto ">
            <div className='px-4 py-8 flex flex-col gap-6'>
                <div className='flex flex-col justify-center items-center gap-8 px-2 py-0'>
                    <p className='text-[color:var(--neutral-900,#202020)] text-xl not-italic font-extrabold leading-8 text-center'>Download the Univest app now!</p>
                    <Image src={ratingIcon} className='w-[232px]  lg:w-[364px]' alt='rating' />
                </div>

                <BlackButton className={'w-[200px] py-2 mx-auto font-bold mt-4'} text={'Download now'} />
                <div className=' bg-[#FFF] flex flex-row justify-center items-center gap-2  px-2.5 py-1 rounded-lg'>
                    <Image className='w-5' src={usersIcon} alt='demo' />
                    <p className='text-[color:var(--neutral-900,#202020)] text-xs font-normal leading-6'> <span className='font-bold'>750k+ Indian</span> users trust on Univest</p>
                </div>
            </div>
        </section >
    )
}
