import AnimatedSection from "./AnimatedSection";
import faqImg from "@/assets/faq-illustration.png";

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/40" id="faq">
      <div className="container-narrow max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know before reaching out.</p>
            <div className="flex justify-center mt-10">
              <img src={faqImg} alt="Frequently asked questions" className="w-36 md:w-44 object-contain" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4">
            {[
              { q: "How do I schedule a call?", a: "Fill out the guidance form with your details. After submitting, you'll be redirected to Calendly where you can pick a convenient time slot." },
              { q: "Is this free?", a: "Yes, the initial consultation is completely free — no hidden fees, no obligations." },
              { q: "How will I get reminders?", a: "Once you book through Calendly, you'll receive automatic email reminders and a Google Calendar invite." },
              { q: "Can I reschedule?", a: "Absolutely! Your confirmation email includes a reschedule link. Change your slot anytime." },
            ].map((faq, i) => (
              <details key={i} className="group bg-background border border-border rounded-2xl px-7 py-5 cursor-pointer transition-all hover:border-primary/20 hover:shadow-sm">
                <summary className="font-semibold text-foreground list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-muted-foreground text-xl leading-none transition-transform duration-200 group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4 pt-4 border-t border-border">
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
