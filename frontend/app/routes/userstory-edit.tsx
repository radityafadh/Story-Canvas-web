import type { Route } from "./+types/userstoryedit";
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

