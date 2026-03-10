import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Calendar, ArrowRight, Shield, AlertCircle, Sparkles } from "lucide-react";
import { z } from "zod";
import AnimatedSection from "./AnimatedSection";
import guidanceImg from "@/assets/guidance-illustration.png";

const CALENDLY_URL = "https://calendly.com/genzzcraft/30min";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "WhatsApp number is required").regex(/^\+?\d{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  city: z.string().trim().min(1, "City is required"),
  question: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const BookingFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (!submitted) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(CALENDLY_URL, "_blank");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: (fd.get("email") as string) || "",
      city: fd.get("city") as string,
      question: (fd.get("question") as string) || "",
    };
    const result = formSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="booking">
        <div className="container-narrow max-w-lg text-center space-y-6">
          <div className="inline-flex p-5 rounded-full bg-accent text-primary">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Now select your preferred time slot
          </h2>
          <p className="text-muted-foreground">
            Redirecting to Calendly in <span className="font-bold text-primary">{countdown}s</span>
          </p>
          <Button size="lg" className="gap-2 rounded-xl gradient-bg shadow-lg shadow-primary/25 border-0" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Open Calendly Now
            </a>
          </Button>
        </div>
      </section>
    );
  }

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        {msg}
      </p>
    ) : null;

  return (
    <section className="section-padding relative overflow-hidden" id="booking">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-accent/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          {/* Left - Pitch */}
          <AnimatedSection>
            <div className="text-center md:text-left space-y-6">
              <p className="section-label">Connect</p>
              <h2 className="section-title">Get Personal Guidance</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Have questions about credit cards, insurance, or rewards? Fill in your details and get personalized, no-cost guidance from Madhan.
              </p>
              <img src={guidanceImg} alt="Personal financial guidance" className="w-52 md:w-64 mx-auto md:mx-0 object-contain" />
              <div className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>100% free — no strings attached</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 bg-background p-8 md:p-10 rounded-2xl border border-border shadow-lg"
            >
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input id="name" name="name" placeholder="Your name" className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.name ? "border-destructive" : ""}`} />
                <FieldError msg={errors.name} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">WhatsApp Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 9876543210" className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.phone ? "border-destructive" : ""}`} />
                <FieldError msg={errors.phone} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.email ? "border-destructive" : ""}`} />
                <FieldError msg={errors.email} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                <Input id="city" name="city" placeholder="Your city" className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.city ? "border-destructive" : ""}`} />
                <FieldError msg={errors.city} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="question" className="text-sm font-medium">Biggest question about cards <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Textarea id="question" name="question" placeholder="E.g., Which credit card is best for travel rewards?" rows={3} maxLength={500} className="rounded-xl border-border/80 focus:border-primary" />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-13 rounded-xl gap-2 text-base gradient-bg border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.01] transition-all duration-300"
              >
                Submit & Get Guidance
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                <Shield className="w-3.5 h-3.5" />
                Your information is secure and will never be shared.
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
