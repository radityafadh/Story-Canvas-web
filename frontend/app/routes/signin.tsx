import type { Route } from "./+types/signin";
import { SignIn } from "../pages/auth/signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In - StoryCanvas" },
    { name: "description", content: "Sign in to your StoryCanvas account to continue creating and sharing stories." },
  ];
}

export default function SignInRoute() {
  return <SignIn />;
}
