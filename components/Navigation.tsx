"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={"/"}
        className={`rounded-md px-3 py-2 transition-colors duration-100 ${
          pathname === "/" ? "bg-blue-700 text-white" : "dark:hover:bg-neutral-900 hover:bg-neutral-100"
        }`}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={`rounded-md px-3 py-2 transition-colors duration-100 ${
          pathname === "/about" ? "bg-blue-700 text-white" : "dark:hover:bg-neutral-900 hover:bg-neutral-100"
        }`}
      >
        About
      </Link>
      <Link
        href={"/chat"}
        className={`rounded-md px-3 py-2 transition-colors duration-100 ${
          pathname === "/chat" ? "bg-blue-700 text-white" : "dark:hover:bg-neutral-900 hover:bg-neutral-100"
        }`}
      >
        Chat
      </Link>
    </div>
  );
}
