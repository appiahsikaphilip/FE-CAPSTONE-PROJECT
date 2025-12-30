// Home page landing layout

import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center">
        <div className="bg-blue-600/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-widest uppercase">Version 2.0 Ready</div>
        
        {/* Adjusted from 9xl to 7xl */}
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
          Master Your <br /> <span className="text-blue-600">Daily Routine.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 font-medium">
          A sleek, minimalist task manager designed for focus and productivity.
        </p>

        <button 
          onClick={() => navigate("/tasks")} 
          className="px-10 py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Get Started — It's Free
        </button>
      </main>
    </div>
  );
}