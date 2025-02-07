"use client";

import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function SignInButton() {
  const signInWithGoogle = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      redirect("/error");
    }

    window.location.href = data.url;
  };

  return (
    <Button size="sm" variant={"outline"} onClick={signInWithGoogle}>
      Sign in with Google
    </Button>
  );
}
