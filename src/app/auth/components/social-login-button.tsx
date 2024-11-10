"use client";

import { Button } from "@daog/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SocialLoginButtonProps {
  option: "apple" | "google" | "email";
  icon: JSX.Element;
}

export function SocialLoginButton({ option, icon }: SocialLoginButtonProps) {
  const router = useRouter();
  const [login] = useState(() => {
    if (option === "apple") {
      return {
        title: "Sign in with Apple",
        connection: "apple/login",
      };
    }

    if (option === "email") {
      return {
        title: "Sign in with Email",
        connection: "login",
      };
    }

    return {
      title: "Sign in with Google",
      connection: "google/login",
    };
  });

  return (
    <Button
      className="flex items-center gap-4 px-3 py-6 bg-transparent border border-primary-foreground rounded-full text-xs hover:bg-secondary hover:text-primary"
      onClick={(e) => {
        e.preventDefault();
        router.push(`/api/auth/${login.connection}`);
      }}
    >
      {icon}
      {login.title}
    </Button>
  );
}
