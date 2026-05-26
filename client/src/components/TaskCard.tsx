import type { Task } from "../types/task.types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskCard({
  task,
  onToggle,
  onDelete,
}: TaskCardProps) {
  const formatPriority = (priority: string) => {
    if (priority === "high") return "Alta";
    if (priority === "medium") return "Media";

    return "Baja";
  };

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">
            {task.title}
          </h2>

          <p className="mt-2 text-slate-400">
            Estado:{" "}
            {task.completed ? "Completada" : "Pendiente"}
          </p>

          <p className="text-slate-400">
            Prioridad: {formatPriority(task.priority)}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          {task.completed
            ? "Marcar pendiente"
            : "Completar"}
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default TaskCard;