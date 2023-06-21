import React from 'react'
import { Autoplay, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/effect-coverflow";
import Image from 'next/image';
import trusted_stock_ideas from '../../assets/icons/trusted_stock_ideas.png';
import insights from '../../assets/icons/insights.png';
import portfolio_analysis from '../../assets/icons/portfolio_analysis.png';
import interest_rate from '../../assets/icons/interest_rate.png';
import thumbnails1 from '../../assets/thumbnails/thumbnails1.png';
import thumbnails2 from '../../assets/thumbnails/thumbnails2.png';
import thumbnails3 from '../../assets/thumbnails/thumbnails3.png';
import Link from 'next/link';

const data = [
    {
        title: 'How Univest works?',
        videoLink: 'https://public-assets-univest.s3.ap-south-1.amazonaws.com/app-videos/how-it-works-app.mp4',
        thumbnail: thumbnails1
    },
    {
        title: 'Whats is Elite 12% Is it safe?',
        videoLink: 'https://univest-prod.s3.ap-south-1.amazonaws.com/FC_Video.mp4',
        thumbnail: thumbnails2
    },
    {
        title: 'Why connect portfolio with us?',
        videoLink: 'https://public-assets-univest.s3.ap-south-1.amazonaws.com/app-videos/whats-new-app.mp4',
        thumbnail: thumbnails3
    }
]

export default function WhyUnivestSection() {
    return (
        <section className='py-20 bg-[#F5F5F5] font-Inter'>
            <div className='max-w-screen-xl mx-auto flex flex-col overflow-hidden'>
                <p className="text-center text-xl lg:text-5xl font-extrabold text-[#202020]">
                    Why Univest?
                </p>
                <p className="mx-4 lg:mx-8  mt-5 lg:mt-6 text-center text-sm lg:text-xl font-semibold text-[#747474]">
                    Your one-stop solution for all your investment needs. Maximise your ROIs with exiting bad investments on time and invest in trusted investment ideas and high return investment plans all from a single place
                </p>
                <div className='flex flex-col-reverse lg:flex-col pt-11 lg:pt-12 gap-16'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row lg:grid-rows-1 gap-x-8 gap-y-14 mx-6 lg:mx-20">
                        <IconBox icon={portfolio_analysis} name='Free Portfolio<br/>analysis' />
                        <IconBox icon={insights} name='Buy-Sell-Hold<br/>insights' />
                        <IconBox icon={trusted_stock_ideas} name='Trusted stock<br/>ideas' />
                        <IconBox icon={interest_rate} name='High return<br/>investments' />
                    </div>
                    <Swiper
                        initialSlide={1}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        spaceBetween={0}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 190,
                            depth: 50,
                            scale: 0.8,
                            modifier: 1,
                            slideShadows: true
                        }}
                        breakpoints={{
                            546: {
                                slidesPerView: 3,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 100,
                                    depth: 100,
                                    scale: 0.9,
                                    modifier: 0.9,
                                    slideShadows: true
                                }
                            },
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="WhyUnivestSection"
                    >
                        {data.map(ele =>
                            <SwiperSlide key={ele.title}>
                                <Link href={ele.videoLink} rel="noreferrer" target="_blank">
                                    <Image src={ele.thumbnail} width={300} height={250} className='w-full h-full rounded-xl' alt={ele.title} />
                                </Link>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <style>{`
                .WhyUnivestSection {
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
                
                .WhyUnivestSection .swiper-slide 
                    width: 296px;
                    height: 172px;
                }
                
                @media (min-width: 976px) {
                    .WhyUnivestSection .swiper-slide {
                        width: 490px;
                        height: 290px;
                    }
                }
            `}</style>
        </section>
    )
}


export function IconBox({ icon, name }) {
    return (
        <div className='flex flex-col'>
            <Image src={icon} className='w-[46px] h-[46px] mx-auto' alt='icon' />
            <p className=" mt-5 lg:mt-6 text-center text-base lg:text-xl font-semibold text-[#202020]"
                dangerouslySetInnerHTML={{ __html: name }} />
        </div>
    )
}
