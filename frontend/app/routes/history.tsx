import type { Route } from "./+types/history";
import History from "../pages/projects/history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function HistoryRoute() {
  return < History />;
}
