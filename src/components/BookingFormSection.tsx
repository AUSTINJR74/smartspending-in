import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  ArrowRight,
  Shield,
  AlertCircle,
  Sparkles,
  Loader2,
} from "lucide-react";
import { z } from "zod";
import AnimatedSection from "./AnimatedSection";
import guidanceImg from "@/assets/guidance-illustration.png";
import siteContent from "@/data/siteContent";

const content = siteContent.booking;

const WEBHOOK_URL = "https://hook.us2.make.com/uhlislksyvwsox4p4m76u4da6b5f77bw";
const MAKE_API_KEY = "F4EyEzWq4umOrc4zpT8PNxq4xFigSB6N";
const CALENDLY_BASE = "https://calendly.com/genzzcraft/consultations";
const CALENDLY_SUCCESS_WEBHOOK = "https://hook.us2.make.com/shh4vdb98lhjp37eyxmqz220kdquxzm7";
const CALENDLY_API_TOKEN = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzc1OTE4NjA5LCJqdGkiOiJmOWY2ZDUwZi0yZjBhLTQ5MTEtYTEzZi0zYjQ3ZjhjNTkxMjgiLCJ1c2VyX3V1aWQiOiIwN2MwMzg5ZS0wNjNkLTRhMWItOTY3MS04NDlkN2Q4NjA2ZjgiLCJzY29wZSI6ImF2YWlsYWJpbGl0eTpyZWFkIGF2YWlsYWJpbGl0eTp3cml0ZSBldmVudF90eXBlczpyZWFkIGV2ZW50X3R5cGVzOndyaXRlIGxvY2F0aW9uczpyZWFkIHJvdXRpbmdfZm9ybXM6cmVhZCBzaGFyZXM6d3JpdGUgc2NoZWR1bGVkX2V2ZW50czpyZWFkIHNjaGVkdWxlZF9ldmVudHM6d3JpdGUgc2NoZWR1bGluZ19saW5rczp3cml0ZSBncm91cHM6cmVhZCBvcmdhbml6YXRpb25zOnJlYWQgb3JnYW5pemF0aW9uczp3cml0ZSB1c2VyczpyZWFkIGFjdGl2aXR5X2xvZzpyZWFkIGRhdGFfY29tcGxpYW5jZTp3cml0ZSBvdXRnb2luZ19jb21tdW5pY2F0aW9uczpyZWFkIHdlYmhvb2tzOnJlYWQgd2ViaG9va3M6d3JpdGUifQ.P5wmT77yhuy3bi7Em6XaddeLIFE8fdtklZQtuU4eDpeCo2Kt60SH2Vuh7570hL6ZXgYm8qH3FB-iQLJw_Y1DaA";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget(opts: {
        url: string;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
      }): void;
    };
  }
}

const consultationTypes = content.consultationTypes;
const discussionTopics = content.discussionTopics;

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

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="text-sm text-destructive flex items-center gap-1.5 mt-1.5 animate-fade-in-up">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {msg}
    </p>
  ) : null;

const BookingFormSection = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState("");
  const [discussionTopic, setDiscussionTopic] = useState("");
  const formDataRef = useRef<FormData | null>(null);

  // Listen for Calendly scheduling success → POST webhook → navigate to /thank-you
  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      if (!e.data?.event || e.data.event !== "calendly.event_scheduled") return;
      const saved = formDataRef.current;
      if (!saved) return;

      try {
        const eventUri = e.data.payload?.event?.uri;
        const res = await fetch(eventUri, {
          headers: {
            Authorization: `Bearer ${CALENDLY_API_TOKEN}`,
          },
        });
        const eventData = await res.json();
        const utcTime = eventData.resource?.start_time;
        const scheduledTime = new Date(utcTime).toLocaleString();

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

  const openCalendlyPopup = useCallback((data: FormData) => {
    const customAnswers: Record<string, string> = {
      a1: data.phone,
      a2: data.consultationType,
      a3: data.discussionTopic,
    };
    if (data.requirement) customAnswers.a4 = data.requirement;

    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_BASE,
        prefill: {
          name: data.name,
          email: data.email,
          customAnswers,
        },
      });
    }
  }, []);

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
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-background" id="booking">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-50 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          {/* Left - Pitch */}
          <AnimatedSection>
            <div className="text-center md:text-left space-y-6">
              <p className="section-label">{content.sectionLabel}</p>
              <h2 className="section-title">{content.sectionTitle}</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {content.sectionDescription}
              </p>
              <img
                src={guidanceImg}
                alt="Personal financial guidance"
                className="w-52 md:w-64 mx-auto md:mx-0 object-contain"
              />
              <div className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{content.freeNote}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 bg-white p-5 md:p-10 rounded-3xl border border-border/60 shadow-xl shadow-primary/5"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-name" className="text-sm font-medium">
                  {content.fields.name.label}
                </Label>
                <Input
                  id="booking-name"
                  name="name"
                  placeholder={content.fields.name.placeholder}
                  maxLength={100}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.name} />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-phone" className="text-sm font-medium">
                  {content.fields.phone.label}
                </Label>
                <Input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder={content.fields.phone.placeholder}
                  maxLength={16}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.phone ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.phone} />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="booking-email" className="text-sm font-medium">
                  {content.fields.email.label}
                </Label>
                <Input
                  id="booking-email"
                  name="email"
                  type="email"
                  placeholder={content.fields.email.placeholder}
                  maxLength={255}
                  className={`h-12 rounded-xl border-border/80 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                />
                <FieldError msg={errors.email} />
              </div>

              {/* Consultation Type */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">{content.fields.consultationType.label}</Label>
                <Select value={consultationType} onValueChange={(v) => { setConsultationType(v); if (errors.consultationType) setErrors((e) => ({ ...e, consultationType: undefined })); }}>
                  <SelectTrigger className={`h-12 rounded-xl border-border/80 ${errors.consultationType ? "border-destructive" : ""}`}>
                    <SelectValue placeholder={content.fields.consultationType.placeholder} />
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
                <Label className="text-sm font-medium">{content.fields.discussionTopic.label}</Label>
                <Select value={discussionTopic} onValueChange={(v) => { setDiscussionTopic(v); if (errors.discussionTopic) setErrors((e) => ({ ...e, discussionTopic: undefined })); }}>
                  <SelectTrigger className={`h-12 rounded-xl border-border/80 ${errors.discussionTopic ? "border-destructive" : ""}`}>
                    <SelectValue placeholder={content.fields.discussionTopic.placeholder} />
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
                  {content.fields.requirement.label}{" "}
                  <span className="text-muted-foreground font-normal">{content.fields.requirement.optionalLabel}</span>
                </Label>
                <Textarea
                  id="booking-requirement"
                  name="requirement"
                  placeholder={content.fields.requirement.placeholder}
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
                className="w-full h-14 rounded-full gap-2 text-lg font-bold gradient-bg text-primary-foreground border-0 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {content.submittingButton}
                  </>
                ) : (
                  <>
                    {content.submitButton}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                <Shield className="w-3.5 h-3.5" />
                {content.securityNote}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
