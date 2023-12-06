import Image from 'next/image';
import quarterly_heart_beat from '../../assets/images/quarterly_heart_beat.png';
import quarterly_percent from '../../assets/images/quarterly_percent.png';
import quarterly_exchange from '../../assets/images/quarterly_exchange.png';
import quarterly_red_flag from '../../assets/images/quarterly_red_flag.png';
import { BlackButton } from '@/elements/Button/Button';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import sebi_new_logo_white from '@/assets/icons/sebi_new_logo_white.png';
import { popUp } from '@/elements/PopUp/SEBIPopUp';

const data = [
    { name: 'Portfolio health', icon: quarterly_heart_beat },
    { name: 'Key changes', icon: quarterly_exchange },
    { name: 'Risk profiling', icon: quarterly_red_flag },
    { name: 'Allocation analysis', icon: quarterly_percent },
]

export default function QuarterlyPortfolioSection() {
    return (
        <section className="font-Inter " id='QuarterlyPortfolio'>
            <div className='max-w-screen-xl pt-5 mx-auto px-4 lg:px-8 overflow-hidden'>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:mb-6">
                    <p className={`text-center text-xl lg:text-3xl font-extrabold text-white `}>
                        Quarterly Portfolio Review
                    </p>
                    <div className="flex col-span-3 items-center mt-3 lg:mt-0" onClick={() => popUp.open()}>
                        {/* <Image
                            placeholder="empty"
                            src={sebi_new_logo_white}
                            className='object-contain w-[40px] lg:w-[64px]'
                            alt='demo image'
                        /> */}
                        <p className={`font-semibold text-base lg:text-2xl mx-2 text-white`}>By SEBI RIA’s team INA000017639</p>
                        <AiOutlineInfoCircle color='#FFF' className='text-[16px]  lg:text-[20px]' />
                    </div>
                </div>
                <div className='my-8 py-8 lg:py-16 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 px-4 bg-[#363636] rounded-2xl gap-y-8 lg:gap-1'>
                    {data.map(ele => <div key={ele.name} className='flex flex-col justify-center items-center'>
                        <Image src={ele.icon} alt={ele.name} className='rounded-full bg-white w-12 h-12 lg:w-20 lg:h-20' />
                        <p className='mt-5 font-semibold text-xs lg:text-xl text-white'>{ele.name}</p>
                    </div>)}
                </div>
                {/* <div className='flex justify-center mb-1 pt-4'>
                    <BlackButton onClick={() => window.open('https://storage.googleapis.com/app-assets-univest/website-assets/1-merged.pdf', '_blank')} text='View sample report' className='px-8 lg:px-12 py-3 text-sm lg:text-xl font-extrabold' />
                </div> */}
            </div>
        </section>
    )
}
