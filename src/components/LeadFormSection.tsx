import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import { z } from "zod";

const interests = [
  "Credit Card Guidance",
  "Debit Card Benefits",
  "Rewards & Cashback",
  "EMI Guidance",
  "Health Insurance",
  "Term Insurance",
  "Insurance Awareness",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100, "Name is too long"),
  whatsapp: z
    .string()
    .trim()
    .min(1, "WhatsApp number is required")
    .regex(/^\+?\d[\d\s-]{7,14}$/, "Enter a valid phone number"),
  email: z
    .string()
    .trim()
    .max(255)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, "Enter a valid email"),
  city: z.string().trim().min(1, "City is required").max(100, "City name is too long"),
  cardUsage: z.enum(["debit-only", "credit-user", "new-to-cards"], {
    required_error: "Select your card usage",
  }),
  question: z.string().max(1000, "Maximum 1000 characters").optional(),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const LeadFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [cardUsage, setCardUsage] = useState("debit-only");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
    // Clear interest error on change
    if (errors.interests) {
      setErrors((e) => ({ ...e, interests: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const raw = {
      name: formData.get("name") as string,
      whatsapp: formData.get("whatsapp") as string,
      email: (formData.get("email") as string) || "",
      city: formData.get("city") as string,
      cardUsage,
      question: (formData.get("question") as string) || "",
      interests: selectedInterests,
    };

    const result = formSchema.safeParse(raw);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="lead-form">
        <div className="container-narrow max-w-2xl text-center space-y-6">
          <div className="inline-flex p-4 rounded-full bg-accent text-accent-foreground">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
            Thank you!
          </h2>
          <p className="text-muted-foreground">
            We'll reach out shortly. You can also book a free consultation below:
          </p>
          <div className="rounded-2xl overflow-hidden border border-border bg-card card-elevated">
            <iframe
              src="https://calendly.com/madhan"
              width="100%"
              height="660"
              frameBorder="0"
              title="Book a consultation with Madhan"
              className="w-full"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background" id="lead-form">
      <div className="container-narrow max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
            Get Personal Guidance
          </h2>
          <p className="text-muted-foreground">
            Share your details and let's simplify your card journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-card p-6 md:p-8 rounded-2xl card-elevated">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="Your full name" maxLength={100} className={errors.name ? "border-destructive" : ""} />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+91 XXXXX XXXXX" maxLength={15} className={errors.whatsapp ? "border-destructive" : ""} />
            {errors.whatsapp && <p className="text-sm text-destructive">{errors.whatsapp}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City / Location *</Label>
            <Input id="city" name="city" placeholder="Your city" maxLength={100} className={errors.city ? "border-destructive" : ""} />
            {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
          </div>

          <div className="space-y-3">
            <Label>Current Card Usage *</Label>
            <RadioGroup value={cardUsage} onValueChange={setCardUsage} className="flex flex-col gap-2">
              {[
                { value: "debit-only", label: "Debit only" },
                { value: "credit-user", label: "Credit card user" },
                { value: "new-to-cards", label: "New to cards" },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center gap-2">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value} className="font-normal cursor-pointer">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">Biggest confusion / question</Label>
            <Textarea
              id="question"
              name="question"
              placeholder="What confuses you most about cards or finance?"
              rows={3}
              maxLength={1000}
            />
          </div>

          <div className="space-y-3">
            <Label>Interested in *</Label>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedInterests.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  />
                  <span className="text-sm text-foreground/90">{interest}</span>
                </label>
              ))}
            </div>
            {errors.interests && <p className="text-sm text-destructive">{errors.interests}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full text-base">
            Submit & Get Guidance
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
