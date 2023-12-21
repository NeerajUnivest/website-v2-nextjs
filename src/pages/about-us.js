import InvestorSection from "@/components/About/InvestorSection";
import MyTeam from "@/components/About/MyTeam";
import YouCanTrush from "@/components/About/YouCanTrush";
import MetaSection from "@/elements/MetaSection/MetaSection";
import { Mixpanel } from "@/elements/Mixpanel";
import { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        Mixpanel.track(
            '$pageview',
            {
                'page': 'about_us',
            }
        )
    }, [])
    return (
        <>
            <MetaSection
                title='About Univest'
                desc='SEBI registered stock market research platform which gives free portfolio analysis. Investment ideas, stock market tips and Registered high return investment plans'
                keyWords='SEBI registered, Univest, Univest India, Learn Stock Investing, Free portfolio analysis, Buy portfolio' />
            <YouCanTrush />
            <MyTeam />
            <InvestorSection />
        </>
    )
}
