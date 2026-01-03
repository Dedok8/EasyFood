import { createRoot } from "react-dom/client";
import "./shared/styles/index.css";
import "./shared/styles/scss/index.scss";
import { Provider } from "react-redux";
import { store } from "@/app/store/store.ts";
import AppInit from "@/app/init/AppInit.tsx";
import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router/Router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppInit />
    <RouterProvider router={router} />
  </Provider>
);
