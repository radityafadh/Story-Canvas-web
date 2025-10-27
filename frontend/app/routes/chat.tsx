import type { Route } from "./+types/home";
import  Chat  from "../pages/projects/chat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function ChatRoute() {
  return < Chat />;
}
