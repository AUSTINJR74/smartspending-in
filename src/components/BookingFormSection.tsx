import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Calendar, ArrowRight, Shield, Sparkles, AlertCircle } from "lucide-react";
import { z } from "zod";

/**
 * AUTOMATION ARCHITECTURE:
 *
 * 1. User submits form → Redirects to Calendly scheduling page.
 * 2. Calendly creates a Google Calendar event automatically.
 * 3. Google Calendar handles reminders.
 * 4. Optional Make.com automation can send WhatsApp confirmation.
 */

const CALENDLY_URL = "https://calendly.com/genzzcraft/30min";

const consultationTypes = [
  "Credit Card Guidance",
  "Debit Card Benefits",
  "Insurance Consultation",
  "Smart Spending Advice",
  "General Financial Consultation",
] as const;

const discussionTopics = [
  "Choosing Best Card",
  "Cashback & Rewards",
  "Insurance Comparison",
  "Policy Upgrade Advice",
  "Expense Optimization",
  "Other",
] as const;

const placeholderHints: Record<string, string> = {
  "Credit Card Guidance": "E.g., I want to know the best credit card for travel rewards and low annual fees...",
  "Debit Card Benefits": "E.g., How can I maximize cashback and benefits from my debit card usage...",
  "Insurance Consultation": "E.g., I need help comparing health insurance plans for my family...",
  "Smart Spending Advice": "E.g., I want to optimize my monthly expenses and build better saving habits...",
  "General Financial Consultation": "E.g., I'd like a general review of my finances and guidance on next steps...",
};

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^\+?\d[\d\s-]{7,14}$/, "Enter a valid phone number with country code"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  consultationType: z.string().min(1, "Select a consultation type"),
  discussionTopic: z.string().min(1, "Select a discussion topic"),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const BookingFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState(2);
  const [consultationType, setConsultationType] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");

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
      email: fd.get("email") as string,
      consultationType,
      discussionTopic,
      message: (fd.get("message") as string) || "",
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
          <div className="inline-flex p-5 rounded-full bg-accent text-primary animate-scale-in">
            <CheckCircle className="w-14 h-14" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground animate-fade-in-up">
            Great! Now select your preferred time slot.
          </h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Redirecting to Calendly in <span className="font-bold text-primary">{countdown}s</span>
          </p>
          <Button size="lg" className="gap-2 text-base rounded-xl hover:scale-[1.02] transition-all animate-fade-in-up" style={{ animationDelay: "0.2s" }} asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Open Calendly Now
            </a>
          </Button>
        </div>
      </section>
    );
  }

  const textareaPlaceholder = consultationType
    ? placeholderHints[consultationType] || "Describe your requirement..."
    : "Tell us what you'd like to discuss...";

  return (
    <section className="section-padding bg-background relative" id="booking">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background pointer-events-none" />

      <div className="container-narrow max-w-xl relative z-10">
        <div className="text-center mb-10">
          <p className="section-label">Book Now</p>
          <h2 className="section-title mb-3">Schedule Your Consultation</h2>
          <p className="section-subtitle mt-0">Fill in your details — it only takes a minute.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-background p-7 md:p-9 rounded-2xl border border-border shadow-lg">
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
            <Input id="name" name="name" placeholder="John Doe" maxLength={100} className={`h-12 rounded-xl ${errors.name ? "border-destructive" : ""}`} />
            {errors.name && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1 animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm font-medium">Phone (with country code) *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" maxLength={16} className={`h-12 rounded-xl ${errors.phone ? "border-destructive" : ""}`} />
            {errors.phone && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1 animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`} />
            {errors.email && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1 animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.email}</p>}
          </div>

          {/* Consultation Type */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Consultation Type *</Label>
            <Select value={consultationType} onValueChange={(v) => { setConsultationType(v); if (errors.consultationType) setErrors((e) => ({ ...e, consultationType: undefined })); }}>
              <SelectTrigger className={`h-12 rounded-xl ${errors.consultationType ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select consultation type" />
              </SelectTrigger>
              <SelectContent>
                {consultationTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.consultationType && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1 animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.consultationType}</p>}
          </div>

          {/* Discussion Topic */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Discussion Topic *</Label>
            <Select value={discussionTopic} onValueChange={(v) => { setDiscussionTopic(v); if (errors.discussionTopic) setErrors((e) => ({ ...e, discussionTopic: undefined })); }}>
              <SelectTrigger className={`h-12 rounded-xl ${errors.discussionTopic ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select discussion topic" />
              </SelectTrigger>
              <SelectContent>
                {discussionTopics.map((topic) => (
                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.discussionTopic && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1 animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.discussionTopic}</p>}
          </div>

          {/* Message with dynamic placeholder */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-medium flex items-center gap-1.5">
              Describe Your Requirement
              <span className="text-muted-foreground font-normal">(optional)</span>
              {consultationType && <Sparkles className="w-3.5 h-3.5 text-primary" />}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={textareaPlaceholder}
              rows={3}
              maxLength={1000}
              className="rounded-xl transition-all"
            />
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

export default BookingFormSection;
