import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import TaskCard from "../components/TaskCard";
import TaskFilters from "../components/TaskFilters";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";
import type { TaskFilter } from "../types/task.types";

function TasksPage() {
  const { tasks, loading, error, addTask, completeTask, removeTask } = useTasks();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [currentFilter, setCurrentFilter] = useState<TaskFilter>("all");

  const filteredTasks = useMemo(() => {
    if (currentFilter === "pending") {
      return tasks.filter((task) => !task.completed);
    }

    if (currentFilter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, currentFilter]);

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

      <TaskFilters
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

      {error && <p className="mb-4 text-red-400">{error}</p>}

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={completeTask}
            onDelete={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;