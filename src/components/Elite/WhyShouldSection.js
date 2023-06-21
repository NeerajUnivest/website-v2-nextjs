
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import rbi from '@/assets/icons/rbi.png';
import univest_elite from '@/assets/images/univest_elite.png';
import Image from 'next/image';
import elite_banner from '../../assets/lottiefiles/elite_banner.gif';
import elite1 from '../../assets/images/elite/elite1.png';
import elite2 from '../../assets/images/elite/elite2.png';
import elite3 from '../../assets/images/elite/elite3.png';
import elite4 from '../../assets/images/elite/elite4.png';
import elite5 from '../../assets/images/elite/elite5.png';
import elite6 from '../../assets/images/elite/elite6.png';
import { BlackButton } from '@/elements/Button/Button';
import { useRouter } from 'next/router';



let data = [{
    img: elite6,
    header: 'Payouts & withdrawals',
    text: '100% investors at Faircent have<br/>earned promised returns so far',
    to: 'to-[#E6EBF2]',
    border: 'border-[#0862BC]'
}, {
    img: elite2,
    header: 'Easy withdrawals',
    text: 'Withdraw your investments easily<br/>with option to reinvest & compound',
    to: 'to-[#F2EEFF]',
    border: 'border-[#9270FF]'
}, {
    img: elite4,
    header: 'See money grow everyday',
    text: 'Interest added daily to your portfolio<br/>Track investments grow daily',
    to: 'to-[#F4FFFF]',
    border: 'border-[#388E3C]'
}, {
    img: elite3,
    header: 'Returns not linked to markets',
    text: 'Earn stable and steady returns with<br/>low to zero risk',
    to: 'to-[#F7E4DA]',
    border: 'border-[#FF9F40]'
}, {
    img: elite5,
    header: 'RBI regulated',
    text: 'India`s first & largest RBI regulated <br/> NBFC Your money in safe hands',
    to: 'to-[#FFFCF3]',
    border: 'border-[#FFB133]'
}, {
    img: elite1,
    header: 'Decade long experience',
    text: 'Trusted by 2.5 lac+ investors with<br/>avg. investment of 3.2 lacs',
    to: 'to-[#4E657440]',
    border: 'border-[#4E6574]'
},]
export default function WhyShouldSection({ homePage }) {
    const router = useRouter()
    return (
        <section className={`font-Inter mt-8 py-16 lg:py-24 relative overflow-hidden ${homePage && 'bg-[#C9DDE6]'}`}>
            {!homePage && <div className='rounded-full absolute right-[-20vw] top-[20vh] bg-gradient-to-r from-[#c1eef4] to-[#fff] h-[20vh] w-[40vw] blur-3xl opacity-50' />}

            <div className=' max-w-screen-xl mx-auto lg:px-8'>
                {homePage && <div className='ml-4 lg:ml-0 lg:pb-14 flex flex-col lg:flex-row lg:items-center justify-between'>
                    <div>
                        <Image
                            placeholder="empty"
                            src={univest_elite}
                            className='h-[32px] lg:h-[40px] object-contain max-w-[140px] lg:max-w-[160px] mb-6 lg:mb-8'
                            alt='demo image'
                        />
                        <p className='text-2xl lg:text-5xl text-black font-semibold lg:font-extrabold'>
                            Earn up to  <span className="text-[#437587] font-black">12% p.a.</span>
                        </p>
                    </div>
                    <div className="flex my-8 lg:my-0">
                        <Image
                            placeholder="empty"
                            src={rbi}
                            className=' h-[40px] lg:h-[56px] w-[40px] lg:w-[56px]'
                            alt='demo image'
                        />
                        <div className="self-center ml-3 lg:ml-4">
                            <p className="font-medium text-sm lg:text-base text-[#606060]">Partnered with</p>
                            <p className="font-semibold text-sm lg:text-base">RBI regulated <b>NBFC - P2P</b></p>
                        </div>
                    </div>
                </div>}
                <Image
                    placeholder="empty"
                    src={elite_banner}
                    className='w-[calc(100vw-32px)] object-contain rounded-xl lg:rounded-[32px] mb-7 lg:mb-24 mx-auto'
                    alt='demo image'
                />
                <p className='ml-4 lg:ml-0 mb-3 lg:mb-6 text-base lg:text-4xl text-black font-semibold lg:font-extrabold'>
                    Why should I invest?
                </p>
                <Swiper
                    initialSlide={1}
                    speed={500}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={1.1}
                    breakpoints={{
                        1020: {
                            initialSlide: 0,
                            centeredSlides: false,
                            slidesPerView: 3,
                            spaceBetween: 36
                        },
                    }}
                >
                    {data.slice(0, 3).map((ele, i) =>
                        <SwiperSlide key={i.toString()}>
                            <div key={i} className={`flex min-w-[80vw] lg:min-w-[25%] items-center m-2 lg:m-3 py-3 pl-4 border rounded-xl bg-gradient-to-b from-[#fff] z-[2] ${ele.to} ${ele.border}`}>
                                <Image
                                    placeholder="empty"
                                    src={ele.img}
                                    className='h-[44px] w-[44px] lg:h-[50px] lg:w-[50px]'
                                    alt='demo image'
                                />
                                <div className='font-Inter ml-4 text-sm lg:text-base text-black font-extrabold'>
                                    {ele.header}
                                    <div className='text-xs lg:text-sm landing-[20px] text-[#414141] font-medium'
                                        dangerouslySetInnerHTML={{ __html: ele.text }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='h-2' />
                <Swiper
                    initialSlide={1}
                    speed={500}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={1.1}
                    breakpoints={{
                        1020: {
                            initialSlide: 0,
                            centeredSlides: false,
                            slidesPerView: 3,
                            spaceBetween: 36
                        },
                    }}
                >
                    {data.slice(3, 6).map((ele, i) =>
                        <SwiperSlide key={i.toString()}>
                            <div key={i} className={`flex min-w-[80vw] lg:min-w-[25%] items-center m-2 lg:m-3 py-3 pl-4 border rounded-xl bg-gradient-to-b from-[#fff] z-[2] ${ele.to} ${ele.border}`}>
                                <Image
                                    placeholder="empty"
                                    src={ele.img}
                                    className='h-[44px] w-[44px] lg:h-[50px] lg:w-[50px]'
                                    alt='demo image'
                                />
                                <div className='font-Inter ml-4 text-sm lg:text-base text-black font-extrabold'>
                                    {ele.header}
                                    <div className='text-xs lg:text-sm landing-[20px] text-[#414141] font-medium'
                                        dangerouslySetInnerHTML={{ __html: ele.text }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            {homePage &&
                <div className="w-full flex justify-center">
                    <BlackButton text='Explore more' className='mt-10 lg:mt-14 px-6 py-2 lg:px-12 lg:py-3 text-sm lg:text-base font-extrabold' onClick={() => router.push('/elite')} />
                </div>}
        </section>
    )
}
