import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";



export default function HomePage() {

  return (<>
    <HeroSection />
    <IdeasSection />
    <InThePressSection />
    <UserFeedbacksSection />
    <EliteFAQSection />
  </>)
}
