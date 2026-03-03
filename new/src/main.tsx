import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import App from "./app/App.tsx";
import PrivacyPolicy from "./app/PrivacyPolicy.tsx";
import "./styles/index.css";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
