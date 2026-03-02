import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContentSection from "@/components/ContentSection";
import LeadFormSection from "@/components/LeadFormSection";
import TrustSection from "@/components/TrustSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ContentSection />
      <LeadFormSection />
      <TrustSection />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
};

export default Index;
