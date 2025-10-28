import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Signin", "routes/signin.tsx"),
  route("Signup", "routes/signup.tsx"),
  route("Chat", "routes/chat.tsx"),
  route("History", "routes/history.tsx"),
  route("About", "routes/about.tsx"),
  route("EditWireframe", "routes/editwireframe.tsx"),
  route("WireframeGenerated", "routes/wireframegenerated.tsx"),
  route("UserStoryPage", "routes/userstory.tsx"),
  route("UserStoryEditPage", "routes/userstory-edit.tsx"),
  route("HistoryDetail", "routes/historydetail.tsx"),
  route("UserStoryScenario", "routes/userstoryscenario.tsx"),
  route("UserStoryScenarioEdit", "routes/userstoryscenario-edit.tsx"),
  route("Export", "routes/export.tsx"),
] satisfies RouteConfig;
