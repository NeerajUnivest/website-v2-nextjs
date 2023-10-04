import ProBarSection from '@/components/ProPage/ProBarSection'
import ProHeroSection from '@/components/ProPage/ProHeroSection'
import IdeasSection from '@/components/Stocks/IdeasSection'
import ScreenersSection from '@/components/Stocks/ScreenersSection'
import AvailablePlansSection from '@/components/ProPage/AvailablePlansSection'
import { Mixpanel } from '@/elements/Mixpanel'
import { useEffect } from 'react'
import QuarterlyPortfolioSection from '@/components/ProPage/QuarterlyPortfolioSection'
import UserFeedbacksSection from '@/components/HomePage/UserFeedbacksSection'
import ProFAQSection from '@/components/ProPage/ProFAQSection'
import ProPlansAvailableSection from '@/components/ProPage/ProPlansAvailableSection'
import MetaSection from '@/elements/MetaSection/MetaSection'
import axios from 'axios'

export default function Pro({ pageName, data }) {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'pro_home',
            }
        )
    }, [])
    return (<>
        <MetaSection
            title='Stock market investment ideas by SEBI Reg. Investment Advisor Uniapps'
            desc='Univest PRO is a advisory subscription for best stock market advisory and trading tips, market screeners, portfolio review and additional cashback on Elite investments'
            keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />
        <ProHeroSection homePage={false} start_at={data?.start_at} />
        <ProBarSection />
        <IdeasSection isDark={true} />
        <ScreenersSection isDark={true} />
        <AvailablePlansSection />
        <QuarterlyPortfolioSection />
        <ProPlansAvailableSection data={data?.list} />
        <UserFeedbacksSection isDark={true} />
        <ProFAQSection />
    </>)
}


export async function getServerSideProps(ctx) {
    const res = await axios.get(`${process.env.apiBaseURL}/resources/pro-membership/plans`)

    return {
        props: {
            pageName: 'pro',
            data: res.data
        }
    }
}