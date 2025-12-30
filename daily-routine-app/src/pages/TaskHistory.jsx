import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navbar } from "../components/Navbar";

export default function TaskHistory() {
  const { tasks, addTask, toggleTask, deleteTask, formatTime } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("All Tasks");

  const categoryTheme = {
    Work: "text-orange-600 bg-orange-50 dark:bg-orange-900/20",
    Personal: "text-purple-600 bg-purple-50 dark:bg-purple-900/20",
    Health: "text-green-600 bg-green-50 dark:bg-green-900/20"
  };

  const filtered = tasks.filter(t => {
    if (filter === "All Tasks") return true;
    if (filter === "Completed") return t.completed;
    return t.category === filter;
  });

  return (
    <div className="min-h-screen bg-dots relative overflow-hidden">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-8 tracking-tighter">
          My <span className="text-blue-600">Tasks</span>
        </h1>
        
        {/* Input Card */}
        <div className="glass p-4 rounded-3xl mb-12 flex flex-col md:flex-row gap-3">
          <input 
            className="flex-[2] bg-slate-100/50 dark:bg-slate-800/50 dark:text-white p-4 rounded-2xl outline-none font-bold text-lg" 
            placeholder="What's next?" value={input} onChange={(e) => setInput(e.target.value)} 
          />
          <select className="flex-1 bg-slate-100/50 dark:bg-slate-800/50 dark:text-white p-4 rounded-2xl font-black" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Work</option><option>Personal</option><option>Health</option>
          </select>
          <button onClick={() => { addTask(input, category); setInput(""); }} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black">Add Task</button>
        </div>

        {/* WHOLISTIC GRADIENT CATEGORY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {[
            { id: "All Tasks", color: "from-blue-600 to-indigo-500", icon: "📊" },
            { id: "Work", color: "from-orange-500 to-amber-400", icon: "💼" },
            { id: "Personal", color: "from-purple-600 to-pink-500", icon: "🏠" },
            { id: "Health", color: "from-emerald-500 to-teal-400", icon: "💪" },
            { id: "Completed", color: "from-slate-700 to-slate-500", icon: "✅" }
          ].map((f) => (
            <button 
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`p-4 rounded-[2rem] transition-all duration-300 border-2 flex flex-col items-center ${
                filter === f.id 
                ? `bg-gradient-to-br ${f.color} border-white/20 text-white scale-105 shadow-xl` 
                : "glass border-transparent text-slate-500 opacity-60 hover:opacity-100"
              }`}
            >
              <span className="text-2xl mb-1">{f.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">{f.id}</span>
            </button>
          ))}
        </div>

        {/* Task Cards */}
        <div className="grid gap-4">
          {filtered.map(t => (
            <div key={t.id} className="glass p-5 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4">
                <button onClick={() => toggleTask(t.id)} className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${t.completed ? "bg-green-500 border-green-500 text-white" : "border-slate-200"}`}>
                  {t.completed && <span className="text-sm font-bold">✓</span>}
                </button>
                <div>
                  <p className={`text-xl font-bold ${t.completed ? "line-through text-slate-300" : "dark:text-white"}`}>{t.text}</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{formatTime(t.id)}</span>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${categoryTheme[t.category] || "bg-blue-50 text-blue-600"}`}>{t.category}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => deleteTask(t.id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all text-xl">✕</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}