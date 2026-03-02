import { Award, Target, Users } from "lucide-react";
import profileImg from "@/assets/madhan-profile.png";

const highlights = [
  { icon: Award, title: "Certified Expert", desc: "Years of experience in financial consulting and strategic guidance." },
  { icon: Target, title: "Goal-Oriented", desc: "Every session is focused on actionable outcomes for your success." },
  { icon: Users, title: "500+ Clients", desc: "Trusted by individuals and businesses across the country." },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-card" id="about">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative mx-auto md:mx-0">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-4 ring-border shadow-lg">
              <img
                src={profileImg}
                alt="Professional Consultant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-heading font-semibold text-sm shadow-lg">
              Available Now
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-primary font-medium text-sm uppercase tracking-wider">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Your Trusted Consultation Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated professional helping individuals and businesses make smarter decisions. With a focus on simplicity and clarity, I provide guidance that cuts through the noise and delivers real results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's financial planning, smart spending strategies, or personalized advice, every consultation is designed around your unique goals.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background card-elevated">
              <div className="p-3 rounded-xl bg-accent text-accent-foreground mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
