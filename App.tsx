
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Batches from './screens/Batches';
import CourseDetails from './screens/CourseDetails';
import Checkout from './screens/Checkout';
import StudyDashboard from './screens/StudyDashboard';
import Success from './screens/Success';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-[#F3F4F6] dark:bg-[#121212]`}>
      <Router>
        <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-[#121212] shadow-xl relative pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/study/:id" element={<StudyDashboard />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
          <BottomNav />
        </div>
      </Router>
    </div>
  );
};

export default App;
