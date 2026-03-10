import AnimatedSection from "./AnimatedSection";

const FAQSection = () => {
  return (
    <section className="section-padding bg-card" id="faq">
      <div className="container-narrow max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know before reaching out.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-3">
            {[
              { q: "How do I schedule a call?", a: "Fill out the guidance form with your details. After submitting, you'll be redirected to Calendly where you can pick a convenient time slot." },
              { q: "Is this free?", a: "Yes, the initial consultation is completely free — no hidden fees, no obligations." },
              { q: "How will I get reminders?", a: "Once you book through Calendly, you'll receive automatic email reminders and a Google Calendar invite." },
              { q: "Can I reschedule?", a: "Absolutely! Your confirmation email includes a reschedule link. Change your slot anytime." },
            ].map((faq, i) => (
              <details key={i} className="group bg-background border border-border rounded-xl px-6 py-4 cursor-pointer transition-all hover:border-primary/20">
                <summary className="font-semibold text-foreground text-sm list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 pt-3 border-t border-border">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
