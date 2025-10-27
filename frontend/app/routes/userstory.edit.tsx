import type { Route } from "./+types/home";
import UserStoryEditPage from "../pages/projects/userstory-edit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Edit User Story" },
    { name: "description", content: "Edit User Story page" },
  ];
}

export default function UserStoryEditRoute() {
  return <UserStoryEditPage />;
}

