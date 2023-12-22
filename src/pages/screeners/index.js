import ScreenersList from '../../components/Screeners/ScreenersList';

import screenerIcon from '../../assets/images/screenerIcon.webp';
import premium from '../../assets/icn/premium.png';
import Image from 'next/image';
import axios from 'axios';
import MetaSection from '@/elements/MetaSection/MetaSection';
import { useEffect } from 'react';
import { Mixpanel } from '@/elements/Mixpanel';

export default function Screeners({ data }) {
    useEffect(() => {
        Mixpanel.pageView({
            'page': 'screeners_home',
        }
        )
    }, [])
    return (
        <>
            <MetaSection
                title='Stock screener, Breakout Screeners, Multibagger stocks, Stock market analysis tools | Univest'
                desc='Stock screener for Indian stocks. Breakout stocks, Nearing breakout stocks, Multibagger stocks, High dividend yield stocks, High PE stocks, Oversold stock screeners'
                keyWords='stock screener, NSE stocks, stock filter, Indian stock market, stock analysis tool, stock research tool, breakout stocks, multibagger stocks' />

            <section className='font-Inter relative overflow-hidden  pt-24 lg:pt-28'>
                <div className='-z-10 rounded-[50px] absolute left-[50vw] top-[128px] lg:top-[270px] bg-[#e3f0fb96] h-[200vh] w-[60vw]' />
                {/* <div className='absolute top-18 lg:top-32 right-4 font-Inter flex flex-row justify-center lg:justify-end items-center lg:mr-4'>
                    <Image src={premium} className='ml-2 mr-1 -mt-[2px] h-5 lg:h-6 w-5 lg:w-6' alt='icon' />
                    <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                        Premium
                    </div>
                    <div className=' mx-2 px-2 lg:px-3 py-0.5 text-[10px] lg:text-xs text-white bg-app-red rounded-md'>New</div>
                    <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                        Newly added
                    </div>
                </div> */}
                <div className='ml-32 hidden lg:flex flex-row content-center items-center lg:mt-5 lg:mb-12'>
                    <Image src={screenerIcon} className='h-8 lg:h-20 w-8 lg:w-20 mr-4' alt='icon' />
                    <div>
                        <div className='font-Inter font-bold text-[18px] leading-[24px] text-[#202020] lg:text-[32px] lg:leading-[40px]'>
                            Screener homepage
                        </div>
                        <h1 className='font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                            Top picks based on your preference. Powered by robust algorithms built by a highly experienced research team.
                        </h1>
                    </div>
                </div>
                <ScreenersList data={data} />
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`${process.env.apiBaseURL}/resources/screeners/v2`)
    return {
        props: {
            data: res.data.data.list
        },
    };
}