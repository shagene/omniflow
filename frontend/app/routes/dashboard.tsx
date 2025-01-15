// app/routes/dashboard.tsx
import { Outlet } from "@remix-run/react";
import DashboardLayout from "../components/layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}