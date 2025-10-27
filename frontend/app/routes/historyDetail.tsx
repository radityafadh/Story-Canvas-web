import type { Route } from "./+types/historyDetail";
import HistoryDetail from "../pages/onboarding/historyDetail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function HistoryDetailRoute() {
  return < HistoryDetail />;
}