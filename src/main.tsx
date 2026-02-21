import { createRoot } from "react-dom/client";
import "./shared/styles/index.css";

import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router/Router";
import ErrorCompFallback from "@/shared/ui/error/ErrorCompFallback";

import { AppInit } from "@/app/init/AppInit";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorCompFallback}>
      <AppInit />
      <RouterProvider router={router} />
    </ErrorBoundary>
  </Provider>
);
