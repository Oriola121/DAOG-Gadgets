"use client";
import { Button } from "@daog/components/ui/button";
import { Input } from "@daog/components/ui/input";
import { Label } from "@daog/components/ui/label";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export function EmailLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6">
      <Label htmlFor="password" className="block text-sm font-medium">
        Password
        <div className="relative flex items-center">
          <Input
            className="mt-1 bg-transparent rounded-full border border-primary-foreground p-2 pr-10"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
          />
          <span
            onClick={toggleEye}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
      </Label>
      <Button className="flex mt-4 items-center px-36 py-2 bg-[#3b7ced] hover:bg-[#3b6ced] text-white rounded-full">
        Sign In
      </Button>
    </div>
  );
}
