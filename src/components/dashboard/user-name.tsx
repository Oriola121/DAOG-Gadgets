"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function UserName() {
  const { user } = useUser();
  const firstName = user?.name?.split(" ")[0] || "";

  return <div className="text-xl font-semibold">{firstName}</div>;
}
