import Image from 'next/image';
import ratingIcon from "../../assets/images/rating.png"
import downloadsCount from "../../assets/images/downloadsCount.png"
import usersIcon from "src/assets/icons/users_icon.png"
import { BlackButton } from '@/elements/Button/Button';
import Actions from '@/elements/Actions';

export default function DownloadAppSection({ isDark = false }) {
    return (
        <section className="font-Inter bg-gradient-to-b from-[#F0FAFF] to-[#F4EDFF]  ">
            <div className='px-4 py-8 flex flex-col gap-6 lg:px-8 max-w-screen-xl lg:mx-auto'>
                <div className='flex flex-col justify-center items-center gap-8 px-2 py-0'>
                    <p className='text-[color:var(--neutral-900,#202020)] text-xl not-italic font-extrabold leading-8 text-center'>Download the Univest app now!</p>
                    <Image src={ratingIcon} className='w-[232px]  lg:w-[364px]' alt='rating' />
                </div>

                <BlackButton className={'w-[200px] py-2 mx-auto font-bold mt-4'} text='Download now'
                    onClick={() => Actions.downloadNow(false)} />
                <div className='mx-auto bg-[#FFF] flex flex-row justify-center items-center gap-2 px-5 py-1 rounded-lg'>
                    <Image className='w-5' src={usersIcon} alt='demo' />
                    <p className='text-black text-xs font-normal '>Trusted by<span className='font-bold'> 8 lac+ Indians</span></p>
                </div>
            </div>
        </section >
    )
}
