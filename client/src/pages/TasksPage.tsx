import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
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

  if (loading) {
    return <p className="text-slate-400">Cargando tareas...</p>;
  }

  return (
    <div className="w-full max-w-3xl">
      <h1 className="mb-6 text-center text-4xl font-bold">Tareas</h1>

      <TaskForm
        title={title}
        priority={priority}
        onTitleChange={setTitle}
        onPriorityChange={setPriority}
        onSubmit={handleSubmit}
      />

      {error && <p className="mb-4 text-red-400">{error}</p>}

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;