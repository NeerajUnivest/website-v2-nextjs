import ProBarSection from '@/components/ProPage/ProBarSection'
import ProHeroSection from '@/components/ProPage/ProHeroSection'
import IdeasSection from '@/components/Stocks/IdeasSection'
import ScreenersSection from '@/components/Stocks/ScreenersSection'
import AvailablePlansSection from '@/components/ProPage/AvailablePlansSection'
import { Mixpanel } from '@/elements/Mixpanel'
import { useContext, useEffect } from 'react'
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
import { UserDetailProvider } from '@/contexts/UserDetailContext'
import BenefitsSection from '@/components/ProPage2/BenefitsSection'
import ActivePlanSection from '@/components/ProPage2/ActivePlanSection'
import { isMobile } from 'react-device-detect';


export default function Pro({ pageName, data }) {
    const userDetail = useContext(UserDetailProvider)
    useEffect(() => {
        Mixpanel.pageView({
            'page': 'web_pro_page',
        })
        userDetail.setBtn({ show: true, beforeLogin: 'Activate trial', afterLogin: 'Download the app now', isProPage: true, page: 'web_pro_page' })
    }, [])

    // return <ActivePlanSection />
    return (<>
        <MetaSection
            title='Stock market investment ideas by SEBI Reg. Investment Advisor Uniapps'
            desc='Univest PRO is a advisory subscription for best stock market advisory and trading tips, market screeners, portfolio review and additional cashback on Elite investments'
            keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />

        <div className="block md:hidden">
            <ProAndPlusHeroSection homePage={false} start_at={data?.start_at} />
        </div>
        <div className="hidden md:block">
            <ProHeroSection homePage={false} start_at={data?.start_at} />
        </div>
        <ProAndPlusIdeasSection isDark={true} />
        <ClosedIdeasSection isDark={true} />
        <LiveIdeasSection isDark={true} />
        <PlandAndSubscriptionSection isDark={true} />
        <ScreenersSection isDark={true} />
        <QuarterlyPortfolioSection />
        <DownloadAppSection />
        {/* <ProPlansAvailableSection data={data?.list} /> */}
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