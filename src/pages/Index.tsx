import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
import BookingFormSection from "@/components/BookingFormSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <AboutSection />
      <ServicesSection />
      <BookingFormSection />
      <ContentSection />
      <PhilosophySection />
      <TestimonialsSection />
      <FAQSection />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
};

export default Index;
