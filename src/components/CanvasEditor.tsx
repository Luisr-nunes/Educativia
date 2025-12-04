import { useState } from 'react';
import { Sparkles, Target, Flame, Layers, CheckCircle, Shield } from 'lucide-react';
import { AIBottomSheet } from './AIBottomSheet';

interface CanvasEditorProps {
  planId: string | null;
  onBack: () => void;
}

export function CanvasEditor({ planId, onBack }: CanvasEditorProps) {
  const [objective, setObjective] = useState('');
  const [spark, setSpark] = useState('');
  const [methodology, setMethodology] = useState('');
  const [verification, setVerification] = useState<string | null>(null);
  const [planB, setPlanB] = useState('');
  const [showAISheet, setShowAISheet] = useState(false);

  const verificationOptions = [
    { id: 'semaforo', label: 'Semáforo' },
    { id: 'postit', label: 'Post-it' },
    { id: 'quiz', label: 'Quiz' },
  ];

  const handleAISuggestion = (suggestion: string) => {
    setSpark(suggestion);
    setShowAISheet(false);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-12 pb-6 z-10">
        <h1 className="text-[#333] font-bold text-center text-xl">Novo Planejamento</h1>
      </div>

      {/* Canvas Cards */}
      <div className="px-6 py-6 space-y-4">
        {/* Block 1: Objetivo */}
        <div className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-6 h-6" />
            <h2 className="text-[#333]">Objetivo</h2>
          </div>
          <input
            type="text"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="O que os alunos vão aprender hoje?"
            className="w-full bg-white rounded-lg px-4 py-3 text-[#333] placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Block 2: Faísca Inicial */}
        <div className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-6 h-6" />
            <h2 className="text-[#333]">Faísca Inicial</h2>
          </div>
          <textarea
            value={spark}
            onChange={(e) => setSpark(e.target.value)}
            placeholder="Como você vai engajar os alunos no início?"
            className="w-full bg-white rounded-lg px-4 py-3 text-[#333] placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            rows={3}
          />
          <button
            onClick={() => setShowAISheet(true)}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm text-[#333] border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Sugerir com IA
          </button>
        </div>

        {/* Block 3: Metodologia */}
        <div className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-6 h-6" />
            <h2 className="text-[#333]">Metodologia</h2>
          </div>
          <textarea
            value={methodology}
            onChange={(e) => setMethodology(e.target.value)}
            placeholder="Descreva a metodologia ou dinâmica que será utilizada"
            className="w-full bg-white rounded-lg px-4 py-3 text-[#333] placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            rows={3}
          />
        </div>

        {/* Block 4: Verificação */}
        <div className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-6 h-6" />
            <h2 className="text-[#333]">Verificação</h2>
          </div>
          <div className="flex gap-3">
            {verificationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setVerification(option.id)}
                className={`flex-1 bg-white rounded-lg px-4 py-4 border-2 transition-all ${
                  verification === option.id
                    ? 'border-black shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm text-[#333]">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Block 5: Plano B */}
        <div className="bg-[#FFFEF0] rounded-xl p-5 shadow-sm border-2 border-yellow-200">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6" />
            <h2 className="text-[#333]">Plano B</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">Se a internet cair...</p>
          <textarea
            value={planB}
            onChange={(e) => setPlanB(e.target.value)}
            placeholder="Qual sua alternativa analógica?"
            className="w-full bg-white rounded-lg px-4 py-3 text-[#333] placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none mb-3"
            rows={2}
          />
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm hover:bg-yellow-500 transition-colors">
            <Sparkles className="w-4 h-4" />
            Gerar Alternativa Analógica
          </button>
        </div>

        {/* Save Button */}
        <button className="w-full bg-black text-white py-4 px-6 rounded-xl shadow-sm hover:bg-gray-900 transition-colors mt-6">
          Salvar Planejamento
        </button>
      </div>

      {/* AI Bottom Sheet */}
      {showAISheet && (
        <AIBottomSheet
          onSelect={handleAISuggestion}
          onClose={() => setShowAISheet(false)}
        />
      )}
    </div>
  );
}