// app/routes/analytics.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Analytics - OmniFlow" },
    { name: "description", content: "Business analytics and insights" },
  ];
};

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
      <p className="text-gray-600 dark:text-gray-400">View your business analytics and insights.</p>
      
      <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
        <p>Analytics dashboard coming soon...</p>
      </div>
    </div>
  );
}