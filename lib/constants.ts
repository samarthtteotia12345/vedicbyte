// Site content and copy - B2B Technology Services focused

export const SITE_CONFIG = {
  name: "Vedicbyte",
  tagline: "AI-Powered GTM Operations",
  description:
    "Accelerating growth through intelligent technology. We build embedded GTM teams, AI-powered workflows, and modern cloud infrastructure.",
};

export const NAV_LINKS = [
  { label: "Capabilities", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "Methodology", href: "#method" },
];

export const HERO_CONTENT = {
  badge: "AI-Powered GTM Operations",
  headline: {
    line1: "Accelerating",
    line2: "Growth",
    line3: "Through Intelligent Technology.",
    highlight: "Growth",
  },
  description:
    "Vedicbyte connects the dots between embedded GTM operations, AI-powered automation, and data-driven performance marketing to fuel your revenue engine.",
  primaryCTA: "Audit Your Stack",
  secondaryCTA: "Explore Services",
};

export const HERO_CARDS = [
  {
    icon: "solar:cpu-bolt-linear",
    title: "AI Workflow Engine",
    status: "Processing",
    statusColor: "green",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-100",
    metric: {
      label: "Tasks Automated",
      value: "2.4K",
      change: "+34%",
    },
  },
  {
    icon: "solar:chart-2-linear",
    title: "Pipeline Velocity",
    status: "Real-time",
    statusColor: "neutral",
    bgColor: "bg-[#D4FF33]/20",
    iconColor: "text-neutral-800",
    borderColor: "border-[#D4FF33]/40",
    metric: {
      label: "Conversion Rate",
      value: "4.8%",
      change: "+12%",
    },
  },
  {
    icon: "solar:link-circle-linear",
    title: "CRM Integration",
    status: "0.02s latency",
    statusColor: "neutral",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
    flow: ["HubSpot", "Salesforce"],
  },
];

export const PAIN_POINTS = [
  {
    icon: "solar:danger-triangle-linear",
    title: "Fragmented Tech Stacks",
    description:
      "Your CRM doesn't talk to marketing. Marketing doesn't talk to sales. Data silos cost you deals every day.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: "solar:link-broken-linear",
    title: "Manual Process Bottlenecks",
    description:
      "Your team spends 60% of their time on repetitive tasks that should be automated. We fix that.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: "solar:blind-linear",
    title: "Blind Attribution",
    description:
      "You're spending on ads but can't trace ROI to revenue. Multi-touch attribution reveals the truth.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

export const SERVICES = [
  {
    id: "gtm-operations",
    title: "Go-to-Market Operations",
    description:
      "Embedded GTM teams that integrate with your organization. We build RevOps infrastructure, sales enablement systems, and pipeline automation.",
    icon: "solar:users-group-rounded-linear",
    variant: "dark" as const,
    size: "tall" as const,
    codeBlock: {
      lines: [
        { text: 'workflow "lead_qualification" {', color: "blue" },
        { text: '  trigger = "form_submission"', color: "orange", indent: 1 },
        { text: "  score_threshold = 75", color: "lime", indent: 1 },
        { text: '  route_to = "enterprise_team"', color: "orange", indent: 1 },
        { text: "  auto_enrich = true", color: "lime", indent: 1 },
        { text: "}", color: "blue" },
        { text: "# Routing leads...", color: "muted", pulse: true },
      ],
    },
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description:
      "Intelligent workflows that learn and adapt. From predictive lead scoring to automated content generation, we deploy AI where it drives measurable ROI.",
    icon: "solar:magic-stick-3-linear",
    variant: "light" as const,
    size: "wide" as const,
    visual: "ai-flow",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Data-driven campaigns with full-funnel attribution. We optimize CAC, track LTV, and prove ROI on every dollar spent.",
    icon: "solar:graph-up-linear",
    variant: "accent" as const,
    size: "normal" as const,
    chart: true,
  },
  {
    id: "cloud-transformation",
    title: "Cloud Transformation",
    description:
      "Modern infrastructure that scales. Kubernetes, serverless, and event-driven architectures built for growth.",
    icon: "solar:cloud-storage-linear",
    variant: "outline" as const,
    size: "normal" as const,
  },
];

export const CASE_STUDY = {
  badge: "Case Study: B2B SaaS Growth",
  title: "From scattered tools to unified revenue engine.",
  description:
    "How we helped a B2B SaaS company increase pipeline velocity by 3x while reducing CAC by 40% through integrated GTM operations.",
  metrics: [
    { value: "3x", label: "Pipeline Velocity" },
    { value: "-40%", label: "Customer Acquisition Cost" },
  ],
  dashboard: {
    stats: [
      {
        label: "Marketing Qualified Leads",
        value: "847",
        change: "+28% vs last month",
        changeColor: "lime",
      },
      {
        label: "Sales Cycle",
        value: "21 days",
        change: "-8 days avg",
        changeColor: "green",
      },
    ],
    logs: [
      {
        status: "success",
        message: "Lead scoring model deployed",
        time: "10:42 AM",
      },
      {
        status: "info",
        message: "Syncing HubSpot contacts...",
        time: "10:41 AM",
      },
    ],
  },
};

export const CTA_CONTENT = {
  headline: "Ready to turbocharge your growth engine?",
  primaryCTA: "Book Strategy Call",
  secondaryCTA: "View Pricing",
};

export const FOOTER = {
  description:
    "AI-powered GTM operations agency specializing in revenue operations, performance marketing, and cloud transformation.",
  services: [
    "GTM Operations",
    "AI Solutions",
    "Performance Marketing",
    "Cloud Transformation",
  ],
  company: ["About", "Careers", "Blog", "Contact"],
  copyright: `© ${new Date().getFullYear()} Vedicbyte. All rights reserved.`,
};

export const LOGO_MARQUEE = [
  { icon: "solar:atom-linear", name: "SYNTHESIS" },
  { icon: "solar:box-linear", name: "BLOKCHAIN" },
  { icon: "solar:infinity-linear", name: "ETERNITY" },
  { icon: "solar:planet-linear", name: "ORBITAL" },
  { icon: "solar:ufo-linear", name: "NEBULA" },
];
