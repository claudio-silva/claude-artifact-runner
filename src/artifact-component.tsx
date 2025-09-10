import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [isHired, setIsHired] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mediumPosts, setMediumPosts] = useState<any[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fetch Medium posts
  const fetchMediumPosts = async () => {
    setIsFetchingPosts(true);
    try {
      const mediumUsername = 'md.abir1203';
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`;
      
      const response = await fetch(rssUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === 'ok' && data.items && data.items.length > 0) {
        setMediumPosts(data.items);
      } else {
        setMediumPosts([
          {
            title: "Code complexity? We make it elegant",
            description: "As a Multi-LLM Workflow creator and Rustace featured developer, I'm on a mission to empower 10k devs with elegant solutions to complex problems.",
            pubDate: "2024-01-15T00:00:00.000Z",
            link: "https://medium.com/@md.abir1203"
          },
          {
            title: "The Art of Vibe Coding",
            description: "How I combine security expertise with personality-driven development to create EU-grade websites that users actually enjoy.",
            pubDate: "2024-02-20T00:00:00.000Z",
            link: "https://medium.com/@md.abir1203"
          },
          {
            title: "Building ShadowMap: A Rust-powered Security Framework",
            description: "The story behind creating an open-source framework for subdomain enumeration, vulnerability detection, and attack surface mapping with vibe coding.",
            pubDate: "2024-03-10T00:00:00.000Z",
            link: "https://medium.com/@md.abir1203"
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
      setMediumPosts([
        {
          title: "Code complexity? We make it elegant",
          description: "As a Multi-LLM Workflow creator and Rustace featured developer, I'm on a mission to empower 10k devs with elegant solutions to complex problems.",
          pubDate: "2024-01-15T00:00:00.000Z",
          link: "https://medium.com/@md.abir1203"
        },
        {
          title: "The Art of Vibe Coding",
          description: "How I combine security expertise with personality-driven development to create EU-grade websites that users actually enjoy.",
          pubDate: "2024-02-20T00:00:00.000Z",
          link: "https://medium.com/@md.abir1203"
        },
        {
          title: "Building ShadowMap: A Rust-powered Security Framework",
          description: "The story behind creating an open-source framework for subdomain enumeration, vulnerability detection, and attack surface mapping with vibe coding.",
          pubDate: "2024-03-10T00:00:00.000Z",
          link: "https://medium.com/@md.abir1203"
        }
      ]);
    } finally {
      setIsFetchingPosts(false);
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  const handleTabClick = (tab: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
      if (tab === 'blog' && mediumPosts.length === 0) {
        fetchMediumPosts();
      }
    }, 200);
  };

  const bookMeeting = () => {
    window.open('https://calendly.com/abirabbasmd', '_blank');
  };

  // Canvas animation useEffect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type ParticleLike = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      update: () => void;
      draw: (ctx: CanvasRenderingContext2D) => void;
    };

    let particles: ParticleLike[] = [];

    class Particle implements ParticleLike {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`;
        this.life = 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.life > 0);
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleHireClick = () => {
      const rect = canvas.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;
      
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(x, y));
      }
      setIsHired(true);
      setTimeout(() => setIsHired(false), 3000);
    };

    const hireButton = document.querySelector('.hire-me-button');
    if (hireButton) {
      hireButton.addEventListener('click', handleHireClick);
    }

    return () => {
      if (hireButton) {
        hireButton.removeEventListener('click', handleHireClick);
      }
    };
  }, []);

  // Data constants
  const skills = [
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

  const projects = [
    {
      title: 'ShadowMap',
      description: 'A Rust-powered open-source framework for subdomain enumeration, vulnerability detection, and attack surface mapping built with vibe coding.',
      stars: '⭐ Open Source',
      link: 'https://github.com/mdabir1203/ShadowMap',
      image: '/images/ShadowMaplogo.png'
    },
    {
      title: 'Prompt Panda Bangla',
      description: 'Showcasing prompt engineering in Bangla - making AI accessible to Bengali speakers with a lovable, friendly interface.',
      stars: '🐼 Vibe Coding',
      link: 'https://prompt-panda-bangla.lovable.app/',
      image: '/images/1.png'
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
      image: '/images/asd.png'
    }
  ];

  const services = [
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

  const linkedinRecommendations = [
    {
      name: "Jun yub Kim",
      role: "Strategic Planner at General Motors | Software Developer",
      content: "I had the pleasure of working with Abir, and during that time, I was able to see firsthand his exceptional technical abilities as well as his collaborative approach. Abir is not only a highly skilled professional but also someone who actively supports his colleagues' growth and fosters a positive, team-oriented environment.",
      avatar: "https://placehold.co/100x100/0d1321/00eaff?text=JK"
    },
    {
      name: "Sabbir Ahamed Shubho",
      role: "Embedded Software Developer | Linux Enthusiast",
      content: "Mr. Mohammad Abir is very hard worker and talented student. I have known him since my school days. Once he made up his mind on something, he put a great effort no matter how hard that task is.",
      avatar: "https://placehold.co/100x100/0d1321/aeff00?text=SS"
    },
    {
      name: "Martje Lott",
      role: "Wissenschaftliche Mitarbeiterin und Doktorandin an der Universität Hamburg",
      content: "Herr Mohammad Abir Abbas ist ehrenamtlich bei AIESEC e.V tätig. Er ist Vorsitzender für das Team Praktikanten im Unternehmen zu vermitteln und das interkulturelle Verständnis zu fördern.",
      avatar: "https://placehold.co/100x100/0d1321/ff6b6b?text=ML"
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "AI Alchemist & Vibe Coder",
      description: "Mastering the art of turning data into gold with advanced AI systems, prompt engineering, and building lovable, secure websites."
    },
    {
      year: "2023",
      title: "Rust Evangelist & Security Specialist",
      description: "Building high-performance systems with Rust and creating security tools like ShadowMap for the open-source community."
    },
    {
      year: "2022",
      title: "Startup Warrior",
      description: "Launching Deep Blue Digital and VisaNav, learning the hard lessons of entrepreneurship while making tech accessible."
    },
    {
      year: "2021",
      title: "Python Wizard",
      description: "Diving deep into data science and machine learning, building intelligent systems that solve real problems with personality."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1321] to-[#1c273c] text-white font-mono relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="retro-cube absolute"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${15 + i * 3}s`,
              transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${mousePosition.y * 20}deg)`
            }}
          >
            <div className="front bg-gradient-to-br from-purple-500 to-cyan-500 opacity-60"></div>
            <div className="back bg-gradient-to-br from-cyan-500 to-purple-500 opacity-60"></div>
            <div className="right bg-gradient-to-br from-purple-500 to-pink-500 opacity-60"></div>
            <div className="left bg-gradient-to-br from-pink-500 to-cyan-500 opacity-60"></div>
            <div className="top bg-gradient-to-br from-cyan-500 to-purple-500 opacity-60"></div>
            <div className="bottom bg-gradient-to-br from-purple-500 to-cyan-500 opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Voxel Background */}
      <div className="voxel-background">
        <div className="mesh-wrapper">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="mesh-line"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Canvas for particle effects */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-10 pointer-events-none" 
        style={{ mixBlendMode: 'screen' }}
      ></canvas>

      <div className="container mx-auto px-6 py-12 relative z-20">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {['home', 'skills', 'projects', 'blog', 'services', 'journey', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab px-6 py-3 rounded-lg font-bold transition-all duration-300 border-2 ${
                activeTab === tab 
                  ? 'text-green-400 border-green-400 bg-green-400/20 shadow-lg shadow-green-400/30' 
                  : 'text-gray-400 border-gray-600 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="text-center">
              <div className="spinner border-4 border-gray-300 border-t-cyan-400 rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg animate-pulse">Loading next dimension...</p>
            </div>
          </div>
        )}

        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="mb-12 md:mb-16 animate-fadeIn">
            <div className="profile-section mb-8 md:mb-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-cyan-500/20 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
                  <img
                    src="/images/profile.jpg"
                    alt="Mohammad Abir Abbas"
                    className="w-full h-full rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/30 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="profile-info text-center lg:text-left flex-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-shadow-glow mb-3 md:mb-4">
                    Mohammad Abir Abbas
                  </h1>
                  <div className="mb-6 md:mb-8">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mx-auto lg:mx-0">
                    We craft AI-powered, secure, and scalable solutions that drive impact. From multi-LLM workflows to Rust systems, every decision is data-driven, every product human-focused, and every line of code aimed at breaking barriers and shaping the impossible.
                    </p>
                  </div>

                  <div className="role-hire flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">AI Whisperer</span>
                      <span className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Rust Artisan</span>
                      <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">Vibe Coder</span>
                    </div>
                    <button 
                      className="hire-me-button bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 hover:to-green-500 text-black font-bold py-2 px-4 md:py-3 md:px-8 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50"
                      onClick={() => handleTabClick('contact')}
                    >
                      {isHired ? 'Hired!' : 'Hire Me'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
            {/* LinkedIn Recommendations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">LinkedIn Recommendations</h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {linkedinRecommendations.map((recommendation, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    <div className="flex items-center mb-4">
                      <img src={recommendation.avatar} alt={recommendation.name} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h3 className="font-bold text-green-400">{recommendation.name}</h3>
                        <p className="text-gray-400 text-sm">{recommendation.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{recommendation.content}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Digital Arsenal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card bg-white/5 border border-white/10 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="skill-name text-xl font-bold text-cyan-400 text-shadow-glow">{skill.name}</h3>
                    <span className={`badge ${skill.badge} text-xs font-bold px-3 py-1 rounded-full ${
                      skill.badge === 'advanced' ? 'bg-gradient-to-r from-purple-500 to-cyan-500' :
                      skill.badge === 'intermediate' ? 'bg-gradient-to-r from-cyan-500 to-green-500' :
                      skill.badge === 'rookie' ? 'bg-gradient-to-r from-green-500 to-yellow-500' :
                      'bg-gradient-to-r from-yellow-500 to-red-500'
                    }`}>
                      {skill.badge.charAt(0).toUpperCase() + skill.badge.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{skill.description}</p>
                  
                  <div className="skill-bar bg-white/10 rounded-full h-3 mb-6">
                    <div 
                      className="skill-progress bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full h-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="specializations flex flex-wrap gap-2">
                    {skill.specializations.map((spec, specIndex) => (
                      <span 
                        key={specIndex} 
                        className="bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30 hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Digital Creations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="project-card bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group overflow-hidden"
                >
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="project-title text-2xl font-bold text-green-400 mb-3">{project.title}</h3>
                  <p className="project-description text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="project-footer flex justify-between items-center">
                    <span className="project-stars text-yellow-400 font-bold flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                    <a 
                      href={project.link} 
                      className="project-link text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-bold py-2 px-4 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Blog Section */}
        {activeTab === 'blog' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Medium Blog Posts</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Sharing my thoughts on AI, Rust, security, and vibe coding.
            </p>
            
            {isFetchingPosts ? (
              <div className="text-center py-12">
                <div className="spinner border-4 border-gray-300 border-t-cyan-400 rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading my latest thoughts...</p>
              </div>
            ) : mediumPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediumPosts.map((post, index) => {
                  const date = new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  });
                  
                  let excerpt = post.description || post.content || '';
                  if (excerpt.length > 150) {
                    excerpt = excerpt.substring(0, 150) + '...';
                  }
                  
                  return (
                    <div 
                      key={index} 
                      className="blog-card bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group"
                    >
                      <h3 className="blog-title text-2xl font-bold text-green-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <div className="blog-date text-gray-400 text-sm mb-4">
                        {date}
                      </div>
                      <p className="blog-excerpt text-gray-300 mb-6 leading-relaxed">
                        {excerpt}
                      </p>
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="blog-link text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-bold py-2 px-4 rounded-lg border-2 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300 inline-block"
                      >
                        Read Full Article →
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No blog posts available at the moment.</p>
                <button 
                  onClick={fetchMediumPosts}
                  className="mt-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            )}
            
            <div className="text-center mt-8">
              <a 
                href="https://medium.com/@md.abir1203" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
                onClick={fetchMediumPosts}
              >
                View All Posts on Medium →
              </a>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === 'services' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">AI Development Services</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              I provide expert AI development services to bring your ideas to life. Here's a breakdown of my offerings:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="package-card bg-white/5 border border-white/10 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 group"
                >
                  <h3 className="text-2xl font-bold text-green-400 mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="package-price text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <p className="text-sm text-gray-400">Best for: {service.bestFor}</p>
                  </div>
                  
                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="package-button w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
                    onClick={bookMeeting}
                  >
                    Book a Meeting
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Journey Section */}
        {activeTab === 'journey' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">My Digital Journey</h2>
            
            <div className="max-w-4xl mx-auto">
              {journey.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{step.year}</div>
                      <h3 className="text-xl font-bold text-green-400 mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-1/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full border-4 border-white/20"></div>
                    {index < journey.length - 1 && (
                      <div className="absolute w-0.5 h-32 bg-gradient-to-b from-cyan-400 to-green-400 my-2"></div>
                    )}
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Builder Philosophy</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                "We build boldly, break fearlessly, and aim for horizons yet unseen"
              </p>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Let's Create Magic Together</h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
                    onClick={bookMeeting}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Quick Connect</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4">Connect With Me</h4>
                  <div className="space-y-4">
                    <a 
                      href="https://www.github.com/mdabir1203" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/abir-abbas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">LinkedIn</span>
                    </a>
                    
                    <a 
                      href="https://www.medium.com/@md.abir1203" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.75 2.5h18.5c.138 0 .25.112.25.25v18.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25V2.75c0-.138.112-.25.25-.25zM21 19V5H3v14h18zM7.25 7a.75.75 0 0 0 0 1.5h.774a.75.75 0 0 0 0-1.5H7.25zm0 3.75a.75.75 0 0 0 0 1.5h.774a.75.75 0 0 0 0-1.5H7.25zm0 3.75a.75.75 0 0 0 0 1.5h.774a.75.75 0 0 0 0-1.5H7.25zm0 3.75a.75.75 0 0 0 0 1.5h.774a.75.75 0 0 0 0-1.5H7.25zm3.25-11.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5zm0 3.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5zm0 3.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5zm0 3.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">Medium</span>
                    </a>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4">Schedule a Meeting</h4>
                  <button 
                    onClick={bookMeeting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-transparent transition-all duration-300 text-shadow-glow transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/30"
                  >
                    Book a Meeting with Calendly
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Mohammad Abir Abbas. Code complexity? We make it elegant.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cookie Settings</a>
          </div>
        </footer>
      </div>

      <style>{`
        .text-shadow-glow {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
        }
        
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #00eaff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .retro-cube {
          width: 80px;
          height: 80px;
          position: absolute;
          transform-style: preserve-3d;
        }
        
        .retro-cube div {
          position: absolute;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, rgba(255, 0, 255, 0.6), rgba(0, 255, 255, 0.6));
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.4);
        }
        
        .retro-cube .front  { transform: translateZ(40px); }
        .retro-cube .back   { transform: rotateY(180deg) translateZ(40px); }
        .retro-cube .right  { transform: rotateY(90deg) translateZ(40px); }
        .retro-cube .left   { transform: rotateY(-90deg) translateZ(40px); }
        .retro-cube .top    { transform: rotateX(90deg) translateZ(40px); }
        .retro-cube .bottom { transform: rotateX(-90deg) translateZ(40px); }
        
        .voxel-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        
        .mesh-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .mesh-line {
          position: absolute;
          background: linear-gradient(90deg, rgba(152, 230, 255, 0.1), rgba(152, 230, 255, 0.05));
          height: 1px;
          animation: mesh-animate 10s linear infinite;
        }
        
        @keyframes mesh-animate {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(10px, 10px, 0) rotate(5deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0); }
        }
        
        .mesh-line:nth-child(1) { width: 40%; top: 10%; left: 10%; transform-origin: top left; }
        .mesh-line:nth-child(2) { width: 30%; top: 20%; left: 60%; transform-origin: top left; animation-delay: 2s; }
        .mesh-line:nth-child(3) { width: 50%; top: 30%; left: 20%; transform-origin: top left; animation-delay: 4s; }
        .mesh-line:nth-child(4) { width: 45%; top: 40%; left: 70%; transform-origin: top left; animation-delay: 6s; }
        .mesh-line:nth-child(5) { width: 60%; top: 50%; left: 5%; transform-origin: top left; animation-delay: 8s; }
        .mesh-line:nth-child(6) { width: 25%; top: 60%; left: 70%; transform-origin: top left; animation-delay: 3s; }
        .mesh-line:nth-child(7) { width: 40%; top: 70%; left: 20%; }
        .mesh-line:nth-child(8) { width: 35%; top: 80%; left: 80%; transform-origin: top left; animation-delay: 5s; }
        .mesh-line:nth-child(9) { width: 45%; top: 15%; left: 85%; transform-origin: top left; animation-delay: 7s; }
        .mesh-line:nth-child(10) { width: 55%; top: 75%; left: 10%; transform-origin: top left; animation-delay: 9s; }
        .mesh-line:nth-child(11) { width: 30%; top: 5%; left: 50%; transform-origin: top left; animation-delay: 1s; }
        .mesh-line:nth-child(12) { width: 65%; top: 90%; left: 30%; transform-origin: top left; animation-delay: 11s; }
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
        }
        
        .circular-animation {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 160px;
          height: 160px;
          border: 3px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: pulse 2s infinite;
          transform: translate(-50%, -50%);
        }
        
        .rotating-points .point {
          position: absolute;
          width: 8px;
          height: 8px;
          background: currentColor;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .blog-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(152, 230, 255, 0.2);
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(152, 230, 255, 0.3);
        }
        
        .blog-title {
          font-family: 'Electrolize', sans-serif;
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #aeff00;
          text-shadow: 0 0 5px #aeff00;
        }
        
        .blog-date {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 3px #94a3b8;
        }
        
        .blog-excerpt {
          color: #94a3b8;
          margin-bottom: 1rem;
          line-height: 1.6;
          text-shadow: 0 0 3px #94a3b8;
        }
        
        .blog-link {
          color: #00eaff;
          text-decoration: none;
          transition: color 0.3s ease;
          border: 2px solid #00eaff;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          background: rgba(165, 180, 252, 0.1);
          text-shadow: 0 0 5px #00eaff;
        }
        
        .blog-link:hover {
          background: rgba(165, 180, 252, 0.2);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;