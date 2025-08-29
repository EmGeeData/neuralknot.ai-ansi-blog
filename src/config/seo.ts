// Central SEO configuration for NeuralKnot.ai BBS
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export const SEO_DEFAULTS = {
  siteName: "NeuralKnot.ai BBS",
  siteUrl: "https://neuralknot.ai", // Update with your actual domain
  defaultTitle: SITE_TITLE,
  defaultDescription: SITE_DESCRIPTION,
  defaultImage: "/images/og-neuralknot-bbs.jpg", // Create this OG image
  twitterHandle: "@neuralknot", // Update with actual handle
  author: "NeuralKnot Team",
  locale: "en_US",
  
  // BBS/Terminal themed keywords
  keywords: [
    "software development",
    "hacking culture", 
    "cybersecurity",
    "artificial intelligence",
    "programming tutorials",
    "tech blog",
    "terminal computing",
    "BBS culture",
    "retro computing",
    "developer tools",
    "coding techniques",
    "tech industry analysis"
  ],

  // Social media defaults
  social: {
    twitter: {
      site: "@neuralknot",
      creator: "@neuralknot",
      card: "summary_large_image" as const,
    },
    facebook: {
      appId: "", // Add if you have Facebook app
    },
  },

  // Structured data for tech blog
  organization: {
    name: "NeuralKnot.ai",
    url: "https://neuralknot.ai",
    description: "A tech terminal exploring software development, hacking culture, and AI",
    logo: "https://neuralknot.ai/images/logo.png",
    sameAs: [
      // Add your social media URLs
      // "https://twitter.com/neuralknot",
      // "https://github.com/neuralknot",
    ],
  },
};

export interface SEOMetadata {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: "website" | "article" | "profile";
  publishDate?: Date;
  modifiedDate?: Date;
  author?: string;
  keywords?: string[];
  articleSection?: string;
  articleTags?: string[];
}

export function generatePageTitle(title?: string): string {
  if (!title) return SEO_DEFAULTS.defaultTitle;
  if (title === SEO_DEFAULTS.siteName) return title;
  return `${title} - ${SEO_DEFAULTS.siteName}`;
}

export function generateCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  return `${SEO_DEFAULTS.siteUrl}${cleanPath}`;
}

export function generateImageUrl(image?: string): string {
  if (!image) return `${SEO_DEFAULTS.siteUrl}${SEO_DEFAULTS.defaultImage}`;
  if (image.startsWith('http')) return image;
  return `${SEO_DEFAULTS.siteUrl}${image}`;
}

export function generateMetaTags(metadata: SEOMetadata, pathname: string) {
  const title = generatePageTitle(metadata.title);
  const description = metadata.description || SEO_DEFAULTS.defaultDescription;
  const image = generateImageUrl(metadata.image);
  const canonical = metadata.canonical || generateCanonicalUrl(pathname);
  
  return {
    title,
    description,
    image,
    imageAlt: metadata.imageAlt || `${SEO_DEFAULTS.siteName} - ${metadata.title || 'Tech Terminal'}`,
    canonical,
    keywords: [...SEO_DEFAULTS.keywords, ...(metadata.keywords || [])],
    type: metadata.type || 'website',
    publishDate: metadata.publishDate,
    modifiedDate: metadata.modifiedDate,
    author: metadata.author || SEO_DEFAULTS.author,
    noindex: metadata.noindex || false,
    nofollow: metadata.nofollow || false,
    articleSection: metadata.articleSection,
    articleTags: metadata.articleTags,
  };
}

// Structured data generators
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SEO_DEFAULTS.siteName,
    "url": SEO_DEFAULTS.siteUrl,
    "description": SEO_DEFAULTS.defaultDescription,
    "publisher": SEO_DEFAULTS.organization,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SEO_DEFAULTS.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateArticleStructuredData(metadata: SEOMetadata, pathname: string) {
  const meta = generateMetaTags(metadata, pathname);
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": meta.description,
    "image": meta.image,
    "author": {
      "@type": "Organization",
      "name": meta.author
    },
    "publisher": SEO_DEFAULTS.organization,
    "url": meta.canonical,
    "datePublished": metadata.publishDate?.toISOString(),
    "dateModified": metadata.modifiedDate?.toISOString(),
    "articleSection": metadata.articleSection || "Technology",
    "keywords": meta.keywords.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": meta.canonical
    }
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${SEO_DEFAULTS.siteUrl}${crumb.url}`
    }))
  };
}