import dynamic from "next/dynamic";

import StocksHeroSection from "@/components/Stocks/StocksHeroSection";
import StockBarSection from "@/components/Stocks/StockBarSection";
import MarketsSection from "@/components/Stocks/MarketsSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import SharksSection from "@/components/Stocks/SharksSection";
import ScreenersSection from "@/components/Stocks/ScreenersSection";
import ResultsSection from "@/components/Stocks/ResultsSection";
import NewsSection from "@/components/Stocks/NewsSection";
import BrokersSection from "@/components/Stocks/BrokersSection";
import MetaSection from "@/elements/MetaSection/MetaSection";
import { useEffect } from "react";
import { Mixpanel } from "@/elements/Mixpanel";

// const BrokersSection = dynamic(() => import('@/components/Stocks/BrokersSection'))
// const NewsSection = dynamic(() => import('@/components/Stocks/NewsSection'))
// const ResultsSection = dynamic(() => import('@/components/Stocks/ResultsSection'))
// const ScreenersSection = dynamic(() => import('@/components/Stocks/ScreenersSection'))
// const SharksSection = dynamic(() => import('@/components/Stocks/SharksSection'))
// const IdeasSection = dynamic(() => import('@/components/Stocks/IdeasSection'))
// const MarketsSection = dynamic(() => import('@/components/Stocks/MarketsSection'))

export default function Stocks() {
    useEffect(() => {
        Mixpanel.track(
            '$pageview',
            {
                'page': 'stocks_home',
            }
        )
    }, [])
    return (<>
        <MetaSection
            title='Stock Analysis, Exit Investment, Investment Ideas, Market Research, News | Univest'
            desc='SEBI registered best stock market platform with free portfolio analyis, easy research, investment ideas, stock market tips, live share market, latest news and screeners'
            keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />
        <StocksHeroSection homePage={false} />
        <StockBarSection />
        <MarketsSection />
        <IdeasSection />
        <SharksSection />
        <ScreenersSection />
        <ResultsSection />
        <NewsSection />
        <BrokersSection />
    </>)
}
