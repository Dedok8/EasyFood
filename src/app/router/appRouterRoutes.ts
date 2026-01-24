import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import type { FC } from "react";

type PageModule = {
  default: FC;
};

const pages = import.meta.glob<PageModule>("../../pages/**/*.tsx");

const pagesList = Object.keys(FRONT_ROUTES.pages) as Array<
  keyof typeof FRONT_ROUTES.pages
>;

export const appRouterRoutes = pagesList.map((page) => ({
  ...FRONT_ROUTES.pages[page],

  lazy: async () => {
    // const importer = pages[`../../pages/${page}.tsx`];
    const match = Object.keys(pages).find((p) => p.includes(`/${page}.tsx`));

    if (!match) {
      throw new Error(`Page "${page}" не знайдена у /pages`);
    }

    const importer = pages[match];
    const module = await importer();

    return {
      Component: module.default,
    };
  },
}));
