import { useState } from 'react'
import FAQcard from '@/elements/FAQcard';

let data = [
    {
        question: "What are the risks? How are they managed?",
        answer: "At Faircent, the safety of your investment is a top priority. We minimize risk by conducting thorough identity, credit, and risk assessments on every borrower based on 200+ criterion and 400+ data points. Your investments are further protected by diversification across number of borrowers. In case of defaults we use legally-compliant collection agencies to follow-up. If you have any questions, feel free to write to us at invest@univest.in",
    },
    {
        question: "How safe is the invested money? Who is this money lent to?",
        answer: "Your funds are secure.To safeguard the investments, on an average, one lender's money is distributed across more than 250+ borrowers. All borrowers undergo thorough verification and are screened through 200+ criteria and over 400 data points. The funds are also managed by an SEBI approved independent trustee and routed through an escrow bank account for added security only on your approval.",
    },
    {
        question: "How can I withdraw my money? Are there any charges?",
        answer: "The Freedom Plan allows for convenient withdrawals at any time. However, withdrawals within first 30 days of investment, may attract 4% to 5% interest rate. In the Fixed term plans, on the other hand, withdrawals prior to maturity are not permitted except in emergency cases. For such requests, please contact us via email at invest@univest.in",
    },
    {
        question: "Are there any additional / processing charges while investing or withdrawing?",
        answer: "There is no additional fees for investing or withdrawing after maturity. A payment gateway fee might apply, depending on the payment method chosen. For example, UPI is free, net banking is Rs 17.7, while Debit card transactions are subject to a fee of up to 0.9%. etc <br/> ",
    },
]
export default function EliteFAQSection() {
    const [active, setActive] = useState(-1);

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
                {/* TODO */}
                <div className='flex items-center justify-center' onClick={() => alert('TODO')}>
                    <div className='text-sm font-bold lg:text-xl cursor-pointer text-primary'>
                        Read more FAQs
                    </div>
                </div>
            </div>
        </section>
    )
}
