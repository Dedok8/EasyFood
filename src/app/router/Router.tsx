import { appRouterRoutes } from "@/app/router/appRouterRoutes";
import { authCheckLoader } from "@/app/router/authCheckLoader";
import Splash from "@/pages/home/Splash";
import Mainlayout from "@/widgets/layouts/MainLayout";
import { Mutex } from "async-mutex";
import type { LoaderFunctionArgs } from "react-router";

import { createBrowserRouter } from "react-router";

const refreshMutex = new Mutex();

const authLoader = authCheckLoader({ refreshMutex });

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout />,
//     HydrateFallback: () => (
//       <div className="flex">
//         <p>Loading app...</p>
//       </div>
//     ),
//     children: appRouterRoutes.map((route) => ({
//       ...route,
//       loader: (args) => authLoader(args, route),
//     })),
//   },
// ]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     HydrateFallback: () => (
//       <div className="flex">
//         <p>Loading app...</p>
//       </div>
//     ),
//     children: [
//       { index: true, element: <Mainlayout /> },
//       ...appRouterRoutes.map((route) => ({
//         ...route,
//         loader: (args) => authLoader(args, route),
//       })),
//     ],
//   },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
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
