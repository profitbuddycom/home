
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GiftFinderWizard from './components/GiftFinderWizard';
import SeoContent from './components/SeoContent';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogPage from './components/BlogPage';
import GiftIllustration from './components/GiftIllustration';
import { quizSteps } from './constants'; // Import quiz steps
import { QuizState } from './types'; // Import QuizState type
import BackgroundPattern from './components/BackgroundPattern';

const App: React.FC = () => {
  const [isWizardActive, setIsWizardActive] = useState(false);
  const [currentPage, setCurrentPage] = useState<'finder' | 'blog'>('finder');
  const [wizardData, setWizardData] = useState<{ initialState: Partial<QuizState> | null, initialStep: number }>({ initialState: null, initialStep: 0 });

  const [headlines, setHeadlines] = useState<{title: JSX.Element}>({
    title: <>
      <span className="block">Hunderte Videos geschaut, nichts verdient?</span>
      <span className="block text-amber-600 mt-2">Diese KI findet deinen Shortcut zum Online-Einkommen.</span>
    </>
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ad = params.get('ad');
    if (ad === 'fehler') {
        setHeadlines({
            title: <><span className="block">Der #1 Denkfehler, der dich online scheitern lässt.</span><span className="block text-amber-600 mt-2">Unsere KI deckt ihn für dich auf.</span></>
        });
    } else if (ad === 'talent') {
        setHeadlines({
            title: <><span className="block">Dein verborgenes Talent zum Geldverdienen?</span><span className="block text-amber-600 mt-2">Diese KI findet es in unter 60 Sekunden.</span></>
        });
    }
  }, []);

  const handleStartWizardFromBlog = () => {
    setCurrentPage('finder');
    setIsWizardActive(false); // Go to finder home, not wizard directly
    window.scrollTo(0, 0);
  }

  const handleFirstQuestionAnswer = (answer: string) => {
    const firstQuestionKey = quizSteps[0].key as keyof QuizState;
    setWizardData({
        initialState: { [firstQuestionKey]: answer },
        initialStep: 1
    });
    setIsWizardActive(true);
    window.scrollTo(0, 0);
  };

  const handleResetWizard = () => {
    setIsWizardActive(false);
    setWizardData({ initialState: null, initialStep: 0 });
  }

  const renderFinderContent = () => (
    <>
      {!isWizardActive ? (
        <div className="relative">
          <GiftIllustration />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-stone-900 leading-tight">
            {headlines.title}
          </h1>
          
          <p className="text-center text-stone-600 mt-6 text-sm sm:text-base animate-fade-in-up">
             ⭐ Von über <strong>5.000</strong> angehenden Gründern genutzt
          </p>

          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop" 
              alt="Erfolgreicher Online-Unternehmer arbeitet am Laptop" 
              className="rounded-2xl shadow-xl border border-stone-200 inline-block w-full max-w-2xl" 
            />
          </div>
          
          <div className="bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden mt-10 p-4 sm:p-8 text-center animate-zoom-in">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 max-w-xl mx-auto">{quizSteps[0].question}</h2>
            <div className="w-full max-w-md flex flex-col space-y-3 mx-auto">
                {quizSteps[0].options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleFirstQuestionAnswer(option)}
                        className="w-full text-left px-6 py-4 bg-white border-2 border-stone-200 text-stone-700 font-semibold rounded-lg hover:bg-amber-50 hover:border-amber-400 hover:text-stone-900 transition-all duration-200 transform hover:scale-105 shadow-sm"
                    >
                        {option}
                    </button>
                ))}
            </div>
          </div>

          <div className="mt-16 space-y-16">
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
          </div>
          <SeoContent />
        </div>
      ) : (
        <div className="mt-0">
          <GiftFinderWizard 
            initialState={wizardData.initialState}
            initialStep={wizardData.initialStep}
            onReset={handleResetWizard}
          />
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-transparent text-stone-800 flex flex-col overflow-x-hidden relative">
      <BackgroundPattern />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 relative">
        <div className="w-full max-w-4xl mx-auto">
          {currentPage === 'finder' && renderFinderContent()}
          {currentPage === 'blog' && <BlogPage onStartFinder={handleStartWizardFromBlog} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
