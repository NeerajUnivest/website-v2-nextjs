
import Image from 'next/image'

export default function InvestorCard({ name, img, detail }) {
    return (
        <div className='font-Inter select-none min-w-[100px] lg:min-w-[148px] mx-5 lg:mx-12'>
            <Image src={img} className='h-20 w-20 lg:h-28 lg:w-28 rounded-full mx-auto' width={128} height={128} loading="lazy" alt='profile' />
            <div className='mt-2 text-center font-semibold text-[12px] leading-[18px] lg:text-[16px] lg:leading-[20px]'>
                {name}
            </div>
            <div className='mt-1 lg:mt-2 text-center text-[#605f5f] text-[10px] leading-[16px] lg:text-[12px]'>
                {detail}
            </div>
        </div>
    )
}
