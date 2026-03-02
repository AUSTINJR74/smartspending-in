import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

const interests = [
  "Credit Card Guidance",
  "Debit Card Benefits",
  "Rewards & Cashback",
  "EMI Guidance",
  "Health Insurance",
  "Term Insurance",
  "Insurance Awareness",
];

const LeadFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [cardUsage, setCardUsage] = useState("debit-only");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="lead-form">
        <div className="container-narrow max-w-xl text-center space-y-4">
          <div className="inline-flex p-4 rounded-full bg-accent text-accent-foreground">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
            Thank you!
          </h2>
          <p className="text-muted-foreground">
            We'll reach out shortly with personalized guidance.
          </p>
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

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-2xl card-elevated">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" placeholder="Your full name" required maxLength={100} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input id="whatsapp" type="tel" placeholder="+91 XXXXX XXXXX" required maxLength={15} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" type="email" placeholder="you@example.com" maxLength={255} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City / Location *</Label>
            <Input id="city" placeholder="Your city" required maxLength={100} />
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
              placeholder="What confuses you most about cards or finance?"
              rows={3}
              maxLength={1000}
            />
          </div>

          <div className="space-y-3">
            <Label>Interested in</Label>
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
