
// TaskCard component displays individual task details
export default function TaskCard({ task, toggle, remove }) {
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded shadow">
      <div>
        <h3 className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </h3>
        <span className="text-sm text-gray-500">{task.category}</span>
      </div>
      <div className="space-x-2">
        <button
          onClick={toggle}
          className="text-green-600"
        >
          ✓
        </button>
        <button
          onClick={remove}
          className="text-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
