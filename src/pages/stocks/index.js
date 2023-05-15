import Head from "next/head";
import HeroSection from "@/components/Stocks/HeroSection";
import Footer from "@/elements/Footer";
import NavBar from "@/elements/NavBar";
import StockBarSection from "@/components/Stocks/StockBarSection";
import MarketsSection from "@/components/Stocks/MarketsSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import SharksSection from "@/components/Stocks/SharksSection";
import ScreenersSection from "@/components/Stocks/ScreenersSection";
import ResultsSection from "@/components/Stocks/ResultsSection";
import NewsSection from "@/components/Stocks/NewsSection";
import BrokersSection from "@/components/Stocks/BrokersSection";


export default function Stocks() {
    return (<>
        <Head>
            <title>Univest is a one-stop solution for all investment problems.</title>
            <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
        </Head>
        <NavBar />
        <HeroSection />
        <StockBarSection />
        {/* <MarketsSection />
        <IdeasSection />*/}
        <SharksSection />
        <ScreenersSection />
        <ResultsSection />
        {/* <NewsSection /> */}
        <BrokersSection />
        <Footer />
    </>)
}
