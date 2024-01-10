import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Mixpanel } from '@/elements/Mixpanel';


export default function CalculatorsCard({ ele }) {
    return (
        <>
            <Link href={`calculators/${ele.url}`} onClick={() => {
                Mixpanel.track('cta_clicked', {
                    // 'cta_clicked': 'submit',
                    'page': 'calculators',
                    'calculator': ele?.title?.toLowerCase()
                })
            }} >
                <div className='overflow-hidden m-auto w-[156px] lg:w-[308px] h-[120px] lg:h-[192px] font-Inter border border-[color:var(--Neutral-300,#DFDFDF)] pt-3 lg:pt-5 pl-3 lg:pl-5 pb-6 pr-3 rounded-xl lg:rounded-[20px] border-solid relative bg-white'>
                    <Image src={ele?.icon} alt={ele?.name} className='h-[40px] w-[40px] absolute bottom-0 right-0 lg:h-[64px] lg:w-[64px]' />
                    <div className='inline-flex flex-col items-start gap-1 lg:gap-3 '>
                        <p className='text-[color:var(--Neutral-900,#202020)] text-sm not-italic font-semibold lg:font-bold leading-6 lg:text-xl' dangerouslySetInnerHTML={{ __html: ele.name }} ></p>
                        <p className='text-[color:var(--Neutral-600,#747474)] text-[10px] not-italic font-medium leading-4 lg:text-base' dangerouslySetInnerHTML={{ __html: ele.desc }} ></p>
                    </div>
                </div>
            </Link>
        </>
    )
}
