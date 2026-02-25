import { createBrowserRouter, type LoaderFunctionArgs } from "react-router";
import { Mutex } from "async-mutex";
import { authCheckLoader } from "./authCheckLoader";

import { appRouterRoutes } from "./appRouterRoutes";
import Splash from "@/pages/home/Splash";

import RootLayout from "@/widgets/layouts/RootLayout";
import { rootLoader } from "@/shared/hooks/useRouteLoader";

const refreshMutex = new Mutex();
const authLoader = authCheckLoader({ refreshMutex });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    HydrateFallback: () => (
      <div className="flex">
        <p>Loading app...</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Splash />,
      },
      ...appRouterRoutes.map((route) => ({
        ...route,
        loader: (args: LoaderFunctionArgs) => authLoader(args, route),
      })),
    ],
  },
]);
