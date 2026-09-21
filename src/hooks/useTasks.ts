import { useCallback, useState } from 'react';
import type { Task } from '@/types/task';
import { createId } from '@/lib/id';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: createId(), title: trimmed, done: false }]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }, []);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { tasks, addTask, toggleTask, removeTask };
}
