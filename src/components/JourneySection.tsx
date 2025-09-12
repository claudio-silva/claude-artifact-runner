import { FC, memo } from 'react';
import { JourneyStep } from '../data/journey';

interface JourneySectionProps {
  journey: JourneyStep[];
}

const JourneySection: FC<JourneySectionProps> = ({ journey }) => (
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
);

export default memo(JourneySection);
