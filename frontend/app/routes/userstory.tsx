import type { Route } from "./+types/userstory";
import UserStoryPage from "../pages/projects/userstory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User Story" },
    { name: "description", content: "User Story page" },
  ];
}

export default function UserStoryRoute() {
  return <UserStoryPage />;
}

