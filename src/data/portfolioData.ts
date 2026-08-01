import { Service, GoldenVisaTier, ContentPillar, TeamPartner, FAQItem, DeveloperPartner, CommunityGuide, BuyingStep, InvestmentInsight } from '../types';

export const CLIENT_PROFILE = {
  name: "Shaista Fathima Ahmed Kabeer",
  handle: "@desigirl.realtor",
  followers: "10.1k Followers",
  isVerified: true,
  title: "Co-Founder — Gro Vision Real Estate LLC",
  companyHandle: "@grovisionrealestatellc",
  credential: "RERA Certified Property Advisor",
  positioningLine: "Helping Global Investors Build Wealth in UAE",
  location: "Sheikh Zayed Rd 19/8, Dubai, UAE",
  primaryWhatsapp: "+971 52 597 0116",
  whatsappUrl: "https://wa.me/971525970116",
  email: "shaista@thegrovision.com",
  companyEmail: "admin@thegrovision.com",
  companyPhone: "+971 52 331 2787",
  officeAddress: "Sheikh Zayed Rd 19/8, Dubai, UAE",
  officeHours: "Mon–Fri 10am–7pm | Sat 10am–5pm | Sun 1pm–5pm",
  websiteUrl: "https://thegrovision.com",
  socials: {
    instagram: "https://www.instagram.com/desigirl.realtor",
    threads: "https://www.threads.net/@desigirl.realtor",
    facebook: "https://www.facebook.com/desigirl.realtor",
    companyWeb: "https://thegrovision.com",
  },
  role: "Co-Founder | Operations & Client Success",
  roleDescription: "Ensures smooth execution, customer satisfaction, and daily operations for every investor transaction.",
  partner: {
    name: "Kabir Ahmed",
    title: "Founder | Sales & Growth",
    description: "Drives strategic developer acquisitions and high-yield portfolio expansion across prime Dubai sectors."
  },
  mission: "Providing reliable, professional real estate services that help global and NRI investors confidently buy, sell, lease, and manage properties in Dubai.",
  values: [
    { title: "Trust & Transparency", desc: "Uncompromising clarity in every transaction, document, and valuation." },
    { title: "Client-Focused Approach", desc: "Personalized guidance tailored specifically to individual wealth goals and NRI requirements." },
    { title: "Professional Expertise", desc: "RERA-certified advisors backed by deep Dubai market insights and in-house execution." }
  ],
  dueDiligencePillars: [
    { title: "Developer Reputation", desc: "Vetting track record, financial stability, and historical delivery timelines." },
    { title: "Construction Quality", desc: "Inspecting build standards, architectural materials, and structural warranties." },
    { title: "Infrastructure & Connectivity", desc: "Evaluating metro links, highway access, school enclaves, and future masterplan expansion." },
    { title: "Location Advantages", desc: "Analyzing rental demand, capital appreciation velocity, and neighborhood liquidity." },
    { title: "Long-Term Value", desc: "Projecting 5–10 year capital growth, exit strategies, and net yield optimization." }
  ],
  audienceFocus: "Global Overseas & NRI Investors — with specialized support for South Indian & Tamil-speaking investors seeking seamless Dubai acquisitions."
};

export const HERO_DATA = {
  name: "SHAISTA FATHIMA",
  fullName: CLIENT_PROFILE.name,
  brandName: "Gro Vision Real Estate LLC",
  tagline: "Helping Global Investors Build Wealth in UAE",
  subtitle: "Co-Founder & RERA Certified Property Advisor",
  bioHeadline: "Your Trusted Gateway to High-Yield Dubai Real Estate",
  shortBio: "Shaista Fathima provides end-to-end property advisory, off-plan acquisitions, and residency solutions for NRI & international investors in Dubai.",
};

