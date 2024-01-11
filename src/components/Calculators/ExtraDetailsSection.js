import React, { useState } from 'react'
import ExtraDetailCard from './ExtraDetailCard';

export default function ExtraDetailsSection({ data }) {

    // const [active, setActive] = useState(-1);

    return (
        <section className='flex flex-col items-start gap-3 mx-4 lg:mx-0 bg-[#fff] lg:rounded-2xl'>
            <div className='flex flex-col gap-6'>
                {data?.map((ele, i) =>
                    // <ExtraDetailCard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                    <ExtraDetailCard key={i} heading={ele.question} content={ele.answer} />
                )}
            </div>
        </section>
    )
}
