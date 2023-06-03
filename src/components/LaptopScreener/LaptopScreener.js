import StockCard from './StockCard';
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.webp';
import premiumLarge from '../../assets/icn/premiumLarge.webp';
import Image from 'next/image'

export default function LaptopScreener({ data }) {
    return (<div className='col-span-12 lg:col-span-9'>

        <div className='font-Inter flex flex-row justify-center lg:justify-end my-4 lg:mr-4'>
            <div className='ml-2 mr-1'>
                <Image width={24} height={24} src={premium} className='-mt-[2px] h-5 lg:h-6' alt='icon' />
            </div>
            <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                Premium
            </div>
            <div className='ml-2 mr-1'>
                <Image width={48} height={24} src={newSquare} className='h-4 lg:h-5' alt='icon' />
            </div>
            <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                Newly added
            </div>
        </div>
        <div className='rounded-lg m-4 py-3 px-4'
            style={{ backgroundImage: `linear-gradient(90deg, ${data.colorCode}25, ${data.colorCode}50)` }}
        >
            <div className='flex flex-row justify-between'>
                <div>
                    <div className='text-[24px] leading-[40px] text-[#202020] font-semibold'>
                        {data.title}
                        <span className='ml-4 text-[16px] leading-[28px] text-[#414141] font-medium'>{data.list?.length} Stocks</span>
                    </div>
                    <div className='text-[16px] leading-[28px] text-[#202020] font-medium'>
                        <b>Entry criterion : </b>
                        {data.description}
                    </div>
                </div>
                <div className='w-20 mx-4 flex flex-col justify-center items-center'>
                    <Image src={data.imageUrl} width={56} height={56} alt='logo' className='max-h-14 max-w-14 ' />
                    {data.premium && <Image src={premiumLarge} alt='logo' width={84} height={84} className='mt-2 max-w-[84px] min-w-[84px] ' />}
                </div>
            </div>
        </div>
        <StockCard data={data} />
    </div>
    )
}
