export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

export type TaskFilter = "all" | "pending" | "completed";