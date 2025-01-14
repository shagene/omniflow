// app/routes/settings.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Settings - OmniFlow" },
    { name: "description", content: "Configure your OmniFlow workspace" },
  ];
};

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      <p className="text-gray-600 dark:text-gray-400">Configure your workspace settings.</p>
      
      <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
        <p>Settings interface coming soon...</p>
      </div>
    </div>
  );
}