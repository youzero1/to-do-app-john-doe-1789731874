import type { Task } from '@/types/task';
import { TaskItem } from '@/components/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <ul className="divide-y divide-slate-100">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
      <p className="border-t border-slate-100 bg-slate-50/60 px-4 py-2.5 text-xs text-slate-500">
        {remaining} of {tasks.length} remaining
      </p>
    </section>
  );
}
