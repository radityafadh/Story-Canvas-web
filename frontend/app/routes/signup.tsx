import type { Route } from "./+types/home";
import { SignUp } from "../pages/auth/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign Up - StoryCanvas" },
    { name: "description", content: "Create a new StoryCanvas account and start your storytelling journey today." },
  ];
}

export default function SignUpRoute() {
  return <SignUp />;
}