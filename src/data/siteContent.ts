import blogCreditCards from "@/assets/blog-credit-cards.png";
import blogInsuranceMyths from "@/assets/blog-insurance-myths.png";
import blogEmiTruth from "@/assets/blog-emi-truth.png";
import blogRewards from "@/assets/blog-rewards.png";
import {
  TrendingUp,
  Shield,
  PiggyBank,
  BarChart3,
  Users,
  Award,
  Target,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Star,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  Activity,
  Car,
  Home,
  Umbrella,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

export interface HeroContent {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustIndicators: string[];
}

export interface MetricItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

export interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface CtaBanner {
  headline: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
  urgencyText?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface FooterContent {
  brand: string;
  brandHighlight: string;
  tagline: string;
  quickLinks: { label: string; href: string }[];
  services: { label: string; href: string }[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socials: SocialLink[];
  copyright: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InsuranceFeature {
  icon: LucideIcon;
  text: string;
}

export interface InsuranceTypeCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: InsuranceFeature[];
}

export interface InsuranceContent {
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    trustIndicators: string[];
  };
  types: {
    sectionLabel: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    lifeInsurance: InsuranceTypeCard;
    generalInsurance: InsuranceTypeCard;
  };
  cta: CtaBanner;
  form: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    consultationTypes: string[];
    discussionTopics: string[];
    successTitle: string;
    successSubtext: string;
    successButton: string;
    submitButton: string;
    securityNote: string;
  };
  footer: {
    disclaimer: { title: string; text: string };
    brand: string;
    brandHighlight: string;
    tagline: string;
    quickLinks: { label: string; href: string }[];
    contact: { email: string; whatsappHref: string };
    socials: SocialLink[];
    copyright: string;
  };
}

export interface BookingContent {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  freeNote: string;
  consultationTypes: string[];
  discussionTopics: string[];
  fields: {
    name: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    consultationType: { label: string; placeholder: string };
    discussionTopic: { label: string; placeholder: string };
    requirement: { label: string; placeholder: string; optionalLabel: string };
  };
  submitButton: string;
  submittingButton: string;
  securityNote: string;
  successTitle: string;
  successSubtext: string;
  successButton: string;
}

export interface NotFoundContent {
  title: string;
  subtitle: string;
  buttonLabel: string;
}

export interface BlogContentBlock {
  type: "h2" | "h3" | "p" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  heroImage: string;
  body: BlogContentBlock[];
}

export interface BlogContent {
  backLabel: string;
  posts: BlogPost[];
}

export interface CrmContent {
  pageTitle: string;
  searchPlaceholder: string;
  addButtonLabel: string;
  noLeadsText: string;
  loadingText: string;
}

export interface SiteContent {
  nav: {
    brand: string;
    brandHighlight: string;
    links: NavLink[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: HeroContent;
  metrics: MetricItem[];
  benefits: {
    sectionLabel: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    cards: BenefitCard[];
  };
  howItWorks: {
    sectionLabel: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    steps: ProcessStep[];
  };
  midCta: CtaBanner;
  testimonials: {
    sectionLabel: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    items: Testimonial[];
  };
  faq: {
    sectionLabel: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    items: FAQItem[];
  };
  finalCta: CtaBanner;
  footer: FooterContent;
  insurance: InsuranceContent;
  booking: BookingContent;
  notFound: NotFoundContent;
  blog: BlogContent;
  thankYou: {
    hero: {
      headlineWithName: string;
      headlineFallback: string;
      subtitle: string;
      primaryButton: { label: string; href: string };
      secondaryButton: { label: string; href: string };
      securityNote: string;
    };
    nextSteps: {
      title: string;
      steps: { step: string; title: string; description: string }[];
    };
    services: {
      title: string;
      subtitle: string;
      cards: { title: string; description: string; linkLabel: string; href: string }[];
    };
    blogSection: {
      label: string;
      title: string;
      subtitle: string;
      readArticleLabel: string;
    };
    finalCta: {
      title: string;
      subtitle: string;
      buttonLabel: string;
      buttonHref: string;
    };
  };
  creditCards: {
    mainPage: {
      badge: string;
      headline: string;
      headlineHighlight: string;
      subtitle: string;
    };
    topPage: {
      badge: string;
      headline: string;
      headlineHighlight: string;
      subtitle: string;
    };
    bestForYou: {
      badge: string;
      headline: string;
      headlineHighlight: string;
      subtitle: string;
      salaryLabel: string;
      spendingLabel: string;
      ctaLabel: string;
      resultTitle: string;
      noResultText: string;
      salaryOptions: { label: string; min: number }[];
      spendingOptions: string[];
    };
    categories: Record<string, { title: string; description: string }>;
    filterLabels: {
      title: string;
      clearAll: string;
      bank: string;
      category: string;
      annualFee: string;
      cardType: string;
    };
    feeOptions: { label: string; value: string }[];
    sortOptions: { label: string; value: string }[];
    cardActions: {
      summary: string;
      applyNow: string;
      readReview: string;
    };
  };
  crm: CrmContent;
}

const siteContent: SiteContent = {
  nav: {
    brand: "Smart",
    brandHighlight: "Spending",
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Insurance", href: "/insurance", isRoute: true },
      { label: "Credit Cards", href: "/credit-cards", isRoute: true },
    ],
    ctaLabel: "Get Free Consultation",
    ctaHref: "#booking",
  },

  hero: {
    badge: "Trusted by 500+ Clients Across India",
    headline: "Take Control of Your Financial Future",
    headlineHighlight: "Today",
    subheading:
      "Expert financial consultation to grow your wealth, optimize taxes, and secure your family's future — all with a personalized plan built just for you.",
    primaryCta: { label: "Consult Now", href: "#booking" },
    secondaryCta: { label: "View Plans", href: "#services" },
    trustIndicators: [
      "✓ No Hidden Fees",
      "✓ SEBI Registered",
      "✓ 10+ Years Experience",
      "✓ 4.9★ Rating",
    ],
  },

  metrics: [
    {
      icon: BarChart3,
      value: 10,
      suffix: "Cr+",
      prefix: "₹",
      label: "Assets Managed",
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      prefix: "",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      prefix: "",
      label: "Satisfaction Rate",
    },
    {
      icon: Target,
      value: 15,
      suffix: "+",
      prefix: "",
      label: "Years of Experience",
    },
  ],

  benefits: {
    sectionLabel: "Our Services",
    sectionTitle: "Smart Solutions for Your",
    sectionTitleHighlight: "Financial Growth",
    sectionSubtitle:
      "We offer comprehensive financial consulting services designed to maximize your wealth and minimize your risks.",
    cards: [
      {
        icon: TrendingUp,
        title: "Personalized Financial Planning",
        description:
          "Get a custom roadmap tailored to your income, goals, and risk tolerance. We analyze every aspect of your finances to create a plan that works.",
        gradient: "from-blue-500 to-cyan-400",
      },
      {
        icon: BarChart3,
        title: "Investment Growth Strategies",
        description:
          "Maximize returns with data-driven investment strategies across mutual funds, stocks, bonds, and alternative assets curated for your profile.",
        gradient: "from-violet-500 to-purple-400",
      },
      {
        icon: PiggyBank,
        title: "Tax Optimization",
        description:
          "Save more with smart tax planning. We identify every deduction, exemption, and strategy to legally minimize your tax burden year after year.",
        gradient: "from-emerald-500 to-green-400",
      },
      {
        icon: Shield,
        title: "Risk Management & Insurance",
        description:
          "Protect your family and assets with the right insurance coverage. We cut through the jargon to find policies that actually protect you.",
        gradient: "from-orange-500 to-amber-400",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "How It Works",
    sectionTitle: "Get Started in",
    sectionTitleHighlight: "3 Simple Steps",
    sectionSubtitle:
      "Our streamlined process makes it easy to take control of your finances. No complexity, no confusion.",
    steps: [
      {
        step: "01",
        icon: Phone,
        title: "Book a Free Call",
        description:
          "Schedule a no-obligation consultation call at a time that works for you. Share your financial goals and concerns.",
      },
      {
        step: "02",
        icon: FileText,
        title: "Get Your Custom Plan",
        description:
          "Our experts analyze your finances and create a personalized strategy covering investments, taxes, and insurance.",
      },
      {
        step: "03",
        icon: TrendingUp,
        title: "Watch Your Wealth Grow",
        description:
          "Execute the plan with our ongoing support. Track progress with regular reviews and adjust as your life evolves.",
      },
    ],
  },

  midCta: {
    headline: "Don't Let Your Money Sit Idle",
    subtext:
      "Every day without a plan is a day of lost potential. Join 500+ clients who are already building their financial future.",
    buttonLabel: "Start Your Free Consultation",
    buttonHref: "#booking",
    urgencyText: "Limited slots available this month",
  },

  testimonials: {
    sectionLabel: "Testimonials",
    sectionTitle: "Loved by",
    sectionTitleHighlight: "500+ Clients",
    sectionSubtitle:
      "Real stories from real people who transformed their financial lives with our guidance.",
    items: [
      {
        name: "Priya Sharma",
        role: "Business Owner, Mumbai",
        text: "The financial planning was incredible. Within 6 months, my investments grew by 22% and I saved ₹3.5L in taxes. The team genuinely cares about your financial health.",
        avatar: "PS",
        rating: 5,
      },
      {
        name: "Rahul Verma",
        role: "Tech Lead, Bangalore",
        text: "I was confused about where to invest. SmartSpending created a clear roadmap — now I have a diversified portfolio and my SIPs are on autopilot. Highly recommend!",
        avatar: "RV",
        rating: 5,
      },
      {
        name: "Anita Desai",
        role: "Doctor, Delhi",
        text: "Best financial consultation I've ever had. They helped me with insurance, tax planning, and retirement goals. Everything was explained in simple terms. 5 stars!",
        avatar: "AD",
        rating: 5,
      },
      {
        name: "Vikram Patel",
        role: "Startup Founder, Pune",
        text: "As a founder, managing personal and business finances was overwhelming. SmartSpending simplified everything and helped me save over ₹5L last year.",
        avatar: "VP",
        rating: 5,
      },
      {
        name: "Sneha Reddy",
        role: "Marketing Manager, Hyderabad",
        text: "From zero financial knowledge to a well-structured portfolio in just 3 months. The team is patient, knowledgeable, and always available for queries.",
        avatar: "SR",
        rating: 5,
      },
      {
        name: "Arjun Nair",
        role: "Freelancer, Kochi",
        text: "As a freelancer, tax optimization was my biggest headache. SmartSpending helped me legally save 40% on taxes and set up an emergency fund. Life-changing advice!",
        avatar: "AN",
        rating: 5,
      },
    ],
  },

  faq: {
    sectionLabel: "FAQ",
    sectionTitle: "Frequently Asked",
    sectionTitleHighlight: "Questions",
    sectionSubtitle:
      "Everything you need to know before getting started. Can't find what you're looking for? Reach out to us.",
    items: [
      {
        question: "Is the initial consultation really free?",
        answer:
          "Yes, absolutely! The first consultation call is 100% free with no obligations. We believe in building trust first. You can discuss your financial goals, ask questions, and understand how we can help — all at zero cost.",
      },
      {
        question: "How do I schedule a consultation?",
        answer:
          "Simply fill out the booking form with your details. After submitting, you'll be redirected to our Calendly page where you can pick a convenient time slot. You'll receive email confirmations and calendar invites automatically.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We offer comprehensive financial consulting including personalized financial planning, investment management, tax optimization, insurance advisory, retirement planning, and wealth management for both individuals and businesses.",
      },
      {
        question: "Are my details and financial information secure?",
        answer:
          "Absolutely. We follow strict data protection protocols. Your personal and financial information is encrypted and never shared with third parties. We are committed to maintaining the highest standards of confidentiality.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Of course! Your confirmation email includes links to reschedule or cancel. We understand that plans change, and we make it easy to adjust your booking at any time.",
      },
      {
        question: "Do you provide services across India?",
        answer:
          "Yes! We serve clients across all major cities in India through both in-person and virtual consultations. Our digital-first approach means you can access expert financial advice from anywhere.",
      },
    ],
  },

  finalCta: {
    headline: "Book Your Free Consultation Today",
    subtext:
      "Take the first step toward financial freedom. Our experts are ready to create your personalized wealth-building strategy.",
    buttonLabel: "Get Started — It's Free",
    buttonHref: "#booking",
    urgencyText: "🔥 Over 50 consultations booked this week",
  },

  footer: {
    brand: "Smart",
    brandHighlight: "Spending",
    tagline:
      "Expert financial consultation to help you grow, protect, and optimize your wealth. Trusted by 500+ clients across India.",
    quickLinks: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    services: [
      { label: "Financial Planning", href: "#services" },
      { label: "Investment Strategy", href: "#services" },
      { label: "Tax Optimization", href: "#services" },
      { label: "Insurance Advisory", href: "#services" },
      { label: "Retirement Planning", href: "#services" },
    ],
    contact: {
      email: "contact@smartspending.in",
      phone: "+91 98765 43210",
      location: "Chennai, India",
    },
    socials: [
      {
        icon: Instagram,
        href: "https://instagram.com/smartspending.in",
        label: "Instagram",
      },
      {
        icon: Twitter,
        href: "https://x.com/smartspendingin",
        label: "X (Twitter)",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/madhan",
        label: "LinkedIn",
      },
      {
        icon: Youtube,
        href: "https://youtube.com/@smartspendingin",
        label: "YouTube",
      },
    ],
    copyright: `© ${new Date().getFullYear()} SmartSpending. All rights reserved.`,
  },

  insurance: {
    hero: {
      badge: "Insurance & Protection",
      headline: "Insuring the Future of",
      headlineHighlight: "Your Loved Ones",
      subheading:
        "Insurance is financial protection that helps reduce risk and secure your family's future. Let me help you find the right coverage.",
      primaryCta: { label: "Book Insurance Consultation", href: "#insurance-booking" },
      secondaryCta: { label: "Explore Insurance Types", href: "#insurance-types" },
      trustIndicators: [
        "✓ No Pushy Sales",
        "✓ Honest Guidance",
        "✓ All Insurance Types",
        "✓ 100% Free Consultation",
      ],
    },
    types: {
      sectionLabel: "Insurance Solutions",
      sectionTitle: "Choose the Right",
      sectionTitleHighlight: "Protection",
      sectionSubtitle:
        "Comprehensive insurance guidance tailored to your life stage and needs.",
      lifeInsurance: {
        icon: Heart,
        title: "Life Insurance",
        description:
          "Protect your family's financial future with the right life insurance plan. Ensure peace of mind for those who matter most.",
        features: [
          { icon: Users, text: "Family Protection" },
          { icon: TrendingUp, text: "Income Replacement" },
          { icon: ShieldCheck, text: "Long-term Security" },
          { icon: Heart, text: "Future Planning" },
        ],
      },
      generalInsurance: {
        icon: ShieldCheck,
        title: "General Insurance",
        description:
          "Safeguard your health, vehicle, and property. Comprehensive coverage for life's uncertainties.",
        features: [
          { icon: Activity, text: "Health Insurance" },
          { icon: Car, text: "Vehicle Insurance" },
          { icon: Home, text: "Property Protection" },
          { icon: Umbrella, text: "Risk Coverage" },
        ],
      },
    },
    cta: {
      headline: "Need Help Choosing the Right Insurance?",
      subtext:
        "I help clients understand and choose suitable insurance based on their unique needs, family situation, and financial goals. No pushy sales — just honest guidance.",
      buttonLabel: "Book Insurance Consultation",
      buttonHref: "#insurance-booking",
      urgencyText: "Free consultation — no obligations",
    },
    form: {
      sectionLabel: "Book Now",
      sectionTitle: "Insurance Consultation",
      sectionSubtitle: "Tell us about your insurance needs.",
      consultationTypes: [
        "Life Insurance",
        "Health Insurance",
        "General Insurance",
        "Policy Upgrade Advice",
      ],
      discussionTopics: [
        "New Policy",
        "Existing Policy Review",
        "Claim Assistance",
        "Coverage Comparison",
        "Premium Optimization",
      ],
      successTitle: "Great! Please select your preferred time slot.",
      successSubtext: "Redirecting to Calendly in",
      successButton: "Open Calendly Now",
      submitButton: "Submit & Book Your Call",
      securityNote: "Your information is secure and will never be shared.",
    },
    footer: {
      disclaimer: {
        title: "Disclaimer",
        text: "The information provided on this website is for general awareness and educational purposes only. It does not constitute financial, insurance, or investment advice. Insurance plans and their benefits are subject to policy terms and conditions of respective insurance companies. We recommend consulting with a qualified insurance advisor before making any decisions. SmartSpending with Madhan is not an insurance company and does not underwrite policies.",
      },
      brand: "Smart",
      brandHighlight: "Spending",
      tagline:
        "Helping individuals and families make informed financial and insurance decisions with honest, no-pressure guidance.",
      quickLinks: [
        { label: "Home", href: "/" },
        { label: "Insurance Types", href: "#insurance-types" },
        { label: "Book Consultation", href: "#insurance-booking" },
      ],
      contact: {
        email: "contact@smartspending.in",
        whatsappHref: "https://wa.me/919876543210",
      },
      socials: [
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Twitter, href: "https://x.com", label: "X" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
      ],
      copyright: `© ${new Date().getFullYear()} SmartSpending — All rights reserved.`,
    },
  },

  booking: {
    sectionLabel: "Connect",
    sectionTitle: "Get Personal Guidance",
    sectionDescription:
      "Have questions about credit cards, insurance, or rewards? Fill in your details and get personalized, no-cost guidance from Madhan.",
    freeNote: "100% free — no strings attached",
    consultationTypes: [
      "Life Insurance",
      "Health Insurance",
      "General Insurance",
      "Credit Cards",
      "Policy Upgrade Advice",
      "Other",
    ],
    discussionTopics: [
      "New Policy",
      "Existing Policy Review",
      "Claim Assistance",
      "Coverage Comparison",
      "Premium Optimization",
      "Rewards & Benefits",
      "Other",
    ],
    fields: {
      name: { label: "Full Name *", placeholder: "Enter Your Full Name" },
      phone: { label: "Mobile Number *", placeholder: "Enter Your Mobile Number" },
      email: { label: "Email Address *", placeholder: "Enter Your Email Address" },
      consultationType: { label: "Consultation Type *", placeholder: "Select consultation type" },
      discussionTopic: { label: "Discussion Topic *", placeholder: "Select discussion topic" },
      requirement: {
        label: "Describe Your Requirement",
        placeholder: "E.g., I need guidance on choosing the best health insurance plan...",
        optionalLabel: "(optional)",
      },
    },
    submitButton: "Submit & Book Your Call",
    submittingButton: "Submitting...",
    securityNote: "Your information is secure and will never be shared.",
    successTitle: "Great! Please select your preferred call time.",
    successSubtext: "Redirecting to Calendly in",
    successButton: "Open Calendly Now",
  },

  notFound: {
    title: "404",
    subtitle: "This page doesn't exist or has been moved.",
    buttonLabel: "Back to Home",
  },

  blog: {
    backLabel: "Back to Home",
    posts: [
      {
        slug: "best-credit-cards-beginners-2025",
        title: "Best Credit Cards for Beginners in 2025",
        tag: "Credit Cards",
        readTime: "4 min read",
        date: "March 10, 2025",
        heroImage: blogCreditCards,
        body: [
          { type: "h2", text: "Introduction" },
          { type: "p", text: "Choosing your first credit card can feel confusing. With so many options available, beginners often struggle to understand which card suits their lifestyle and spending habits. The right credit card can help build your credit history, earn rewards, and manage expenses efficiently — but only if used responsibly." },
          { type: "p", text: "This guide explains what beginners should look for when choosing a credit card." },
          { type: "h2", text: "What Beginners Should Look For" },
          { type: "h3", text: "Low or No Annual Fee" },
          { type: "p", text: "Many banks offer entry-level credit cards with zero annual fees. These cards are ideal for beginners because they allow you to learn how credit cards work without worrying about yearly charges." },
          { type: "h3", text: "Simple Rewards Structure" },
          { type: "p", text: "Some cards offer complicated reward systems. Beginners should choose cards that offer straightforward cashback or reward points." },
          { type: "h3", text: "Easy Approval" },
          { type: "p", text: "Banks usually approve entry-level cards more easily, especially if you have a stable income or salary account." },
          { type: "h3", text: "Spending Control" },
          { type: "p", text: "Choose cards that help you control spending with clear statements, alerts, and spending limits." },
          { type: "h2", text: "Common Beginner Mistakes" },
          { type: "p", text: "Many first-time users make these mistakes:" },
          { type: "ul", items: ["Paying only the minimum due", "Missing the payment due date", "Overspending because of credit availability", "Applying for too many cards"] },
          { type: "p", text: "Avoiding these mistakes is more important than choosing the \"best\" card." },
          { type: "h2", text: "Final Thoughts" },
          { type: "p", text: "The best credit card for beginners is not necessarily the one with the most rewards — it's the one that helps you build financial discipline. Start with a simple card, understand how billing cycles work, and always pay the full amount on time." },
        ],
      },
      {
        slug: "insurance-myths",
        title: "5 Insurance Myths That Cost You Money",
        tag: "Insurance",
        readTime: "5 min read",
        date: "March 10, 2025",
        heroImage: blogInsuranceMyths,
        body: [
          { type: "h2", text: "Introduction" },
          { type: "p", text: "Insurance is often misunderstood. Many people either avoid it completely or buy the wrong type of coverage because of common myths. Understanding how insurance works can protect you from unexpected financial shocks." },
          { type: "h2", text: "Myth 1: \"I'm Too Young for Insurance\"" },
          { type: "p", text: "Many people believe insurance is only necessary later in life. In reality, buying insurance early can provide better coverage at lower premiums." },
          { type: "h2", text: "Myth 2: \"Employer Insurance Is Enough\"" },
          { type: "p", text: "Employer health insurance is helpful but often limited. If you change jobs or lose employment, the coverage may stop." },
          { type: "h2", text: "Myth 3: \"Insurance Is a Waste of Money\"" },
          { type: "p", text: "Insurance is not meant to generate profit — it protects you from financial risk during unexpected situations." },
          { type: "h2", text: "Myth 4: \"All Policies Are the Same\"" },
          { type: "p", text: "Different policies offer different benefits. Reading policy terms carefully is important before choosing coverage." },
          { type: "h2", text: "Myth 5: \"Claims Are Always Rejected\"" },
          { type: "p", text: "Claims are usually approved when policy terms are followed correctly." },
          { type: "h2", text: "Final Thoughts" },
          { type: "p", text: "Insurance is a safety net, not an investment. Understanding its purpose helps you choose the right protection for your financial future." },
        ],
      },
      {
        slug: "truth-about-no-cost-emi",
        title: "The Truth About No-Cost EMI",
        tag: "EMI Traps",
        readTime: "3 min read",
        date: "March 10, 2025",
        heroImage: blogEmiTruth,
        body: [
          { type: "h2", text: "Introduction" },
          { type: "p", text: "\"No-Cost EMI\" offers appear attractive while purchasing products online. However, many buyers do not understand how these offers actually work." },
          { type: "h2", text: "How No-Cost EMI Works" },
          { type: "p", text: "In many cases, the interest is adjusted through discounts provided by the seller or brand partner." },
          { type: "p", text: "For example:" },
          { type: "ul", items: ["Product price: ₹20,000", "Discount adjusted to cover interest"] },
          { type: "p", text: "This makes the EMI appear \"interest free.\"" },
          { type: "h2", text: "Hidden Costs to Watch" },
          { type: "p", text: "Even when EMI is advertised as no-cost, some charges may apply:" },
          { type: "ul", items: ["Processing fees", "GST on processing fees", "Reduced cashback or rewards"] },
          { type: "p", text: "These small costs can increase the total price of the product." },
          { type: "h2", text: "When EMI Makes Sense" },
          { type: "p", text: "EMIs can be useful when:" },
          { type: "ul", items: ["You need to manage cash flow", "The purchase is necessary", "You can comfortably afford the monthly payment"] },
          { type: "h2", text: "Final Thoughts" },
          { type: "p", text: "\"No-Cost EMI\" is not always completely free. Understanding the terms and charges before choosing EMI can help you make better financial decisions." },
        ],
      },
      {
        slug: "maximize-credit-card-rewards",
        title: "How to Maximize Credit Card Rewards",
        tag: "Rewards",
        readTime: "4 min read",
        date: "March 10, 2025",
        heroImage: blogRewards,
        body: [
          { type: "h2", text: "Introduction" },
          { type: "p", text: "Credit card rewards are one of the biggest advantages of using cards responsibly. However, many people fail to maximize these benefits because they don't understand how reward programs work." },
          { type: "h2", text: "Understand Your Card Categories" },
          { type: "p", text: "Different cards provide better rewards in different spending categories such as:" },
          { type: "ul", items: ["Online shopping", "Dining", "Travel", "Utility payments"] },
          { type: "p", text: "Using the right card for the right category can increase rewards significantly." },
          { type: "h2", text: "Track Reward Expiry" },
          { type: "p", text: "Some reward points expire if not used within a certain time. Tracking expiry dates ensures you don't lose valuable points." },
          { type: "h2", text: "Redeem Rewards Strategically" },
          { type: "p", text: "Reward points can often be redeemed for:" },
          { type: "ul", items: ["Gift vouchers", "Travel bookings", "Product purchases"] },
          { type: "p", text: "Comparing redemption options helps maximize value." },
          { type: "h2", text: "Avoid Overspending for Rewards" },
          { type: "p", text: "The biggest mistake is spending more money just to earn rewards. Rewards should always be a bonus for necessary spending, not a reason to spend more." },
          { type: "h2", text: "Final Thoughts" },
          { type: "p", text: "Credit card rewards can provide meaningful benefits when used wisely. Understanding your card's reward structure and spending responsibly helps you get the most value." },
        ],
      },
    ],
  },

  thankYou: {
    hero: {
      headlineWithName: "Thank You, {name}!",
      headlineFallback: "Thank You!",
      subtitle: "Your consultation call has been booked successfully! You'll receive a calendar invite and confirmation email shortly.",
      primaryButton: { label: "Back to Home", href: "/" },
      secondaryButton: { label: "Explore Insurance", href: "/insurance" },
      securityNote: "Your information is secure and will never be shared.",
    },
    nextSteps: {
      title: "What Happens Next?",
      steps: [
        { step: "1", title: "Check Your Email", description: "You'll receive a calendar invite and booking confirmation in your inbox." },
        { step: "2", title: "Prepare for Your Call", description: "Think about your key financial questions so we can make the most of your time." },
        { step: "3", title: "Expert Consultation", description: "Our advisor will call you at the scheduled time with personalized guidance." },
      ],
    },
    services: {
      title: "Explore Our Services",
      subtitle: "While you wait for your consultation, explore what we offer.",
      cards: [
        {
          title: "Insurance Guidance",
          description: "Get expert advice on life, health, motor, and general insurance plans tailored to your needs.",
          linkLabel: "Learn More",
          href: "/insurance",
        },
        {
          title: "Smart Financial Planning",
          description: "Credit cards, EMI strategies, investment guidance, and personalized financial advice.",
          linkLabel: "Book a Call",
          href: "/#booking",
        },
      ],
    },
    blogSection: {
      label: "Smart Reads",
      title: "Learn While You Wait",
      subtitle: "Read our latest articles on smart spending and financial literacy.",
      readArticleLabel: "Read Article",
    },
    finalCta: {
      title: "Need Another Consultation?",
      subtitle: "Our experts are ready to help you with more financial decisions. Book another free consultation anytime.",
      buttonLabel: "Book Another Call — It's Free",
      buttonHref: "/#booking",
    },
  },

  creditCards: {
    mainPage: {
      badge: "Discover the Best Cards",
      headline: "Find the Perfect",
      headlineHighlight: "Credit Card",
      subtitle: "Compare India's top credit cards with real rewards, fees, and benefits — all in one place. Make a smart choice today.",
    },
    topPage: {
      badge: "Editor's Picks",
      headline: "Top Credit Cards in",
      headlineHighlight: "India 2025",
      subtitle: "Our experts have handpicked the best credit cards based on rewards, fees, benefits, and user ratings.",
    },
    bestForYou: {
      badge: "Personalized Picks",
      headline: "Best Credit Card",
      headlineHighlight: "For You",
      subtitle: "Tell us a bit about yourself and we'll recommend the best credit cards tailored to your lifestyle.",
      salaryLabel: "Monthly Salary Range",
      spendingLabel: "Primary Spending Categories",
      ctaLabel: "Show My Recommendations",
      resultTitle: "Recommended Cards For You",
      noResultText: "No cards match your criteria. Try adjusting your filters.",
      salaryOptions: [
        { label: "Below ₹15,000", min: 0 },
        { label: "₹15,000 – ₹25,000", min: 15000 },
        { label: "₹25,000 – ₹50,000", min: 25000 },
        { label: "₹50,000 – ₹1,00,000", min: 50000 },
        { label: "Above ₹1,00,000", min: 100000 },
      ],
      spendingOptions: ["Travel", "Fuel", "Cashback", "Online Shopping", "Groceries", "UPI", "Dining", "Entertainment"],
    },
    categories: {
      fuel: { title: "Best Fuel Credit Cards", description: "Save big on every fuel fill-up with cards that offer surcharge waivers and accelerated rewards at fuel stations." },
      cashback: { title: "Best Cashback Credit Cards", description: "Get real money back on your everyday spends with the top cashback credit cards in India." },
      rewards: { title: "Best Rewards Credit Cards", description: "Maximize reward points on every purchase. Travel, dining, shopping — earn more everywhere." },
      groceries: { title: "Best Grocery Credit Cards", description: "Earn extra rewards and cashback on supermarkets, online grocery, and daily essentials." },
      upi: { title: "Best UPI Credit Cards", description: "Link your credit card to UPI and earn rewards on every scan-and-pay transaction." },
      travel: { title: "Best Travel Credit Cards", description: "Airport lounges, travel insurance, air miles — unlock premium travel benefits." },
    },
    filterLabels: {
      title: "Filters",
      clearAll: "Clear All",
      bank: "Bank",
      category: "Category",
      annualFee: "Annual Fee",
      cardType: "Card Type",
    },
    feeOptions: [
      { label: "Free (₹0)", value: "free" },
      { label: "Under ₹500", value: "under500" },
      { label: "Under ₹1,000", value: "under1000" },
      { label: "₹1,000 – ₹5,000", value: "mid" },
      { label: "₹5,000+", value: "premium" },
    ],
    sortOptions: [
      { label: "Popular", value: "popular" },
      { label: "Best Rewards", value: "rewards" },
      { label: "Lowest Fee", value: "fee_asc" },
      { label: "Highest Rated", value: "rating" },
    ],
    cardActions: {
      summary: "Summary",
      applyNow: "Apply Now",
      readReview: "Read Full Review →",
    },
  },

  crm: {
    pageTitle: "Lead Pipeline",
    searchPlaceholder: "Search leads...",
    addButtonLabel: "Add Lead",
    noLeadsText: "No leads",
    loadingText: "Loading leads...",
  },
};

export default siteContent;
