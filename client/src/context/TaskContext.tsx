import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import {
  createTask,
  deleteTask,
  getTasks,
  toggleTask,
} from "../api/taskApi";

import type { Task } from "../types/task.types";

interface TaskContextValue {
  tasks: Task[];
  loading: boolean;
  error: string;
  addTask: (title: string, priority: string) => Promise<void>;
  completeTask: (id: number) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch(() => setError("No se pudieron cargar las tareas"))
      .finally(() => setLoading(false));
  }, []);

  const addTask = async (title: string, priority: string) => {
    try {
      const newTask = await createTask(title, priority);

      setTasks((currentTasks) => [...currentTasks, newTask]);
      setError("");
    } catch {
      setError("No se pudo crear la tarea");
    }
  };

  const completeTask = async (id: number) => {
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

  const removeTask = async (id: number) => {
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        completeTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };