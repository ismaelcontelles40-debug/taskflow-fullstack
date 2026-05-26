import type { TaskFilter } from "../types/task.types";

interface TaskFiltersProps {
  currentFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

function TaskFilters({
  currentFilter,
  onFilterChange,
}: TaskFiltersProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onFilterChange("all")}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          currentFilter === "all"
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Todas
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("pending")}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          currentFilter === "pending"
            ? "bg-yellow-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Pendientes
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("completed")}
        className={`rounded-lg px-4 py-2 font-medium transition ${
          currentFilter === "completed"
            ? "bg-emerald-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilters;