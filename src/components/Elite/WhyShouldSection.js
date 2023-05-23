
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';
import 'swiper/css';
import "swiper/css/grid";
import a from '../../assets/icons/plans/1.png';
import Image from 'next/image';



let data = [{
    img: a,
    header: 'Payouts & withdrawals',
    text: '100% investors at Faircent have<br/>earned promised returns so far',
    to: 'to-[#E6EBF2]',
    border: 'border-[#0862BC]'
}, {
    img: a,
    header: 'Decade long experience',
    text: 'Trusted by 2.5 lac+ investors with<br/>avg. investment of 3.2 lacs',
    to: 'to-[#4E657440]',
    border: 'border-[#4E6574]'
}, {
    img: a,
    header: 'See money grow everyday',
    text: 'Interest added daily to your portfolio<br/>Track investments grow daily',
    to: 'to-[#F4FFFF]',
    border: 'border-[#388E3C]'
}, {
    img: a,
    header: 'RBI regulated',
    text: 'India`s first & largest RBI regulated <br/> NBFC Your money in safe hands',
    to: 'to-[#FFFCF3]',
    border: 'border-[#FFB133]'
}, {
    img: a,
    header: 'Easy withdrawals',
    text: 'Withdraw your investments easily<br/>with option to reinvest & compound',
    to: 'to-[#F2EEFF]',
    border: 'border-[#9270FF]'
}, {
    img: a,
    header: 'Returns not linked to markets',
    text: 'Earn stable and steady returns with<br/>low to zero risk',
    to: 'to-[#F7E4DA]',
    border: 'border-[#FF9F40]'
}]
export default function WhyShouldSection() {
    return (
        <section className='font-Inter max-w-screen-xl py-16 lg:py-24 mx-auto lg:px-8'>
            <p className='ml-4 lg:ml-0 mb-3 lg:mb-6 text-base lg:text-4xl text-black font-semibold lg:font-extrabold'>
                Why should i invest?
            </p>
            <div className='px-4 lg:px-0 grid  grid-flow-col grid-rows-2 overflow-x-auto no-scrollbar'>
                {data.map((ele, i) =>
                    <div key={i} className={`flex min-w-[80vw] lg:min-w-[25%] items-center m-3 py-3 pl-4 border rounded-xl bg-gradient-to-b from-[#fff] ${ele.to} ${ele.border}`}>
                        {/* <img src={ele.img} alt='icon' className=' min-w-[44px] w-11 h-11 object-contain' /> */}
                        <Image
                            placeholder="blur"
                            src={ele.img}
                            className='h-[44px] w-[44px] lg:h-[50px] lg:w-[50px]'
                            alt='demo image'
                        />
                        <div className='font-Inter ml-4 text-sm lg:text-base text-black font-extrabold'>
                            {ele.header}
                            <div className='text-xs lg:text-sm landing-[20px] text-[#414141] font-medium'
                                dangerouslySetInnerHTML={{ __html: ele.text }} />
                        </div>
                    </div>)}
            </div>
        </section>
    )
}
