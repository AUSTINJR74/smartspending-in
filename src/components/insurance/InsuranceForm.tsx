import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Shield, AlertCircle } from "lucide-react";
import { z } from "zod";
import siteContent from "@/data/siteContent";
import { validateMobile } from "@/lib/utils";

const { form: formContent } = siteContent.insurance;

/**
 * AUTOMATION ARCHITECTURE:
 * 1. Form → Calendly booking
 * 2. Calendly → Google Calendar event
 * 3. Google Calendar → reminder notification
 * All FREE tools.
 */

const WEBHOOK_URL = "https://hook.us2.make.com/uhlislksyvwsox4p4m76u4da6b5f77bw";
const MAKE_API_KEY = "F4EyEzWq4umOrc4zpT8PNxq4xFigSB6N";
const CALENDLY_BASE = "https://calendly.com/genzzcraft/consultations";
const CALENDLY_SUCCESS_WEBHOOK = "https://hook.us2.make.com/shh4vdb98lhjp37eyxmqz220kdquxzm7";

const consultationTypes = formContent.consultationTypes;
const discussionTopics = formContent.discussionTopics;

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine((value) => {
      const error = validateMobile(value);
      return error === '';
    }, "Enter a valid 10-digit phone number"),
  email: z.string().trim().min(1, "Email is required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email (e.g. name@example.com)"),
  consultationTypes: z.array(z.string()).min(1, "Select at least one consultation type"),
  discussionTopics: z.array(z.string()).min(1, "Select at least one discussion topic"),
  message: z.string().max(1000).optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

type InsuranceRawData = {
  name: string; phone: string; email: string;
  consultationTypes: string[]; discussionTopics: string[]; message: string;
};

const InsuranceForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const formDataRef = useRef<InsuranceRawData | null>(null);

  // Listen for Calendly scheduling success → POST webhook → navigate to /thank-you
  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      if (!e.data?.event || e.data.event !== "calendly.event_scheduled") return;
      const saved = formDataRef.current;
      if (!saved) return;

      try {
        const scheduledTime =
          e.data.payload?.event?.start_time || new Date().toISOString();

        await fetch(CALENDLY_SUCCESS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "invitee.created",
            payload: {
              name: saved.name,
              email: saved.email,
              scheduled_time: scheduledTime,
            },
          }),
        });
      } catch (err) {
        console.error("Calendly success webhook error:", err);
      }

      // Auto-close the Calendly popup overlay
      const overlay = document.querySelector(".calendly-overlay");
      if (overlay) overlay.remove();

      const params = new URLSearchParams();
      if (saved.name) params.set("name", saved.name);
      if (saved.email) params.set("email", saved.email);
      navigate(`/thank-you?${params.toString()}`);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  const openCalendlyPopup = useCallback((data: InsuranceRawData) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_BASE,
        prefill: {
          name: data.name,
          email: data.email,
          customAnswers: {
            a1: data.phone,
            a2: data.consultationTypes.join(", "),
            a3: data.discussionTopics.join(", "),
            a4: data.message,
          },
        },
      });
    }
  }, []);

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    errorKey: keyof FormErrors
  ) => {
    setList((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);
    if (errors[errorKey]) setErrors((e) => ({ ...e, [errorKey]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const payload = {
        name: raw.name,
        email: raw.email,
        phone: raw.phone,
        consultation_type: raw.consultationTypes.join(", "),
        discussion_topic: raw.discussionTopics.join(", "),
        requirement: raw.message,
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-make-apikey": MAKE_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      formDataRef.current = raw;
      openCalendlyPopup(raw);
    } catch (err) {
      console.error("Form submission error:", err);
      // Fallback: still open Calendly popup even if webhook fails
      formDataRef.current = raw;
      openCalendlyPopup(raw);
    }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="insurance-booking">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-50 blur-[100px] pointer-events-none" />
      <div className="container-narrow max-w-xl relative z-20">
        <div className="text-center mb-10">
          <p className="section-label">{formContent.sectionLabel}</p>
          <h2 className="section-title mb-3">{formContent.sectionTitle}</h2>
          <p className="section-subtitle mt-0">{formContent.sectionSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-white p-7 md:p-9 rounded-3xl border border-border/60 shadow-xl shadow-primary/5">
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-name" className="text-sm font-medium">Full Name *</Label>
            <Input id="ins-name" name="name" placeholder="John Doe" maxLength={100} className={`h-12 rounded-xl transition-all ${errors.name ? "border-destructive ring-2 ring-destructive/20 bg-destructive/5" : ""}`} />
            {errors.name && <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 bg-destructive/10 px-3 py-1.5 rounded-lg animate-fade-in-up"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="ins-phone" className="text-sm font-medium">Phone Number *</Label>
            <Input id="ins-phone" name="phone" type="tel" placeholder="9876543210" maxLength={10} className={`h-12 rounded-xl transition-all ${errors.phone ? "border-destructive ring-2 ring-destructive/20 bg-destructive/5" : ""}`} />
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

          <Button type="submit" size="lg" className="w-full h-14 rounded-full gap-2 text-lg font-bold gradient-bg text-primary-foreground hover:scale-[1.01] transition-all duration-300">
            {formContent.submitButton}
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
            <Shield className="w-3.5 h-3.5" />
            {formContent.securityNote}
          </div>
        </form>
      </div>
    </section>
  );
};

export default InsuranceForm;
