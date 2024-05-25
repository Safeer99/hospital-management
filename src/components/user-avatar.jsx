import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AvatarImageDemo from "../assets/avatar.jpg";
import clsx from "clsx";

export function UserAvatar({
  src = AvatarImageDemo,
  fallback = "U",
  size = "sm",
}) {
  return (
    <Avatar className={clsx({ "size-20": size === "lg" })}>
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
