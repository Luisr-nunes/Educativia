import { useState } from 'react';
import { Search, Heart, MessageCircle, Download, Plus } from 'lucide-react';

interface CommunityFeedProps {
  onBack: () => void;
}

type TabType = 'discussions' | 'materials';

interface Post {
  id: string;
  type: 'discussion' | 'resource';
  user: {
    name: string;
    avatar: string;
    subject?: string;
  };
  content: string;
  likes: number;
  comments: number;
  attachment?: {
    name: string;
    type: string;
  };
}

export function CommunityFeed({ onBack }: CommunityFeedProps) {
  const [activeTab, setActiveTab] = useState<TabType>('discussions');
  const [searchQuery, setSearchQuery] = useState('');

  const posts: Post[] = [
    {
      id: '1',
      type: 'discussion',
      user: {
        name: 'Ana Silva',
        avatar: 'AS',
        subject: 'Matemática',
      },
      content: 'Alguém tem sugestões de atividades para ensinar frações de forma lúdica para o 4º ano?',
      likes: 12,
      comments: 8,
    },
    {
      id: '2',
      type: 'resource',
      user: {
        name: 'Carlos Mendes',
        avatar: 'CM',
        subject: 'Matemática',
      },
      content: 'Compartilhando uma lista de exercícios sobre equações que preparei. Espero que ajude!',
      likes: 24,
      comments: 5,
      attachment: {
        name: 'Math_Exercises.pdf',
        type: 'PDF',
      },
    },
    {
      id: '3',
      type: 'discussion',
      user: {
        name: 'Mariana Costa',
        avatar: 'MC',
        subject: 'Português',
      },
      content: 'Como vocês lidam com alunos que têm dificuldade em interpretação de texto?',
      likes: 18,
      comments: 15,
    },
    {
      id: '4',
      type: 'resource',
      user: {
        name: 'Roberto Lima',
        avatar: 'RL',
        subject: 'História',
      },
      content: 'Criei um quiz interativo sobre a Segunda Guerra Mundial. Funcionou muito bem na minha turma!',
      likes: 31,
      comments: 9,
      attachment: {
        name: 'WW2_Quiz_Template.pdf',
        type: 'PDF',
      },
    },
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'discussions' && post.type !== 'discussion') return false;
    if (activeTab === 'materials' && post.type !== 'resource') return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-12 pb-6 z-10">
        <h1 className="text-[#333] font-bold text-center text-xl mb-4">Comunidade</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tópicos..."
            className="w-full bg-[#F5F5F5] rounded-lg pl-10 pr-4 py-3 text-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('discussions')}
            className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
              activeTab === 'discussions'
                ? 'bg-black text-white'
                : 'bg-[#F5F5F5] text-[#333] hover:bg-gray-200'
            }`}
          >
            Discussões
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`flex-1 py-2 rounded-lg text-sm transition-colors ${
              activeTab === 'materials'
                ? 'bg-black text-white'
                : 'bg-[#F5F5F5] text-[#333] hover:bg-gray-200'
            }`}
          >
            Materiais
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="px-6 py-6 space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-[#F5F5F5] rounded-xl p-5 shadow-sm">
            {/* User Info */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{post.user.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#333]">{post.user.name}</h3>
                {post.user.subject && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white text-xs text-gray-700 mt-1">
                    {post.user.subject}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <p className="text-[#333] mb-3 leading-relaxed">{post.content}</p>

            {/* Attachment (if resource) */}
            {post.attachment && (
              <div className="bg-[#E3F2FD] rounded-lg p-4 mb-3 border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#333] truncate">{post.attachment.name}</p>
                    <p className="text-xs text-gray-600">{post.attachment.type}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-black text-white rounded-full shadow-lg hover:bg-gray-900 transition-all hover:scale-110 flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}