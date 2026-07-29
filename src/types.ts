export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'penthouses' | 'mansions' | 'waterfront' | 'commercial';
  location: string;
  price: string;
  priceValue: number;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  featuredImage: string;
  gallery: string[];
  overview: string;
  amenities: string[];
  developer: string;
  completionYear: string;
  videoUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  rating: number;
  avatar: string;
  propertyAcquired: string;
  transactionType: 'Buyer Representation' | 'Portfolio Management' | 'Private Off-Market Deal' | 'Investment Strategy';
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  category: 'Award' | 'Milestone' | 'Partnership' | 'Project Launch';
  description: string;
  partnerOrOrg: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  category: string;
}

export interface GoldenVisaTier {
  id: string;
  title: string;
  duration: string;
  target: string;
  description: string;
  benefits: string[];
}

export interface ContentPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface TeamPartner {
  name: string;
  role: string;
  focus: string;
  description: string;
}

export interface SocialReel {
  id: string;
  reelId: string;
  title: string;
  caption: string;
  thumbnail: string;
  views: string;
  likes: string;
  comments: string;
  videoUrl: string;
  instagramUrl: string;
  embedUrl: string;
  audioTrack?: string;
  postedDate?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Investing' | 'Selling' | 'Advisory' | 'Off-Market';
}

export interface MediaFeature {
  id: string;
  publication: string;
  logo: string;
  headline: string;
  date: string;
  url: string;
}

export interface DeveloperPartner {
  id: string;
  name: string;
  logoText: string;
  category: string;
  description: string;
  featuredProjectsCount: number;
  badge: string;
  image?: string;
}

export interface CommunityGuide {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  avgYield: string;
  startingPrice: string;
  description: string;
  keyHighlights: string[];
}

export interface BuyingStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface InvestmentInsight {
  id: string;
  tag: string;
  stat: string;
  title: string;
  subtitle: string;
  description: string;
  nriSpecificBenefit: string;
  iconName: string;
}
