import React from 'react'
import ScreenersList from '../../components/Screeners/ScreenersList';
// import './Screeners.css'

import screenerIcon from '../../assets/Images/screenerIcon.webp';
import newSquare from '../../assets/icons/newSquare.webp';
import premium from '../../assets/icons/premium.webp';
import Image from 'next/image';
import axios from 'axios';
import NavBar from '@/elements/NavBar';
import Footer from '@/elements/Footer';

export default function Screeners({ data }) {
    return (<>
        <NavBar />
        <div className='relative overflow-hidden ml-4 lg:ml-20 pt-4 lg:pt-0'>
            <div className='-z-10 rounded-[50px] absolute left-[50vw] top-[30vh] bg-[#e3f0fb96] h-[100vh] w-[60vw]' />

            <div className='absolute top-4 lg:top-10 right-4 font-Inter flex flex-row justify-center lg:justify-end  lg:mr-4 h-10'>
                <div className='ml-2 mr-1'>
                    <Image src={premium} className='-mt-[2px] h-5 lg:h-6' alt='icon' />
                </div>
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Premium
                </div>
                <div className='ml-6 mr-1'>
                    <Image src={newSquare} className='h-4 lg:h-5' alt='icon' />
                </div>
                <div className='lg:mt-[2px] text-[12px] leading-[16px] text-[#202020]'>
                    Newly added
                </div>
            </div>
            <div className='hidden lg:flex flex-row content-center items-center mt-4 lg:mt-8 lg:mb-12'>
                <div className='mr-4'>
                    <Image src={screenerIcon} className='h-8 lg:h-20' alt='icon' />
                </div>
                <div>
                    <div className='font-Inter font-bold text-[18px] leading-[24px] text-[#202020] lg:text-[32px] lg:leading-[40px]'>
                        Screener homepage
                    </div>
                    <div className='font-normal text-[#414141] hidden lg:flex text-[20px] leading-[32px]'>
                        Top picks based on your preference. Powered by robust algorithms built by a highly experienced research team.
                    </div>
                </div>
            </div>
            <ScreenersList data={data} />
        </div>
        <div className='bg-[#e5e5e5]'>
            <div className='mx-4 py-2 lg:mx-20 font-normal text-[#414141] text-[10px] leading-[12px] md:text-[16px] md:leading-[24px] text-center'>
                Find the best stocks | Investing less time & energy into the research | Earn higher ROIs | Premium and advanced screeners
            </div>
        </div>
        <Footer />
    </>)
}

export async function getStaticProps() {
    let res = await axios.get(`https://uat-api.univest.in/resources/screeners/v2`)
    return {
        props: {
            data: res.data.data.list
        }
    };
}