import { useState } from 'react'
import FAQcard from '@/elements/FAQcard';
import { useRouter } from 'next/router';

const data = [
    {

        question: "What is Pro? What are the benefits of Pro?",
        answer: "Pro is a subscription plan on Univest that gives the user unlimited access to all the trade ideas posted on the Univest app, premium screeners, additional returns on the Elite investment plans, and a quarterly personalised securities portfolio review by SEBI registered investment advisors"
    },
    {
        question: "What all plans and packages are available in Pro?",
        answer: "Pro subscription has only one plan available in 3 packages: 3 months, 6 months and 12 months"
    },
    {
        question: "Will more benefits added in the Pro subscription over time?",
        answer: "Yes, we strive to keep adding more benefits to Pro. We aim to make the investing experience of our loyal customers more rewarding each day."
    },
    {
        question: "Can I buy some features that are offered in Pro?",
        answer: "No, Pro can only be purchased as a complete package and individual parts cannot be purchased."
    },
    {

        question: "Can I get a trial for Pro?",
        answer: "Yes, you can enjoy a free trial of Pro for 7 days to get a preview of what being a Pro member would feel like."
    },
]

export default function ProFAQSection() {
    const [active, setActive] = useState(-1);
    const router = useRouter()

    return (
        <section className='py-12 font-Inter '>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-8'>
                <p className='text-center text-xl lg:text-3xl font-extrabold text-white'>
                    FAQs
                </p>
                <div className='flex flex-col py-8 gap-4 lg:gap-8'>
                    {data.map((ele, i) =>
                        <FAQcard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                    )}
                </div>
                <div className='flex items-center justify-center'>
                    <div className='text-sm font-bold lg:text-xl cursor-pointer text-white' onClick={() => router.push('/faq')}>
                        Read more FAQs
                    </div>
                </div>
            </div >
        </section >
    )
}
