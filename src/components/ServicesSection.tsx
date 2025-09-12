import { FC, memo } from 'react';
import { Service } from '../data/services';

interface ServicesSectionProps {
  services: Service[];
  bookMeeting: () => void;
}

const ServicesSection: FC<ServicesSectionProps> = ({ services, bookMeeting }) => (
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
);

export default memo(ServicesSection);
