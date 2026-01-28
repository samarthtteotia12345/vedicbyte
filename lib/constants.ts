// Site content and copy - Marketing Agency focused

export const SITE_CONFIG = {
  name: "Vedicbyte",
  tagline: "Marketing That Moves Markets",
  description:
    "Strategic marketing that builds brands and drives revenue. We craft compelling stories, create memorable campaigns, and deliver measurable growth.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
];

export const HERO_CONTENT = {
  badge: "Full-Service Marketing Agency",
  headline: {
    line1: "Building",
    line2: "Brands",
    line3: "That People Remember.",
    highlight: "Brands",
  },
  description:
    "Vedicbyte transforms ambitious companies into market leaders. We blend creative strategy, compelling storytelling, and data-driven campaigns to make your brand unforgettable.",
  primaryCTA: "Start Your Project",
  secondaryCTA: "View Our Work",
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
    id: "brand-strategy",
    title: "Brand Strategy & Identity",
    description:
      "We craft distinctive brand identities that stand out in crowded markets. From positioning to visual identity, we build brands that resonate and endure.",
    icon: "solar:palette-linear",
    variant: "dark" as const,
    size: "tall" as const,
    brandShowcase: true,
  },
  {
    id: "content-marketing",
    title: "Content & Storytelling",
    description:
      "Compelling narratives that captivate your audience. We create content strategies and stories that build trust, drive engagement, and convert readers into customers.",
    icon: "solar:pen-new-square-linear",
    variant: "light" as const,
    size: "wide" as const,
    visual: "content-flow",
  },
  {
    id: "digital-advertising",
    title: "Digital Advertising",
    description:
      "Strategic campaigns across search, social, and display that maximize your marketing spend and deliver measurable results.",
    icon: "solar:graph-up-linear",
    variant: "accent" as const,
    size: "normal" as const,
    chart: true,
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Build communities, spark conversations, and grow your following with authentic social strategies that amplify your brand voice.",
    icon: "solar:share-circle-linear",
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
  headline: "Ready to build a brand people love?",
  primaryCTA: "Let's Talk Strategy",
  secondaryCTA: "See Case Studies",
};

export const FOOTER = {
  description:
    "Full-service marketing agency specializing in brand strategy, content creation, digital advertising, and social media marketing.",
  services: [
    "Brand Strategy",
    "Content Marketing",
    "Digital Advertising",
    "Social Media",
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
