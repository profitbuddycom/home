import React from 'react';
import { QuizState, QuizResult } from '../types';
import GiftCard from './GiftCard';

interface ResultsDisplayProps {
  userName: string;
  result: QuizResult;
  onReset: () => void;
  formData: QuizState;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ userName, result, onReset, formData }) => {
  return (
    <div className="animate-fade-in overflow-y-auto p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl font-bold text-center text-stone-900 mb-2">
        {userName}, hier ist deine persönliche Erfolgs-Blaupause
      </h2>
      <div className="text-center text-stone-600 mb-6 max-w-2xl mx-auto">
        <p>Basierend auf deinen Antworten hat unsere KI deinen persönlichen Erfolgs-Archetyp identifiziert. Hier ist deine maßgeschneiderte Auswertung.</p>
        <p className="text-xs text-stone-400 mt-2">
            Der nächste Schritt ist ein exklusives Video, das dir zeigt, wie du diese Strategie Schritt für Schritt umsetzen kannst.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <GiftCard idea={result} onToggleFavorite={() => {}} />
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-8 py-3 bg-stone-200 text-stone-800 font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-75 transition-all transform hover:scale-105"
        >
          Analyse neu starten
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;