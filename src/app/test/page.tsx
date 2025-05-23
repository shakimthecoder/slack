"use client";


import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function TestPage() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }: {_id: number, text: string}) => <div key={_id}>{text}</div>)}
    </main>
  );
}