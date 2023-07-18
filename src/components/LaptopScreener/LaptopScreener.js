import StockCard from './StockCard';
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.webp';
import premiumLarge from '../../assets/icn/premiumLarge.webp';
import Image from 'next/image'
import proIcon from '../../assets/images/proIcon.png';
import { BlackButton } from '@/elements/Button/Button';
import { popUp } from '@/elements/PopUp/PopUp'

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
        <>
            <div className='rounded-lg m-4 py-3 px-4 flex flex-row justify-between' style={{ backgroundImage: `linear-gradient(90deg, ${data.colorCode}25, ${data.colorCode}50)` }}>
                <div>
                    <h1 className='text-[24px] leading-[40px] text-[#202020] font-semibold'>
                        {data.title}
                        <span className='ml-4 text-[16px] leading-[28px] text-[#414141] font-medium'>{data.list?.length} Stocks</span>
                    </h1>
                    <span className='text-[16px] leading-[28px] text-[#202020] font-medium'>
                        <b>Entry criterion : </b> {data.description}
                    </span>
                </div>
                <div className='w-20 mx-4 flex flex-col justify-center items-center'>
                    <Image src={data.imageUrl} width={56} height={56} alt='logo' className='max-h-14 max-w-14 ' />
                    {data.premium && <Image src={premiumLarge} alt='logo' width={84} height={84} className='mt-2 max-w-[84px] min-w-[84px] ' />}
                </div>
            </div>
            {data.premium ?
                <div className='select-none font-Inter z-10 w-full bg-[#FFFFFF78] backdrop-blur-sm flex justify-center' >
                    <div className='mt-4 pt-6 w-[470px] h-[400px] bg-[#333333] rounded-3xl flex flex-col justify-between'>
                        <div>
                            <Image src={proIcon} alt="proLogo" className='w-32 object-contain mx-auto' />
                            <p className='my-3 text-center text-[20px] landing-[34px] text-white font-extrabold'>
                                This screener is only available on the app
                            </p>
                        </div>
                        <div className='pb-3 flex flex-col items-center justify-center  font-Inter bg-[#FFFFFF1a] rounded-t-2xl'>
                            <img src='https://univest-prod.s3.ap-south-1.amazonaws.com/Univest+Pro/screener_icons.png' alt="icon" className='w-full object-contain mt-3 mb-6' />
                            <BlackButton className='py-3 mb-5 w-48 rounded-full bg-gradient-to-b to-[#FF8415] from-[#FFCA3F] mx-auto text-lg text-black leading-4 font-bold border-none'
                                onClick={() => popUp.open()}
                                text={'Download Now'} />
                        </div>
                    </div>
                </div>
                : <StockCard data={data} />}
        </>
    </div>
    )
}
