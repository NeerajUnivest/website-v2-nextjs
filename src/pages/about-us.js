import Head from 'next/head';

// import InvestorSection from '../components/HomePage/InvestorSection'
// import YouCanTrush from '../components/About/YouCanTrush';
// import MyTeam from '../components/About/MyTeam';
import NavBar from '@/elements/NavBar';
import Footer from '@/elements/Footer';

export default function AboutUs() {
    return <>
        <Head>
            <title>Univest is a one-stop solution for all investment problems.</title>
            <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
        </Head>
        <NavBar />
        {/* <YouCanTrush />
        <MyTeam />
        <InvestorSection /> */}
        <Footer />
    </>
}
