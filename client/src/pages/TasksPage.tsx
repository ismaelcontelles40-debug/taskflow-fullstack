import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import TaskCard from "../components/TaskCard";
import TaskFilters from "../components/TaskFilters";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";
import type { TaskFilter } from "../types/task.types";

function TasksPage() {
  const { tasks, loading, error, addTask, completeTask, removeTask } =
    useTasks();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [currentFilter, setCurrentFilter] = useState<TaskFilter>("all");
  const [searchText, setSearchText] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter =
        currentFilter === "all" ||
        (currentFilter === "pending" && !task.completed) ||
        (currentFilter === "completed" && task.completed);

      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [tasks, currentFilter, searchText]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    await addTask(title, priority);

    setTitle("");
    setPriority("medium");
  };

  if (loading) {
    return <p className="text-slate-400">Cargando tareas...</p>;
  }

  return (
    <div className="w-full max-w-3xl">
      <h1 className="mb-6 text-center text-4xl font-bold">Tareas</h1>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
          <p className="text-sm text-slate-400">Total</p>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
          <p className="text-sm text-slate-400">Pendientes</p>
          <p className="text-3xl font-bold">{pendingTasks}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
          <p className="text-sm text-slate-400">Completadas</p>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>
      </div>

      <TaskForm
        title={title}
        priority={priority}
        onTitleChange={setTitle}
        onPriorityChange={setPriority}
        onSubmit={handleSubmit}
      />

      <div className="mb-6">
        <label className="mb-2 block text-sm text-slate-300">
          Buscar tarea
        </label>

        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Buscar por título..."
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <TaskFilters
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

      {error && <p className="mb-4 text-red-400">{error}</p>}

      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={completeTask}
              onDelete={removeTask}
            />
          ))
        ) : (
          <p className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center text-slate-400">
            No hay tareas que coincidan con la búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}

export default TasksPage;