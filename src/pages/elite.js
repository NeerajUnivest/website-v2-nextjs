import AboutFaircent from '@/components/Elite/AboutFaircent'
import AvailablePlansSection from '@/components/Elite/AvailablePlansSection'
import EarnExtraSection from '@/components/Elite/EarnExtraSection'
import EliteFAQSection from '@/components/Elite/EliteFAQSection'
import EliteHeroSection from '@/components/Elite/EliteHeroSection'
import HowItWork from '@/components/Elite/HowItWork'
import PartneredWithSection from '@/components/Elite/PartneredWithSection'
import WhyShouldSection from '@/components/Elite/WhyShouldSection'
import MetaSection from '@/elements/MetaSection/MetaSection'

export default function Elite() {
    return (<>
        <MetaSection
            title='Elite: Earn higher returns with RBI regulated P2P lending '
            desc='Elite gives you the opportunity to get returns up to 12% through short-term investment in RBI regulated NBFC P2P lending to people with the high credit score.'
            keyWords='High returns, Safe investments, Double returns than FD, RBI regulated, P2P lending, Low risk investments, Trusted investments, Safe returns' />
        <EliteHeroSection homePage={false} />
        <AvailablePlansSection />
        <WhyShouldSection homePage={false} />
        <HowItWork />
        <EarnExtraSection />
        <AboutFaircent />
        <EliteFAQSection />
        <PartneredWithSection />
    </>
    )
}
