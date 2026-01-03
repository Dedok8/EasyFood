export interface IRouteMeta {
  title: string;
  isInMenu: boolean;
  requireAuth: boolean;
  roles?: string[];
}

export interface IRouteConfig {
  path: string;
  navigationPath?: string | ((id: string) => string);
  meta: IRouteMeta;
}

export type PagesMap = Record<string, IRouteConfig>;

export interface IFrontRoutes {
  pages: PagesMap;
}
