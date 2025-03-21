export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  category: 'corporate' | 'gala' | 'wedding' | 'social';
}

export interface Theme {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  stats: {
    happyClients: number;
    eventsHosted: number;
    yearsInBusiness: number;
  };
}

export interface Service {
  title: string;
  items: string[];
  icon: string;
}

export interface EventCategory {
  title: string;
  description: string;
  items: string[];
  imageUrl: string;
}