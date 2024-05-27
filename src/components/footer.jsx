import { Mail, Phone, Send } from "lucide-react";
import { LogoComponent } from "./logo";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { EMAIL_ID } from "@/lib/data";

export const Footer = () => {
  return (
    <div>
      <Separator className="w-[95%] m-auto" />
      <div className="flex flex-wrap justify-between items-start gap-4 p-10">
        <Link to={"/"}>
          <LogoComponent />
        </Link>
        <div className="text-sm text-muted-foreground w-44">
          <h4 className="mb-3 text-base font-bold text-foreground">
            Quick Links
          </h4>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/appointment"}>
            <p>Appointment</p>
          </Link>
          <Link to={"/service"}>
            <p>Service</p>
          </Link>
          <Link to={"/about"}>
            <p>About Us</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="text-sm text-muted-foreground w-44">
          <h4 className="mb-3 text-base font-bold text-foreground">Hours</h4>
          <p className="flex justify-between gap-2">
            Monday <span>9:00 - 18:00</span>
          </p>
          <p className="flex justify-between gap-2">
            Tuesday <span>9:00 - 18:00</span>
          </p>
          <p className="flex justify-between gap-2">
            Wednesday <span>9:00 - 18:00</span>
          </p>
          <p className="flex justify-between gap-2">
            Thursday <span>9:00 - 18:00</span>
          </p>
          <p className="flex justify-between gap-2">
            Friday <span>9:00 - 18:00</span>
          </p>
        </div>
        <div className="text-sm text-muted-foreground w-56">
          <h4 className="mb-3 text-base font-bold text-foreground">Contact</h4>
          <p className="flex items-center justify-start gap-2">
            <Phone className="size-5 my-1 text-foreground" /> 000-000-000
          </p>
          <Link to={`mailto:${EMAIL_ID}`}>
            <p className="flex items-center justify-start gap-2">
              <Mail className="size-5 my-1 text-foreground" />
              {EMAIL_ID}
            </p>
          </Link>
          <p className="flex items-center justify-start gap-2">
            <Send className="size-5 my-1 text-foreground" />
            Los Santos
          </p>
        </div>
      </div>
    </div>
  );
};
