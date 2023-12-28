import CalculatorsCard from '@/components/Calculators/CalculatorsCard'
import React from 'react'
import sipImage from '@/assets/Images/calculators/sip.png';
import calcImage from '@/assets/Images/calculators/calc.png'
import Image from 'next/image';

const data = [
    { title: 'SIP', name: 'SIP<br/>caclulator', desc: 'Optimize your investment<br/>strategy accurately', icon: sipImage, color: '#F4C1B6' },
    { title: 'Lumpsum', name: 'Lumpsum<br/>caclulator', desc: 'Precise estimates for<br/>one-time payments', icon: sipImage, color: '#F4C1B6' },
    { title: 'FD', name: 'FD<br/>caclulator', desc: 'Accurate insights into<br/>FD returns', icon: sipImage, color: '#F4C1B6' },
    { title: 'Compound interest', name: 'Compound<br/>interest caclulator', desc: 'Understand how<br/>interest grows exponentially', icon: sipImage, color: '#F4C1B6' },
    { title: 'SIP', name: 'SIP<br/>caclulator', desc: 'Optimize your investment<br/>strategy accurately', icon: sipImage, color: '#F4C1B6' },
    { title: 'Lumpsum', name: 'Lumpsum<br/>caclulator', desc: 'Precise estimates for<br/>one-time payments', icon: sipImage, color: '#F4C1B6' },
    { title: 'FD', name: 'FD<br/>caclulator', desc: 'Accurate insights into<br/>FD returns', icon: sipImage, color: '#F4C1B6' },
    { title: 'Compound interest', name: 'Compound<br/>interest caclulator', desc: 'Understand how<br/>interest grows exponentially', icon: sipImage, color: '#F4C1B6' }
]
export default function Calculators() {
    return (
        <>
            <section className='font-Inter relative overflow-hidden pt-12 pb-12 lg:pt-32' style={{ background: 'linear-gradient(180deg, #EFF7FF 0%, rgba(239, 247, 255, 0.00) 100%)' }}  >
                <div className=' hidden lg:flex justify-center items-center gap-8 self-stretch mx-20 py-0'>
                    <div className='flex w-20 h-20 justify-center items-center border-[color:var(--Gradient,#61B2F3)] p-[5px] rounded-[80px] border-[1.667px] border-solid'>
                        <Image src={calcImage} alt='demo' className='h-[40px] w-[40px]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2 flex-[1_0_0]'>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-[32px] not-italic font-bold leading-10'>Calculators</p>
                        <p className='self-stretch text-[color:var(--Neutral-600,#747474)] text-xl not-italic font-medium leading-8'>Empower your financial journey with calculators – where precision meets simplicity. Plan smarter, achieve more.</p>
                    </div>
                </div>
                <div className='mx-4 py-2 mt-12 grid grid-cols-2 items-center gap-4 lg:grid-cols-4 lg:mx-20 lg:gap-x-10 lg:gap-y-8'>
                    {data?.map(ele =>
                        <CalculatorsCard ele={ele} />
                    )}
                </div>
            </section>
        </>
    )
}
