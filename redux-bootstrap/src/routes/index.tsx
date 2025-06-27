import App from "@/App";
import tasks from "@/pages/tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App></App>,
    Component: App,
    children: [
      {
        index: true,
        // path: "tasks",
        Component: tasks,
      },
      {
        path: "tasks",
        Component: tasks,
      },
      {
        path: "users",
        Component: User,
      },
    ],
  },
]);

export default router;
