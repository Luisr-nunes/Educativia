import { Plus, Edit2, Calendar } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/17b4396c33897842498e8c05d06dfdaf98d045b4.png';

interface HomeScreenProps {
  onNewPlan: () => void;
  onSelectPlan: (planId: string) => void;
}

export function HomeScreen({ onNewPlan, onSelectPlan }: HomeScreenProps) {
  const [selectedDay, setSelectedDay] = useState(1); // 0=Seg, 1=Ter, etc.

  const weekDays = [
    { short: 'Seg', full: 'Segunda' },
    { short: 'Ter', full: 'Terça' },
    { short: 'Qua', full: 'Quarta' },
    { short: 'Qui', full: 'Quinta' },
    { short: 'Sex', full: 'Sexta' },
  ];

  const todayClasses = [
    { id: '1', time: '08:00', class: '3º B', title: 'Introdução à Fotossíntese' },
    { id: '2', time: '10:00', class: '5º A', title: '' },
    { id: '3', time: '14:00', class: '4º C', title: 'Frações e Decimais' },
  ];

  const recentPlans = [
    { id: '1', title: 'Introdução à Fotossíntese', class: '3º Ano B', date: 'Hoje' },
    { id: '2', title: 'Verbos no Pretérito', class: '5º Ano A', date: 'Ontem' },
    { id: '3', title: 'Sistema Solar', class: '3º Ano B', date: '2 dias atrás' },
    { id: '4', title: 'Frações e Decimais', class: '4º Ano C', date: '3 dias atrás' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex justify-center">
        <img src={logo} alt="Educativia" className="h-16" />
      </div>

      {/* CTA Button */}
      <div className="px-6 mb-8">
        <button
          onClick={onNewPlan}
          className="w-full bg-black text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-sm hover:bg-gray-900 transition-colors"
        >
          <Plus className="w-6 h-6" />
          <span>Novo Planejamento (10 min)</span>
        </button>
      </div>

      {/* Weekly Agenda */}
      <div className="px-6 mb-8">
        <div className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
          {/* Week Days */}
          <div className="flex justify-between mb-4">
            {weekDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-colors ${
                  selectedDay === index
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm">{day.short}</span>
              </button>
            ))}
          </div>

          {/* Today's Classes */}
          <div className="space-y-2">
            {todayClasses.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm text-[#333]">
                    <div>{lesson.time}</div>
                    <div className="text-gray-500">{lesson.class}</div>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  {lesson.title ? (
                    <span className="text-sm text-gray-600">{lesson.title}</span>
                  ) : (
                    <span className="text-sm text-gray-400">Adicionar assunto +</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Plans */}
      <div className="px-6">
        <h2 className="text-[#333] mb-4">Planejamentos Recentes</h2>
        <div className="space-y-3">
          {recentPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => onSelectPlan(plan.id)}
              className="w-full bg-[#F5F5F5] rounded-xl p-4 text-left hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-[#333] flex-1">{plan.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm text-gray-700">
                  {plan.class}
                </span>
                <span className="text-sm text-gray-500">{plan.date}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}