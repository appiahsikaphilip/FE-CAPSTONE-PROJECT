export default function CategoryFilter({ category, setCategory }) {
  const categories = ["All", "Work", "Personal", "Health"];

  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${category === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border hover:bg-gray-100"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
