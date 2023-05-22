import AboutFaircent from '@/components/Elite/AboutFaircent'
import AvailablePlansSection from '@/components/Elite/AvailablePlansSection'
import EarnExtraSection from '@/components/Elite/EarnExtraSection'
import EliteFAQSection from '@/components/Elite/EliteFAQSection'
import HeroSection from '@/components/Elite/HeroSection'
import PartneredWithSection from '@/components/Elite/PartneredWithSection'
import Footer from '@/elements/Footer'
import NavBar from '@/elements/NavBar'
import Head from 'next/head'

export default function Elite() {
    return (<>
        <Head>
            <title>Univest is a one-stop solution for all investment problems.</title>
            <meta name="description" content="We will look into the basics of stock trading, tips to choose the right stocks for trading and how to start stock trading online, and also get expert views." />
            <meta name="theme-color" content="#00439D" />
            <meta name="msapplication-navbutton-color" content="#00439D" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00439D" />
        </Head>
        <NavBar />
        <HeroSection />
        <AvailablePlansSection />
        <EarnExtraSection />
        <AboutFaircent />
        <EliteFAQSection />
        <PartneredWithSection />
        <Footer />
    </>
    )
}
