import { useState } from 'react';
import { Plus, Edit2 } from 'lucide-react';

interface ScheduleManagerProps {
  onBack: () => void;
}

interface ClassItem {
  id: string;
  time: string;
  className: string;
  subject: string;
}

interface WeekSchedule {
  [key: string]: ClassItem[];
}

export function ScheduleManager({ onBack }: ScheduleManagerProps) {
  const [schedule, setSchedule] = useState<WeekSchedule>({
    monday: [
      { id: '1', time: '08:00', className: '9º Ano A', subject: 'Guerra Fria' },
      { id: '2', time: '10:00', className: '8º Ano B', subject: 'Revolução Industrial' },
    ],
    tuesday: [
      { id: '3', time: '08:00', className: '3º B', subject: 'Introdução à Fotossíntese' },
      { id: '4', time: '10:00', className: '5º A', subject: '' },
      { id: '5', time: '14:00', className: '4º C', subject: 'Frações e Decimais' },
    ],
    wednesday: [
      { id: '6', time: '08:00', className: '7º Ano C', subject: 'Sistema Solar' },
    ],
    thursday: [
      { id: '7', time: '09:00', className: '6º Ano A', subject: 'Verbos no Pretérito' },
    ],
    friday: [
      { id: '8', time: '08:00', className: '9º Ano B', subject: 'Ditadura Militar' },
      { id: '9', time: '11:00', className: '3º A', subject: 'Ciclo da Água' },
    ],
  });

  const weekDays = [
    { key: 'monday', label: 'Segunda-feira' },
    { key: 'tuesday', label: 'Terça-feira' },
    { key: 'wednesday', label: 'Quarta-feira' },
    { key: 'thursday', label: 'Quinta-feira' },
    { key: 'friday', label: 'Sexta-feira' },
  ];

  const handleSubjectChange = (dayKey: string, classId: string, newSubject: string) => {
    setSchedule(prev => ({
      ...prev,
      [dayKey]: prev[dayKey].map(item =>
        item.id === classId ? { ...item, subject: newSubject } : item
      ),
    }));
  };

  const handleClassNameChange = (dayKey: string, classId: string, newClassName: string) => {
    setSchedule(prev => ({
      ...prev,
      [dayKey]: prev[dayKey].map(item =>
        item.id === classId ? { ...item, className: newClassName } : item
      ),
    }));
  };

  const handleTimeChange = (dayKey: string, classId: string, newTime: string) => {
    setSchedule(prev => ({
      ...prev,
      [dayKey]: prev[dayKey].map(item =>
        item.id === classId ? { ...item, time: newTime } : item
      ),
    }));
  };

  const handleAddClass = (dayKey: string) => {
    const newClass: ClassItem = {
      id: Date.now().toString(),
      time: '08:00',
      className: 'Nova Turma',
      subject: '',
    };
    setSchedule(prev => ({
      ...prev,
      [dayKey]: [...(prev[dayKey] || []), newClass],
    }));
  };

  const handleSave = () => {
    // Simular salvamento
    alert('Horários salvos com sucesso!');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-12 pb-6 z-10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-[#333] font-bold text-center text-xl flex-1">Meu Quadro de Horários</h1>
          <button
            onClick={handleSave}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="px-6 py-6 space-y-6">
        {weekDays.map((day) => (
          <div key={day.key} className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
            <h2 className="text-[#333] mb-4">{day.label}</h2>

            {/* Classes List */}
            <div className="space-y-3">
              {(schedule[day.key] || []).map((classItem) => (
                <div
                  key={classItem.id}
                  className="bg-white rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={classItem.time}
                          onChange={(e) => handleTimeChange(day.key, classItem.id, e.target.value)}
                          className="w-20 bg-transparent text-sm text-[#333] border-b border-gray-200 focus:border-black outline-none"
                        />
                        <span className="text-gray-400">•</span>
                        <input
                          type="text"
                          value={classItem.className}
                          onChange={(e) => handleClassNameChange(day.key, classItem.id, e.target.value)}
                          className="flex-1 bg-transparent text-sm text-[#333] border-b border-gray-200 focus:border-black outline-none"
                          placeholder="Nome da Turma"
                        />
                      </div>
                      <input
                        type="text"
                        value={classItem.subject}
                        onChange={(e) => handleSubjectChange(day.key, classItem.id, e.target.value)}
                        className="w-full bg-transparent text-sm text-gray-600 border-b border-gray-200 focus:border-black outline-none py-1"
                        placeholder="Adicionar assunto da aula..."
                      />
                    </div>
                    <button className="text-gray-400 hover:text-black transition-colors flex-shrink-0">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Class Button */}
              <button
                onClick={() => handleAddClass(day.key)}
                className="w-full bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 text-gray-500 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm">Adicionar Nova Turma</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}