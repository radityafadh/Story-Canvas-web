import type { Route } from "./+types/history";
import History from "../pages/onboarding/history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function HistoryRoute() {
  return < History />;
}
