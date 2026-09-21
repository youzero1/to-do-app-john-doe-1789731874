import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Today</h1>
      <div className="h-40 rounded-2xl border border-slate-200 bg-white" />
    </div>
  );
}
