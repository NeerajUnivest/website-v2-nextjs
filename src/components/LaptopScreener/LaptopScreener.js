import StockCard from './StockCard';
import newSquare from '../../assets/icn/newSquare.webp';
import premium from '../../assets/icn/premium.webp';
import premiumLarge from '../../assets/icn/premiumLarge.webp';
import Image from 'next/image'
import proIcon from '../../assets/images/proIcon.png';
import { BlackButton } from '@/elements/Button/Button';
import { popUp } from '@/elements/PopUp/PopUp'
import forEmpty from '../../assets/images/forEmpty.webp'

export default function LaptopScreener({ data, name }) {
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
                    <div className='mt-4 pt-6 w-[600px] h-[400px] bg-[#333333] rounded-3xl flex flex-col justify-between'>
                        <div>
                            <Image src={proIcon} alt="proLogo" className='w-32 object-contain mx-auto' />
                            <p className='my-3 text-center text-[20px] landing-[34px] text-white font-extrabold'>
                                This screener is only available on the app
                            </p>
                        </div>
                        <div className='pb-3 flex flex-col items-center justify-center  font-Inter bg-[#FFFFFF1a] rounded-t-2xl'>
                            <img src='https://storage.googleapis.com/app-assets-univest/website-assets/screener_icons.png' alt="icon" className='w-full lg:w-2/3 object-contain mt-3 mb-6 lg:mt-6 lg:mb-10' />
                            <BlackButton className='py-3 mb-5 w-48 rounded-full bg-gradient-to-b to-[#FF8415] from-[#FFCA3F] mx-auto text-lg text-black leading-4 font-bold border-none'
                                onClick={() => popUp.open()}
                                text={'Download App'} />
                        </div>
                    </div>
                </div>
                : data?.list?.length > 0 ?
                    <div className='overflow-x-auto no-scrollbar mx-4'>
                        <div className='my-4 flex bg-[#CFE8FC] flex-row justify-between items-center font-Inter font-medium text-[14px] leading-[24px] text-[#414141]'>
                            <div className='shadow-[1px_0px_2px_rgba(0,0,0,0.16)] sticky left-5 z-[9] min-w-[360px] max-w-[360px] flex flex-row mr-10 bg-[#CFE8FC] py-3'>
                                <div className=' w-[180px]'>
                                    Symbol
                                </div>
                                <div className='min-w-[180px]'>
                                    Stock Name
                                </div>

                            </div>

                            {data.param1 &&
                                <div className='min-w-[110px] max-w-[110px] mr-4'>
                                    {data.param1}
                                </div>}
                            {data.param2 &&
                                <div className='min-w-[110px] max-w-[110px] mr-4'>
                                    {data.param2}
                                </div>}
                            {data.param4 &&
                                <div className='min-w-[110px] max-w-[110px] mr-4'>
                                    {data.param4}
                                </div>}
                            {data.param5 &&
                                <div className='min-w-[110px] max-w-[110px] mr-4'>
                                    {data.param5}
                                </div>}
                            {data.param6 &&
                                <div className='  min-w-[110px] max-w-[110px] mr-4'>
                                    {data.param6}
                                </div>}

                            <div className=' min-w-[110px] max-w-[110px] px-4 bg-[#CFE8FC] py-3'>
                                CMP
                            </div>
                            <div className=' min-w-[110px] max-w-[110px] px-4 bg-[#CFE8FC] py-3'>
                                Change
                            </div>
                            {data.param3 &&
                                <div className='min-w-[130px]  bg-[#CFE8FC] py-6'>
                                </div>}
                        </div>
                        {data.list?.map((ele, i) => <StockCard key={i} ele={ele} data={data} i={i} name={name} />)}
                    </div>
                    : <div className='pt-20 min-h-[70vh]'>
                        <Image src={forEmpty} alt='icon' className='mx-auto' width={300} />
                        <div className='text-center font-Inter text-xl  text-black font-semibold mt-3'>
                            Nothing to show for now
                        </div>
                        <div className='text-center font-Inter text-lg  text-[#414141] mt-2'>
                            Don’t worry we’l keep you posted
                        </div>
                    </div>}
        </>
    </div>
    )
}
