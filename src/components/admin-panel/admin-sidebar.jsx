import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: Gauge,
  },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-r from-[#5b71ee] to-[#7d7599]">
      {routes.map(({ path, label, icon: Icon }) => (
        <Link key={path} to={path}>
          <div
            className={cn(
              "w-full flex items-center gap-x-4 p-4 text-white font-semibold hover:bg-slate-200/20 transition-all",
              location.pathname === path && "bg-slate-200/20 border-l-4"
            )}
          >
            <Icon
              size={22}
              className={cn("text-white group-hover:text-white transition-all")}
            />
            {label}
          </div>
        </Link>
      ))}
    </div>
  );
};