export const GOLDEN_VISA_TIERS: GoldenVisaTier[] = [
  {
    id: "golden-10yr",
    title: "Golden Visa (10-Year)",
    duration: "10 Years",
    target: "High-Value Property Investors",
    description: "Long-term residency granted to qualifying real estate investors in Dubai with complete independence and no local sponsor required.",
    benefits: [
      "10-Year renewable residency for investor & family",
      "Domestic staff & driver visa sponsorship",
      "No requirement to stay in UAE every 6 months to maintain validity",
      "Full ownership of assets & bank accounts in UAE"
    ]
  },
  {
    id: "property-linked",
    title: "Property-Linked Golden Visa",
    duration: "10 Years",
    target: "Direct Property Owners",
    description: "Directly linked to eligible real estate investments meeting specific valuation thresholds set by the Dubai Land Department (DLD).",
    benefits: [
      "Streamlined DLD property valuation & verification",
      "Applicable for both ready & mortgaged properties (with bank NOC)",
      "Co-ownership options for spouses",
      "In-house end-to-end visa filing with Gro Vision"
    ]
  },
  {
    id: "silver-5yr",
    title: "Silver Visa (5-Year)",
    duration: "5 Years",
    target: "Mid-Level Real Estate Investors",
    description: "Flexible medium-term residency option designed for mid-scale property portfolios and emerging international investors.",
    benefits: [
      "5-Year renewable residency option",
      "Family visa coverage for spouse and dependents",
      "Accessible investment entry threshold",
      "Simplified renewal process"
    ]
  },
  {
    id: "investor-2yr",
    title: "2-Year Investor Visa",
    duration: "2 Years",
    target: "Entry-Level Property Owners",
    description: "Foundational residency pathway for property owners starting their real estate investment journey in Dubai.",
    benefits: [
      "2-Year renewable residence permit",
      "UAE Emirates ID & local banking privilege",
      "Seamless upgrade path to 5-Year or 10-Year Golden Visa",
      "Fast-track processing via Gro Vision residency desk"
    ]
  }
];

