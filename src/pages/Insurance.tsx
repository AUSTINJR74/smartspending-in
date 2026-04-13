import LandingNavbar from "@/components/landing/LandingNavbar";
import InsuranceHero from "@/components/insurance/InsuranceHero";
import InsuranceTypes from "@/components/insurance/InsuranceTypes";
import InsuranceCTA from "@/components/insurance/InsuranceCTA";
import InsuranceForm from "@/components/insurance/InsuranceForm";
import FooterSection from "@/components/landing/FooterSection";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <InsuranceHero />
      <InsuranceTypes />
      <InsuranceCTA />
      <InsuranceForm />
      <FooterSection />
    </div>
  );
};

export default Insurance;
