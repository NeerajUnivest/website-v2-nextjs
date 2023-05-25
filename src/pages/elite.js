import AboutFaircent from '@/components/Elite/AboutFaircent'
import AvailablePlansSection from '@/components/Elite/AvailablePlansSection'
import EarnExtraSection from '@/components/Elite/EarnExtraSection'
import EliteFAQSection from '@/components/Elite/EliteFAQSection'
import EliteHeroSection from '@/components/Elite/EliteHeroSection'
import HowItWork from '@/components/Elite/HowItWork'
import PartneredWithSection from '@/components/Elite/PartneredWithSection'
import WhyShouldSection from '@/components/Elite/WhyShouldSection'

export default function Elite() {
    return (<>
        <EliteHeroSection />
        <AvailablePlansSection show={true} />
        <WhyShouldSection />
        <HowItWork />
        <EarnExtraSection />
        <AboutFaircent />
        <EliteFAQSection />
        <PartneredWithSection />
    </>
    )
}
