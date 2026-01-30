
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CURRICULUM } from '../constants';

const StudyDashboard: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="bg-[#F3F4F6] min-h-screen animate-fade-in flex flex-col">
      {/* Curved Header */}
      <header className="bg-brandRed text-white pt-10 pb-6 px-4 rounded-b-[2.5rem] shadow-lg sticky top-0 z-40">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate(-1)} className="p-1 rounded-full hover:bg-white/20">
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brandRed font-black text-xs">AT</div>
            <h1 className="text-lg font-bold">NEET Physics 2026</h1>
          </div>
          <button className="p-1 rounded-full hover:bg-white/20">
            <span className="material-symbols-rounded">more_vert</span>
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <h2 className="text-base font-bold mb-1">नमस्ते, Student!</h2>
          <p className="text-[10px] opacity-80 mb-3">अपनी पढ़ाई जारी रखें</p>
          <div className="flex justify-between text-[10px] mb-1">
            <span>प्रगति (Progress)</span>
            <span className="font-bold">32%</span>
          </div>
          <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
            <div className="bg-yellow-400 h-full" style={{ width: '32%' }}></div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {/* Resume Section */}
        <section>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
             <span className="material-symbols-rounded text-brandRed text-lg">play_circle</span> Continue Watching
          </h3>
          <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 flex gap-4 items-center">
            <div className="relative w-24 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
               <img src="https://picsum.photos/200/120" className="w-full h-full object-cover" alt="Thumb" />
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                 <span className="material-symbols-rounded text-white">play_arrow</span>
               </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xs truncate">Unit 2: Electrostatics - Part 4</h4>
              <p className="text-[10px] text-gray-400 mt-1">45m left • Lesson 12</p>
              <div className="w-full h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                 <div className="bg-brandRed h-full w-2/3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section>
          <div className="flex border-b border-gray-200 mb-4">
            {['वीडियो (Videos)', 'नोट्स (Notes)', 'टेस्ट (Tests)'].map((tab, idx) => {
              const key = tab.toLowerCase().includes('video') ? 'videos' : tab.toLowerCase().includes('note') ? 'notes' : 'tests';
              const isActive = activeTab === key;
              return (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 pb-3 text-xs font-bold transition-all ${isActive ? 'text-brandRed border-b-2 border-brandRed' : 'text-gray-400'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Curriculum List */}
          <div className="space-y-4">
            {CURRICULUM.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex justify-between items-center cursor-pointer bg-gray-50/50">
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.total ? `0/${item.total} Completed` : 'Click to view'}</p>
                  </div>
                  <span className={`material-symbols-rounded text-gray-400 ${item.id === '1' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                {item.id === '1' && (
                  <div className="p-2 space-y-1">
                     <div className="p-3 hover:bg-gray-50 rounded-lg flex gap-3 items-center">
                       <span className="material-symbols-rounded text-green-500 text-lg">check_circle</span>
                       <div className="flex-1">
                         <p className="text-xs font-bold">Introduction to Vectors</p>
                         <div className="flex gap-2 mt-1">
                           <span className="text-[8px] bg-blue-50 text-brandBlue px-1.5 py-0.5 rounded font-bold uppercase">Video</span>
                           <span className="text-[8px] text-gray-400">12:30 min</span>
                         </div>
                       </div>
                       <span className="material-symbols-rounded text-gray-400 text-base">download</span>
                     </div>
                     <div className="p-3 hover:bg-gray-50 rounded-lg flex gap-3 items-center opacity-60">
                       <span className="material-symbols-rounded text-gray-400 text-lg">lock</span>
                       <div className="flex-1">
                         <p className="text-xs font-bold">Motion in 1D</p>
                         <div className="flex gap-2 mt-1">
                           <span className="text-[8px] bg-blue-50 text-brandBlue px-1.5 py-0.5 rounded font-bold uppercase">Video</span>
                           <span className="text-[8px] text-gray-400">45:10 min</span>
                         </div>
                       </div>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Query Button */}
      <button className="fixed bottom-24 right-4 h-14 w-14 bg-brandBlue text-white rounded-full shadow-2xl flex items-center justify-center z-50">
        <span className="material-symbols-rounded">quiz</span>
      </button>
    </div>
  );
};

export default StudyDashboard;
