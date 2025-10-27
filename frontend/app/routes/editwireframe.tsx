import type { Route } from "./+types/home";
import EditWireframe from "../pages/wireframes/editwireframe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function EditWireframeRoute() {
  return < EditWireframe />;
}
