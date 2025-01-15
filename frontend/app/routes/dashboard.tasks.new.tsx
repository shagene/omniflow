// app/routes/dashboard.tasks.new.tsx
import { TaskCreationForm } from "../components/tasks/task-creation-form";

export default function NewTask() {
  return (
    <div className="py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Create New Task
        </h1>
        <TaskCreationForm />
      </div>
    </div>
  );
}