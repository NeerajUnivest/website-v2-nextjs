
import Image from 'next/image'
import Link from 'next/link';
import proIconScrenner from '../../assets/images/proIconScrenner.png';
import tilesProBG from '../../assets/images/tilesProBG.png';
import tilesNonProBG from '../../assets/images/tilesNonProBG.png';

export default function ScreenerCard({ ele }) {
    return (
        // <Link href={`screeners/${ele?.code}`}>
        //     <div className={`font-Inter bg-white w-[120px] min-w-[120px] h-[132px] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] border-[1px] border-[#E5E5E5] rounded-[12px] p-3 relative overflow-hidden shadow-md z-[1]`}>
        //         {ele?.newFlag && <div className='absolute top-2 -right-5 px-6 py-0.5 text-[8px] text-xs text-white bg-app-red rotate-45'>New</div>}
        //         <div className='relative'>
        //             <Image width={40} height={40} placeholder='empty' src={ele?.imageUrl} alt={ele?.title} className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
        //             {ele?.premium && <Image src={premium} className='absolute -bottom-1 lg:-bottom-2 left-5 lg:left-[22px] h-4 lg:h-6 w-4 lg:w-6' alt='icon' />}
        //         </div>
        //         <div className='line-clamp-2 w-2/3 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4'>
        //             {ele?.title}
        //         </div>
        //         <div className='flex items-center justify-between text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
        //             {ele?.stocksCount} stocks
        //         </div>
        //     </div>
        // </Link >
        <Link href={`screeners/${ele?.code}`}>
            <div className={`font-Inter bg-white w-[120px] min-w-[120px] h-[132px] bg-cover lg:w-[200px] lg:min-w-[200px] lg:h-[156px] rounded-[12px] p-3 lg:px-5 lg:py-4 relative overflow-hidden shadow-md z-[1] border ${ele.premium ? 'border-[#EF9400]' : 'border-[#61B2F3]'}`} style={{ backgroundImage: `url(${ele.premium ? tilesProBG.src : tilesNonProBG.src})` }}>
                {ele.premium && <Image src={proIconScrenner} className='absolute top-0 right-0 w-14 lg:w-20 object-contain' alt='logo' />}
                <Image width={40} height={40} placeholder='empty' src={ele?.imageUrl} alt={ele?.title} className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
                <div className='line-clamp-2 w-2/3 text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4'>
                    {ele?.title}
                </div>
                <div className='flex items-center justify-between text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
                    {ele?.stocksCount} stocks
                    {ele?.newFlag && <div className='rounded px-2 lg:px-3 text-[10px] lg:text-xs text-white bg-app-red'>New</div>}
                </div>
            </div>
        </Link>
    )
}
