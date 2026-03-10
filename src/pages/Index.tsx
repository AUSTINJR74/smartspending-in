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
      <div className="border-t border-border" />
      <TrustSection />
      <div className="border-t border-border" />
      <ProblemSection />
      <div className="border-t border-border" />
      <AboutSection />
      <div className="border-t border-border" />
      <ServicesSection />
      <div className="border-t border-border" />
      <BookingFormSection />
      <div className="border-t border-border" />
      <ContentSection />
      <div className="border-t border-border" />
      <PhilosophySection />
      <div className="border-t border-border" />
      <TestimonialsSection />
      <div className="border-t border-border" />
      <FAQSection />
      <div className="border-t border-border" />
      <DisclaimerSection />
      <div className="border-t border-border" />
      <FooterSection />
    </div>
  );
};

export default Index;
