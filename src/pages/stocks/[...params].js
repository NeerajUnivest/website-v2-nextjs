import Head from 'next/head';
import { useRouter } from 'next/router';

export default function StockDetails() {
    const router = useRouter();
    return (<>
        <Head>
            {/* <title>{router.query}</title> */}
            <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
        </Head>
        <div>
            {JSON.stringify(router.query)}</div>
    </>)
}
