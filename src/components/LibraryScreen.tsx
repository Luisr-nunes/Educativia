import { useState } from 'react';
import { Clock, Camera, Scale, Zap, Smartphone, MessageSquare } from 'lucide-react';

interface LibraryScreenProps {
  onBack: () => void;
}

export function LibraryScreen({ onBack }: LibraryScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filters = [
    { id: 'rapidas', label: 'Rápidas', icon: Zap },
    { id: 'sem-celular', label: 'Sem Celular', icon: Smartphone },
    { id: 'debate', label: 'Debate', icon: MessageSquare },
  ];

  const methods = [
    { 
      id: '1', 
      title: 'Kahoot!', 
      subtitle: 'Quiz Competitivo', 
      tag: '10 min',
      color: 'bg-purple-500',
      icon: 'K',
      tags: ['rapidas']
    },
    { 
      id: '2', 
      title: 'Plickers', 
      subtitle: 'Quiz com placas de papel (QR)', 
      tag: 'Inclusivo',
      color: 'bg-gray-600',
      icon: 'camera',
      tags: ['sem-celular']
    },
    { 
      id: '3', 
      title: 'Wordwall', 
      subtitle: 'Roleta Aleatória', 
      tag: '5 min',
      color: 'bg-blue-500',
      icon: 'W',
      tags: ['rapidas']
    },
    { 
      id: '4', 
      title: 'Júri Simulado', 
      subtitle: 'Defesa vs Acusação', 
      tag: '40 min',
      color: 'bg-amber-600',
      icon: 'scale',
      tags: ['debate']
    },
    { 
      id: '5', 
      title: 'Wayground', 
      subtitle: 'Jogos Interativos', 
      tag: '8 min',
      color: 'bg-green-500',
      icon: 'W',
      tags: ['rapidas']
    },
  ];

  const filteredMethods = selectedFilter
    ? methods.filter(method => method.tags.includes(selectedFilter))
    : methods;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-12 pb-6 z-10">
        <h1 className="text-[#333] font-bold text-center text-xl mb-4">Dinâmicas e Ferramentas</h1>
        
        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 hide-scrollbar">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(selectedFilter === filter.id ? null : filter.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors flex items-center gap-2 ${
                  selectedFilter === filter.id
                    ? 'bg-black text-white'
                    : 'bg-[#F5F5F5] text-[#333] hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Methods Gallery */}
      <div className="px-6 py-6 space-y-3">
        {filteredMethods.map((method) => (
          <button
            key={method.id}
            className="w-full bg-[#F5F5F5] rounded-xl p-5 text-left hover:bg-gray-200 transition-colors shadow-sm"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white`}>
                {method.icon === 'camera' ? (
                  <Camera className="w-6 h-6" />
                ) : method.icon === 'scale' ? (
                  <Scale className="w-6 h-6" />
                ) : (
                  <span className="text-xl">{method.icon}</span>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#333] mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs text-gray-700">
                  {method.tag.includes('min') && <Clock className="w-3 h-3" />}
                  <span>{method.tag}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredMethods.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500">Nenhuma metodologia encontrada com esse filtro.</p>
        </div>
      )}
    </div>
  );
}