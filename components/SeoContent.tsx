
import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
    {
        question: "Wie funktioniert die KI-Analyse?",
        answer: "Unser Tool führt dich durch ein kurzes, intelligentes Gespräch, um deine Ziele, Stärken und potenziellen Hürden zu verstehen. Anstatt allgemeiner Tipps analysiert unsere KI deine individuellen Antworten, um eine Strategie-Empfehlung zu geben, die wirklich zu dir passt."
    },
    {
        question: "Ist diese Analyse wirklich personalisiert?",
        answer: "Ja, absolut. Unsere KI wurde darauf trainiert, Muster und Verbindungen in deinen Antworten zu erkennen. Das Ergebnis ist keine Standard-Antwort, sondern ein auf dich zugeschnittener Erfolgs-Archetyp, der deine einzigartige Ausgangslage berücksichtigt."
    },
    {
        question: "Was kostet die Nutzung des Profit-Piloten?",
        answer: "Die Analyse und die Erstellung deiner persönlichen Erfolgs-Blaupause sind für dich vollkommen kostenlos. Wir finanzieren uns über Provisionen, falls du dich für das von uns empfohlene Partner-Produkt entscheidest. Für dich entstehen dadurch keine zusätzlichen Kosten."
    },
    {
        question: "Muss ich Vorkenntnisse haben?",
        answer: "Nein, überhaupt nicht. Unsere Analyse ist für jeden geeignet, vom absoluten Anfänger, der seine erste Online-Einnahmequelle sucht, bis hin zu Fortgeschrittenen, die ihre bisherige Strategie optimieren möchten."
    },
    {
        question: "Was passiert mit meiner E-Mail-Adresse?",
        answer: "Wir nutzen deine E-Mail-Adresse ausschließlich, um dir deine persönliche Analyse zuzusenden. Wir respektieren deine Privatsphäre und geben deine Daten niemals an Dritte weiter. Kein Spam, versprochen."
    }
];

const SeoContent: React.FC = () => {
    return (
        <div className="mt-20 md:mt-32 max-w-4xl mx-auto text-left">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-stone-200">
                <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Dein Weg zum Online-Erfolg: Mehr als nur eine Suchmaschine</h2>
                
                <section className="mb-8">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-3">Die Wissenschaft hinter deiner persönlichen Erfolgsstrategie</h3>
                    <p className="text-stone-600 leading-relaxed">
                        Der Versuch, online Geld zu verdienen, kann überwältigend sein. Unzählige Strategien, widersprüchliche Ratschläge und die ständige Angst, Zeit und Geld zu verschwenden. Genau hier setzt unser Profit-Pilot AI an. Statt dir den x-ten allgemeinen Guide zu präsentieren, analysieren wir, wer DU bist. Wir finden heraus, ob du der geborene Stratege, ein kreativer Macher oder ein analytischer Optimierer bist, und leiten daraus die für dich passende Vorgehensweise ab.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-3">Für jeden Typ die richtige Strategie</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                        Ein Online-Business ist eine Investition in deine Zukunft. Deshalb ist es so entscheidend, von Anfang an den richtigen Weg einzuschlagen. Unser Tool hilft dir, die für dich unpassenden Methoden auszusortieren. Wir übersetzen komplexes Business-Wissen in einen klaren, verständlichen Fahrplan und zeigen dir, welche Strategie zu deiner Persönlichkeit und deinen Zielen passt. Triff eine fundierte Entscheidung, die dich deinem Ziel der finanziellen Unabhängigkeit jeden Tag näher bringt.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Häufig gestellte Fragen (FAQ)</h2>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SeoContent;
