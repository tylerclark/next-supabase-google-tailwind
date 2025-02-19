import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Website name",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} h-full`} suppressHydrationWarning>
      <body className="bg-background text-foreground overflow-hidden h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="min-h-screen h-full flex flex-col items-center">
            <div className="flex-1 w-full h-full flex flex-col gap-2 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex flex-1 gap-5 items-center font-semibold text-2xl">
                    <Link href={"/"}>Website name</Link>
                  </div>
                  <div className="flex gap-1 items-center mr-2">
                    <Navigation />
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  <ThemeSwitcher />
                </div>
              </nav>
              <div className="overflow-y-auto flex-1 flex flex-col max-w-5xl w-full h-full">{children}</div>

              <footer className=" w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4">
                <p>© 2025 Website name</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
