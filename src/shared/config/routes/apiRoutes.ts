export const API_ROUTES = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    Authentication: "/Authentication",
    emailVerification: "/emailVerification",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },

  users: {
    me: "/users/me",
    all: "/users",
    byId: (id: number) => `/users/${id}`,
    update: (id: number) => `/users/${id}`,
    changePassword: (id: number) => `/users/${id}/password`,

    // locations: (userId: number) => `/users/${userId}/locations`,
    locationById: (userId: number, locId: string) =>
      `/users/${userId}/locations/${locId}`,

    orders: (userId: number) => `/users/${userId}/orders`,
    rewards: (id: number) => `/users/${id}/rewards`,
    cards: (id: number) => `/users/${id}/cards`,

    favorites: (userId: number) => `/users/${userId}/favorites`,
  },

  dishes: {
    all: "/dishes",
    popular: "/dishes/popular",
    recommended: "/dishes/recommended",
    byId: (id: number) => `/dishes/${id}`,
    reviews: (id: number) => `/dishes/${id}/reviews`,
    create: (restaurantId: number) => `/restaurants/${restaurantId}/dishes`,
    search: "/dishes/search",
  },

  categories: {
    all: "/categories",
    dishes: (categoryId: string) => `/categories/${categoryId}/dishes`,
  },

  restaurants: {
    all: "/restaurants",
    nearby: "/restaurants/nearby",
    byId: (id: string) => `/restaurants/${id}`,
    dishes: (restaurantId: string) => `/restaurants/${restaurantId}/dishes`,
    reviews: (id: string) => `/restaurants/${id}/reviews`,
  },

  cart: {
    get: "/cart",
    addItem: "/cart/add",
    updateItem: (itemId: string) => `/cart/items/${itemId}`,
    removeItem: (itemId: string) => `/cart/items/${itemId}`,
    clear: "/cart/clear",
  },

  orders: {
    create: (id: number) => `/users/${id}/orders`,
    all: "/orders",
    byId: (id: string) => `/orders/${id}`,
    updateStatus: (id: string) => `/orders/${id}/status`,
    reorder: (id: string) => `/orders/${id}/reorder`,
    track: (id: string) => `/orders/${id}/track`,
  },

  notifications: {
    all: "/notifications",
    markAsRead: (id: string) => `/notifications/${id}/read`,
    settings: "/notifications/settings",
  },

  rewards: {
    all: "/rewards",
    history: "/rewards/history",
    redeem: "/rewards/redeem",
  },

  default: {
    splash: "/",
    onboarding: "/onboarding",
    banners: "/banners",
    searchHistory: "/search/history",
  },
};
