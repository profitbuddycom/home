import { GoogleGenAI, Type } from "@google/genai";
import { QuizState, QuizResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Utility to clean and parse JSON from AI response
const cleanAndParseJson = <T>(rawJsonString: string): T => {
    if (!rawJsonString || rawJsonString.trim() === '') {
        throw new Error("AI response is empty.");
    }
    const match = rawJsonString.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    let parsableString = rawJsonString.trim();
    if (match && match[1]) {
        parsableString = match[1].trim();
    }

    const firstBracket = parsableString.indexOf('{');
    const firstSquare = parsableString.indexOf('[');
    let start = -1;

    if (firstBracket === -1) {
        start = firstSquare;
    } else if (firstSquare === -1) {
        start = firstBracket;
    } else {
        start = Math.min(firstBracket, firstSquare);
    }

    if (start === -1) {
        console.error("Could not find start of JSON in the response:", parsableString);
        throw new Error("Could not find start of JSON in the response.");
    }
    
    try {
        return JSON.parse(parsableString.substring(start)) as T;
    } catch (error) {
        console.error("Failed to parse JSON string:", parsableString.substring(start));
        throw new Error(`JSON parsing error: ${error}`);
    }
};

const QuizResultSchema = {
  type: Type.OBJECT,
  properties: {
    archetype: { type: Type.STRING, description: 'Ein kreativer, schmeichelhafter Name für den Erfolgs-Archetyp (z.B. "Der smarte Effizienz-Jäger", "Der anonyme Umsetzer", "Der kreative KI-Pionier").' },
    archetypeDescription: { type: Type.STRING, description: 'Eine kurze, positive Beschreibung (1-2 Sätze), die erklärt, warum dieser Archetyp perfekt für ein KI-gestütztes System ist.' },
    strengths: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: 'Eine Liste von 3-4 positiven Stärken, die aus den Antworten des Nutzers abgeleitet werden und die Eignung für das empfohlene System unterstreichen.'
    },
    potentialBlockers: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: 'Eine Liste von 2-3 potenziellen Hürden (z.B. "Wunsch nach Anonymität", "Begrenztes Startkapital"), die als Stärken für das empfohlene System umformuliert werden.'
    },
    recommendationTeaser: { type: Type.STRING, description: 'Ein überzeugender Satz, der Neugier auf ein exklusives Video weckt, das die empfohlene Strategie enthüllt. Erwähne NICHT den Produktnamen. Sprich von einer "kostenlosen Präsentation" oder einem "Enthüllungs-Video". Beispiel: "Für deinen Archetyp gibt es eine spezielle Strategie. In einem kurzen Video wird dir das exakte System vorgestellt, mit dem du..."' },
    callToAction: { type: Type.STRING, description: 'Ein starker, handlungsorientierter Text für den Button, der zum Video führt. Er soll Neugier wecken. Beispiele: "Jetzt exklusives Video ansehen", "Zum kostenlosen Strategie-Video", "Zugang zur Präsentation erhalten".' },
    affiliateLink: { type: Type.STRING, description: 'Die feste URL für den Affiliate-Link. Setze diesen Wert IMMER auf "https://www.digistore24.com/redir/608357/Fitnessforceorg/".' }
  }
};

export const generateQuizResult = async (state: QuizState): Promise<QuizResult> => {

    const systemInstruction = `Du bist ein Experte für Verkaufspsychologie und dein Ziel ist es, den Nutzer zu einem Video weiterzuleiten, das eine Strategie zum Online-Geldverdienen mit KI vorstellt. Die Kernvorteile der Strategie sind: kein Startkapital, keine Vorkenntnisse, komplett anonym, geringer Zeitaufwand.
    Deine Aufgabe ist es, die 7 Antworten des Nutzers zu analysieren und ein Ergebnis zu erstellen, das ihn davon überzeugt, dass dieses exklusive Video die PERFEKTE Lösung für ihn ist. Sprich den Nutzer in der generierten Antwort IMMER direkt mit "du" an. Nutze alle Facetten der Antworten, um eine möglichst detaillierte und persönliche Analyse zu erstellen.
    - Wandle die angegebenen Hindernisse des Nutzers in Stärken für dieses System um. (z.B. "Kein Startkapital" wird zu "Sucht nach effizienten, kapitalarmen Methoden").
    - Der Archetyp und die Beschreibung müssen den Nutzer positiv darstellen und seine Eignung für ein KI-System hervorheben.
    - Der "recommendationTeaser" darf KEINEN Produktnamen erwähnen. Stattdessen soll er auf ein exklusives Video neugierig machen, das die Strategie im Detail erklärt.
    - Der "affiliateLink" MUSS IMMER auf "https://www.digistore24.com/redir/608357/Fitnessforceorg/" gesetzt werden.
    - Deine Antwort MUSS IMMER und AUSSCHLIESSLICH ein einzelnes JSON-Objekt sein, das dem vorgegebenen Schema entspricht. Gib KEINEN Text oder Markdown vor oder nach dem JSON aus.`;

    let userPrompt = `Hier sind die Antworten des Nutzers. Erstelle die perfekt auf die empfohlene Video-Strategie zugeschnittene Archetyp-Analyse:\n${JSON.stringify(state, null, 2)}`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
            systemInstruction,
            responseMimeType: 'application/json',
            responseSchema: QuizResultSchema
        },
    });

    const result = cleanAndParseJson<QuizResult>(response.text);
    return result;
};