export const REAL_SERVICES: Service[] = [
  {
    id: "prop-buying",
    title: "Property Buying",
    tagline: "Curated Acquisitions & Off-Market Selection",
    description: "End-to-end buyer representation finding prime residential and commercial properties aligned with your budget and lifestyle.",
    features: [
      "Tailored property shortlist based on ROI criteria",
      "Complete price negotiation & contract drafting",
      "Due diligence & developer reputation vetting"
    ],
    iconName: "Home",
    category: "Core Advisory"
  },
  {
    id: "prop-selling",
    title: "Property Selling",
    tagline: "Maximum Exposure & Targeted Investor Reach",
    description: "Strategic marketing and global investor targeting to sell your Dubai property at optimal market value.",
    features: [
      "Digital media campaigns across @desigirl.realtor channels",
      "Professional valuation & pricing strategy",
      "Qualified buyer filtering & transfer management"
    ],
    iconName: "TrendingUp",
    category: "Core Advisory"
  },
  {
    id: "leasing-rental",
    title: "Leasing & Rental",
    tagline: "High Tenant Retention & Yield Management",
    description: "Comprehensive leasing services connecting landlords with verified corporate and residential tenants.",
    features: [
      "Ejari registration assistance",
      "Tenant background checks & lease agreements",
      "Optimal rental pricing analysis"
    ],
    iconName: "Key",
    category: "Property Management"
  },
  {
    id: "off-plan",
    title: "Off-Plan Property",
    tagline: "Pre-Launch Access & Flexible Payment Plans",
    description: "Direct developer access to premier off-plan projects from Emaar, Nakheel, Sobha, Damac, and top master developers.",
    features: [
      "VIP pre-launch allocation & inventory booking",
      "Payment plan structuring & escrow guidance",
      "Capital appreciation projections prior to completion"
    ],
    iconName: "Building2",
    category: "Investment"
  },
  {
    id: "golden-visa",
    title: "Golden Visa & Residency",
    tagline: "Long-Term UAE Residency Solutions",
    description: "Complete advisory and processing for 10-Year, 5-Year, and 2-Year UAE Investor Visas linked to real estate investments.",
    features: [
      "Property valuation certificate coordination",
      "Document attestation & DLD application clearance",
      "Family & dependent visa processing"
    ],
    iconName: "Award",
    category: "Residency"
  },
  {
    id: "mortgage-assistance",
    title: "Mortgage Assistance",
    tagline: "Competitive UAE Bank Financing",
    description: "Partnering with leading UAE financial institutions to secure pre-approval and favorable mortgage rates for resident and non-resident buyers.",
    features: [
      "Bank pre-approval for NRI and overseas buyers",
      "Rate comparison across major UAE banks",
      "Mortgage registration & NOC processing"
    ],
    iconName: "Landmark",
    category: "Finance"
  },
  {
    id: "complete-solutions",
    title: "Complete Property Solutions",
    tagline: "Turnkey Asset Ownership & Concierge",
    description: "A single-window ecosystem covering purchase, documentation, property transfer, utilities setup, and asset handover.",
    features: [
      "DEWA & district cooling setup support",
      "Title deed issuance & DLD transfer assistance",
      "Single point-of-contact for overseas owners"
    ],
    iconName: "ShieldCheck",
    category: "Concierge"
  },
  {
    id: "snagging",
    title: "Snagging",
    tagline: "Thorough Pre-Handover Quality Inspection",
    description: "Rigorous technical inspection of new property handovers to identify architectural defects before signing handover approvals.",
    features: [
      "Detailed architectural & MEP inspection report",
      "Defect listing submission to developer",
      "Re-inspection verification prior to key handover"
    ],
    iconName: "CheckSquare",
    category: "Quality Assurance"
  },
  {
    id: "property-surveys",
    title: "Property Surveys",
    tagline: "Accurate Valuation & Condition Assessment",
    description: "Professional structural and market surveys to evaluate true property condition, square footage, and valuation accuracy.",
    features: [
      "Independent valuation report",
      "Structural integrity assessment",
      "Rental yield comparison report"
    ],
    iconName: "FileText",
    category: "Quality Assurance"
  },
  {
    id: "business-setup",
    title: "New Business Setup",
    tagline: "Mainland & Free Zone Company Formation",
    description: "Assisting international investors with setting up UAE corporate entities, trade licenses, and commercial office spaces.",
    features: [
      "Mainland & Freezone license selection",
      "Commercial lease sourcing",
      "Corporate bank account opening assistance"
    ],
    iconName: "Briefcase",
    category: "Corporate"
  },
  {
    id: "maintenance",
    title: "In-House Maintenance",
    tagline: "Reliable Upkeep & Property Protection",
    description: "Dedicated technical team handling routine maintenance, emergency repairs, and property preservation for remote landlords.",
    features: [
      "Scheduled AC, plumbing, and electrical checks",
      "Emergency repair dispatch",
      "Tenant maintenance request handling"
    ],
    iconName: "Wrench",
    category: "Operations"
  },
  {
    id: "interior-design",
    title: "In-House Interior Design",
    tagline: "Bespoke Styling & High-Yield Furnishing",
    description: "Transforming empty spaces into high-converting holiday homes or luxury residences with custom furnishing packages.",
    features: [
      "Turnkey interior design & space planning",
      "Luxury furniture sourcing & installation",
      "Holiday-home staging for maximum ROI"
    ],
    iconName: "Palette",
    category: "Design"
  }
];

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    id: "dubai-expertise",
    title: "Dubai Real Estate Expertise",
    subtitle: "Educational Insights & Market Intelligence",
    description: "Breaking down complex Dubai property regulations, payment plans, and market trends into clear, actionable advice for overseas and NRI buyers.",
    highlights: [
      "Off-plan vs. Ready property comparative breakdown",
      "Area yield guides (Downtown, Palm Jumeirah, Dubai Marina, Business Bay)",
      "Step-by-step Golden Visa eligibility updates"
    ],
    iconName: "Building"
  },
  {
    id: "brand-ads",
    title: "Brand Collaborations & Ads",
    subtitle: "High-Reach Media & Luxury Partner Content",
    description: "Partnering with premier real estate developers, lifestyle brands, and financial institutions to showcase Dubai's finest living standards.",
    highlights: [
      "Cinematic property walkthroughs & developer showcases",
      "Targeted reach across 10.1k+ verified Instagram audience",
      "High-converting video media production"
    ],
    iconName: "Sparkles"
  },
  {
    id: "awards-recognition",
    title: "Awards & Industry Recognition",
    subtitle: "RERA Certified Professional Excellence",
    description: "Recognized across Dubai's real estate ecosystem for customer satisfaction, operational rigor, and trusted client advisory.",
    highlights: [
      "Certified RERA Property Advisor accreditation",
      "Co-Founder leadership at Gro Vision Real Estate LLC",
      "Trusted advisor for overseas & Tamil NRI investors"
    ],
    iconName: "Award"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who is Shaista Fathima?",
    answer: "Shaista Fathima is the Co-Founder of Gro Vision Real Estate LLC and a RERA Certified Property Advisor in Dubai. Known online as @desigirl.realtor (10.1k verified followers), she specializes in helping overseas and NRI investors build long-term wealth in UAE real estate.",
    category: "Advisory"
  },
  {
    id: "faq-2",
    question: "How can I qualify for a UAE Golden Visa through property investment?",
    answer: "Investors purchasing real estate in Dubai worth AED 2 Million or more can qualify for a 10-Year Golden Visa. Options also exist for 5-Year Silver Visas and 2-Year Investor Visas. Our team at Gro Vision handles the entire process from DLD valuation to visa issuance.",
    category: "Investing"
  },
  {
    id: "faq-3",
    question: "Can Non-Resident Indians (NRIs) buy property in Dubai remotely?",
    answer: "Yes, non-residents can easily buy freehold property in Dubai with 100% ownership. We assist NRI investors with remote property selection, virtual video tours, bank account setup, mortgage pre-approval, and power of attorney execution.",
    category: "Investing"
  },
  {
    id: "faq-4",
    question: "What due diligence does Shaista conduct before recommending a property?",
    answer: "Every property is vetted across five strict due diligence pillars: Developer Reputation & Delivery History, Construction & Material Quality, Infrastructure & Metro Connectivity, Location Advantages, and Long-Term Capital Appreciation & Yield Potential.",
    category: "Advisory"
  },
  {
    id: "faq-5",
    question: "What services does Gro Vision Real Estate LLC provide?",
    answer: "Gro Vision provides 12 complete end-to-end real estate services: Property Buying, Selling, Leasing, Off-Plan Sales, Golden Visa Processing, Mortgage Assistance, Complete Property Solutions, Technical Snagging, Property Surveys, Business Setup, Maintenance, and Interior Design.",
    category: "Advisory"
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "prop-1",
    title: "Downtown Sky Residence",
    subtitle: "Panoramic Burj Khalifa views with flexible developer payment plan",
    category: "penthouses",
    price: "AED 4,800,000",
    location: "Downtown Dubai",
    bedrooms: 3,
    bathrooms: 4,
    sqft: "2,450 sqft",
    featuredImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Prime freehold apartment offering immediate Golden Visa qualification, high capital appreciation potential, and walking distance to Dubai Mall.",
    amenities: ["Private Infinity Pool", "Burj Khalifa View", "24/7 Concierge", "DLD Transfer Ready"],
    roiYield: "7.8% Est. Gross Yield",
    completionDate: "Q4 2026"
  },
  {
    id: "prop-2",
    title: "Palm Jumeirah Waterfront Villa",
    subtitle: "Direct beach access and private marina dock",
    category: "waterfront",
    price: "AED 18,500,000",
    location: "Palm Jumeirah, Dubai",
    bedrooms: 5,
    bathrooms: 6,
    sqft: "6,200 sqft",
    featuredImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Ultra-exclusive beachfront residence on the Fronds of Palm Jumeirah with private garden, pool, and high rental demand.",
    amenities: ["Private Beach Access", "Private Dock", "Smart Home Automation", "Maid & Driver Quarters"],
    roiYield: "6.5% Est. Gross Yield",
    completionDate: "Ready to Move"
  },
  {
    id: "prop-3",
    title: "Business Bay Canal Tower",
    subtitle: "Waterfront luxury off-plan investment with 1% monthly plan",
    category: "commercial",
    price: "AED 2,100,000",
    location: "Business Bay, Dubai",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,180 sqft",
    featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Ideal Golden Visa starter property with strong rental yield driven by corporate tenant demand along the Dubai Water Canal.",
    amenities: ["Canal Promenade Access", "Co-Working Hub", "Rooftop Lounge", "High Rental Occupancy"],
    roiYield: "8.4% Est. Gross Yield",
    completionDate: "Q2 2027"
  },
  {
    id: "prop-4",
    title: "Dubai Hills Golf Villa",
    subtitle: "Family estate overlooking championship 18-hole golf course",
    category: "mansions",
    price: "AED 9,200,000",
    location: "Dubai Hills Estate",
    bedrooms: 4,
    bathrooms: 5,
    sqft: "4,100 sqft",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Contemporary green community villa close to Kings' College Hospital and Dubai Hills Mall, ideal for end-users and long-term families.",
    amenities: ["Golf Course View", "Dubai Hills Park Access", "Private Pool", "24/7 Security Enclave"],
    roiYield: "7.1% Est. Gross Yield",
    completionDate: "Ready to Move"
  }
];

