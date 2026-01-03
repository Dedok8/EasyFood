import type { Mutex } from "async-mutex";
import type { LoaderFunctionArgs, RouteObject } from "react-router";

interface AuthCheckLoaderDeps {
  refreshMutex: Mutex;
}

export const authCheckLoader =
  ({ refreshMutex }: AuthCheckLoaderDeps) =>
  async (args: LoaderFunctionArgs, route: RouteObject): Promise<null> => {
    console.log("params:", args.params);
    console.log("route meta:", route);
    console.log("mutex:", refreshMutex);

    return null;
  };
