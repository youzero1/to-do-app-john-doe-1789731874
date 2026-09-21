import type { Task } from '@/types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className="group flex items-center gap-3 px-4 py-3 transition hover:bg-slate-50">
      <input
        id={`task-${task.id}`}
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        className="h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
      />
      <label
        htmlFor={`task-${task.id}`}
        className={`flex-1 cursor-pointer text-base transition ${
          task.done ? 'text-slate-400 line-through' : 'text-slate-800'
        }`}
      >
        {task.title}
      </label>
      <button
        type="button"
        onClick={() => onRemove(task.id)}
        aria-label={`Delete "${task.title}"`}
        className="rounded-lg px-2 py-1 text-sm text-slate-400 opacity-0 transition hover:bg-red-50 hover:text-red-600 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 group-hover:opacity-100"
      >
        Delete
      </button>
    </li>
  );
}
