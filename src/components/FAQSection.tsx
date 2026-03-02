import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I schedule a call?",
    a: "Fill out the booking form with your details. After submitting, you'll be redirected to Calendly where you can pick a convenient time slot. The whole process takes less than 2 minutes.",
  },
  {
    q: "Is this free?",
    a: "The initial consultation is completely free — no hidden fees, no obligations. If you need ongoing support, we can discuss personalized plans during your call.",
  },
  {
    q: "How will I get reminders?",
    a: "Once you book through Calendly, you'll receive automatic email reminders and a Google Calendar invite so you never miss your session.",
  },
  {
    q: "Can I reschedule?",
    a: "Absolutely! Your confirmation email includes a reschedule link. Change your slot anytime — no questions asked.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-narrow max-w-2xl">
        <div className="text-center mb-14">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know before booking.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
