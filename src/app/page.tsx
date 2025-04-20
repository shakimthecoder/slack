"use client";
import UserButton from "../features/auth/components/user-button";
import { useGetWorkSpaces } from "@/features/webspaces/api/use-get-workspaces";
import { useMemo, useEffect } from "react";
import { useCreateWorkspaceModal } from "@/features/webspaces/store/use-create-workspace";

export default function Home() {
  const [isOpen, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkSpaces();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspaceId) {
      console.log("Redirect to workspaces!");
    } else if (!isOpen) {
      setOpen(true);
      console.log("Open creation modal");
    }
  }, [workspaceId, isLoading, isOpen, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
