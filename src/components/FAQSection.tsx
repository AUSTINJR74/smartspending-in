import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I schedule a call?",
    a: "Fill out the guidance form with your details. After submitting, you'll be redirected to Calendly where you can pick a convenient time slot.",
  },
  {
    q: "Is this free?",
    a: "Yes, the initial consultation is completely free — no hidden fees, no obligations.",
  },
  {
    q: "How will I get reminders?",
    a: "Once you book through Calendly, you'll receive automatic email reminders and a Google Calendar invite.",
  },
  {
    q: "Can I reschedule?",
    a: "Absolutely! Your confirmation email includes a reschedule link. Change your slot anytime.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-narrow max-w-2xl">
        <div className="text-center mb-12">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">Everything you need to know before reaching out.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 text-sm">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
