import React, { useState, useEffect } from 'react';
import { getBusinessAdvice } from '../services/geminiService';
import { Loader2, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BusinessAdvisor: React.FC = () => {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      const result = await getBusinessAdvice();
      setAdvice(result);
      setLoading(false);
    };
    fetchAdvice();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif font-bold text-tallow-800">Das Geschäft mit dem Gold</h2>
        <p className="text-lg text-tallow-700">
          Ist es eine gute Idee, Talg selbst herzustellen und zu verkaufen?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-600" />
            <h3 className="font-bold text-gray-800">Der Trend</h3>
          </div>
          <p className="text-sm text-gray-600">Carnivore, Keto und Paleo Diäten boomen. "Seed Oil Free" ist eine wachsende Bewegung.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-amber-500">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-amber-600" />
            <h3 className="font-bold text-gray-800">Die Hürde</h3>
          </div>
          <p className="text-sm text-gray-600">Die Verarbeitung ist geruchsintensiv. Hygienevorschriften für Tierprodukte sind streng.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-blue-600" />
            <h3 className="font-bold text-gray-800">Die Chance</h3>
          </div>
          <p className="text-sm text-gray-600">Hohe Margen möglich bei "Grass-Fed" Premium-Positionierung (Hautpflege & Kochen).</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-tallow-200">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="bg-tallow-100 p-1 rounded">AI</span> Experteneinschätzung
        </h3>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 text-tallow-600">
            <Loader2 className="animate-spin h-8 w-8 mb-2" />
            <p>Analysiere Marktdaten...</p>
          </div>
        ) : (
          <div className="prose prose-stone max-w-none">
            <ReactMarkdown>{advice}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessAdvisor;