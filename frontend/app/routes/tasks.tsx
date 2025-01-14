// app/routes/tasks.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tasks - OmniFlow" },
    { name: "description", content: "Manage your tasks and workflows" },
  ];
};

export default function Tasks() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
      <p className="text-gray-600 dark:text-gray-400">Manage your tasks and workflows here.</p>
      
      <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
        <p>Task management interface coming soon...</p>
      </div>
    </div>
  );
}