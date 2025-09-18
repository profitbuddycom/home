
import React from 'react';
import { QuizResult } from '../types';

interface GiftCardProps {
  idea: QuizResult;
  onToggleFavorite: (ideaName: string) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ idea }) => {
  const affiliateUrl = idea.affiliateLink || '#';

  const keyBenefits = [
    "Ohne Vorkenntnisse umsetzbar",
    "Kein Startkapital erforderlich",
    "Komplett anonym möglich",
    "Nur geringer Zeitaufwand nötig",
    "Funktioniert mit Handy oder PC",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-amber-300 flex flex-col relative animate-fade-in-up">
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-center mb-4">
            <span className="text-sm font-semibold text-amber-600">Dein Erfolgs-Archetyp</span>
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900">{idea.archetype}</h3>
            <p className="text-stone-600 mt-1">{idea.archetypeDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
                <h4 className="font-semibold text-stone-800 mb-2">Deine größten Stärken:</h4>
                <ul className="space-y-1.5">
                    {idea.strengths.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                           <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                           <span className="text-stone-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h4 className="font-semibold text-stone-800 mb-2">Potenzielle Blocker:</h4>
                <ul className="space-y-1.5">
                    {idea.potentialBlockers.map((blocker, index) => (
                        <li key={index} className="flex items-start text-sm">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                           <span className="text-stone-700">{blocker}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-400 my-4">
             <h4 className="font-semibold text-green-900 mb-2">Das empfohlene System ist perfekt für dich, denn es ist:</h4>
             <ul className="space-y-1 text-sm text-green-800">
                {keyBenefits.map((benefit, index) => (
                     <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {benefit}
                     </li>
                ))}
             </ul>
        </div>


        <div className="p-4 rounded-lg mt-auto mb-4 bg-amber-50 border-l-4 border-amber-400">
            <p className="text-sm font-semibold text-amber-900">Dein nächster Schritt:</p>
            <p className="text-sm text-amber-800">
              {idea.recommendationTeaser}
            </p>
        </div>
        
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-auto w-full text-center px-4 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105"
          aria-label={idea.callToAction}
        >
          <span>{idea.callToAction}</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </a>
      </div>
    </div>
  );
};

export default GiftCard;
