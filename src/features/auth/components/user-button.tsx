"use client";

import { useCurrentUser } from "../hooks/use-current-user";
import { Loader, LogOut} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

const UserButton = () => {
    const {isLoading, data } = useCurrentUser();
    if(isLoading){
        return <Loader className="size-4 animate-spin text-muted-foreground" />
    };

    if(!data){
        return null;
    }

    const { image, name, email } = data;
    const avatarFallback = name!.charAt(0).toUpperCase();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="sz-5 hover:opacity-75 transition">
          <AvatarImage alt={name} src={image} />
          <AvatarFallback>
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-40"
        side="right"
      >
        <DropdownMenuItem>
            <LogOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;