import { LogOut, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AdminSidebar } from "./admin-sidebar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Patient } from "../svgs";
import { UserAvatar } from "../user-avatar";
import { LogoComponent } from "../logo";

export const AdminNavbar = () => {
  return (
    <div className="p-4 border-b h-full bg-background flex items-center justify-between shadow-sm">
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 pt-16 bg-gradient-to-r from-[#5b71ee] to-[#7d7599]"
        >
          <div className="mb-6 pl-3">
            <LogoComponent />
          </div>
          <AdminSidebar />
        </SheetContent>
      </Sheet>
      <div className="relative w-full flex items-center justify-between gap-2">
        <Link to="/">
          <Button variant="ghost">
            <LogOut className="size-5 mr-2" />
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#5b71ee] via-[#7d7599] to-white">
              Exit
            </p>
          </Button>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost">
            <Patient className="size-5 mr-2" />
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#5b71ee] via-[#7d7599] to-white">
              Badal
            </p>
          </Button>
          <UserAvatar />
        </div>
        <div className="hidden absolute inset-y-0 left-1/2 -translate-x-1/2 sm:flex items-center justify-center">
          <LogoComponent />
        </div>
      </div>
    </div>
  );
};
