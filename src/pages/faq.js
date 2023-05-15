import Footer from '@/elements/Footer'
import NavBar from '@/elements/NavBar'
import React, { useEffect } from 'react'
import FAQcard from '../elements/FAQcard'

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
        answer: `At the moment, you cannot connect multiple brokers to your portfolio. We're working on building this functionality will be available real soon`
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
]


function GeneralFAQs() {
    useEffect(() => {
        // utils.changeTitle('Univest | FAQs')
    }, [])
    return (<React.Fragment>
        <NavBar />
        <div className='grid grid-cols-12 gap-4 py-2 md:py-6 lg:py-20'>
            <div className='
            col-start-1 col-span-12 
            md:col-start-2 md:col-span-10
            lg:col-start-3 lg:col-span-8
            h-full py-6 
            md:border-[1px] md:border-[#E5E5E5] md:border-solid 
            rounded-[12px]'>
                <div className='font-Inter text-[32px] leading-[40px] font-semibold mx-4 mb-6 hidden md:flex'>
                    FAQs
                </div>
                {data.map((ele, i) =>
                    <FAQcard key={i} heading={ele.question} content={ele.answer} />
                )}
            </div>
        </div>
        <Footer />
    </React.Fragment>
    )
}

export default GeneralFAQs