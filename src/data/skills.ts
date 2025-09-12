export interface Skill {
  name: string;
  level: number;
  badge: string;
  description: string;
  specializations: string[];
}

export const skills: Skill[] = [
  {
    name: 'AI Development',
    level: 95,
    badge: 'advanced',
    description: "From GPT-4 to Claude, I engineer prompts that make models sing and turn AI into collaborators, not just tools.",
    specializations: ['GPT-4', 'Claude', 'Prompt Engineering', 'LLM Fine-tuning']
  },
  {
    name: 'Rust',
    level: 80,
    badge: 'intermediate',
    description: "Building systems that don't just work, but work beautifully. Performance meets elegance.",
    specializations: ['Tauri', 'Pake', 'WebAssembly', 'Systems Programming']
  },
  {
    name: 'Python',
    level: 90,
    badge: 'advanced',
    description: "The Swiss Army knife of my toolkit. From data science to web apps, Python does it all.",
    specializations: ['uv', 'RESTful API', 'FastAPI', 'Webcrawlers']
  },
  {
    name: 'JavaScript',
    level: 70,
    badge: 'rookie',
    description: "We are on a journey with JS. Every day I learn something new and push my boundaries.",
    specializations: ['vanilla js', 'nodejs', 'react', 'next.js']
  },
  {
    name: 'Startup Ventures',
    level: 85,
    badge: 'intermediate',
    description: "Turning ideas into reality. We've been in the trenches of startup life and lived to tell the tale.",
    specializations: ['Deep Blue Digital', 'Product Strategy', 'Growth Hacking']
  },
  {
    name: 'Security & Vibe Coding',
    level: 88,
    badge: 'advanced',
    description: "Lovable vibe coder and security specialist building EU-grade secure websites with personality.",
    specializations: ['ShadowMap', 'Penetration Testing', 'Secure Architecture', 'Vibe Coding']
  }
];
