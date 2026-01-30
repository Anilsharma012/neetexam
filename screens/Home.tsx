
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col animate-fade-in">
      {/* Header */}
      <header className="bg-brandBlue text-white sticky top-0 z-40 shadow-md">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full hover:bg-white/10">
              <span className="material-icons-outlined">menu</span>
            </button>
            <h1 className="text-lg font-bold tracking-wide">Aone Target</h1>
          </div>
          <button className="p-1 rounded-full hover:bg-white/10 relative">
            <span className="material-icons-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-brandBlue"></span>
          </button>
        </div>
        <div className="px-4 pb-3 flex space-x-3 overflow-x-auto hide-scrollbar">
          {['Live', 'Courses', 'Webinars', 'Tests'].map((item, idx) => (
            <button key={idx} className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition">
              {item}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-icons-outlined text-gray-400">search</span>
          </span>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
            placeholder="Search for courses, tests..." 
          />
        </div>

        {/* Hero Banner */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-[2/1] bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="absolute inset-0 p-5 z-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-brandRed text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">NEET 2025</span>
              <span className="text-xs font-semibold text-brandBlue">Admission Open</span>
            </div>
            <h2 className="text-2xl font-bold mb-1 leading-tight text-brandBlue">
              <span className="text-brandRed">Crack NEET</span> with<br/>Dropper & Crash Course
            </h2>
            <button onClick={() => navigate('/batches')} className="bg-brandBlue text-white w-max px-4 py-2 rounded-full font-bold text-xs mt-3 shadow-lg flex items-center gap-2">
              Enroll Now <span className="material-icons-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="absolute right-0 bottom-0 h-full w-1/2 overflow-hidden">
             <img src="https://picsum.photos/400/400" className="object-cover h-full w-full opacity-60" alt="Doctor" />
          </div>
        </div>

        {/* Categories */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">हमारे कोर्सेज (Our Courses)</h2>
            <button onClick={() => navigate('/batches')} className="text-brandBlue text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
             {[
               { name: 'NEET & IIT-JEE', sub: '(प्रवेश परीक्षा)', color: 'bg-blue-600', icon: 'arrow_forward' },
               { name: 'Nursing CET', sub: '(नर्सिंग)', color: 'bg-teal-600', icon: 'medical_services' },
               { name: 'Class 11th - 12th', sub: '(बोर्ड्स)', color: 'bg-indigo-600', icon: 'auto_stories' },
               { name: 'NDA Exam', sub: '(रक्षा सेवा)', color: 'bg-slate-700', icon: 'military_tech' }
             ].map((cat, i) => (
               <div key={i} className={`relative p-4 rounded-xl shadow-md h-32 flex flex-col justify-between text-white ${cat.color} overflow-hidden cursor-pointer`}>
                 <span className="text-[10px] uppercase font-bold opacity-80">Category</span>
                 <div>
                   <h3 className="font-bold text-sm leading-tight">{cat.name}</h3>
                   <span className="text-[10px] opacity-90">{cat.sub}</span>
                 </div>
                 <div className="absolute bottom-2 right-2 h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                   <span className="material-icons-outlined text-sm">{cat.icon}</span>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Continue Learning */}
        <section className="pb-4">
          <h2 className="text-lg font-bold mb-3">Continue Learning</h2>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex gap-4 items-center cursor-pointer" onClick={() => navigate('/study/neet-2025-physics')}>
            <div className="w-14 h-14 bg-brandRed/10 rounded-lg flex items-center justify-center relative overflow-hidden shrink-0">
               <span className="material-icons-outlined text-brandRed">play_circle</span>
               <div className="absolute bottom-0 left-0 h-1 bg-brandRed w-2/3"></div>
            </div>
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold text-gray-400">NEET Biology</span>
              <h4 className="font-bold text-sm">Cell Structure & Functions</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[10px] text-gray-500">25m remaining</span>
                <button className="text-brandBlue text-xs font-bold flex items-center gap-1">Resume <span className="material-icons-outlined text-xs">play_arrow</span></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
