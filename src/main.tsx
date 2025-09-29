import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Cadastro from "./routes/Cadastro/index.tsx";
import Error from "./routes/Error/index.tsx";
import Home from "./routes/Home/index.tsx";
import Login from "./routes/Login/index.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
