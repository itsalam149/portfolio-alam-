// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img:string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  image?: string; // default og image
  imageAlt?: string;
  locale?: string;
  type?: string;
  twitterCard?: string;
  robots?: string;
  themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Faqre Alam',
  domain: '',
  author: 'Faqre Alam',
  description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
  about:
    'I am a Full Stack developer who loves creating new things. I spend my spare time building free apps & tools, and I am currently diving into Machine Learning & AI to expand my problem‑solving toolkit. Always open to collaboration & new challenges.',
    author_img: 'https://github.com/itsalam149.png',
    keywords: [
    'Faqre Alam',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI'
  ],
  ogImage: '/og.png',
  twitterHandle: '',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: '',
    github: 'https://github.com/itsalam149',
    linkedin: '',
    tips: '',
    email: '',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/itsalam149', icon: 'github' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Posts', href: '/posts' },
    { label: 'Chat', href: '/chat' },
    { label: 'Contact', href: '/contact' }
  ],

  
  seo: {
    title: 'Faqre Alam',
    description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
    keywords: [
      'Faqre Alam',
      'Full Stack Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Framer Motion',
      'Machine Learning',
      'AI'
    ],
    canonical: '',
    image: '/og.png',
    imageAlt: "Faqre Alam - Full Stack Developer",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  // Use a default domain if none is provided
  const baseDomain = domain || 'localhost:3000';
  const baseUrl = `https://${baseDomain}`;
  const canonicalUrl = seo.canonical || baseUrl;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website || baseUrl }],
    metadataBase: new URL(baseUrl),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle || undefined,
      creator: siteConfig.twitterHandle || undefined,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
