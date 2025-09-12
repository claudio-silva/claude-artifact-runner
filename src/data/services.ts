export interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
}

export const services: Service[] = [
  {
    title: 'Basic AI Integration',
    price: '$500',
    description: 'Ideal for small projects or businesses getting started with AI.',
    features: [
      'Basic Model Training',
      'API Integration',
      'Limited Prompt Engineering',
      '2 Weeks Support'
    ],
    bestFor: 'Startups & Small Businesses'
  },
  {
    title: 'Advanced AI Development',
    price: '$1500',
    description: 'Custom AI solutions for businesses looking for advanced functionality.',
    features: [
      'Advanced Model Customization',
      'Complex Data Processing',
      'Comprehensive Prompt Engineering',
      '1 Month Support & Training'
    ],
    bestFor: 'Growing Companies'
  },
  {
    title: 'AI Consultation & Strategy',
    price: '$300',
    description: 'Expert guidance and strategic planning to maximize your AI success.',
    features: [
      'Project Scoping & Analysis',
      'Customized AI Roadmap',
      'Strategic Guidance & Support',
      'Competitor Analysis'
    ],
    bestFor: 'Executives & Decision Makers'
  },
  {
    title: 'Entrepreneurship Value Add',
    price: '$1000',
    description: 'Enhance your entrepreneurial journey with expert advice and strategic insights.',
    features: [
      'Business Model Optimization',
      'Market Analysis & Validation',
      'Growth Strategy Development',
      'Investor Pitch Preparation'
    ],
    bestFor: 'Founders & Entrepreneurs'
  },
  {
    title: 'Vibe Coding & Security',
    price: '$1200',
    description: 'Lovable, secure websites built with personality and EU-grade security standards.',
    features: [
      'Vibe-First Development',
      'Security Audits & Hardening',
      'EU Compliance Standards',
      'Ongoing Security Monitoring'
    ],
    bestFor: 'Businesses Needing Secure & Fun Websites'
  }
];
