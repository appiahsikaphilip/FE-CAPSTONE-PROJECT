// Global application context for tasks and settings

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Persistence for Tasks
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("daily_tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Persistence for Theme
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  // Persistence for Time Format (12h vs 24h)
  const [timeFormat, setTimeFormat] = useState(() => localStorage.getItem("timeFormat") || "12h");

  useEffect(() => {
    localStorage.setItem("daily_tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("timeFormat", timeFormat);
    
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [tasks, isDarkMode, timeFormat]);

  const addTask = (text, category) => {
    if (!text.trim()) return;
    setTasks([{ id: Date.now(), text, category, completed: false }, ...tasks]);
  };

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const formatTime = (dateId) => {
    const date = new Date(dateId);
    return date.toLocaleTimeString([], { 
      hour: '2-digit', minute: '2-digit', hour12: timeFormat === "12h" 
    });
  };

  return (
    <AppContext.Provider value={{ 
      tasks, addTask, toggleTask, deleteTask, 
      isDarkMode, setIsDarkMode, 
      timeFormat, setTimeFormat, formatTime 
    }}>
      {children}
    </AppContext.Provider>
  );
}