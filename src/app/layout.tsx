import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@daog/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import localFont from "next/font/local";
import { ThemeProvider } from "@daog/components";
import { Toaster } from "@daog/components/ui/toaster";

const mtn = localFont({
  src: [
    {
      path: "../assets/mtn/MTNBrighterSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/mtn/MTNBrighterSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "DAOG Gadgets",
  description: "Empowering Your World with Smart Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <UserProvider>
        <body
          className={cn(
            `${mtn.className} ${mtn.style}`,
            "antialiased bg-background text-foreground"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