export const SOCIAL_REELS = [
  {
    id: "reel-1",
    reelId: "Da8Au_OsFMv",
    title: "",
    thumbnail: "/images/reel-1-thumb.jpg",
    video: "https://www.instagram.com/reel/Da8Au_OsFMv/",
    category: "",
    views: "",
    duration: "",
    date: ""
  },
  {
    id: "reel-2",
    reelId: "DbV5CT7Meje",
    title: "",
    thumbnail: "/images/reel-2-thumb.jpg",
    video: "https://www.instagram.com/reel/DbV5CT7Meje/",
    category: "",
    views: "",
    duration: "",
    date: ""
  },
  {
    id: "reel-3",
    reelId: "Da0QYttsroH",
    title: "",
    thumbnail: "/images/reel-3-thumb.jpg",
    video: "https://www.instagram.com/reel/Da0QYttsroH/",
    category: "",
    views: "",
    duration: "",
    date: ""
  },
  {
    id: "reel-4",
    reelId: "DbI9XFJMM2o",
    title: "",
    thumbnail: "/images/reel-4-thumb.jpg",
    video: "https://www.instagram.com/reel/DbI9XFJMM2o/",
    category: "",
    views: "",
    duration: "",
    date: ""
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Global NRI Investor",
    title: "Property Owner in Downtown Dubai",
    location: "Singapore / Dubai",
    quote: "Shaista and the Gro Vision team made our property acquisition completely hassle-free. From developer selection to Golden Visa filing, every step was handled with complete transparency.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    propertyAcquired: "2BR Off-Plan Luxury Apartment",
    transactionType: "Off-Plan Acquisition & Golden Visa"
  },
  {
    id: "test-2",
    name: "Overseas Buyer",
    title: "Business Owner & Investor",
    location: "UK / Dubai",
    quote: "Working with Shaista Fathima gave us confidence as first-time Dubai property buyers. Her 5-pillar due diligence prevented us from making impulse decisions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    propertyAcquired: "3BR Golf Estate Villa",
    transactionType: "Freehold Villa Purchase"
  }
];

