import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustMetrics from "@/components/landing/TrustMetrics";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import MidCtaBanner from "@/components/landing/MidCtaBanner";
import BookingFormSection from "@/components/BookingFormSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCtaBanner from "@/components/landing/FinalCtaBanner";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <TrustMetrics />
      <BenefitsSection />
      <HowItWorks />
      <MidCtaBanner />
      <BookingFormSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCtaBanner />
      <FooterSection />
    </div>
  );
};

export default Index;
