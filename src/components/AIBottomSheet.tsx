import { X } from 'lucide-react';

interface AIBottomSheetProps {
  onSelect: (suggestion: string) => void;
  onClose: () => void;
}

export function AIBottomSheet({ onSelect, onClose }: AIBottomSheetProps) {
  const suggestions = [
    'Mostre um vídeo curto (2 min) sobre o tema e faça 3 perguntas provocativas.',
    'Comece com um objeto misterioso relacionado ao tema coberto com um pano. Revele aos poucos.',
    'Conte uma história pessoal que conecte o tema do dia com a vida real dos alunos.',
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-3xl z-50 shadow-2xl animate-slide-up">
        <div className="px-6 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h2 className="text-[#333]">Sugestões do Copiloto</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Suggestions List */}
          <div className="space-y-3 mb-6">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSelect(suggestion)}
                className="w-full bg-[#F5F5F5] rounded-xl p-4 text-left hover:bg-gray-200 transition-colors"
              >
                <p className="text-[#333] text-sm leading-relaxed">{suggestion}</p>
              </button>
            ))}
          </div>

          {/* Info Text */}
          <p className="text-xs text-gray-400 text-center">
            Selecione uma sugestão ou feche para escrever a sua própria
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translate(-50%, 100%);
          }
          to {
            transform: translate(-50%, 0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
