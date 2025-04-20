"use client";
import UserButton from "../features/auth/components/user-button";
import { useGetWorkSpaces } from "@/features/webspaces/api/use-get-workspaces";
import { useMemo, useEffect } from "react";

export default function Home() {
  const { data, isLoading } = useGetWorkSpaces();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return null;
    if (workspaceId) {
      console.log("Redirect to workspaces!");
    } else {
      console.log("Open creation modal");
    }
  }, [workspaceId, isLoading]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
