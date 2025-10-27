import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Signin", "routes/signin.tsx"),
  route("Signup", "routes/signup.tsx"),
  route("Chat", "routes/chat.tsx"),
  route("History", "routes/history.tsx"),
  route("UserStoryPage", "routes/userstory.tsx"),
  route("UserStoryEditPage", "routes/userstory.edit.tsx"),
  route("About", "routes/About.tsx")
] satisfies RouteConfig;
