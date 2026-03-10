import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Calendar, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { z } from "zod";

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
          <div className="inline-flex p-4 rounded-full bg-accent text-primary">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Now select your preferred time slot
          </h2>
          <p className="text-muted-foreground">
            Redirecting to Calendly in <span className="font-bold text-primary">{countdown}s</span>
          </p>
          <Button size="lg" className="gap-2 rounded-lg" asChild>
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
      <p className="text-sm text-destructive flex items-center gap-1.5 mt-1">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        {msg}
      </p>
    ) : null;

  return (
    <section className="section-padding bg-background" id="booking">
      <div className="container-narrow max-w-lg">
        <div className="text-center mb-10">
          <p className="section-label">Connect</p>
          <h2 className="section-title">Get Personal Guidance</h2>
          <p className="section-subtitle mt-2">Fill in your details — it only takes a minute.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 bg-card p-7 md:p-9 rounded-xl border border-border shadow-sm"
        >
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
            <Input id="name" name="name" placeholder="Your name" className={`h-11 rounded-lg ${errors.name ? "border-destructive" : ""}`} />
            <FieldError msg={errors.name} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm font-medium">WhatsApp Number *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 9876543210" className={`h-11 rounded-lg ${errors.phone ? "border-destructive" : ""}`} />
            <FieldError msg={errors.phone} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
            <Input id="email" name="email" type="email" placeholder="name@example.com" className={`h-11 rounded-lg ${errors.email ? "border-destructive" : ""}`} />
            <FieldError msg={errors.email} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city" className="text-sm font-medium">City *</Label>
            <Input id="city" name="city" placeholder="Your city" className={`h-11 rounded-lg ${errors.city ? "border-destructive" : ""}`} />
            <FieldError msg={errors.city} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="question" className="text-sm font-medium">Biggest question about cards <span className="text-muted-foreground font-normal">(optional)</span></Label>
            <Textarea id="question" name="question" placeholder="E.g., Which credit card is best for travel rewards?" rows={3} maxLength={500} className="rounded-lg" />
          </div>

          <Button type="submit" size="lg" className="w-full h-12 rounded-lg gap-2">
            Submit & Get Guidance
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5" />
            Your information is secure and will never be shared.
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingFormSection;
