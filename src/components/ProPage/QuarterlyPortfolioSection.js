import Image from 'next/image';
import quarterly_heart_beat from '../../assets/images/quarterly_heart_beat.png';
import quarterly_percent from '../../assets/images/quarterly_percent.png';
import quarterly_exchange from '../../assets/images/quarterly_exchange.png';
import quarterly_red_flag from '../../assets/images/quarterly_red_flag.png';

const data = [
    { name: 'Portfolio health', icon: quarterly_heart_beat },
    { name: 'Key changes', icon: quarterly_exchange },
    { name: 'Risk profiling', icon: quarterly_red_flag },
    { name: 'Allocation analysis', icon: quarterly_percent },
]

export default function QuarterlyPortfolioSection() {
    return (
        <section className="font-Inter ">
            <div className='max-w-screen-xl pt-16 lg:pt-24 mx-auto px-4 lg:px-8 overflow-hidden'>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:mb-6">
                    <p className={`text-center text-xl lg:text-3xl font-extrabold text-white `}>
                        Quarterly Portfolio Review
                    </p>
                    <p className={`mt-4 lg:mt-0 font-semibold text-sm lg:text-base text-white`}>By SEBI RIA's team <b>INA000017639</b></p>
                </div>
                <div className='my-8 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 px-4 py-8 bg-[#363636] rounded-2xl gap-4 lg:gap-1'>
                    {data.map(ele => <div key={ele.name} className='flex flex-col justify-center items-center'>
                        <Image src={ele.icon} alt={ele.name} className='rounded-full bg-white w-12 h-12 lg:w-20 lg:h-20' />
                        <p className='mt-5 font-medium text-xs lg:text-base text-white'>{ele.name}</p>
                    </div>)}
                </div>
            </div>
        </section>
    )
}
