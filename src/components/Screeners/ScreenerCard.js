
import Image from 'next/image'
import Link from 'next/link';
import proIconScrenner from '../../assets/images/proIconScrenner.png';
import tilesProBG from '../../assets/images/tilesProBG.png';
import tilesProBGLg from '../../assets/images/tilesProBGLg.png';
import tilesNonProBG from '../../assets/images/tilesNonProBG.png';
import { Mixpanel } from '@/elements/Mixpanel';
import Actions from '@/elements/Actions';

export default function ScreenerCard({ ele }) {
    return (<>
        <Link href={Actions.toScreener(ele?.code)} onClick={() => {
            Mixpanel.track('screener_clicked', {
                'cta_clicked': 'submit',
                'page': 'screeners',
                'screener_code': ele?.code,
            })
        }}>
            <div className={`font-Inter bg-white w-[120px] min-w-[120px] h-[132px] bg-[100%_100%] lg:w-[200px] lg:min-w-[200px] lg:h-[156px] rounded-[12px] md:rounded-[16px] p-3 lg:px-5 lg:py-4 relative overflow-hidden shadow-md z-[1] ${!ele.premium ? 'tilesNonProBG' : 'tilesScreener'}`}
            //  style={{ backgroundImage: `url(${ele.premium ? tilesProBG.src : tilesNonProBG.src})` }}
            >
                {/* {ele.premium && <Image src={proIconScrenner} className='absolute top-0 right-0 w-14 lg:w-20 object-contain' alt='logo' />} */}
                <Image width={40} height={40} placeholder='empty' src={ele?.imageUrl} alt={ele?.title} className='h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]' />
                <div className='line-clamp-2 lg:w-[75%] text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-semibold mt-4' dangerouslySetInnerHTML={{ __html: ele?.title?.split(' ')?.length < 3 ? ele?.title?.replace(' ', '<br/>') : ele?.title }} />
                <div className='flex items-center justify-between text-[10px] leading-16px] lg:text-[12px] lg:leading-[20px] text-[#606060] font-medium mt-1'>
                    {ele?.stocksCount} stocks
                    {ele?.newFlag && <div className='rounded px-2 lg:px-3 text-[10px] lg:text-xs text-white bg-app-red'>New</div>}
                </div>
            </div>
        </Link>
        <style>{`
        .tilesNonProBG {
    background: url(${tilesNonProBG.src}) no-repeat;
    background-size: 100% 100%;
    border: 1.5px solid #61B2F3;
}

.tilesScreener {
    background: url(${tilesProBG.src}) no-repeat;
    background-size: 100% 100%;
    border: 1.5px solid var(#584BB9, #EF9400);
}
 
@media (min-width: 976px) {
    .tilesScreener {
    background: url(${tilesProBGLg.src}) no-repeat;
    background-size: 100% 100%;
    border: 1.5px solid var(#584BB9, #EF9400);
}
                }
        `}</style>
    </>
    )
}