export const ACHIEVEMENTS = [
  {
    id: "ach-1",
    year: "Co-Founder",
    title: "Gro Vision Real Estate LLC",
    description: "Established client-centric real estate brokerage in Dubai providing end-to-end property advisory and operations.",
    category: "Leadership",
    partnerOrOrg: "Gro Vision LLC"
  },
  {
    id: "ach-2",
    year: "RERA Certified",
    title: "Property Advisor License",
    description: "Official Real Estate Regulatory Agency certification ensuring complete compliance and professional standards.",
    category: "Accreditation",
    partnerOrOrg: "Dubai Land Department (DLD)"
  },
  {
    id: "ach-3",
    year: "10.1k Verified",
    title: "Shaista Fathima Creator Community",
    description: "Verified Instagram brand providing daily educational guides for global and NRI investors in Dubai.",
    category: "Media",
    partnerOrOrg: "Instagram Verified"
  }
];

export const MEDIA_FEATURES = [
  {
    id: "med-1",
    logo: "GRO VISION REAL ESTATE",
    headline: "Helping Global Investors Build Wealth in UAE",
    date: "Official Corporate Release",
    url: "https://thegrovision.com"
  },
  {
    id: "med-2",
    logo: "INSTAGRAM VERIFIED",
    headline: "Trusted Real Estate Creator & Advisor Shaista Fathima",
    date: "Verified Account",
    url: "https://www.instagram.com/desigirl.realtor"
  }
];

