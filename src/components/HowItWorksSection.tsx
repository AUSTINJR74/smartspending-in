import { ClipboardList, CalendarCheck, Bell } from "lucide-react";
import howItWorksImg from "@/assets/how-it-works-illustration.png";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Fill the Form",
    description: "Share your details and what you'd like help with.",
  },
  {
    icon: CalendarCheck,
    step: "2",
    title: "Pick Your Time",
    description: "Choose a convenient slot from the Calendly scheduler.",
  },
  {
    icon: Bell,
    step: "3",
    title: "Get Confirmed",
    description: "Receive instant confirmation and calendar reminders.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-card/50" id="how-it-works">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="section-label">Process</p>
          <h2 className="section-title">Three Simple Steps</h2>
          <p className="section-subtitle">
            Getting started takes less than 2 minutes. Here's how.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-12">
          <img
            src={howItWorksImg}
            alt="Steps process illustration"
            className="w-full max-w-md md:max-w-lg object-contain opacity-85 rounded-2xl"
          />
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-border via-primary/30 to-border" />

          <div className="grid sm:grid-cols-3 gap-10 md:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-background border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300 relative">
                    <step.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="absolute -top-3 -right-3 w-7 h-7 rounded-lg bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-heading shadow-md">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[220px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
