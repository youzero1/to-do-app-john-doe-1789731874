import { createFileRoute } from '@tanstack/react-router';
import { TaskInput } from '@/components/TaskInput';
import { TaskList } from '@/components/TaskList';
import { EmptyState } from '@/components/EmptyState';
import { useTasks } from '@/hooks/useTasks';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Today</h1>
        <p className="text-sm text-slate-500">A simple list to keep the day on track.</p>
      </header>

      <TaskInput onAdd={addTask} />

      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      )}
    </main>
  );
}
