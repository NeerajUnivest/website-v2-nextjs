import ProBarSection from '@/components/ProPage/ProBarSection'
import ProHeroSection from '@/components/ProPage/ProHeroSection'
import IdeasSection from '@/components/Stocks/IdeasSection'
import ScreenersSection from '@/components/Stocks/ScreenersSection'
import AvailablePlansSection from '@/components/ProPage/AvailablePlansSection'
import { Mixpanel } from '@/elements/Mixpanel'
import { useEffect } from 'react'

export default function Pro({ pageName }) {
    useEffect(() => {
        Mixpanel.track(
            'page_viewed',
            {
                'page': 'elite_home',
            }
        )
    }, [])
    return (<>
        {/* <ProHeroSection homePage={false} />
        <ProBarSection />
        <IdeasSection isDark={true} />
        <ScreenersSection isDark={true} /> */}
        <AvailablePlansSection />
    </>)
}
export async function getStaticProps(ctx) {
    return {
        props: {
            pageName: 'pro'
        }
    }
}