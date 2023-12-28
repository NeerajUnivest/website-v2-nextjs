import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function CalculatorsCard({ ele }) {
    return (
        <>
            <Link href={`calculators/${ele.title}`} >
                <div className=' w-full font-Inter border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 pl-3 pb-6 pr-3 rounded-xl border-solid relative bg-white'>
                    <Image src={ele?.icon} alt={ele?.name} className='h-[40px] w-[40px] absolute bottom-0 right-0 lg:h-[40px] lg:w-[40px]' />
                    <div className='inline-flex flex-col items-start gap-1'>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-sm not-italic font-semibold leading-6 lg:text-xl' dangerouslySetInnerHTML={{ __html: ele.name }} ></p>
                        <p className='text-[color:var(--Neutral-600,#747474)] text-[10px] not-italic font-medium leading-4 lg:text-base' dangerouslySetInnerHTML={{ __html: ele.desc }} ></p>
                    </div>
                </div>
            </Link>
        </>
    )
}
