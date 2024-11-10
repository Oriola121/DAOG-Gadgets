"use client";
import { ThemeToggle } from "@daog/components";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SocialLoginButton } from "./components/social-login-button";
import { MdOutlineMail } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  return (
    <main className="grid grid-cols-2 bg-primary h-screen text-primary-foreground">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="px-6 py-4 border border-primary-foreground rounded-lg h-96 w-80">
          <h1 className="text-3xl font-semibold  flex items-center justify-center gap-6">
            Login
            <ThemeToggle />
          </h1>
          <form className="flex flex-col w-full max-w-sm p-12 gap-10">
            <SocialLoginButton option="google" icon={<FcGoogle />} />
            <SocialLoginButton option="apple" icon={<FaApple />} />
            <SocialLoginButton option="email" icon={<MdOutlineMail />} />
          </form>
        </div>
      </div>
      <div className="bg-[url('./assets/mtn.jpg')] bg-cover" />
    </main>
  );
}
