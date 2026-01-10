import { ROLES } from "@/shared/config/roles/roles";
import type { IFrontRoutes, IRouteConfig } from "@/shared/config/routes/types";

export const FRONT_ROUTES = {
  pages: {
    Splash: {
      path: "/",
      navigationPath: "/",
      meta: { title: "Welcome", isInMenu: false, requireAuth: false },
    },
    Onboarding: {
      path: "/onboarding",
      navigationPath: "/onboarding",
      meta: { title: "About Us", isInMenu: false, requireAuth: false },
      dir: "auth",
    },
    Authentication: {
      path: "/authentication",
      navigationPath: "/Authentication",
      meta: { title: "Sign In", isInMenu: true, requireAuth: false },
    },
    Register: {
      path: "/register",
      navigationPath: "/register",
      meta: { title: "Sign Up", isInMenu: false, requireAuth: false },
    },
    OtpVerification: {
      path: "/verify-otp",
      navigationPath: "/verify-otp",
      meta: { title: "OTP Verification", isInMenu: false, requireAuth: false },
    },

    Home: {
      path: "/home",
      navigationPath: "/home",
      meta: {
        title: "Discovery",
        isInMenu: true,
        requireAuth: true,
        roles: [ROLES.USER],
      },
    },
    Favorites: {
      path: "/favorites",
      navigationPath: "/favorites",
      meta: {
        title: "My Favorites",
        isInMenu: true,
        requireAuth: true,
        roles: [ROLES.USER],
      },
    },
    MyOrders: {
      path: "/my-orders",
      navigationPath: "/my-orders",
      meta: {
        title: "Order History",
        isInMenu: true,
        requireAuth: true,
        roles: [ROLES.USER],
      },
    },
    Profile: {
      path: "/profile",
      navigationPath: "/profile",
      meta: {
        title: "My Profile",
        isInMenu: true,
        requireAuth: true,
        roles: [ROLES.USER],
      },
    },

    Search: {
      path: "/search",
      navigationPath: "/search",
      meta: { title: "Search Food", isInMenu: false, requireAuth: true },
    },
    CategoryDetails: {
      path: "/category/:id",
      navigationPath: (id: string) => `/category/${id}`,
      meta: { title: "Category", isInMenu: false, requireAuth: true },
    },
    DishDetails: {
      path: "/dish/:id",
      navigationPath: (id: string) => `/dish/${id}`,
      meta: { title: "Dish Details", isInMenu: false, requireAuth: true },
    },
    RestaurantDetails: {
      path: "/restaurant/:id",
      navigationPath: (id: string) => `/restaurant/${id}`,
      meta: { title: "Restaurant", isInMenu: false, requireAuth: true },
    },

    Cart: {
      path: "/cart",
      navigationPath: "/cart",
      meta: { title: "My Cart", isInMenu: false, requireAuth: true },
    },
    Checkout: {
      path: "/checkout",
      navigationPath: "/checkout",
      meta: { title: "Checkout", isInMenu: false, requireAuth: true },
    },
    OrderSuccess: {
      path: "/order-success",
      navigationPath: "/order-success",
      meta: { title: "Order Placed", isInMenu: false, requireAuth: true },
    },
    OrderTracking: {
      path: "/order-tracking/:id",
      navigationPath: (id: string) => `/order-tracking/${id}`,
      meta: { title: "Track Your Order", isInMenu: false, requireAuth: true },
    },
    ShareYourLocation: {
      path: "/share-your-location",
      navigationPath: "/share-your-location",
      meta: {
        title: "Share Your Location",
        isInMenu: false,
        requireAuth: true,
      },
    },
    // EmailVerification: {
    //   path: "/email-verification",
    //   navigationPath: "/email-verification",
    //   meta: {
    //     title: "Email Verification",
    //     isInMenu: false,
    //     requireAuth: false,
    //   },
    // },

    Addresses: {
      path: "/profile/addresses",
      navigationPath: "/profile/addresses",
      meta: { title: "My Addresses", isInMenu: false, requireAuth: true },
    },
    Notifications: {
      path: "/notifications",
      navigationPath: "/notifications",
      meta: { title: "Notifications", isInMenu: false, requireAuth: true },
    },
    NotFoundPage: {
      path: "*",
      meta: {
        title: "Not Found",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "Forbidden",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
} satisfies IFrontRoutes;

export function getPagesObjectList(): IRouteConfig[] {
  return Object.values(FRONT_ROUTES.pages);
}
