import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Calendar } from "lucide-react";
import { z } from "zod";

/**
 * AUTOMATION ARCHITECTURE:
 * 
 * 1. User submits form → Redirects to Calendly scheduling page.
 * 2. Calendly creates a Google Calendar event automatically.
 * 3. Google Calendar sends email reminders to both parties.
 * 4. (Optional) Use Make.com / Zapier to:
 *    - Send WhatsApp confirmation via Twilio or WhatsApp Business API.
 *    - Log form data to Google Sheets.
 *    - Send follow-up emails.
 * 
 * All of the above works on FREE plans:
 * - Calendly Free: 1 event type, unlimited bookings.
 * - Google Calendar: Free reminders.
 * - Make.com Free: 1,000 operations/month.
 */

const CALENDLY_URL = "https://calendly.com/YOURUSERNAME/consultation";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^\+?\d[\d\s-]{7,14}$/, "Enter a valid phone number with country code"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  message: z.string().max(1000, "Maximum 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const BookingFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!submitted) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to Calendly for scheduling
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
          <div className="inline-flex p-5 rounded-full bg-accent text-accent-foreground">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
            Thanks! Please choose your preferred call time.
          </h2>
          <p className="text-muted-foreground">
            Redirecting to Calendly in <span className="font-bold text-primary">{countdown}</span> seconds...
          </p>
          <Button size="lg" className="gap-2 text-base rounded-xl" asChild>
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
    <section className="section-padding bg-background" id="booking">
      <div className="container-narrow max-w-xl">
        <div className="text-center mb-10">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Book Now</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Schedule Your Consultation
          </h2>
          <p className="text-muted-foreground">
            Fill in your details and we'll get your call booked.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-card p-6 md:p-8 rounded-2xl card-elevated border border-border">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="John Doe" maxLength={100} className={errors.name ? "border-destructive" : ""} />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (with country code) *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" maxLength={16} className={errors.phone ? "border-destructive" : ""} />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message / Requirement (optional)</Label>
            <Textarea id="message" name="message" placeholder="Tell us what you'd like to discuss..." rows={4} maxLength={1000} />
          </div>

          <Button type="submit" size="lg" className="w-full text-base py-6 rounded-xl text-lg">
            Submit & Book Your Call
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            After submitting, you'll be redirected to Calendly to pick your preferred time slot.
          </p>
        </form>
      </div>
    </section>
  );
};

export default BookingFormSection;
