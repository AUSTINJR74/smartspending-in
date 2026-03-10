import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Calendar, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { z } from "zod";

/**
 * AUTOMATION ARCHITECTURE:
 * 1. Form → Calendly booking
 * 2. Calendly → Google Calendar event
 * 3. Google Calendar → reminder notification
 * All FREE tools.
 */

const CALENDLY_URL = "https://calendly.com/genzzcraft/30min";

const consultationTypes = [
  "Life Insurance",
  "Health Insurance",
  "General Insurance",
  "Policy Upgrade Advice",
];

const discussionTopics = [
  "New Policy",
  "Existing Policy Review",
  "Claim Assistance",
  "Coverage Comparison",
  "Premium Optimization",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^\+\d{1,3}\s?\d{6,14}$/, "Enter valid number with country code (e.g. +91 9876543210)"),
  email: z.string().trim().min(1, "Email is required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email (e.g. name@example.com)"),
  consultationTypes: z.array(z.string()).min(1, "Select at least one consultation type"),
  discussionTopics: z.array(z.string()).min(1, "Select at least one discussion topic"),
  message: z.string().max(1000).optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

const InsuranceForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState(2);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

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

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    errorKey: keyof FormErrors
  ) => {
    setList((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);
    if (errors[errorKey]) setErrors((e) => ({ ...e, [errorKey]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      consultationTypes: selectedTypes,
      discussionTopics: selectedTopics,
      message: (fd.get("message") as string) || "",
    };
    const result = formSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormErrors;
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
      <section className="section-padding bg-background" id="insurance-booking">
        <div className="container-narrow max-w-lg text-center space-y-6">
          <div className="inline-flex p-5 rounded-full bg-accent text-primary animate-scale-in">
            <CheckCircle className="w-14 h-14" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground animate-fade-in-up">
            Great! Please select your preferred time slot.
          </h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Redirecting to Calendly in <span className="font-bold text-primary">{countdown}s</span>
          </p>
          <Button size="lg" className="gap-2 text-lg font-bold px-10 h-14 rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 ring-2 ring-primary/20 ring-offset-2 ring-offset-background cta-glow animate-fade-in-up" style={{ animationDelay: "0.2s" }} asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Open Calendly Now
            </a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-card/50 relative" id="insurance-booking">
      <div className="container-narrow max-w-xl relative z-10">
        <div className="text-center mb-10">
          <p className="section-label">Book Now</p>
          <h2 className="section-title mb-3">Insurance Consultation</h2>
          <p className="section-subtitle mt-0">Tell us about your insurance needs.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-background p-7 md:p-9 rounded-2xl border border-border shadow-lg">
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-name" className="text-sm font-medium">Full Name *</Label>
            <Input id="ins-name" name="name" placeholder="John Doe" maxLength={100} className={`h-12 rounded-xl transition-all ${errors.name ? "border-destructive ring-2 ring-destructive/20 bg-destructive/5" : ""}`} />
            {errors.name && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-phone" className="text-sm font-medium">Phone (with country code) *</Label>
            <Input id="ins-phone" name="phone" type="tel" placeholder="+91 9876543210" maxLength={16} className={`h-12 rounded-xl transition-all ${errors.phone ? "border-destructive ring-2 ring-destructive/20 bg-destructive/5" : ""}`} />
            {errors.phone && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-email" className="text-sm font-medium">Email Address *</Label>
            <Input id="ins-email" name="email" type="email" placeholder="name@example.com" maxLength={255} className={`h-12 rounded-xl transition-all ${errors.email ? "border-destructive ring-2 ring-destructive/20 bg-destructive/5" : ""}`} />
            {errors.email && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.email}</p>}
          </div>

          {/* Consultation Type - Checkboxes */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Consultation Type *</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {consultationTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                    selectedTypes.includes(type)
                      ? "border-primary/40 bg-accent"
                      : "border-border hover:border-primary/20 hover:bg-muted/50"
                  }`}
                >
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() => toggleItem(type, selectedTypes, setSelectedTypes, "consultationTypes")}
                  />
                  <span className="text-sm font-medium text-foreground">{type}</span>
                </label>
              ))}
            </div>
            {errors.consultationTypes && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.consultationTypes}</p>}
          </div>

          {/* Discussion Topic - Checkboxes */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Discussion Topic *</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {discussionTopics.map((topic) => (
                <label
                  key={topic}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                    selectedTopics.includes(topic)
                      ? "border-primary/40 bg-accent"
                      : "border-border hover:border-primary/20 hover:bg-muted/50"
                  }`}
                >
                  <Checkbox
                    checked={selectedTopics.includes(topic)}
                    onCheckedChange={() => toggleItem(topic, selectedTopics, setSelectedTopics, "discussionTopics")}
                  />
                  <span className="text-sm font-medium text-foreground">{topic}</span>
                </label>
              ))}
            </div>
            {errors.discussionTopics && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.discussionTopics}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-message" className="text-sm font-medium">
              Describe Your Requirement <span className="text-muted-foreground font-normal">(optional)</span>
            </Label>
            <Textarea id="ins-message" name="message" placeholder="E.g., I need guidance on choosing the best health insurance plan for my family..." rows={3} maxLength={1000} className="rounded-xl" />
          </div>

          <Button type="submit" size="lg" className="w-full h-13 text-base rounded-xl text-lg gap-2 hover:scale-[1.01] transition-all shadow-md hover:shadow-lg">
            Submit & Book Your Call
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <Shield className="w-3.5 h-3.5" />
            Your information is secure and will never be shared.
          </div>
        </form>
      </div>
    </section>
  );
};

export default InsuranceForm;
