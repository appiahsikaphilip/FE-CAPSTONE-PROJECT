import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Navbar } from "../components/Navbar";

export default function Settings() {
  const { isDarkMode, setIsDarkMode, timeFormat, setTimeFormat } = useContext(AppContext);
  
  // States for the Sync Hub
  const [cloudStatus, setCloudStatus] = useState("idle");
  const [googleStatus, setGoogleStatus] = useState("idle");

  const handleCloudSync = () => {
    setCloudStatus("syncing");
    setTimeout(() => setCloudStatus("success"), 2000);
  };

  const handleGoogleSync = () => {
    setGoogleStatus("syncing");
    setTimeout(() => setGoogleStatus("success"), 2500);
  };

  return (
    <div className="min-h-screen bg-gears bg-repeat relative">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 py-10 relative z-10">
        <header className="flex items-center gap-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-black dark:text-white tracking-tight">
            Set<span className="text-blue-600">tings</span>
          </h1>
          <span className="text-4xl animate-[spin_10s_linear_infinite] opacity-20 text-blue-600">⚙️</span>
        </header>
        
        <div className="space-y-12">
          
          {/* THE SYNC HUB */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
              Data & Sync Hub
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Standard Cloud Sync Card */}
              <div 
                onClick={handleCloudSync}
                className={`p-8 rounded-[2.5rem] cursor-pointer transition-all duration-300 border-4 flex flex-col justify-between h-48 ${
                  cloudStatus === "success" 
                  ? "bg-green-600 border-green-400 shadow-xl" 
                  : "glass border-transparent hover:border-blue-500/30"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-3xl">☁️</span>
                  {cloudStatus === "syncing" && <div className="w-5 h-5 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>}
                </div>
                <div>
                  <p className={`text-xl font-black ${cloudStatus === "success" ? "text-white" : "dark:text-white"}`}>
                    {cloudStatus === "success" ? "Cloud Secured" : "Cloud Sync"}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-widest ${cloudStatus === "success" ? "text-green-100" : "text-slate-400"}`}>
                    Internal Backup
                  </p>
                </div>
              </div>

              {/* Google Calendar Card */}
              <div 
                onClick={handleGoogleSync}
                className={`p-8 rounded-[2.5rem] cursor-pointer transition-all duration-300 border-4 flex flex-col justify-between h-48 ${
                  googleStatus === "success" 
                  ? "bg-[#4285F4] border-blue-300 shadow-xl" 
                  : "glass border-transparent hover:border-[#4285F4]/30"
                }`}
              >
                <div className="flex justify-between items-start">
                  <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png" className="w-10 h-10" alt="Google Cal" />
                  {googleStatus === "syncing" && <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>}
                </div>
                <div>
                  <p className={`text-xl font-black ${googleStatus === "success" ? "text-white" : "dark:text-white"}`}>
                    {googleStatus === "success" ? "Calendar Linked" : "Google Calendar"}
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-widest ${googleStatus === "success" ? "text-blue-100" : "text-slate-400"}`}>
                    External Sync
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TIME PREFERENCES (Saved via Context) */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
              Time Format
            </h2>
            <div className="grid grid-cols-2 gap-4">
               {/* Same Time Cards from previous code ... */}
               <div onClick={() => setTimeFormat("12h")} className={`p-6 rounded-[2rem] cursor-pointer border-4 transition-all ${timeFormat === "12h" ? "bg-gradient-to-br from-blue-600 to-blue-400 border-blue-300 text-white" : "glass border-transparent opacity-60"}`}>
                 <p className="text-2xl font-black">12h</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Standard</p>
               </div>
               <div onClick={() => setTimeFormat("24h")} className={`p-6 rounded-[2rem] cursor-pointer border-4 transition-all ${timeFormat === "24h" ? "bg-gradient-to-br from-indigo-700 to-blue-600 border-indigo-400 text-white" : "glass border-transparent opacity-60"}`}>
                 <p className="text-2xl font-black">24h</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Military</p>
               </div>
            </div>
          </section>

          {/* VISUAL STYLE */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
              Appearance
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setIsDarkMode(false)} className={`p-6 rounded-[2rem] cursor-pointer border-4 transition-all ${!isDarkMode ? "bg-white border-blue-600 shadow-lg" : "glass border-transparent opacity-60"}`}>
                <span className="text-2xl block mb-1">☀️</span>
                <p className="font-bold dark:text-white">Light</p>
              </div>
              <div onClick={() => setIsDarkMode(true)} className={`p-6 rounded-[2rem] cursor-pointer border-4 transition-all ${isDarkMode ? "bg-slate-900 border-blue-600 shadow-lg" : "glass border-transparent opacity-60"}`}>
                <span className="text-2xl block mb-1">🌙</span>
                <p className="font-bold text-white">Dark</p>
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}