import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import { createTask, deleteTask, getTasks, toggleTask } from "../api/taskApi";
import type { Task } from "../types/task.types";

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch(() => setError("No se pudieron cargar las tareas"))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("El título de la tarea es obligatorio");
      return;
    }

    try {
      const newTask = await createTask(title, priority);
      setTasks((currentTasks) => [...currentTasks, newTask]);
      setTitle("");
      setPriority("medium");
      setError("");
    } catch {
      setError("No se pudo crear la tarea");
    }
  };

  const handleToggleTask = async (id: number) => {
    try {
      const updatedTask = await toggleTask(id);

      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === id ? updatedTask : task))
      );

      setError("");
    } catch {
      setError("No se pudo actualizar la tarea");
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== id)
      );

      setError("");
    } catch {
      setError("No se pudo eliminar la tarea");
    }
  };

  const formatPriority = (taskPriority: string) => {
    if (taskPriority === "high") return "Alta";
    if (taskPriority === "medium") return "Media";
    return "Baja";
  };

  if (loading) {
    return <p className="text-slate-400">Cargando tareas...</p>;
  }

  return (
    <div className="w-full max-w-3xl">
      <h1 className="mb-6 text-center text-4xl font-bold">Tareas</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-5"
      >
        <div className="mb-4">
          <label className="mb-2 block text-sm text-slate-300">
            Nueva tarea
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ejemplo: Documentar la API"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm text-slate-300">
            Prioridad
          </label>

          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Crear tarea
        </button>
      </form>

      {error && <p className="mb-4 text-red-400">{error}</p>}

      <div className="space-y-4">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{task.title}</h2>

                <p className="mt-2 text-slate-400">
                  Estado: {task.completed ? "Completada" : "Pendiente"}
                </p>

                <p className="text-slate-400">
                  Prioridad: {formatPriority(task.priority)}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleToggleTask(task.id)}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
              >
                {task.completed ? "Marcar pendiente" : "Completar"}
              </button>

              <button
                type="button"
                onClick={() => handleDeleteTask(task.id)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TasksPage;