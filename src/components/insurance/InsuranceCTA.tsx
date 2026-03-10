import { ArrowRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const InsuranceCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/30 to-background border border-border overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary">
              <Headphones className="w-8 h-8" />
            </div>
            <h2 className="section-title">
              Need Help Choosing the{" "}
              <span className="text-primary">Right Insurance?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I help clients understand and choose suitable insurance based on their unique needs, family situation, and financial goals. No pushy sales — just honest guidance.
            </p>
            <Button size="lg" className="text-lg font-bold px-10 h-14 rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 gap-2 ring-2 ring-primary/20 ring-offset-2 ring-offset-background cta-glow" asChild>
              <a href="#insurance-booking">
                Book Insurance Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCTA;
