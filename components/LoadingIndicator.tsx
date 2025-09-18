
import React, { useState, useEffect } from 'react';

const messages = [
  "Analysiere Ihre Ziele...",
  "Der E-Learning-Markt wird bis 2026 auf über 375 Milliarden Dollar geschätzt.",
  "Prüfe Erfolgsmuster...",
  "Über 50% der Kleinunternehmer betreiben ihr Geschäft von zu Hause aus.",
  "Identifiziere Ihr Potenzial...",
  "Der wichtigste Faktor für Erfolg ist nicht die Idee, sondern die konsequente Umsetzung.",
  "Erstelle Ihre Erfolgs-Blaupause...",
  "Die meisten erfolgreichen Unternehmer sind in ihrer zweiten oder dritten Geschäftsidee erfolgreich.",
  "Gleich fertig...",
  "Eine klare Strategie ist der häufigste Grund für den Erfolg eines Online-Business.",
];

const LoadingIndicator: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 min-h-[300px]">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g transform="translate(50,50)">
                <circle cx="0" cy="0" r="40" fill="none" stroke="#e7e5e4" strokeWidth="4" />
                <path d="M 0 -40 A 40 40 0 0 1 0 40" fill="none" stroke="#a16207" strokeWidth="4" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M -15 -10 L 0 5 L 15 -10" fill="none" stroke="#f5f5f4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="0" y1="5" x2="0" y2="20" stroke="#f5f5f4" strokeWidth="3" strokeLinecap="round" />
            </g>
        </svg>
      
      <p className="text-stone-700 font-semibold mt-6 text-lg text-center transition-opacity duration-500 w-64">
        {messages[messageIndex]}
      </p>
    </div>
  );
};

export default LoadingIndicator;