export const DEVELOPER_PARTNERS: DeveloperPartner[] = [
  {
    id: "emaar",
    name: "Emaar Properties",
    logoText: "EMAAR",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Emaar_Properties_Logo.svg",
    category: "Master Developer",
    description: "Dubai's premier master developer behind Downtown Dubai, Dubai Mall, Burj Khalifa, and Dubai Creek Harbour.",
    featuredProjectsCount: 14,
    badge: "Official Direct Allocation",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nakheel",
    name: "Nakheel",
    logoText: "NAKHEEL",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Nakheel_Properties_Logo.svg/320px-Nakheel_Properties_Logo.svg.png",
    category: "Waterfront Developer",
    description: "Pioneers of Dubai's world-famous waterfront icons including Palm Jumeirah, Palm Jebel Ali, and Dubai Islands.",
    featuredProjectsCount: 9,
    badge: "Waterfront Partner",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sobha",
    name: "Sobha Realty",
    logoText: "SOBHA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sobha_Realty_Logo.svg/320px-Sobha_Realty_Logo.svg.png",
    category: "In-House Quality Master",
    description: "Renowned for backward-integrated craftsmanship, luxury finishes, and Sobha Hartland master communities.",
    featuredProjectsCount: 8,
    badge: "Backward Integrated Quality",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "damac",
    name: "DAMAC Properties",
    logoText: "DAMAC",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/DAMAC_Properties_Logo.svg/320px-DAMAC_Properties_Logo.svg.png",
    category: "Luxury Lifestyle Developer",
    description: "Global luxury developer known for branded residences with Cavalli, de GRISOGONO, and DAMAC Lagoons.",
    featuredProjectsCount: 11,
    badge: "Branded Residences",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ellington",
    name: "Ellington Properties",
    logoText: "ELLINGTON",
    logoUrl: "https://ellingtonproperties.ae/wp-content/themes/ellington/assets/images/logo.svg",
    category: "Boutique Design Developer",
    description: "Design-led boutique residences in Palm Jumeirah, Downtown, Business Bay, and Jumeirah Village Circle.",
    featuredProjectsCount: 6,
    badge: "High Rental Yield",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "meraas",
    name: "Meraas / Dubai Holding",
    logoText: "MERAAS",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meraas_Holding_Logo.svg/320px-Meraas_Holding_Logo.svg.png",
    category: "Urban Lifestyle Developer",
    description: "Creators of iconic destinations including City Walk, Bluewaters Island, Port de La Mer, and Central Park.",
    featuredProjectsCount: 7,
    badge: "Prime Urban Destinations",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "stregis",
    name: "ST. REGIS",
    logoText: "ST. REGIS",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/St._Regis_Hotels_%26_Resorts_Logo.svg/320px-St._Regis_Hotels_%26_Resorts_Logo.svg.png",
    category: "Branded Residences",
    description: "Legendary luxury and bespoke services elevating the standard of branded residences in Dubai.",
    featuredProjectsCount: 3,
    badge: "Ultra-Luxury Living",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d142986d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ritzcarlton",
    name: "RITZ-CARLTON",
    logoText: "RITZ-CARLTON",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Ritz-Carlton_Hotel_Company_Logo.svg/320px-The_Ritz-Carlton_Hotel_Company_Logo.svg.png",
    category: "Branded Residences",
    description: "Iconic branded residences offering legendary service and unmatched luxury across prime Dubai locations.",
    featuredProjectsCount: 2,
    badge: "Legendary Service",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
  }
];

