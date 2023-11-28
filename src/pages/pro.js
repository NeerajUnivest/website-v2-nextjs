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
import ProAndPlusHeroSection from '@/components/ProPage2/ProAndPlusHeroSection'
import ProAndPlusIdeasSection from '@/components/ProPage2/ProAndPlusIdeasSection'
import ClosedIdeasSection from '@/components/ProPage2/ClosedIdeasSection'
import LiveIdeasSection from '@/components/ProPage2/LiveIdeasSection'
import PlandAndSubscriptionSection from '@/components/ProPage2/PlansAndSubscriptionSection'
import DownloadAppSection from '@/components/ProPage2/DownloadAppSection'
import LogIn from '@/elements/LogIn/LogIn'

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
        <ProAndPlusHeroSection homePage={false} start_at={data?.start_at} />
        <ProAndPlusIdeasSection isDark={true} />
        <ClosedIdeasSection isDark={true} />
        <LiveIdeasSection isDark={true} />
        <PlandAndSubscriptionSection isDark={true} />
        <ScreenersSection isDark={true} />
        {/* <AvailablePlansSection /> */}
        <QuarterlyPortfolioSection />
        <DownloadAppSection />
        {/* <ProPlansAvailableSection data={data?.list} /> */}
        <UserFeedbacksSection isDark={true} />
        <ProFAQSection />
        <LogIn />
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