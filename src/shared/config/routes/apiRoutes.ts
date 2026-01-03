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
    byId: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    changePassword: (id: string) => `/users/${id}/password`,

    locations: (userId: string) => `/users/${userId}/locations`,
    locationById: (userId: string, locId: string) =>
      `/users/${userId}/locations/${locId}`,

    orders: (userId: string) => `/users/${userId}/orders`,
    rewards: (id: string) => `/users/${id}/rewards`,
    cards: (id: string) => `/users/${id}/cards`,

    favorites: (userId: string) => `/users/${userId}/favorites`,
  },

  dishes: {
    all: "/dishes",
    popular: "/dishes/popular",
    recommended: "/dishes/recommended",
    byId: (id: string) => `/dishes/${id}`,
    reviews: (id: string) => `/dishes/${id}/reviews`,
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
    create: "/orders",
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
