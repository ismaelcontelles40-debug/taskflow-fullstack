import type { Task } from "../types/task.types";

const API_URL = "http://localhost:3000/api/v1/tasks";

interface TasksResponse {
  success: boolean;
  data: Task[];
}

interface TaskResponse {
  success: boolean;
  data: Task;
}

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }

  const result: TasksResponse = await response.json();

  return result.data;
};

export const createTask = async (
  title: string,
  priority: string
): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      priority,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al crear la tarea");
  }

  const result: TaskResponse = await response.json();

  return result.data;
};
export const toggleTask = async (id: number): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Error al actualizar la tarea");
  }

  const result: TaskResponse = await response.json();

  return result.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar la tarea");
  }
};