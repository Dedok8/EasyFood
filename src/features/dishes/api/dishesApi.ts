import type { IDish } from "@/features/dishes/types/interfaces";
import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

export const dishesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //GET ===========================================
    getDishes: build.query<IDish[], void>({
      query: () => API_ROUTES.dishes.all,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Dishes" as const, id })),
              { type: "Dishes", id: "LIST" },
            ]
          : [{ type: "Dishes", id: "LIST" }],
    }),
    getDishesById: build.query<IDish, { id: number }>({
      query: ({ id }) => API_ROUTES.dishes.byId(id),
      providesTags: (result, error, { id }) => [{ type: "Dishes", id }],
    }),

    //POST ===========================================
    createDish: build.mutation<IDish, { id: number; dish: Partial<IDish> }>({
      query: ({ id, dish }) => ({
        url: API_ROUTES.dishes.create(id),
        method: "POST",
        body: dish,
      }),
      invalidatesTags: [{ type: "Dishes", id: "LIST" }],
    }),

    // PUT ===========================================
    updateDish: build.mutation<
      IDish,
      { restaurantId: number; dishId: number; dish: Partial<IDish> }
    >({
      query: ({ restaurantId, dishId, dish }) => ({
        url: API_ROUTES.dishes.create(restaurantId) + `/${dishId}`,
        method: "PUT",
        body: dish,
      }),
      invalidatesTags: (result, error, { dishId }) => [
        { type: "Dishes", id: dishId },
      ],
    }),
  }),
});
