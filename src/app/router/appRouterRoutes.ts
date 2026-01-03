import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import type { FC } from "react";

type PageModule = {
  default: FC;
};

const pages = import.meta.glob<PageModule>("../../pages/*.tsx");

const pagesList = Object.keys(FRONT_ROUTES.pages);

export const appRouterRoutes = pagesList.map((page) => ({
  ...FRONT_ROUTES.pages[page],

  lazy: async () => {
    const importer = pages[`../../pages/${page}.tsx`];

    if (!importer) {
      throw new Error(`Page "${page}" не знайдена у /pages`);
    }

    const module = await importer();

    return {
      Component: module.default,
    };
  },
}));
