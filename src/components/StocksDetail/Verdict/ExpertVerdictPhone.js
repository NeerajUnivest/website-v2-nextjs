
import InfoIcon from '../../../assets/icn/info.png'
import expertVerdictPhone from "../../../assets/img/expertVerdictPhone.webp";
import Image from 'next/image'

export default function ExpertVerdictPhone() {
    return (
        <div className="relative">
            <div className=' flex flex-row mx-4 mt-6 mb-4  md:mt-10'>
                <div className='font-Inter text-[16px] text-black mr-4 font-semibold'>Expert Verdict</div>
                <button className=' w-[16px] h-[16px] self-center' >
                    <Image src={InfoIcon} alt='info' className='w-[16px] h-[16px] self-center' />
                </button>
            </div>
            <Image src={expertVerdictPhone} alt='expertVerdictPhone' className='w-full my-4' />
        </div>
    )
}
