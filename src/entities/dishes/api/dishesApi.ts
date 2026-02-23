import type { IDish, IDishReview } from "@/entities/dishes/types/interfaces";
import type { ICreateDish } from "@/features/dishes/add-dishes/types/interfaces";
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
              ...result.map((dish) => ({
                type: "Dishes" as const,
                id: dish.id,
              })),
              { type: "Dishes" as const, id: "LIST" },
            ]
          : [{ type: "Dishes" as const, id: "LIST" }],
    }),

    getDishesById: build.query<IDish, { id: number }>({
      query: ({ id }) => API_ROUTES.dishes.byId(id),
      providesTags: (result, error, { id }) => [{ type: "Dishes", id }],
    }),

    getDishReviews: build.query<IDishReview[], number>({
      query: (dishId) => API_ROUTES.dishes.reviews(dishId),
      providesTags: (result, error, dishId) =>
        result
          ? [
              ...result.map((r) => ({ type: "Dishes" as const, id: r.id })),
              { type: "Dishes", id: `REVIEWS_${dishId}` },
            ]
          : [{ type: "Dishes", id: `REVIEWS_${dishId}` }],
    }),
    //POST ===========================================

    createDish: build.mutation<IDish, ICreateDish>({
      query: (dishData) => ({
        url: API_ROUTES.dishes.create,
        method: "POST",
        body: dishData,
      }),
      invalidatesTags: [{ type: "Dishes", id: "LIST" }],
    }),

    // PUT ===========================================
    updateDish: build.mutation<IDish, { dishId: number; dish: Partial<IDish> }>(
      {
        query: ({ dishId, dish }) => ({
          url: `${API_ROUTES.dishes.all}/${dishId}`,
          method: "PUT",
          body: dish,
        }),
        invalidatesTags: (result, error, { dishId }) => [
          { type: "Dishes", id: dishId },
        ],
      }
    ),

    // DELETE ===========================================
    deleteDish: build.mutation<{ success: boolean; id: number }, number>({
      query: (dishId) => ({
        url: `${API_ROUTES.dishes.all}/${dishId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Dishes", id: "LIST" }],
    }),
  }),
});

export const {
  useGetDishesQuery,
  useGetDishReviewsQuery,
  useGetDishesByIdQuery,
  useCreateDishMutation,
  useUpdateDishMutation,
  useDeleteDishMutation,
} = dishesApi;
