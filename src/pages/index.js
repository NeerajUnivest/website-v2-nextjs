import EliteFAQSection from "@/components/Elite/EliteFAQSection";
import HeroSection from "@/components/HomePage/HeroSection";
import InThePressSection from "@/components/HomePage/InThePressSection";
import UserFeedbacksSection from "@/components/HomePage/UserFeedbacksSection";
import IdeasSection from "@/components/Stocks/IdeasSection";
import ProductSection from "@/components/HomePage/ProductSection";
import WhyUnivestSection from "@/components/HomePage/WhyUnivestSection";



export default function HomePage() {

  return (<>
    <HeroSection />
    <ProductSection />
    <WhyUnivestSection />
    <IdeasSection />
    <InThePressSection />
    <UserFeedbacksSection />
    <EliteFAQSection />
  </>)
}
