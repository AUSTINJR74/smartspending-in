import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I schedule a call?",
    a: "Simply fill out the booking form above with your details. After submitting, you'll be redirected to Calendly where you can pick a convenient time slot. It takes less than 2 minutes!",
  },
  {
    q: "Is this free?",
    a: "The initial consultation is completely free. We believe in providing value first. If you need ongoing guidance, we can discuss personalized plans during your call.",
  },
  {
    q: "How will I get reminders?",
    a: "Once you book through Calendly, you'll receive automatic email reminders before your scheduled call. A Google Calendar invite is also sent so it's right on your calendar.",
  },
  {
    q: "Can I reschedule?",
    a: "Absolutely! The confirmation email from Calendly includes a reschedule link. You can change your slot anytime before the call — no hassle at all.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-narrow max-w-2xl">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
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
