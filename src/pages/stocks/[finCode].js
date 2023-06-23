import { Config } from '@/elements/Config';
import Loading from '@/elements/Loading/Loading';
import axios from 'axios';

export default function StockDetail() {
    return (<Loading />)
}

export async function getServerSideProps({ query, res }) {
    const { finCode } = query;

    let apires = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCode}`)
    let stockDetails = apires.data?.data?.list?.[0]
    res.writeHead(301, {
        location: Config.toStockDetail(stockDetails.nseSymbol ?? stockDetails.bseSymbol, stockDetails.compName, stockDetails.finCode)
    });
    res.end();
    return {
        props: {}
    };
}