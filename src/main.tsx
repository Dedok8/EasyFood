import { createRoot } from "react-dom/client";
import "@/shared/styles/scss/base/styles.scss";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store/store";
import { RouterProvider } from "react-router/dom";
import { router } from "@/app/router/Router";
import ErrorCompFallback from "@/shared/ui/error/ErrorCompFallback";
import { AppInit } from "@/app/init/AppInit";
import { StrictMode } from "react";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary FallbackComponent={ErrorCompFallback}>
        <StrictMode>
          <AppInit />
        </StrictMode>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
