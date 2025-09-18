
import React from 'react';

const StarIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
    <div className="bg-stone-50 p-6 rounded-xl shadow-lg border border-stone-200 flex flex-col h-full">
        <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <blockquote className="text-stone-600 italic flex-grow">"{quote}"</blockquote>
        <footer className="mt-4">
            <p className="font-semibold text-stone-800">{author}</p>
            <p className="text-sm text-stone-500">{role}</p>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 bg-white rounded-2xl shadow-lg border border-stone-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">Was unsere Nutzer sagen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="Ich hatte null Vorkenntnisse und kein Budget. Die KI-Analyse hat mir ein System empfohlen, mit dem ich nach der ersten Woche meine ersten Einnahmen komplett anonym erzielt habe. Unglaublich!"
                        author="Julia K."
                        role="Erfolgreiche Starterin"
                    />
                    <TestimonialCard
                        quote="Die Tatsache, dass ich kein Startkapital brauchte, war für mich entscheidend. Die Analyse hat genau das berücksichtigt und mir einen Weg gezeigt, der wirklich funktioniert."
                        author="Markus L."
                        role="Smarter Nebenerwerbs-Gründer"
                    />
                    <TestimonialCard
                        quote="Endlich ein System, das hält, was es verspricht. Geringer Zeitaufwand, klare Anleitungen und das alles, ohne mein Gesicht zeigen zu müssen. Die KI-Analyse war der perfekte erste Schritt."
                        author="Sandra B."
                        role="Anonyme Online-Unternehmerin"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;