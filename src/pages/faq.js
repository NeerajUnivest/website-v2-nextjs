import { useEffect, useState } from 'react'
import FAQcard from '@/elements/FAQcard'
import { Mixpanel } from '@/elements/Mixpanel'
import MetaSection from '@/elements/MetaSection/MetaSection';

let data = [
    {
        question: `Is it safe to link my portfolio with Univest? Does Univest share my portfolio data with anyone?`,
        answer: `It is completely safe to link your portfolio with Univest. We do not share your portfolio data with anyone. Not even with your friends.`
    },
    {
        question: `Can any of my friends or non friends see my portfolio`,
        answer: `It is completely safe to link your portfolio with Univest. We do not share your portfolio data with anyone. Not even with your friends.`
    },
    {
        question: `Can I connect multiple brokers to my portfolio?`,
        answer: `Yes, you can use your existing broker account right through Univest to buy-sell your stock assets. You can refresh your portfolio everytime you buy-sell stocks outside of Unviest`
    },
    {
        question: `I can't see my broker as an option to connect? Which all brokers are not supported on Univest?`,
        answer: `We currently have 16 brokers on Univest and are working on getting more onboard.The ones live are: Zerodha, Upstox, Groww, 5Paisa, Angel One, ICICI direct, , IIFL, Motilal Oswal, Dhan, Alice Blue, Axis Securities, Edelweiss, FundzBazar, HDFC Securities and Kotak Securities.`
    },
    {
        question: `I can't see my broker as an option to connect? Can I manually upload/ create a list of my holdings`,
        answer: `No, at present we don't support manual upload or creating a list of your holdings. We have plans on building this funcationality real soon.`
    },
    {
        question: `There's a mismatch in the actual holdings and that I see on Univest app. Why?`,
        answer: `This happens primarily due to some delisted stocks or some price mis-match. In case of any discrepancy, please report at support@univest.in`
    },
    {
        question: `I can see an option to chat with my friends? It is asking to share my contact book, is it safe to share my phonebook`,
        answer: `Yes, you can chat with your friends on Univest. You can also create your own group and add friends already on Univest or invite from outside. Yes, you can share your phone book with Univest. We don't share this information with anyone`
    },
    {
        question: `I can see an option to chat with my friends? Are the chats safe?`,
        answer: `Yes, chats on Univest are completely safe and encrypted.`
    },
    {
        question: `I don't see many of my friends on Univest? Can I invite them?`,
        answer: `Yes, you can invite as many friends to Univest as you like. For every friend who join Univest your invite code/ link, you'll get rewarded.`
    },
    {
        question: `Does Univest have a referral program/ Will I earn anything if I refer my friends?`,
        answer: `Yes, Univest is a rewarding platform. You can earn upto Rs 1000 for every referral. You can read about our referral program details here`
    },
    {
        question: `I see a light bulb and a hashtag (#) in my chat screen. What are these?`,
        answer: `# and Bulb symbols are to help you share any trade idea with your friends. By pressing # you can tag a stock. By pressing Bulb, you can fill in the form and share a trade idea along with more details like stop loss, target etc with your friends`
    },
    {
        question: `Can I update my name, email or phone number linked to my account`,
        answer: `We currently support only change of name. You can go to profile settings in my profile and view/ change the details`
    },
    {
        question: `Can I delete my account`,
        answer: `We currently don't have the option to delete your account upfront. However you can email us at support@univest.in and we'll take the necessary steps`
    },
    {
        question: `Is the data being shown on Univest accurate?`,
        answer: `All the data is being sourced from multiple external vendors. If you find any discrepency, please report on support@univest.in`
    },
    {
        question: `I can see buy-sell-hold options on my portfolio, what does that mean? Should I sell the stocks that show a SELL badge?`,
        answer: `These insights are built upon evaluating stocks on various fundamental and technical parameters on rules and logics built by SEBI registered adviors. These estimates should not be construed as investment recommendation/ advice or an offer or solicitation to buy/ sell any security/ MF by Univest communication technologies pvt ltd`
    },
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

function GeneralFAQs() {
    const [active, setActive] = useState(-1);
    useEffect(() => {
        Mixpanel.pageView({
            'page': 'faq',
        }
        )
    }, [])
    return (
        <section className='font-Inter max-w-screen-xl lg:mt-10 py-24 mx-auto px-4 lg:px-8 bg-[#FFFFFF]'>
            <MetaSection
                title='Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'
                desc='Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%'
                keyWords='Stock screener, NSE stocks, Indian stock market, stock analysis tool, stock research tool, Smart Investment, Market News, Share Market News, Share Market news, finance news, IPO News, Investment ideas, Trading ideas' />
            <div className='flex flex-col gap-4'>
                <div className='font-Inter text-[32px] leading-[40px] font-semibold mx-4 mb-6 hidden md:flex'>
                    FAQs
                </div>
                {data.map((ele, i) =>
                    <FAQcard key={i} heading={ele.question} content={ele.answer} active={active} i={i} setActive={setActive} />
                )}
            </div>
        </section>
    )
}

export default GeneralFAQs