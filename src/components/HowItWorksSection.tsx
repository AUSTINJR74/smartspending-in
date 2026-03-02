import { ClipboardList, CalendarCheck, Bell } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Fill the Form",
    description: "Share your details and requirements so we can prepare for your session.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Select Your Call Time",
    description: "Choose a convenient time slot from the Calendly scheduler.",
  },
  {
    icon: Bell,
    step: "03",
    title: "Get Confirmation & Reminder",
    description: "Receive instant confirmation and automated reminders before your call.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-card" id="how-it-works">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-5 relative">
                  <step.icon className="w-8 h-8" />
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-heading">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[250px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
