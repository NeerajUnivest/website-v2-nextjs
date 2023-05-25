import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import Section from "@/components/HomePage/Section";



export default function HomePage() {

  return (<>
    <HeroSection />
    <Section />
    <IdeasSection />
    <InThePressSection />
    <UserFeedbacksSection />
    <EliteFAQSection />
  </>)
}
