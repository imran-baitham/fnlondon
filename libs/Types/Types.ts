export interface NavItem {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface MarketingConfig {
  mainNav: NavItem[];
  userNav: NavItem[];
}

export interface UserDataProps {
  title: string;
  href: string;
}
