export const Filters = ({ currentFilter, onFilterChange, counts }) => {
  const filters = [
    { value: 'all', label: 'Todos' },
    { value: 'active', label: 'Activos' },
    { value: 'completed', label: 'Completados' }
  ];

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg flex-wrap gap-4">
      <div className="flex gap-2 flex-wrap">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 ${
              currentFilter === filter.value
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            aria-pressed={currentFilter === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="text-sm text-gray-600">
        <span className="font-semibold">{counts.active}</span> activas / 
        <span className="font-semibold ml-1">{counts.completed}</span> completadas
      </div>
    </div>
  );
};