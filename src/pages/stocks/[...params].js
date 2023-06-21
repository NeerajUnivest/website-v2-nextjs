
import { useRouter } from 'next/router';
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from 'react';
import axios from 'axios';
import StockGraph from '@/components/StocksDetail/StockGraph';
import StocksHeader from '@/components/StocksDetail/StocksHeader';
import TopBar from '@/components/StocksDetail/TopBar/TopBar';
import ExpertVerdictPhone from '@/components/StocksDetail/Verdict/ExpertVerdictPhone';
import KeyIndicatorCard from '@/components/StocksDetail/KeyIndicatorCard/KeyIndicatorCard';
import AllEvents from '@/components/StocksDetail/AllEvents/AllEvents';
import CompanyFinancial from '@/components/StocksDetail/CompanyFinancial/CompanyFinancial';
import FinancialIndicator from '@/components/StocksDetail/FinancialIndicator/FinancialIndicator';
import LeftBar from '@/components/StocksDetail/LeftBar';
import News from '@/components/StocksDetail/News/News';
import PeerComparison from '@/components/StocksDetail/PeerComparison/PeerComparison';
import ShareHolding from '@/components/StocksDetail/ShareHolding/ShareHolding';
import MetaSection from '@/elements/MetaSection/MetaSection';



export default function StockDetails({ stockDetails }) {
    const router = useRouter();
    let { finCode } = router.query;
    const { width } = useWindowSize();
    const [activeChartType, setActiveChartType] = useState(1);

    return (<>
        <MetaSection
            title='Stock Analysis, Exit Investment, Investment Ideas, Market Research, News | Univest'
            desc='SEBI registered best stock market platform with free portfolio analyis, easy research, investment ideas, stock market tips, live share market, latest news and screeners'
            keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />

        <div className='grid grid-cols-12 select-none font-Inter max-w-screen-xl mx-auto'>
            {width > 976 &&
                <div className='col-span-12 lg:col-span-3'>
                    <LeftBar name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} stockDetails={stockDetails} />
                </div>}
            <div className='lg:ml-8 col-span-12 lg:col-span-9 min-h-screen mb-8 '>
                <div id='overall' className='absolute -top-40' />
                {finCode && (finCode < 100000000) &&
                    <>
                        {width > 976 ? <TopBar /> : <>
                            <StocksHeader name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                            <ExpertVerdictPhone />
                        </>}
                        <StockGraph activeChartType={activeChartType} list={stockDetails} name={finCode} />
                        <KeyIndicatorCard name={finCode} />
                        <FinancialIndicator name={finCode} />
                        <CompanyFinancial name={finCode} />
                        <ShareHolding name={finCode} />
                        <PeerComparison name={finCode} />
                        <News name={finCode} />
                        <AllEvents name={finCode} />
                    </>}
            </div>
        </div>
    </>)
}

export async function getServerSideProps(context) {
    const { query } = context;
    const { finCode } = query;

    let res = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCode}`)

    return {
        props: {
            stockDetails: res.data?.data?.list?.[0],
            pageName: 'stock-details'
        }
    };
}