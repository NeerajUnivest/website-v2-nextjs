import { useState } from 'react'
import FAQcard from '@/elements/FAQcard';
import { useRouter } from 'next/router';

let data = [
    {
        question: "What does the Univest app do",
        answer: "Univest is a one-stop investment platform that is trusted by 400K+ users. It helps people exit their bad stock market investments and provides them with alternative investment options in stock market and also non market linked high fixed return income products under the Elite program where they can earn upto 12% p.a."
    },
    {
        question: "Is Univest SEBI registered?",
        answer: "Univest is not SEBI registered directly. Uniapps, a wholly owned subsidiary of Univest is SEBI registered under the number INA0000017369"
    },
    {
        question: "Is there a video tour to understand how Univest app works or how to best use the Univest app?",
        answer: "Yes you refer to this video and understand how Univest works in just 60 seconds <a href='https://www.youtube.com/watch?v=Y_AqmfAIVc0'>https://www.youtube.com/watch?v=Y_AqmfAIVc0</a>"
    },
    {
        question: "Why should I link my demat account / portfolio with the Univest app?",
        answer: "To get the best out of Univest, you can link your demat account. You get Buy-Sell trend changes, track results, news and events happening on all your portfolio stocks"
    },
]
export default function EliteFAQSection() {
    const [active, setActive] = useState(-1);
    const router = useRouter()

    return (
        <section className='py-12 font-Inter bg-gradient-to-br from-[#E4EEF301] to-[#E0ECF247]'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <p className='text-center text-xl lg:text-3xl font-extrabold text-black'>
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
