import React from 'react'
import Image from 'next/image';
import sipImage from '@/assets/Images/calculators/sip.png';
import backIcon from '@/assets/icn/arrowLeft.webp';
import TotalValueSection from './TotalValueSection';
import TrackYourReturnsSection from './TrackYourReturnsSection';

export default function CalculatorDetails({ name }) {
    return (
        <>
            <section className='font-Inter relative overflow-hidden pt-24 pb-12 lg:mx-20 lg:pt-32' >
                <div className=' lg:inline-flex lg:items-start lg:gap-10  w-full'>
                    <div className=' overflow-hidden hidden lg:flex lg:flex-col border-2 border-solid lg:rounded-xl border-[color:var(--Neutral-200,#EDEDED)] '>
                        <div className='flex w-80 items-center gap-4 px-3 py-4  '>
                            <Image src={backIcon} alt='demo' className='w-4 h-4' />
                            <p className='text-[color:var(--Neutral-900,#202020)] text-xl not-italic font-semibold leading-8'>Calculators home</p>
                        </div>
                        {['SIP', 'Lumpsum', 'FD', 'EMI'].map(ele =>
                            <div className=' py-[22px] relative border-t-[1px] border-[color:var(--Neutral-300,#DFDFDF)] border-solid items-center justify-start flex pl-3'>
                                <Image src={sipImage} alt='demo' className=' w-[48px] h-[48px] bottom-0 right-0 absolute ' />
                                <p className='text-[color:var(--Neutral-900,#202020)] text-base not-italic font-semibold leading-7'>{ele} calculator</p>
                            </div>
                        )}
                    </div>
                    <div className='lg:w-full'>
                        <div className='relative px-4 py-[17px] lg:rounded-2xl overflow-hidden' style={{ background: 'linear-gradient(180deg, #F4C1B6 0%, rgba(244, 193, 182, 0.00) 100%)' }} >
                            <Image src={sipImage} alt='demo' className=' w-[56px] h-[56px] bottom-0 right-0 absolute ' />
                            <div className='inline-flex flex-col items-start gap-0.5'>
                                <p className='text-[color:var(--Neutral-900,#202020)] text-base not-italic font-bold leading-7'>{name} calculator</p>
                                <p className='text-[color:var(--Neutral-800,#414141)] text-center text-xs not-italic font-medium leading-5'>Optimize your investment strategy accurately</p>
                            </div>
                        </div>
                        <div className='mt-4 mx-4 flex flex-col gap-4 lg:mx-0'>
                            <TotalValueSection />
                            <TrackYourReturnsSection />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
