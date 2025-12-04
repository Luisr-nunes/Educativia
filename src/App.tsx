import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { CanvasEditor } from './components/CanvasEditor';
import { LibraryScreen } from './components/LibraryScreen';
import { CommunityFeed } from './components/CommunityFeed';
import { ProfileScreen } from './components/ProfileScreen';
import { ScheduleManager } from './components/ScheduleManager';

type Screen = 'home' | 'canvas' | 'library' | 'community' | 'profile' | 'schedule';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleNewPlan = () => {
    setSelectedPlan(null);
    setCurrentScreen('canvas');
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setCurrentScreen('canvas');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Container */}
      <div className="mx-auto max-w-md min-h-screen bg-white relative pb-20">
        {/* Screen Content */}
        {currentScreen === 'home' && (
          <HomeScreen 
            onNewPlan={handleNewPlan}
            onSelectPlan={handleSelectPlan}
          />
        )}
        {currentScreen === 'canvas' && (
          <CanvasEditor 
            planId={selectedPlan}
            onBack={() => setCurrentScreen('home')}
          />
        )}
        {currentScreen === 'library' && (
          <LibraryScreen onBack={() => setCurrentScreen('home')} />
        )}
        {currentScreen === 'community' && (
          <CommunityFeed onBack={() => setCurrentScreen('home')} />
        )}
        {currentScreen === 'profile' && (
          <ProfileScreen onBack={() => setCurrentScreen('home')} />
        )}
        {currentScreen === 'schedule' && (
          <ScheduleManager onBack={() => setCurrentScreen('home')} />
        )}

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
          <div className="flex justify-around items-center h-16 px-6">
            <button
              onClick={() => handleNavigate('home')}
              className={`flex flex-col items-center gap-1 ${
                currentScreen === 'home' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="text-xs">Home</span>
            </button>
            
            <button
              onClick={() => handleNavigate('library')}
              className={`flex flex-col items-center gap-1 ${
                currentScreen === 'library' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span className="text-xs">Biblioteca</span>
            </button>
            
            <button
              onClick={() => handleNavigate('schedule')}
              className={`flex flex-col items-center gap-1 ${
                currentScreen === 'schedule' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-xs">Horários</span>
            </button>
            
            <button
              onClick={() => handleNavigate('community')}
              className={`flex flex-col items-center gap-1 ${
                currentScreen === 'community' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-xs">Comunidade</span>
            </button>
            
            <button
              onClick={() => handleNavigate('profile')}
              className={`flex flex-col items-center gap-1 ${
                currentScreen === 'profile' ? 'text-black' : 'text-gray-400'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="text-xs">Perfil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}