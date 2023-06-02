import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import ProductSection from "@/components/HomePage/ProductSection";
import WhyUnivestSection from "@/components/HomePage/WhyUnivestSection";
import WhyShouldSection from "@/components/Elite/WhyShouldSection";
import HowItWork from "@/components/Elite/HowItWork";



export default function HomePage() {

  return (<>
    <HeroSection />
    <WhyUnivestSection />
    <ProductSection />
    <WhyShouldSection bgClass='bg-[#C9DDE6]' />
    <IdeasSection />
    <InThePressSection />
    <UserFeedbacksSection />
    <EliteFAQSection />
  </>)
}
