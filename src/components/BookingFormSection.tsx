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
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  Shield,
  AlertCircle,
  Sparkles,
  Loader2,
} from "lucide-react";
import { z } from "zod";
import AnimatedSection from "./AnimatedSection";
import guidanceImg from "@/assets/guidance-illustration.png";

const WEBHOOK_URL = "https://hook.us2.make.com/bonu3pn6xhzjaecjy3vk0ik02xvpr6gq";
const MAKE_API_KEY = "F4EyEzWq4umOrc4zpT8PNxq4xFigSB6N";
const CALENDLY_BASE = "https://calendly.com/genzzcraft/30min";

const consultationTypes = [
  "Life Insurance",
  "Health Insurance",
  "General Insurance",
  "Credit Cards",
  "Policy Upgrade Advice",
  "Other",
];

const discussionTopics = [
  "New Policy",
  "Existing Policy Review",
  "Claim Assistance",
  "Coverage Comparison",
  "Premium Optimization",
  "Rewards & Benefits",
  "Other",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\+?\d{10,15}$/, "Enter a valid phone number with country code"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),
  consultationType: z.string().min(1, "Select a consultation type"),
  discussionTopic: z.string().min(1, "Select a discussion topic"),
  requirement: z.string().max(1000).optional(),
  param7: z.string().max(500).optional(),
  param8: z.string().max(500).optional(),
  param9: z.string().max(500).optional(),
  param10: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const buildCalendlyUrl = (data: FormData) => {
  const params = new URLSearchParams();
  params.set("name", data.name);
  params.set("email", data.email);
  params.set("a1", data.phone);
  params.set("a2", data.consultationType);
  params.set("a3", data.discussionTopic);
  if (data.requirement) params.set("a4", data.requirement);
  if (data.param7) params.set("a5", data.param7);
  if (data.param8) params.set("a6", data.param8);
  if (data.param9) params.set("a7", data.param9);
  if (data.param10) params.set("a8", data.param10);
  return `${CALENDLY_BASE}?${params.toString()}`;
};

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 animate-fade-in-up">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {msg}
    </p>
  ) : null;

const BookingFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(2);
  const [calendlyUrl, setCalendlyUrl] = useState(CALENDLY_BASE);
  const [consultationType, setConsultationType] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");

  useEffect(() => {
    if (!submitted) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(calendlyUrl, "_blank");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, calendlyUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);

    const fd = new FormData(e.currentTarget);
    const raw: FormData = {
      name: (fd.get("name") as string) || "",
      phone: (fd.get("phone") as string) || "",
      email: (fd.get("email") as string) || "",
      consultationType,
      discussionTopic,
      requirement: (fd.get("requirement") as string) || "",
      param7: (fd.get("param7") as string) || "",
      param8: (fd.get("param8") as string) || "",
      param9: (fd.get("param9") as string) || "",
      param10: (fd.get("param10") as string) || "",
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
    setSubmitting(true);

    try {
      const payload = {
        name: raw.name,
        email: raw.email,
        phone: raw.phone,
        consultation_type: raw.consultationType,
        discussion_topic: raw.discussionTopic,
        requirement: raw.requirement,
        param7: raw.param7,
        param8: raw.param8,
        param9: raw.param9,
        param10: raw.param10,
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      setCalendlyUrl(buildCalendlyUrl(raw));
      setSubmitted(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="booking">
        <div className="container-narrow max-w-lg text-center space-y-6">
          <div className="inline-flex p-5 rounded-full bg-accent text-primary animate-scale-in">
            <CheckCircle className="w-14 h-14" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground animate-fade-in-up">
            Great! Please select your preferred call time.
          </h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Redirecting to Calendly in{" "}
            <span className="font-bold text-primary">{countdown}s</span>
          </p>
          <Button
            size="lg"
            className="gap-2 text-lg font-bold px-10 h-14 rounded-xl gradient-bg border-0 shadow-xl shadow-primary/30 ring-2 ring-primary/20 ring-offset-2 ring-offset-background cta-glow animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            asChild
          >
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Open Calendly Now
            </a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding relative overflow-hidden" id="booking">
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
                Have questions about credit cards, insurance, or rewards? Fill in your details and
                get personalized, no-cost guidance from Madhan.
              </p>
              <img
                src={guidanceImg}
                alt="Personal financial guidance"
                className="w-52 md:w-64 mx-auto md:mx-0 object-contain"
              />
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
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="booking-name"
                  name="name"
                  placeholder="Your name"
                  maxLength={100}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.name} />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-phone" className="text-sm font-medium">
                  Phone (with country code) *
                </Label>
                <Input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  maxLength={16}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.phone ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.phone} />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="booking-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  maxLength={255}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.email} />
              </div>

              {/* Consultation Type */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Consultation Type *</Label>
                <Select value={consultationType} onValueChange={(v) => { setConsultationType(v); if (errors.consultationType) setErrors((e) => ({ ...e, consultationType: undefined })); }}>
                  <SelectTrigger className={`h-12 rounded-xl border-border/80 ${errors.consultationType ? "border-destructive" : ""}`}>
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {consultationTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError msg={errors.consultationType} />
              </div>

              {/* Discussion Topic */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Discussion Topic *</Label>
                <Select value={discussionTopic} onValueChange={(v) => { setDiscussionTopic(v); if (errors.discussionTopic) setErrors((e) => ({ ...e, discussionTopic: undefined })); }}>
                  <SelectTrigger className={`h-12 rounded-xl border-border/80 ${errors.discussionTopic ? "border-destructive" : ""}`}>
                    <SelectValue placeholder="Select discussion topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {discussionTopics.map((topic) => (
                      <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError msg={errors.discussionTopic} />
              </div>

              {/* Requirement */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-requirement" className="text-sm font-medium">
                  Describe Your Requirement{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="booking-requirement"
                  name="requirement"
                  placeholder="E.g., I need guidance on choosing the best health insurance plan..."
                  rows={3}
                  maxLength={1000}
                  className="rounded-xl border-border/80 focus:border-primary"
                />
              </div>

              {/* Additional Parameters (hidden/optional) */}
              <input type="hidden" name="param7" value="" />
              <input type="hidden" name="param8" value="" />
              <input type="hidden" name="param9" value="" />
              <input type="hidden" name="param10" value="" />

              {/* API Error */}
              {apiError && (
                <p className="text-sm text-destructive flex items-center gap-1.5 bg-destructive/10 px-3 py-2 rounded-lg animate-fade-in-up">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {apiError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full h-14 rounded-xl gap-2 text-lg font-bold gradient-bg border-0 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 ring-2 ring-primary/20 ring-offset-2 ring-offset-background cta-glow disabled:opacity-70 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit & Book Your Call
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
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
