
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
import PageNotFound from "../404";
import Actions from "@/elements/Actions";
import StockFAQSection from "@/components/Stocks/StockFAQSection";



export default function StockDetails({ stockDetails }) {
    const { width } = useWindowSize();
    const [activeChartType, setActiveChartType] = useState(1);
    useEffect(() => {
        Mixpanel.pageView({
            'page': 'stock_details',
            'finCode': stockDetails?.finCode,
            'symbol': stockDetails?.symbol,
            'compName': stockDetails?.compName
        })
    }, [])
    if (stockDetails?.finCode && stockDetails?.finCode !== '') {
        return (<>
            <MetaSection
                title={`${stockDetails?.symbol} Share/Stock Price Today Live BSE/NSE | Univest `}
                desc={`${stockDetails?.symbol} Share/Stock price today Live NSE/BSE - Get ${stockDetails?.symbol} stock price with Fundamentals, Performance, Profit & Loss, and Latest Insights.`}
                keyWords='bombay stock exchange, Indian stock market, bse, national stock exchange, Nifty, nse, sensex, stock exchange, stock market, stock research tool, smart investment, investment ideas, stock market tips' />

            <div className='grid grid-cols-12 select-none font-Inter max-w-screen-xl mx-auto'>
                {width > 976 &&
                    <div className='col-span-12 lg:col-span-3'>
                        <LeftBar name={stockDetails?.finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                    </div>}
                <div className='lg:ml-8 col-span-12 lg:col-span-9 min-h-screen mb-8 '>
                    <div id='overall' className='absolute -top-40' />
                    {width > 976 ? <>
                        {(stockDetails?.finCode < 100000000) && <TopBar />}
                    </>
                        : <>
                            <StocksHeader name={stockDetails?.finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                        </>}
                    <StockGraph activeChartType={activeChartType} name={stockDetails?.finCode} />
                    {stockDetails?.finCode && (stockDetails?.finCode < 100000000) &&
                        <>
                            <ExpertVerdictPhone name={stockDetails?.finCode} activeChartType={activeChartType} />
                            <KeyIndicatorCard name={stockDetails?.finCode} />
                            <FinancialIndicator name={stockDetails?.finCode} />
                            <CompanyFinancial name={stockDetails?.finCode} />
                            <ShareHolding name={stockDetails?.finCode} />
                            <PeerComparison name={stockDetails?.finCode} />
                            {/* <News name={stockDetails?.finCode} /> */}
                            <AllEvents name={stockDetails?.finCode} />
                            <StockFAQSection name={stockDetails?.finCode} symbol={stockDetails?.symbol} />

                        </>}
                </div>
            </div>
        </>)
    } else {
        return <PageNotFound />
    }
}

export async function getServerSideProps({ query, res }) {
    const { params } = query;
    // console.log(query);
    const paramsOld = params?.[0].split('~')
    let resp = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/symbol-fincode?symbol=${encodeURIComponent(params?.[0])}`)
    // console.log(Actions.toStockDetailOld(paramsOld[0], paramsOld[1]),);
    if (Actions.toStockDetailOld(paramsOld[0], paramsOld[1]) === `/stocks/${params?.[0]}`) {
        res.writeHead(301, {
            location: Actions.toStockDetail(paramsOld[0], paramsOld[1])
        });
        res.end();
    }
    // if (Actions.toStockDetailOld(paramsOld[0], paramsOld[1]) === `/stocks/${paramsOld[0]}~undefined`) {

    // }
    return {
        props: {
            stockDetails: {
                finCode: params?.[1] ? resp.data : '',
                symbol: (params?.[0] ?? '')?.toUpperCase(),
                compName: params?.[1] ?? params?.[0] ?? ''
            },
            pageName: 'stock-details'
        }
    };
}