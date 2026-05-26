import type { FormEvent } from "react";

interface TaskFormProps {
  title: string;
  priority: string;
  onTitleChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}

function TaskForm({
  title,
  priority,
  onTitleChange,
  onPriorityChange,
  onSubmit,
}: TaskFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-5"
    >
      <div className="mb-4">
        <label className="mb-2 block text-sm text-slate-300">
          Nueva tarea
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
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
          onChange={(event) => onPriorityChange(event.target.value)}
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
  );
}

export default TaskForm;