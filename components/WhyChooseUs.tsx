
import React from 'react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
            <p className="mt-1 text-stone-600">{description}</p>
        </div>
    </div>
);


const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                 <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Warum unser Profit-Pilot?</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                     <Feature
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                        title="Start ohne Startkapital"
                        description="Wir finden eine Strategie, die nicht auf ein großes Budget, sondern auf cleveren Einsatz von KI-Technologie setzt."
                    />
                    <Feature
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                        title="Keine Vorkenntnisse nötig"
                        description="Unsere Analyse führt Sie zu einem System, das speziell für Anfänger entwickelt wurde und keine technischen Hürden hat."
                    />
                    <Feature
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title="Komplett anonym umsetzbar"
                        description="Für viele ein entscheidender Punkt. Die von uns empfohlene Strategie kann umgesetzt werden, ohne dass Sie persönlich in Erscheinung treten."
                    />
                    <Feature
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Powered by KI"
                        description="Wir nutzen künstliche Intelligenz nicht nur zur Analyse, sondern empfehlen Ihnen auch ein System, das KI zur Content-Erstellung nutzt."
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;