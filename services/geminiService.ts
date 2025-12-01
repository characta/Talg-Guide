import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (prompt: string, context: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: `Du bist ein freundlicher, weiser und wissenschaftlich fundierter Experte für traditionelle Ernährung und Biochemie.
        
        Kontext der App: "Talg Guide".
        
        Deine Richtlinien:
        1. Erkläre Dinge einfach (ELI5), aber verliere nie die wissenschaftliche Korrektheit.
        2. Wenn du gefragt wirst, ob es "besser" ist: Differenziere. Talg ist besser zum Braten (stabil), Olivenöl ist super für Kaltspeisen. Sei ehrlich.
        3. Beziehe dich auf Fakten: Fettsäureprofile, Oxidationsstabilität, Vitamine.
        
        Deine Aufgabe:
        ${context}
        
        Antworte prägnant, hilfreich und im Markdown-Format.`,
      }
    });
    
    return response.text || "Entschuldigung, ich konnte keine Antwort generieren.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein Problem bei der Verbindung mit der KI. Bitte versuche es später erneut.";
  }
};

export const getBusinessAdvice = async (): Promise<string> => {
    const prompt = `Der Nutzer fragt: "Würdest du empfehlen, ein Rindertalg-Produkt (z.B. zum Kochen oder als Hautpflege) selber herzustellen und zu vertreiben?"
    
    Analysiere diese Geschäftsidee für den deutschsprachigen Raum (DACH) kritisch und ehrlich.
    
    Struktur der Antwort:
    1. **Markt-Realität**: Warum ist es gerade jetzt attraktiv? (Nose-to-Tail, Carnivore, Anti-Seed-Oil Bewegung).
    2. **Die harte Realität der Herstellung**: Hygienevorschriften für tierische Nebenprodukte (sehr streng in DE/EU!), Geruchsbelästigung beim Auslassen, Einkaufsquellen für Weiderind.
    3. **Produkt-Ideen**: 
       - Whipped Tallow Balm (Hautpflege - hohe Marge).
       - Cooking Tallow im Glas (Niedrigere Marge, hohes Volumen).
    4. **Fazit**: "Machen oder lassen?" - Gib eine differenzierte Empfehlung für Einsteiger.

    Formatiere die Antwort übersichtlich mit Fettungen und Listenpunkten in Markdown.`;

    return getGeminiResponse(prompt, "Du agierst hier als ehrlicher Unternehmensberater für Food-Startups.");
};