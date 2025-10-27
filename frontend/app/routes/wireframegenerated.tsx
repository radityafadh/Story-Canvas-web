import type { Route } from "./+types/wireframegenerated";
import WireframeGenerated from "../pages/wireframes/wireframegenerated";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function WireframeGeneratedRoute() {
  return < WireframeGenerated />;
}
