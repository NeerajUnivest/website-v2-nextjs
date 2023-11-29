import AboutFaircent from '@/components/Elite/AboutFaircent'
import AvailablePlansSection from '@/components/Elite/AvailablePlansSection'
import EarnExtraSection from '@/components/Elite/EarnExtraSection'
import EliteFAQSection from '@/components/Elite/EliteFAQSection'
import EliteHeroSection from '@/components/Elite/EliteHeroSection'
import HowItWork from '@/components/Elite/HowItWork'
import PartneredWithSection from '@/components/Elite/PartneredWithSection'
import WhyShouldSection from '@/components/Elite/WhyShouldSection'
import CallBackSection from '@/components/ElitePage2/CallBackSection'
import EliteHeroSectionNew from '@/components/ElitePage2/EliteHeroSectionNew'
import InvestCalcSection from '@/components/ElitePage2/InvestCalcSection'
import RequestSubmittedSection from '@/components/ElitePage2/RequestSubmittedSection'
import DownloadAppSection from '@/components/ProPage2/DownloadAppSection'
import LogIn from '@/elements/LogIn/LogIn'
import MetaSection from '@/elements/MetaSection/MetaSection'
import { Mixpanel } from '@/elements/Mixpanel'
import { useEffect } from 'react'

const data = [
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
export default function Elite() {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'elite_home',
            }
        )
    }, [])
    return (<>
        <MetaSection
            title='Elite: Earn higher returns with Registered P2P lending '
            desc='Elite gives you the opportunity to get returns up to 12% through short-term investment in Registered NBFC P2P lending to people with the high credit score.'
            keyWords='High returns, Safe investments, Double returns than FD, Registered, P2P lending, Low risk investments, Trusted investments, Safe returns' />
        <EliteHeroSectionNew homePage={false} />
        <AvailablePlansSection />
        <CallBackSection />
        {/* <RequestSubmittedSection /> */}
        <InvestCalcSection />
        <WhyShouldSection homePage={false} />
        <HowItWork />
        {/* <EarnExtraSection /> */}
        <DownloadAppSection />
        <EliteFAQSection data={data} />
        <PartneredWithSection />
        <LogIn />
    </>
    )
}
