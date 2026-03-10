import AnimatedSection from "./AnimatedSection";

const DisclaimerSection = () => {
  return (
    <section className="px-6 py-14 md:px-10 md:py-16 bg-secondary/30 border-t border-border">
      <AnimatedSection>
        <div className="container-narrow max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Disclaimer</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The content shared on this website is purely for informational and educational purposes.
            It does not promote any specific bank, product, or service, nor does it involve any form
            of scam, solicitation, product selling, or investment advice. The discussion is intended
            only for general financial awareness and education.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default DisclaimerSection;
