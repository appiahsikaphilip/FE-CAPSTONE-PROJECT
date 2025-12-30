export default function TaskStats({ completed, pending }) {
  return (
    <div className="flex gap-6 mb-8">
      <div className="bg-green-100 text-green-700 px-6 py-4 rounded-full flex items-center gap-2">
        <span className="text-xl font-bold">{completed}</span>
        <span>Completed</span>
      </div>

      <div className="bg-blue-100 text-blue-700 px-6 py-4 rounded-full flex items-center gap-2">
        <span className="text-xl font-bold">{pending}</span>
        <span>Pending</span>
      </div>
    </div>
  );
}
