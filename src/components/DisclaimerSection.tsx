import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="p-6 md:p-8 rounded-2xl border border-border bg-muted/50">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-heading font-semibold text-foreground">Disclaimer</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The content shared on this website is purely for informational and educational purposes.
            It does not promote any specific bank, product, or service, nor does it involve any form
            of scam, solicitation, product selling, or investment advice. The discussions are intended
            only for general financial awareness and education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
