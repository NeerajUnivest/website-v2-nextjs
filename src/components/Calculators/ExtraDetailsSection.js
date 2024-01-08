import React, { useState } from 'react'
import ExtraDetailCard from './ExtraDetailCard';

export default function ExtraDetailsSection({ data }) {

    const [active, setActive] = useState(-1);

    return (
        <section className='flex flex-col items-start gap-3 p-4 bg-[#F5F5F5] lg:rounded-2xl'>
            <div className='flex flex-col py-8 gap-3 lg:gap-4'>
                {data?.map((ele, i) =>
                    <ExtraDetailCard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                )}
            </div>
        </section>
    )
}
