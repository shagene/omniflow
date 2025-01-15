// app/routes/dashboard.tasks.tsx
import { Link, Outlet } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";

export default function Tasks() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <Link to="new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Task
          </Button>
        </Link>
      </div>
      
      {/* Outlet will show the task creation form when on /dashboard/tasks/new */}
      <Outlet />
      
      {/* Show task list when not in creation form */}
      <div className="mt-6">
        {/* Task list will go here */}
        <p>Task list coming soon...</p>
      </div>
    </div>
  );
}