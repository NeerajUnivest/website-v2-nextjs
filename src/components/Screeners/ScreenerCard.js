
import Image from 'next/image'
import Link from 'next/link';

export default function ScreenerCard({ ele }) {
    return (
        <Link href={`screeners/${ele?.code}`}>
            <div className={`font-Inter bg-white w-[120px] min-w-[120px] h-[132px] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] border-[1px] border-[#E5E5E5] rounded-[12px] p-3 relative overflow-hidden shadow-md z-[1]`}>
                {ele?.newFlag && <div className='absolute top-2 -right-5 px-6 py-0.5 text-[8px] text-xs text-white bg-app-red rotate-45'>New</div>}
                <div className='relative'>
                    <Image width={40} height={40} placeholder='empty' src={ele?.imageUrl} alt={ele?.title} className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
                </div>
                <div className='line-clamp-2 w-2/3 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4'>
                    {ele?.title}
                </div>
                <div className='flex items-center justify-between text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
                    {ele?.stocksCount} stocks
                </div>
            </div>
        </Link >
    )
}
