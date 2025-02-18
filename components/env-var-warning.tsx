import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";
// import SignInButton from "./sign-in-button";

export function EnvVarWarning() {
  return (
    <div className="flex items-center">
      <Badge variant={"outline"} className="font-normal px-4 py-2">
        <AlertTriangle className="mr-2 h-4 w-4" />
        Supabase environment variables required for login buttons
      </Badge>
      {/* <div className="flex gap-2">
        <SignInButton />
      </div> */}
    </div>
  );
}
