import AllEvents from '@/components/StocksDetail/AllEvents/AllEvents';
import CompanyFinancial from '@/components/StocksDetail/CompanyFinancial/CompanyFinancial';
import FinancialIndicator from '@/components/StocksDetail/FinancialIndicator/FinancialIndicator';
import KeyIndicatorCard from '@/components/StocksDetail/KeyIndicatorCard/KeyIndicatorCard';
import LeftBar from '@/components/StocksDetail/LeftBar';
import News from '@/components/StocksDetail/News/News';
import PeerComparison from '@/components/StocksDetail/PeerComparison/PeerComparison';
import ShareHolding from '@/components/StocksDetail/ShareHolding/ShareHolding';
import StockGraph from '@/components/StocksDetail/StockGraph';
import StocksHeader from '@/components/StocksDetail/StocksHeader';
import TopBar from '@/components/StocksDetail/TopBar/TopBar';
import ExpertVerdictPhone from '@/components/StocksDetail/Verdict/ExpertVerdictPhone';
import { useRouter } from 'next/router';
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StockDetails() {
    const router = useRouter();
    let { finCode } = router.query;
    console.log(finCode);
    const { width } = useWindowSize();
    const [activeChartType, setActiveChartType] = useState(1);

    const [data, setData] = useState({});

    useEffect(() => {
        let finCodes = [];
        finCodes.push(finCode);
        axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCodes}`)
            .then((res) => {
                let data = res.data?.data?.list?.[0]
                if (data) {
                    setData(data)
                    // utils.setStockdata({ ...obj })
                    // utils.changeTitle(data.nseSymbol ?? data.bseSymbol)
                }
            })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [finCode]);
    return (<>
        <div className='grid grid-cols-12'>
            {width > 976 &&
                <div className='lg:ml-8 col-span-12 lg:col-span-3'>
                    <LeftBar name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                </div>}
            <div className='lg:ml-8 col-span-12 lg:col-span-9 min-h-screen mb-8' id=''>
                <div id='overall' className='absolute -top-40' />
                {finCode < 100000000 &&
                    <>
                        {width > 976 ? <TopBar /> : <>
                            <StocksHeader name={finCode} activeChartType={activeChartType} setActiveChartType={setActiveChartType} />
                            <ExpertVerdictPhone />
                        </>}
                        <StockGraph activeChartType={activeChartType} list={data} name={finCode} />
                        <KeyIndicatorCard name={finCode} />
                        <FinancialIndicator name={finCode} />
                        <CompanyFinancial name={finCode} />
                        <ShareHolding name={finCode} />
                        <PeerComparison name={finCode} />
                        {/* <News name={finCode} /> */}
                        <AllEvents name={finCode} />
                    </>}
            </div>
        </div>
    </>)
}
