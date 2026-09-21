export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <span className="text-3xl" aria-hidden="true">
        🌿
      </span>
      <p className="text-base font-medium text-slate-700">All caught up</p>
      <p className="text-sm text-slate-500">Nothing on the list. Add a task above to get going.</p>
    </div>
  );
}
