import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import ProductSection from "@/components/HomePage/ProductSection";
import WhyUnivestSection from "@/components/HomePage/WhyUnivestSection";
import WhyShouldSection from "@/components/Elite/WhyShouldSection";
import MetaSection from "@/elements/MetaSection/MetaSection";
import { useContext, useEffect } from "react";
import { Mixpanel } from "@/elements/Mixpanel";
import axios from "axios";
import { UserDetailProvider } from "@/contexts/UserDetailContext";


const data = [
  {
    question: "What does the Univest app do",
    answer: "Univest is a one-stop investment platform that is trusted by 800k+ users. It helps people exit their bad stock market investments and provides them with alternative investment options in stock market and also non market linked high fixed return income products under the Elite program where they can earn upto 12% p.a."
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

export default function HomePage({ planData }) {
  const userDetail = useContext(UserDetailProvider)

  useEffect(() => {
    Mixpanel.pageView({
      'page': 'web_home',
    });
    userDetail.setBtn({ show: true, beforeLogin: 'Get started', afterLogin: 'Download the app now', isProPage: true, page: 'web_home' })
  }, [])
  return (<>
    <MetaSection
      title='Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'
      desc='Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%'
      keyWords='Stock screener, NSE stocks, Indian stock market, stock analysis tool, stock research tool, Smart Investment, Market News, Share Market News, Share Market news, finance news, IPO News, Investment ideas, Trading ideas' />
    <HeroSection start_at={planData?.start_at} />
    <WhyUnivestSection />
    <ProductSection />
    <WhyShouldSection homePage={true} />
    <IdeasSection />
    {/* <InThePressSection /> */}
    <UserFeedbacksSection />
    <EliteFAQSection data={data} />
  </>)
}

export async function getServerSideProps(ctx) {
  const res = await axios.get(`${process.env.apiBaseURL}/resources/pro-membership/plans`)

  return {
    props: {
      planData: res.data
    }
  }
}