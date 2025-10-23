import type { Route } from "./+types/home";
import { About } from "../pages/onboarding/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function AboutRoute() {
  return < About />;
}
