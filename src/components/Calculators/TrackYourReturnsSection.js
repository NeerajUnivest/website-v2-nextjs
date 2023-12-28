import React from 'react'
import DonutChart from './DonutChart'

export default function TrackYourReturnsSection() {
    return (
        <section className='flex w-full flex-col items-start gap-3 border border-[color:var(--Neutral-900,#202020)] p-4 rounded-2xl border-solid'>
            <p className='text-base not-italic font-bold leading-7 bg-clip-text'>Track your returns</p>
            <div className='h-px self-stretch bg-[#EDEDED]'></div>
            <div>
                <DonutChart />
            </div>
        </section>
    )
}
