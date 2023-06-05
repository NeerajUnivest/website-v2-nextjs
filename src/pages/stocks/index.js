import Head from "next/head";
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

// const BrokersSection = dynamic(() => import('@/components/Stocks/BrokersSection'))
// const NewsSection = dynamic(() => import('@/components/Stocks/NewsSection'))
// const ResultsSection = dynamic(() => import('@/components/Stocks/ResultsSection'))
// const ScreenersSection = dynamic(() => import('@/components/Stocks/ScreenersSection'))
// const SharksSection = dynamic(() => import('@/components/Stocks/SharksSection'))
// const IdeasSection = dynamic(() => import('@/components/Stocks/IdeasSection'))
// const MarketsSection = dynamic(() => import('@/components/Stocks/MarketsSection'))

export default function Stocks() {
    return (<>
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
