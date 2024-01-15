import React, { useState } from 'react'
import ExtraDetailCard from './ExtraDetailCard';

export default function ExtraDetailsSection({ data }) {

    // const [active, setActive] = useState(-1);

    return (
        <section className='flex flex-col items-start gap-3 mx-4 lg:mx-0 bg-[#fff] lg:rounded-2xl'>
            <div className=''>
                {data?.map((ele, i) =>
                    // <ExtraDetailCard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                    <div key={i} className='flex flex-col gap-6 mb-6'>
                        <ExtraDetailCard heading={ele.question} content={ele.answer} />
                        {(i >= 0 && i < data?.length - 1) && <div className='h-px self-stretch bg-[#DFDFDF]'></div>}
                    </div>
                )}
            </div>
        </section>
    )
}
