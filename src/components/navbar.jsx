import { Menu } from "lucide-react";
import { LogoComponent } from "./logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { UserAvatar } from "./user-avatar";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export const Navbar = () => {
  // set the user to false for seeing login and signin buttons
  const user = false;
  // set isAdmin to false for hiding admin button
  const isAdmin = true;

  return (
    <Sheet>
      <div className="relative z-50 w-full p-4 flex items-center justify-between">
        <Link to={"/"}>
          <LogoComponent />
        </Link>
        <div className="hidden absolute inset-y-0 left-1/2 -translate-x-1/2 md:flex items-center justify-center">
          <NavbarRoutes />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          {user ? <UserActions isAdmin={isAdmin} /> : <AuthRoutes />}
        </div>
        <div className="md:hidden">
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="pt-16 flex flex-col gap-6">
            <div className="flex flex-col gap-4 items-center">
              {user ? <UserActions isAdmin={isAdmin} /> : <AuthRoutes />}
            </div>
            <Separator />
            <NavbarRoutes flow="column" />
          </SheetContent>
        </div>
      </div>
    </Sheet>
  );
};

const NavbarRoutes = ({ flow = "row" }) => {
  const location = useLocation();

  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/appointment",
      name: "Appointment",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/about",
      name: "About Us",
    },
    {
      path: "/pharmacy",
      name: "Pharmacy",
    },
  ];

  return (
    <div
      style={{ flexDirection: flow }}
      className="flex items-center justify-center gap-1"
    >
      {routes.map((route) => (
        <Link to={route.path}>
          <Button
            key={route.path}
            className={cn(
              "font-bold text-base py-1",
              location.pathname === route.path && "bg-[#aaabe8] text-white"
            )}
            variant="ghost"
          >
            {route.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

const AuthRoutes = () => {
  return (
    <>
      <Link to="/signin">
        <Button
          size="sm"
          className="px-6 bg-white rounded-xl shadow-inner shadow-slate-300"
          variant="ghost"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/signup">
        <Button size="sm" className="px-6 rounded-xl" variant="custom">
          Register
        </Button>
      </Link>
    </>
  );
};

const UserActions = ({ isAdmin = false }) => {
  return (
    <>
      <UserAvatar />
      {isAdmin && (
        <Link to="/admin/dashboard">
          <Button size="sm" className="px-6 rounded-xl" variant="custom">
            Admin
          </Button>
        </Link>
      )}
    </>
  );
};
