export default function TaskList({ tasks, toggle, remove }) {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <span
            onClick={() => toggle(task.id)}
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>

          <button
            onClick={() => remove(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
