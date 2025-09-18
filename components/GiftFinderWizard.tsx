import React, { useState } from 'react';
import { QuizState, QuizResult } from '../types';
import { generateQuizResult } from '../services/geminiService';
import LoadingIndicator from './LoadingIndicator';
import ResultsDisplay from './ResultsDisplay';
import ProgressTracker from './ProgressTracker';
import { GOALS, TIME_INVESTMENTS, OBSTACLES, EXPERIENCE_LEVELS, WORK_STYLES, PRIORITIES, INCOME_GOALS } from '../constants';

const initialFormData: QuizState = {
    goal: '',
    timeInvestment: '',
    biggestObstacle: '',
    experience: '',
    workStyle: '',
    priority: '',
    incomeGoal: '',
    personality: [],
    skills: [],
    interest: '',
};

export const quizSteps = [
    {
        question: "Stell dir vor, du bist in einem Jahr erfolgreich online. Welches Gefühl beschreibt diesen Erfolg am besten?",
        key: 'goal',
        options: GOALS,
    },
    {
        question: "Wie viel deiner 'freien Bildschirmzeit' (Netflix, Social Media etc.) wärst du bereit, für ein funktionierendes System einzutauschen?",
        key: 'timeInvestment',
        options: TIME_INVESTMENTS,
    },
    {
        question: "Ganz ehrlich: Was ist die EINE innere Stimme, die dich bisher am lautesten 'Stopp!' rufen ließ?",
        key: 'biggestObstacle',
        options: OBSTACLES,
    },
    {
        question: "Wenn dein bisheriger Weg im Online-Business ein Buch wäre, welchen Titel hätte es?",
        key: 'experience',
        options: EXPERIENCE_LEVELS,
    },
    {
        question: "Wie kommst du am besten ins Handeln?",
        key: 'workStyle',
        options: WORK_STYLES,
    },
    {
        question: "Was ist dir bei einem neuen System am allerwichtigsten?",
        key: 'priority',
        options: PRIORITIES,
    },
    {
        question: "Welcher finanzielle Meilenstein würde in deinem Leben WIRKLICH etwas verändern?",
        key: 'incomeGoal',
        options: INCOME_GOALS,
    },
];

const EmailGate: React.FC<{ onEmailSubmit: (name: string, email: string) => void }> = ({ onEmailSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            onEmailSubmit(name, email);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in bg-amber-50">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-stone-900 mb-2">Deine persönliche Erfolgs-Blaupause ist fertig!</h2>
            <p className="text-stone-600 max-w-md mx-auto mb-6">Wir haben deine Antworten analysiert und eine maßgeschneiderte Auswertung für dich erstellt. Gib deine Daten ein, um dein Ergebnis sofort freizuschalten.</p>
            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dein Vorname"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-amber-300 text-stone-900 rounded-full focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow shadow-sm"
                    aria-label="Vorname"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine beste E-Mail-Adresse"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-amber-300 text-stone-900 rounded-full focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow shadow-sm"
                    aria-label="E-Mail-Adresse"
                />
                <button type="submit" className="px-6 py-3 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg">
                    Analyse freischalten
                </button>
            </form>
            <p className="text-xs text-stone-400 mt-4">Wir respektieren deine Privatsphäre. Kein Spam.</p>
        </div>
    );
};

interface GiftFinderWizardProps {
  initialState?: Partial<QuizState> | null;
  initialStep?: number;
  onReset: () => void;
}

const GiftFinderWizard: React.FC<GiftFinderWizardProps> = ({ initialState = null, initialStep = 0, onReset }) => {
  const [formData, setFormData] = useState<QuizState>({ ...initialFormData, ...initialState });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  
  const handleAnswer = (answer: string) => {
    const currentQuestionKey = quizSteps[currentStep].key as keyof QuizState;
    const updatedFormData = { ...formData, [currentQuestionKey]: answer };
    setFormData(updatedFormData);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsQuizComplete(true);
    }
  };
  
  const handleSubmit = async (finalData: QuizState) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const idea = await generateQuizResult(finalData);
      setResult(idea);
    } catch (err) {
      setError('Ein Fehler bei der Analyse ist aufgetreten. Bitte versuche es später erneut.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleEmailSubmit = (name: string, email: string) => {
    console.log("Email submitted for:", name, email);
    setUserName(name);
    setIsEmailSubmitted(true);
    handleSubmit(formData);
  };

  const renderQuizStep = () => {
    const stepData = quizSteps[currentStep];
    return (
      <div className="flex flex-col justify-center items-center text-center p-4 sm:p-8 animate-fade-in">
          <ProgressTracker currentStep={currentStep} totalSteps={quizSteps.length} />
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-8 mb-8 max-w-xl">{stepData.question}</h2>
          <div className="w-full max-w-md flex flex-col space-y-3">
            {stepData.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left px-6 py-4 bg-white border-2 border-stone-200 text-stone-700 font-semibold rounded-lg hover:bg-amber-50 hover:border-amber-400 hover:text-stone-900 transition-all duration-200 transform hover:scale-105 shadow-sm"
              >
                {option}
              </button>
            ))}
          </div>
      </div>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }
    if (error) {
      return (
        <div className="text-center flex flex-col justify-center items-center h-full p-4">
            <p className="text-red-500 font-semibold">{error}</p>
            <button
                onClick={onReset}
                className="mt-4 px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
                Zurück zur Startseite
            </button>
        </div>
      );
    }
    if (isQuizComplete && !isEmailSubmitted) {
        return <EmailGate onEmailSubmit={handleEmailSubmit} />;
    }

    if (isQuizComplete && isEmailSubmitted && result) {
      return (
        <ResultsDisplay 
          userName={userName}
          result={result} 
          onReset={onReset}
          formData={formData}
        />
      );
    }
    return renderQuizStep();
  }

  return (
    <div className="bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
        {renderContent()}
    </div>
  );
};

export default GiftFinderWizard;