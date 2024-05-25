import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./components/admin-panel/admin-navbar";
import { AdminSidebar } from "./components/admin-panel/admin-sidebar";

function AdminLayout() {
  return (
    <div className="overflow-hidden">
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <AdminNavbar />
      </div>
      <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 translate-y-20 z-50">
        <AdminSidebar />
      </div>
      <main className="md:pl-64 pt-[80px] h-full bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
