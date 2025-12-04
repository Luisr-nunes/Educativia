import { useState } from 'react';
import { User, Lock, Bell, Globe, FileText, Palette, Calendar, HelpCircle, ChevronRight } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: 'Professor Silva',
    email: 'professor.silva@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNTU0MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  });

  const accountItems = [
    { icon: User, label: 'Gerenciar Perfil', value: '' },
    { icon: Lock, label: 'Senha e Segurança', value: '' },
    { icon: Bell, label: 'Notificações', value: '' },
    { icon: Globe, label: 'Idioma', value: 'Português' },
  ];

  const preferenceItems = [
    { icon: FileText, label: 'Sobre Nós', value: '' },
    { icon: Palette, label: 'Tema', value: 'Light' },
    { icon: Calendar, label: 'Compromissos', value: '' },
  ];

  const supportItems = [
    { icon: HelpCircle, label: 'Central de Ajuda', value: '' },
  ];

  const MenuItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
    <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border border-gray-100">
      <Icon className="w-5 h-5 text-[#333]" />
      <span className="text-[#333] flex-1 text-left">{label}</span>
      {value && <span className="text-sm text-gray-500">{value}</span>}
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 border-b border-gray-100">
        <h1 className="text-[#333] text-2xl font-bold text-center">Perfil</h1>
      </div>

      <div className="px-6 py-6">
        {/* User Info Card */}
        <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-[#333] mb-1">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-400 mb-3 px-1">Conta</h3>
          <div className="space-y-2">
            {accountItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-400 mb-3 px-1">Preferências</h3>
          <div className="space-y-2">
            {preferenceItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-400 mb-3 px-1">Suporte</h3>
          <div className="space-y-2">
            {supportItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}