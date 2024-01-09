import { useState } from 'react'
import FAQcard from '@/elements/FAQcard';
import { useRouter } from 'next/router';

export default function EliteFAQSection({ data }) {
    const [active, setActive] = useState(-1);
    const router = useRouter()

    return (
        <section className='py-12 font-Inter bg-gradient-to-br from-[#E4EEF301] to-[#E0ECF247]'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <p className='text-center text-xl lg:text-3xl font-extrabold text-black list-outside'>
                    FAQs
                </p>
                <div className='flex flex-col py-8 gap-4 lg:gap-8'>
                    {data.map((ele, i) =>
                        <FAQcard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                    )}
                </div>
                <div className='flex items-center justify-center'>
                    <div className='text-sm font-bold lg:text-xl cursor-pointer text-primary' onClick={() => router.push('/faq')}>
                        Read more FAQs
                    </div>
                </div>
            </div >
        </section >
    )
}
