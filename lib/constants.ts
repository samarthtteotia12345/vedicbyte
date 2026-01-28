// Site content and copy - GTM/B2B Enterprise focused

export const SITE_CONFIG = {
  name: "Vedicbyte",
  tagline: "Engineering Growth at Scale",
  description:
    "We architect go-to-market strategies that transform ambitious companies into market leaders through technology-driven execution and AI-powered workflows.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
];

export const HERO_CONTENT = {
  badge: "GTM Strategy & Execution",
  headline: {
    line1: "Engineering Growth",
    line3: "That Scales.",
    highlight: "Growth",
  },
  description:
    "Vedicbyte architects go-to-market strategies that transform ambitious companies into market leaders. We combine technology-driven execution, AI-powered workflows, and measurable outcomes.",
  primaryCTA: "Accelerate Growth",
  secondaryCTA: "See Our Impact",
};

export const HERO_CARDS = [
  {
    icon: "solar:star-bold",
    title: "Brand Awareness",
    status: "Growing",
    statusColor: "green",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-100",
    metric: {
      label: "Reach This Month",
      value: "2.4M",
      change: "+67%",
    },
  },
  {
    icon: "solar:heart-linear",
    title: "Audience Engagement",
    status: "Real-time",
    statusColor: "neutral",
    bgColor: "bg-[#D4FF33]/20",
    iconColor: "text-neutral-800",
    borderColor: "border-[#D4FF33]/40",
    metric: {
      label: "Engagement Rate",
      value: "8.2%",
      change: "+24%",
    },
  },
  {
    icon: "solar:graph-up-linear",
    title: "Campaign Performance",
    status: "Optimizing",
    statusColor: "neutral",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
    flow: ["Creative", "Launch", "Results"],
  },
];

export const PAIN_POINTS = [
  {
    icon: "solar:eye-closed-linear",
    title: "Invisible in Your Market",
    description:
      "Your competitors are everywhere while your brand stays hidden. You need a presence that demands attention and earns recognition.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: "solar:chat-square-like-linear",
    title: "Messages That Don't Land",
    description:
      "You're talking, but nobody's listening. Your marketing lacks the story and strategy to truly connect with your audience.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: "solar:money-bag-linear",
    title: "Spending Without Returns",
    description:
      "Marketing budget disappears with nothing to show for it. You need campaigns that actually drive leads and revenue.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

export const SERVICES = [
  {
    id: "gtm-strategy",
    title: "GTM Strategy & Architecture",
    description:
      "We architect go-to-market foundations that win. From market positioning and ICP definition to competitive differentiation, we build strategies that scale.",
    icon: "solar:target-linear",
    variant: "dark" as const,
    size: "tall" as const,
    brandShowcase: true,
  },
  {
    id: "demand-generation",
    title: "Demand Generation Engine",
    description:
      "Pipeline creation that compounds. We design and execute demand gen programs that drive qualified leads, nurture prospects, and optimize conversion at every stage.",
    icon: "solar:magnet-linear",
    variant: "light" as const,
    size: "wide" as const,
    visual: "content-flow",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Precision targeting with measurable ROI. We optimize every dollar across channels with attribution modeling and continuous performance improvement.",
    icon: "solar:graph-up-linear",
    variant: "accent" as const,
    size: "normal" as const,
    chart: true,
  },
  {
    id: "thought-leadership",
    title: "Community & Thought Leadership",
    description:
      "Build executive presence and industry influence. We craft thought leadership programs that establish trust and position your leaders as category experts.",
    icon: "solar:users-group-rounded-linear",
    variant: "outline" as const,
    size: "normal" as const,
  },
];

export const CASE_STUDY = {
  badge: "Featured Project",
  title: "From unknown startup to industry leader.",
  description:
    "How we helped a challenger brand break through the noise, build a loyal following, and become the most recognized name in their category.",
  metrics: [
    { value: "340%", label: "Brand Awareness Growth" },
    { value: "5x", label: "Lead Generation Increase" },
  ],
  dashboard: {
    stats: [
      {
        label: "Monthly Impressions",
        value: "4.2M",
        change: "+156% vs last quarter",
        changeColor: "lime",
      },
      {
        label: "Qualified Leads",
        value: "847",
        change: "+89% vs last quarter",
        changeColor: "green",
      },
    ],
    activities: [
      {
        type: "campaign",
        message: "Summer campaign launched",
        result: "2.1M reach in 48 hours",
      },
      {
        type: "content",
        message: "Brand video series",
        result: "12K shares, 890K views",
      },
    ],
  },
};

export const CTA_CONTENT = {
  headline: "Ready to engineer your growth?",
  primaryCTA: "Let's Talk Strategy",
  secondaryCTA: "See Case Studies",
};

export const FOOTER = {
  description:
    "GTM strategy and execution partner for ambitious B2B companies. We engineer growth through technology-driven marketing and AI-powered workflows.",
  services: [
    "GTM Strategy",
    "Demand Generation",
    "Performance Marketing",
    "Thought Leadership",
  ],
  company: ["About", "Careers", "Blog", "Contact"],
  copyright: `© ${new Date().getFullYear()} Vedicbyte. All rights reserved.`,
};

export const LOGO_MARQUEE = [
  { src: "/ingram.webp", name: "Ingram Micro" },
  { src: "/delloite.webp", name: "Deloitte" },
  { src: "/avi-spl.webp", name: "AVI-SPL" },
  { src: "/newera.webp", name: "New Era" },
  { src: "/presidio.webp", name: "Presidio" },
];

export const DIFFERENTIATORS = [
  {
    icon: "solar:code-square-linear",
    title: "Deep technology DNA",
    description: "Engineers and technologists who understand both code and commerce.",
  },
  {
    icon: "solar:users-group-two-rounded-linear",
    title: "Trusted growth partner",
    description: "Long-term partnerships built on transparency and shared success.",
  },
  {
    icon: "solar:cpu-bolt-linear",
    title: "AI-Powered execution",
    description: "Leverage cutting-edge AI to automate and optimize every workflow.",
  },
  {
    icon: "solar:rocket-linear",
    title: "Proven GTM accelerators",
    description: "Battle-tested playbooks that compress time-to-market.",
  },
];

export const GTM_SERVICES = [
  {
    title: "Embedded GTM operations",
    description:
      "Embedded strategy and execution support that meets you where you are – to ensure nothing falls through the crack.",
    cta: "Run the engine",
    icon: "solar:settings-minimalistic-linear",
  },
  {
    title: "Scalable marketing execution",
    description:
      "Custom programs that combine market context, innovation and creativity for any segment, industry, and customer lifecycle stage.",
    cta: "Feed the engine",
    icon: "solar:chart-square-linear",
  },
  {
    title: "AI-powered GTM workflows",
    description:
      "Workflows that bring the best human-to-AI mix to help you invent new experiences, operate at peak performance, and eliminate friction.",
    cta: "Turbocharge the engine",
    icon: "solar:cpu-bolt-linear",
  },
];
