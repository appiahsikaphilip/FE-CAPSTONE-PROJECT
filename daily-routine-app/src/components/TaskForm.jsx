import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow mb-6">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What do you want to accomplish today?"
        className="w-full p-3 border rounded-lg mb-4"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
        + Add Task
      </button>
    </form>
  );
}
