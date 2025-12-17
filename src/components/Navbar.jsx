import { NavLink } from "react-router-dom";

export function Navbar() {
  const linkStyle = ({ isActive }) => 
    `px-6 py-3 rounded-2xl text-base md:text-lg font-black transition-all ${
      isActive ? "bg-blue-600 text-white shadow-xl shadow-blue-500/40" : "text-slate-500 dark:text-slate-400 hover:bg-white/50"
    }`;

  return (
    <nav className="sticky top-0 z-50 p-6">
      <div className="max-w-7xl mx-auto glass rounded-[2.5rem] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"><span className="text-white font-black text-xl">✓</span></div>
          <span className="font-black text-2xl tracking-tighter dark:text-white hidden md:block">DAILY<span className="text-blue-600">ROUTINE</span></span>
        </div>
        <div className="flex gap-2">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/tasks" className={linkStyle}>Tasks</NavLink>
          <NavLink to="/settings" className={linkStyle}>Settings</NavLink>
        </div>
      </div>
    </nav>
  );
}