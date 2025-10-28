import type { Route } from "./+types/historydetail";
import HistoryDetail from "../pages/projects/historyDetail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "", content: "" },
  ];
}

export default function HistoryDetailRoute() {
  return < HistoryDetail />;
}