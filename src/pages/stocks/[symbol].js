
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
import { Mixpanel } from '@/elements/Mixpanel';



export default function StockDetails({ stockDetails }) {
    const { width } = useWindowSize();
    const [activeChartType, setActiveChartType] = useState(1);
    const { finCode, symbol, compName } = stockDetails;
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'stock_details',
            }
        )
    }, [])
    return (<>
        <MetaSection
            title={`${symbol} Share Price Today - ${compName} Stock Price Live NSE/BSE | Univest`}
            desc={`${symbol} Share Price ${compName} live NSE/BSE performance fundamentals market cap share holding financial report company profile annual report quarterly results profit & loss`}
            keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />

        <div className='grid grid-cols-12 select-none font-Inter max-w-screen-xl mx-auto'>
            {width > 976 &&
                <div className='col-span-12 lg:col-span-3'>
                    <LeftBar name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                </div>}
            <div className='lg:ml-8 col-span-12 lg:col-span-9 min-h-screen mb-8 '>
                <div id='overall' className='absolute -top-40' />
                {width > 976 ? <>
                    {(finCode < 100000000) && <TopBar />}
                </>
                    : <>
                        <StocksHeader name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                        <ExpertVerdictPhone />
                    </>}
                <StockGraph activeChartType={activeChartType} name={finCode} />
                {finCode && (finCode < 100000000) &&
                    <>
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
    const { params } = context;
    let res = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/symbol-fincode?symbol=${params?.symbol}`)
    console.log(params);
    return {
        props: {
            stockDetails: {
                finCode: res.data,
                symbol: params?.symbol ?? null,
                compName: params?.symbol ?? null
            },
            pageName: 'stock-details'
        }
    };
}