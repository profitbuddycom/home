
import React from 'react';

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-amber-100 rounded-full mb-4 border-2 border-amber-200">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
        <p className="text-stone-600 text-sm">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 bg-white rounded-2xl shadow-lg border border-stone-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">In 3 Schritten zu Ihrem persönlichen Erfolgspfad</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Step
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                        title="1. Analyse starten"
                        description="Beginnen Sie das kurze, intelligente Gespräch mit unserem KI-Erfolgs-Coach."
                    />
                    <Step
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="2. Potenzial aufdecken"
                        description="Beantworten Sie ein paar gezielte Fragen zu Ihren Zielen und Ihrer Persönlichkeit."
                    />
                    <Step
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2m-10 0h12M5 17v2a4 4 0 004 4h2a4 4 0 004-4v-2M5 7V5a4 4 0 014-4h2a4 4 0 014 4v2" /></svg>}
                        title="3. Plan erhalten"
                        description="Erhalten Sie Ihre persönliche Erfolgs-Blaupause mit klaren nächsten Schritten."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;