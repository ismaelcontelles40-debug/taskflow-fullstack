import type { Task } from "../types/task.types";

const API_URL = "http://localhost:3000/api/v1/tasks";

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener tareas");
  }

  const result = await response.json();

  return result.data;
}

export async function createTask(
  title: string,
  priority: string
): Promise<Task> {
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
    throw new Error("Error al crear tarea");
  }

  const result = await response.json();

  return result.data;
}

export async function toggleTask(id: number): Promise<Task> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Error al actualizar tarea");
  }

  const result = await response.json();

  return result.data;
}

export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar tarea");
  }
}