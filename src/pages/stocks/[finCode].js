import Loading from '@/elements/Loading/Loading';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

export default function StockDetail({ stockDetails, pageName }) {
    const router = useRouter();
    useEffect(() => {
        router.replace(`/stocks/${stockDetails.nseSymbol}/${stockDetails.compName}?finCode=${stockDetails.finCode}`)
    }, [])

    return (<Loading />)
}

export async function getServerSideProps({ query }) {
    const { finCode } = query;

    let res = await axios.get(`${process.env.apiBaseURL}/resources/stock-details/prices?finCodes=${finCode}`)

    return {
        props: {
            stockDetails: res.data?.data?.list?.[0],
            pageName: 'stock-details'
        }
    };
}