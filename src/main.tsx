import { createRoot } from "react-dom/client";
import "./shared/styles/index.css";
import "@/shared/styles/scss/style.scss";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store/store.ts";

import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router/Router";
import ErrorCompFallback from "@/shared/ui/error/ErrorCompFallback";
import AppInit from "@/app/init/AppInit";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorCompFallback}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <AppInit />
        <RouterProvider router={router} />
      </PersistGate>
    </ErrorBoundary>
  </Provider>
);
