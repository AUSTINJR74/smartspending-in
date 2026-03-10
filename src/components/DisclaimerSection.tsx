const DisclaimerSection = () => {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16 bg-card border-t border-border">
      <div className="container-narrow max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Disclaimer</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The content shared on this website is purely for informational and educational purposes.
          It does not promote any specific bank, product, or service, nor does it involve any form
          of scam, solicitation, product selling, or investment advice. The discussion is intended
          only for general financial awareness and education.
        </p>
      </div>
    </section>
  );
};

export default DisclaimerSection;
