import MyTeam from "@/components/About/MyTeam";
import YouCanTrush from "@/components/About/YouCanTrush";
import MetaSection from "@/elements/MetaSection/MetaSection";

export default function AboutUs() {
    return (
        <>
            <MetaSection
                title='About Univest'
                desc='SEBI registered stock market research platform which gives free portfolio analysis. Investment ideas, stock market tips and RBI regulated high return investment plans'
                keyWords='SEBI registered, Univest, Univest India, Learn Stock Investing, Free portfolio analysis, Buy portfolio' />
            <YouCanTrush />
            <MyTeam />
        </>
    )
}
