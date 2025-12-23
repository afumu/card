
import React, { useState, useEffect, useCallback } from 'react';
import { generateChristmasGreeting } from './services/geminiService.ts';
import { GreetingMessage, CardState } from './types.ts';
import Snowfall from './components/Snowfall.tsx';
import ChristmasTree from './components/ChristmasTree.tsx';

const App: React.FC = () => {
  const [cardState, setCardState] = useState<CardState>(CardState.CLOSED);
  const [greeting, setGreeting] = useState<GreetingMessage | null>(null);
  const [loading, setLoading] = useState(false);
  const [bgMusicPlaying, setBgMusicPlaying] = useState(false);

  const fetchGreeting = useCallback(async () => {
    setLoading(true);
    try {
      const result = await generateChristmasGreeting("小美");
      setGreeting(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  const handleOpenCard = () => {
    setCardState(CardState.OPENING);
    setTimeout(() => setCardState(CardState.OPENED), 800);
  };

  const handleCloseCard = () => {
    setCardState(CardState.CLOSED);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4 bg-gradient-to-b from-[#050b14] via-[#0a1a2f] to-[#1a3a5f]">
      <Snowfall />

      <div className="absolute bottom-0 left-0 p-8 opacity-30">
        <ChristmasTree />
      </div>
      <div className="absolute bottom-0 right-0 p-8 opacity-30 transform scale-x-[-1]">
        <ChristmasTree />
      </div>

      <div className="absolute top-10 left-10 z-20">
        <div className="px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full">
          <span className="text-white/60 font-serif tracking-widest text-sm italic">2025 Winter Collection</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {cardState === CardState.CLOSED ? (
          <div className="flex flex-col items-center space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="relative group cursor-pointer" onClick={handleOpenCard}>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-4 bg-[#1a2a3a]/80 backdrop-blur-md rounded-lg leading-none flex items-center">
                <span className="text-white font-festive text-2xl md:text-3xl tracking-wide">
                  亲爱的小美，开启你的 2025 圣诞惊喜
                </span>
              </div>
            </div>
            
            <div className="w-64 h-80 bg-gradient-to-br from-red-700 to-red-900 rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.3)] flex flex-col items-center justify-center border-4 border-yellow-600 transform hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden" onClick={handleOpenCard}>
               <div className="absolute top-0 w-full h-8 bg-white/10 flex justify-around">
                  <div className="w-1 h-full bg-yellow-500/50"></div>
                  <div className="w-1 h-full bg-yellow-500/50"></div>
                  <div className="w-1 h-full bg-yellow-500/50"></div>
               </div>
               <div className="text-white text-7xl mb-4 drop-shadow-lg animate-bounce">🎁</div>
               <p className="text-yellow-400 font-festive text-2xl tracking-[0.2em] animate-pulse">点击开启贺卡</p>
               <div className="absolute bottom-4 text-white/40 text-xs italic tracking-widest font-serif">MERRY CHRISTMAS 2025</div>
            </div>
          </div>
        ) : (
          <div className={`transition-all duration-1000 ease-out transform ${cardState === CardState.OPENING ? 'scale-75 rotate-3 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}>
            <div className="bg-[#fffdf5] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 md:p-12 relative border-[10px] border-double border-red-900/90 min-h-[520px] flex flex-col">
              <div className="absolute top-4 left-4 text-red-800 text-2xl opacity-40">🔔</div>
              <div className="absolute top-4 right-4 text-red-800 text-2xl opacity-40">🕯️</div>
              <div className="absolute bottom-4 left-4 text-red-800 text-2xl opacity-40">🍭</div>
              <div className="absolute bottom-4 right-4 text-red-800 text-2xl opacity-40">🎄</div>

              <div className="flex-grow flex flex-col items-center text-center space-y-8">
                <h1 className="text-3xl md:text-4xl font-festive text-red-900 pt-2 tracking-tight">
                  {loading ? '正在雪地里寻找惊喜...' : greeting?.title}
                </h1>
                
                <div className="flex items-center justify-center space-x-4 w-full opacity-60">
                   <div className="h-[1px] bg-red-800/30 flex-grow"></div>
                   <div className="text-red-900">✦</div>
                   <div className="h-[1px] bg-red-800/30 flex-grow"></div>
                </div>

                <div className="max-w-md mx-auto min-h-[150px] flex items-center">
                  {loading ? (
                    <div className="w-full space-y-4 animate-pulse">
                      <div className="h-4 bg-red-100 rounded-full w-full"></div>
                      <div className="h-4 bg-red-100 rounded-full w-5/6 mx-auto"></div>
                      <div className="h-4 bg-red-100 rounded-full w-4/6 mx-auto"></div>
                    </div>
                  ) : (
                    <p className="text-gray-900 text-lg md:text-xl leading-[1.8] font-serif italic tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-1000">
                      {greeting?.content}
                    </p>
                  )}
                </div>

                <div className="pt-6 w-full flex flex-col items-end">
                  <p className="text-red-900 font-festive text-3xl">
                    {loading ? '...' : greeting?.signature}
                  </p>
                  <div className="flex items-center space-x-2 text-gray-400 text-xs mt-3 font-serif tracking-widest uppercase">
                    <span>Beijing</span>
                    <span>•</span>
                    <span>Dec 25, 2025</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={fetchGreeting}
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-2.5 bg-red-800 text-white rounded-full hover:bg-red-900 transition-all shadow-[0_4px_15px_rgba(153,27,27,0.4)] active:scale-95 disabled:opacity-50 font-serif text-sm tracking-wider"
                >
                  {loading ? '寻找中...' : '换一份祝福'}
                </button>
                <button 
                  onClick={handleCloseCard}
                  className="w-full sm:w-auto px-8 py-2.5 bg-stone-800 text-stone-200 rounded-full hover:bg-black transition-all shadow-lg active:scale-95 font-serif text-sm tracking-wider"
                >
                  封存这份美好
                </button>
              </div>

              <div className="absolute -bottom-4 -left-8 transform -rotate-12 hidden md:block select-none pointer-events-none">
                <span className="text-7xl opacity-10 blur-[1px]">🎁</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => setBgMusicPlaying(!bgMusicPlaying)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${bgMusicPlaying ? 'bg-red-600 scale-110 shadow-red-600/50' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}
        >
          <span className="text-2xl transform transition-transform group-hover:scale-125">
            {bgMusicPlaying ? '✨' : '🔇'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
