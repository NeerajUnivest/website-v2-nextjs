import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import ProductSection from "@/components/HomePage/ProductSection";
import WhyUnivestSection from "@/components/HomePage/WhyUnivestSection";
import WhyShouldSection from "@/components/Elite/WhyShouldSection";
import MetaSection from "@/elements/MetaSection/MetaSection";



export default function HomePage() {

  return (<>
    <MetaSection
      title='Stock Analysis, Invest in Stocks, Best Financial Tools, Invest in P2P, Investment ideas'
      desc='Best financial tools to analyse Indian stocks to research better, exit bad investments and invest smarter. Invest in high return plans with Elite and earn upto 12%'
      keyWords='Stock screener, NSE stocks, Indian stock market, stock analysis tool, stock research tool, Smart Investment, Market News, Share Market News, Share Market news, finance news, IPO News, Investment ideas, Trading ideas' />
    <HeroSection />
    <WhyUnivestSection />
    <ProductSection />
    <WhyShouldSection homePage={true} />
    <IdeasSection />
    <InThePressSection />
    <UserFeedbacksSection />
    <EliteFAQSection />
  </>)
}