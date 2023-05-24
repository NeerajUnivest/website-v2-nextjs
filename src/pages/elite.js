import AboutFaircent from '@/components/Elite/AboutFaircent'
import AvailablePlansSection from '@/components/Elite/AvailablePlansSection'
import EarnExtraSection from '@/components/Elite/EarnExtraSection'
import EliteFAQSection from '@/components/Elite/EliteFAQSection'
import HeroSection from '@/components/Elite/HeroSection'
import HowItWork from '@/components/Elite/HowItWork'
import PartneredWithSection from '@/components/Elite/PartneredWithSection'
import WhyShouldSection from '@/components/Elite/WhyShouldSection'

export default function Elite() {
    return (<>
        <HeroSection />
        <AvailablePlansSection />
        <WhyShouldSection />
        <HowItWork />
        <EarnExtraSection />
        <AboutFaircent />
        <EliteFAQSection />
        <PartneredWithSection />
    </>
    )
}
