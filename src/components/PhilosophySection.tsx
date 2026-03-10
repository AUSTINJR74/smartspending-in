import AnimatedSection from "./AnimatedSection";

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="philosophy">
      <AnimatedSection>
        <div className="container-narrow max-w-2xl text-center space-y-6">
          <p className="section-label">Philosophy</p>
          <h2 className="section-title">My Approach</h2>
          <div className="w-12 h-1 gradient-bg rounded-full mx-auto" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I believe financial awareness shouldn't be complicated or intimidating.
            My content focuses on simple explanations, responsible card usage, and
            helping you make informed decisions — not selling products or creating hype.
            Every piece of advice is rooted in practical experience and genuine care
            for your financial well-being.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PhilosophySection;
