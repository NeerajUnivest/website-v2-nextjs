
import premium from '../../assets/icons/premium.webp';
import newTag from '../../assets/icons/newTag.svg';
import Image from 'next/image'
import Link from 'next/link';

export default function ScreenerCard({ data }) {
    return (
        <Link href={`/screeners/${data.code}`} className={`bg-white w-[120px] min-w-[120px] h-[132px] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] border-[1px] border-[#E5E5E5] rounded-[12px] p-3 lg:p-5 relative overflow-hidden shadow-md my-2 mr-3 lg:mr-14 z-[2]`}>
            {data.newFlag && <Image src={newTag} width={10} height={10} alt='icon' className='absolute top-0 right-0 h-12 lg:h-16' />}
            <div className='relative'>
                <Image width={10} height={10} src={data.imageUrl} alt='icon' className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
                {data.premium && <Image width={10} height={10} src={premium} className='absolute -bottom-2 left-5 h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]' alt='premiumIcon' />}
            </div>
            <div className='w-full font-Inter text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4'>
                {data.title}
            </div>
            <div className='font-Inter text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
                {data.stocksCount} stocks
            </div>
        </Link>
    )
}