export const COMMUNITY_GUIDES: CommunityGuide[] = [
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    subtitle: "The Centre of Now & Iconic Skyline Living",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    avgYield: "6.8% – 7.5%",
    startingPrice: "AED 2.2 Million",
    description: "Dubai's most prestiogus enclave featuring Burj Khalifa, Dubai Opera, and high-occupancy corporate rentals.",
    keyHighlights: ["High Short-Term Rental Demand", "Direct Access to Dubai Mall", "Strong Capital Appreciation"]
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    subtitle: "World-Famous Waterfront Luxury",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    avgYield: "6.2% – 7.0%",
    startingPrice: "AED 3.8 Million",
    description: "Global ultra-wealth sanctuary with private beaches, luxury penthouses, and world-class fine dining.",
    keyHighlights: ["Freehold Beachfront Ownership", "High Global Investor Liquidity", "Ultra-Prime Capital Growth"]
  },
  {
    id: "business-bay",
    name: "Business Bay",
    subtitle: "Waterfront Canal & Financial Hub",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    avgYield: "7.8% – 8.8%",
    startingPrice: "AED 1.4 Million",
    description: "Fast-growing commercial and residential sector along the Dubai Water Canal, ideal for high ROI investors.",
    keyHighlights: ["Exceptional Rental Yields", "High Corporate Tenant Demand", "Flexible Developer Payment Plans"]
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills Estate",
    subtitle: "Championship Golf & Family Sanctuary",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    avgYield: "6.5% – 7.2%",
    startingPrice: "AED 2.0 Million",
    description: "Master-planned green community anchored by an 18-hole golf course, top international schools, and Dubai Hills Mall.",
    keyHighlights: ["Family-Oriented Masterplan", "Top Tier Schools & Healthcare", "Golden Visa Entry Point"]
  }
];

export const BUYING_PROCESS: BuyingStep[] = [
  {
    stepNumber: 1,
    title: "1. Strategy & Portfolio Alignment",
    subtitle: "Confidential Needs Analysis",
    description: "We review your investment targets, ROI expectations, budget parameters (cash vs. bank mortgage), and Golden Visa requirements.",
    duration: "Day 1",
    iconName: "Target"
  },
  {
    stepNumber: 2,
    title: "2. Handpicked Inventory Curation",
    subtitle: "Virtual Tours & Off-Market Selection",
    description: "Shaista provides curated off-plan allocations or ready properties complete with 5-pillar due diligence and yield projections.",
    duration: "Days 2–3",
    iconName: "Search"
  },
  {
    stepNumber: 3,
    title: "3. Unit Reservation & EOI Booking",
    subtitle: "0% Buyer Commission",
    description: "Secure your unit directly with the developer or seller via official Expression of Interest (EOI) and initial booking deposit.",
    duration: "Days 4–5",
    iconName: "FileCheck"
  },
  {
    stepNumber: 4,
    title: "4. DLD Registration & Oqood Issuance",
    subtitle: "Official Dubai Land Department Clearance",
    description: "Execution of Sales & Purchase Agreement (SPA) and registration with DLD to guarantee escrow protection.",
    duration: "Days 7–10",
    iconName: "ShieldCheck"
  },
  {
    stepNumber: 5,
    title: "5. Handover, Snagging & Golden Visa",
    subtitle: "Turnkey Asset Ownership",
    description: "Gro Vision conducts technical snagging inspections, utility registration, leasing management, and 10-Year Golden Visa filing.",
    duration: "On Handover",
    iconName: "Award"
  }
];

