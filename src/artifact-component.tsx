// src/artifact-component.tsx
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { 
  Globe, 
  CheckCircle, 
  Shield, 
  Zap, 
  ArrowRight,
  ChevronRight 
} from 'lucide-react';
import CookieConsent from 'react-cookie-consent'; // Import cookie consent library


interface ParallaxSectionProps {
  children: ReactNode; // Define children as ReactNode
  className?: string; // className is optional and of type string
  parallaxSpeed?: number; // parallaxSpeed is optional and of type number
}

  const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = '', parallaxSpeed = 0.3 }) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const posY = ref.current.getBoundingClientRect().top;
      const scrollOffset = window.pageYOffset;
      setOffsetY(scrollOffset - posY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${offsetY * parallaxSpeed}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

    // Google Ads script
    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6185927994614530";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
      
      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-emerald-400" />,
      title: "Global Mobility Simplified",
      description: "Intelligent navigation through complex immigration processes.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-cyan-400" />,
      title: "Smart Documentation",
      description: "Personalized, real-time compliance tracking and guidance.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-400" />,
      title: "Success Optimization",
      description: "AI-driven insights to maximize your immigration success.",
      gradient: "from-indigo-500 to-sapphire-600"
    }
  ];
  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // Explicitly define the event type => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send email to Google Sheets via Google Apps Script
    const proxyUrl = 'https://localhost:5000'; // Replace with your Google Apps Script URL
    try {
      const response = await fetch(proxyUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send email as JSON
      });

      if (response.ok) {
          const result = await response.json();
          if (result.result === "Success") {
              alert(`Thank you! We'll contact you at ${email} soon.`);
              setEmail('');
          } else {
              alert('There was an error submitting your email. Please try again later.');
          }
      } else {
          alert('There was an error submitting your email. Please try again later.');
      }
  } catch (error) {
      console.error('Error during email submission:', error);
      alert('An unexpected error occurred. Please try again later.');
  }
};


  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-100 to-sapphire-100 text-gray-900">
      {/* Soft Gradient Background with Blurred Shapes */}
            {/* Cookie Consent Banner */}
            <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        onAccept={() => {
          console.log("Cookies accepted");
        }}
        onDecline={() => {
          console.log("Cookies declined");
        }}
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ color: "#fff", fontSize: "13px" }}
      >
        This website uses cookies to enhance the user experience. 
        <span style={{ fontSize: "10px" }}> You can opt-out if you wish.</span>
      </CookieConsent>
      <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-r from-emerald-200/30 via-teal-300/20 to-sapphire-300/30 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-l from-emerald-200/20 via-teal-300/10 to-sapphire-300/20 rounded-full blur-3xl animate-slow-spin-reverse"></div>
      </div>

      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-700">
              VisaNav
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-teal-700 hover:text-emerald-900 transition">Features</a>
            <a href="#how-it-works" className="text-teal-700 hover:text-emerald-900 transition">Process</a>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:scale-105 transition" aria-label="Get started">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxSection className="pt-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-emerald-800">
            Immigration Complexity <br />Transformed
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-teal-700 mb-10">
            Leverage cutting-edge AI to navigate your global career journey with unprecedented precision and ease.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-xl mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your professional email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-3 bg-white/70 backdrop-blur-md border border-emerald-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full hover:scale-105 transition shadow-md"
              aria-label="Submit email for early access"
            >
              Early Access
            </button>
          </form>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <ParallaxSection className="py-24 relative z-10" parallaxSpeed={0.2}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-emerald-800">
              AI-Powered Immigration Companion
            </h2>
            <p className="text-xl text-teal-700 max-w-3xl mx-auto">
              Revolutionizing global mobility with intelligent, personalized solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`
                  p-6 rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-md
                  transition-all duration-300 transform
                  ${activeFeature === index 
                    ? `scale-105 shadow-2xl bg-gradient-to-br ${feature.gradient} text-white` 
                    : 'hover:shadow-xl hover:scale-105'}
                `}
              >
                <div className="flex items-center mb-4">
                  {React.cloneElement(feature.icon, {
                    className: `w-12 h-12 ${activeFeature === index ? 'text-white' : 'text-emerald-600'}`
                  })}
                  <h3 className="ml-4 text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className={`
                  ${activeFeature === index 
                    ? 'text-white/80' 
                    : 'text-teal-800'}
                `}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* How It Works */}
      <ParallaxSection className="py-24 relative z-10" parallaxSpeed={0.15}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-emerald-800">
              Your Journey, Simplified
            </h2>
            <p className="text-xl text-teal-700 max-w-3xl mx-auto">
              Three intelligent steps to transform your immigration process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Smart Assessment",
                description: "Advanced AI analyzes your unique profile and immigration goals."
              },
              {
                number: "02",
                title: "Precision Tracking",
                description: "Real-time documentation guidance with predictive insights."
              },
              {
                number: "03",
                title: "Success Optimization",
                description: "Continuous refinement to maximize application success."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl text-center border border-emerald-100 hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-emerald-700 mr-4">
                    {step.number}
                  </span>
                  <Zap className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                  {step.title}
                </h3>
                <p className="text-teal-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <ParallaxSection className="py-24 relative z-10" parallaxSpeed={0.1}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-emerald-800">
            Unlock Your Global Potential
          </h2>
          <p className="text-xl text-teal-700 mb-10 max-w-2xl mx-auto">
            Join the future of immigration navigation. Intelligent, precise, and tailored to your unique journey.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="
              bg-gradient-to-r from-emerald-500 to-teal-600 
              text-white
              px-10 py-4 rounded-full 
              flex items-center 
              hover:scale-105 transition
              shadow-md"
              aria-label="Start your journey"
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </button>
            <button className="
              bg-white
              text-emerald-800
              px-10 py-4 rounded-full 
              flex items-center 
              hover:bg-emerald-50 transition
              border border-emerald-200
              shadow-sm"
              aria-label="Learn more about our services"
            >
              Learn More <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="relative z-10 bg-white/70 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-800 mb-4">
                VisaNav
              </h3>
              <p className="text-teal-700">
                Transforming global mobility through intelligent AI-driven solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-800">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-teal-700 hover:text-emerald-900">Features</a></li>
                <li><a href="#" className="text-teal-700 hover:text-emerald-900">Pricing</a></li>
                <li><a href="#" className="text-teal-700 hover:text-emerald-900">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-800">Contact</h4>
              <p className="text-teal-700">support@VisaNav.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-emerald-100 pt-8 text-center">
            <p className="text-teal-700">
              © 2024 VisaNav. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;