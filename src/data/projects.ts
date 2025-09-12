export interface Project {
  title: string;
  description: string;
  stars: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'ShadowMap',
    description: 'A Rust-powered open-source framework for subdomain enumeration, vulnerability detection, and attack surface mapping built with vibe coding.',
    stars: '⭐ Open Source',
    link: 'https://github.com/mdabir1203/ShadowMap',
    image: '/images/ShadowMaplogo.webp'
  },
  {
    title: 'Prompt Panda Bangla',
    description: 'Showcasing prompt engineering in Bangla - making AI accessible to Bengali speakers with a lovable, friendly interface.',
    stars: '🐼 Vibe Coding',
    link: 'https://prompt-panda-bangla.lovable.app/',
    image: '/images/1.webp'
  },
  {
    title: 'Deep Blue Digital 2.0',
    description: 'A Digital Marketplace for easy access to Creator tools',
    stars: '🚀 Learning Journey',
    link: 'https://www.thedeepbluedigital.com',
    image: 'https://placehold.co/600x400/0d1321/00eaff?text=Deep+Blue+Digital'
  },
  {
    title: 'RedAGPT',
    description: 'A Redis side quest hackathon winner - a cutting-edge security testing toolkit using AutoGPT and Langchain for network vulnerability assessment in homes and offices.',
    stars: '🏆 Hackathon Winner',
    link: 'https://github.com/mdabir1203/RedAGPT',
    image: '/images/asd.webp'
  }
];