export const INVESTMENT_INSIGHTS: InvestmentInsight[] = [
  {
    id: "tax-freedom",
    tag: "TAX ADVANTAGE",
    stat: "0% Tax",
    title: "100% Tax Immunity",
    subtitle: "Zero Property, Income, or Capital Gains Tax",
    description: "Dubai levies zero income tax, zero capital gains tax, and zero property wealth tax on real estate ownership. Under DTAA (Double Tax Avoidance Agreements), Indian NRIs enjoy sovereign protection.",
    nriSpecificBenefit: "Reinvest 100% of gross rental income without local tax deductions or repatriation withholding.",
    iconName: "ShieldPercent"
  },
  {
    id: "currency-hedge",
    tag: "CURRENCY STABILITY",
    stat: "3.67 AED",
    title: "USD-Pegged Hard Currency Asset",
    subtitle: "Hedge Against Rupee Inflation & Currency Slump",
    description: "The UAE Dirham (AED) is fixed to the US Dollar at 3.6725. Owning Dubai property secures your capital in a stable, USD-backed real asset.",
    nriSpecificBenefit: "Eliminates INR currency devaluation risks while generating dollar-indexed rental yields.",
    iconName: "Coins"
  },
  {
    id: "high-yields",
    tag: "GLOBAL ROI",
    stat: "7.5% – 9%",
    title: "Superior Net Rental Yields",
    subtitle: "Outperforming London, New York & Mumbai Metros",
    description: "Prime Dubai residential hubs yield 7.5%–9% gross rental returns, backed by a 98% occupancy rate across corporate expat communities.",
    nriSpecificBenefit: "Earn up to 3x higher yields compared to Tier-1 Indian cities (2%–3%) with USD dollar parity.",
    iconName: "TrendingUp"
  },
  {
    id: "golden-visa-entry",
    tag: "RESIDENCY FREEDOM",
    stat: "10 Years",
    title: "Self-Sponsored UAE Golden Visa",
    subtitle: "Qualify with AED 2 Million (~INR 4.5 Cr) Investment",
    description: "Property ownership grants a 10-Year renewable UAE Golden Visa for you, your spouse, children, and parents without requiring local employment.",
    nriSpecificBenefit: "Full residency rights, local UAE banking access, and complete tax residency flexibility.",
    iconName: "Sparkles"
  },
  {
    id: "escrow-protection",
    tag: "CAPITAL SAFETY",
    stat: "100% Escrow",
    title: "DLD Supervised Bank Escrow",
    subtitle: "Government-Guaranteed Off-Plan Construction",
    description: "All buyer funds are legally deposited in official Dubai Land Department (DLD) escrow accounts, released to developers strictly upon verified construction milestones.",
    nriSpecificBenefit: "Complete peace of mind for overseas NRI buyers against project delays or developer defaults.",
    iconName: "Lock"
  },
  {
    id: "flexible-payment",
    tag: "DEVELOPER FINANCING",
    stat: "1% Monthly",
    title: "Post-Handover Payment Plans",
    subtitle: "Low Initial Capital Outlay (10% Booking)",
    description: "Top master developers offer flexible 60/40 or 1% monthly payment schedules extending post-handover without bank mortgage interest.",
    nriSpecificBenefit: "Use property rental income post-handover to cover remaining developer installments effortlessly.",
    iconName: "Wallet"
  }
];



