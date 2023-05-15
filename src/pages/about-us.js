import InvestorSection from '../components/HomePage/InvestorSection'
import YouCanTrush from '../components/About/YouCanTrush';
import MyTeam from '../components/About/MyTeam';
import { useEffect } from 'react';
import NavBar from '@/elements/NavBar';
import Footer from '@/elements/Footer';

export default function AboutUs() {
    useEffect(() => {
        document.title = 'Univest | About us'
    }, [])
    return <>
        <div className='overflow-hidden'>
            <NavBar />
            <YouCanTrush />
            <MyTeam />
            <InvestorSection />
            <Footer />
        </div>
    </>
}
