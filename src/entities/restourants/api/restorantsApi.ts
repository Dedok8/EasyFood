import type {
  IRestaurant,
  IRestaurantsResponse,
} from "@/entities/restourants/types/interfaces";
import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

export const restorantsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET ================================
    getRestaurants: build.query<IRestaurantsResponse, void>({
      query: () => API_ROUTES.restaurants.all,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((r) => ({
                type: "Restorants" as const,
                id: r.id,
              })),
              { type: "Restorants", id: "LIST" },
            ]
          : [{ type: "Restorants", id: "LIST" }],
    }),

    getRestorantById: build.query<IRestaurant, { id: number }>({
      query: ({ id }) => API_ROUTES.restaurants.byId(id),
      providesTags: (result, error, { id }) => [{ type: "Restorants", id }],
    }),

    getRestorantsDishes: build.query<
      IRestaurantsResponse,
      { restaurantId: number }
    >({
      query: ({ restaurantId }) => API_ROUTES.restaurants.dishes(restaurantId),
      providesTags: (result, error, { restaurantId }) => [
        { type: "Restorants", id: restaurantId },
      ],
    }),

    // POST ===============================

    createRestorants: build.mutation<IRestaurant, IRestaurant>({
      query: (restorantData) => ({
        url: API_ROUTES.restaurants.createRestorant,
        method: "POST",
        body: restorantData,
      }),
      invalidatesTags: [{ type: "Restorants", id: "LIST" }],
    }),

    // PUT ===============================
    updateRestorant: build.mutation<
      IRestaurant,
      { id: number; data: Partial<IRestaurant> }
    >({
      query: ({ id, data }) => ({
        url: API_ROUTES.restaurants.byId(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Restorants", id },
        { type: "Restorants", id: "LIST" },
      ],
    }),

    // DELETE ===============================
    deleteRestorant: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: API_ROUTES.restaurants.byId(id),
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Restorants", id: "LIST" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestorantByIdQuery,
  useGetRestorantsDishesQuery,
  useCreateRestorantsMutation,
  useUpdateRestorantMutation,
  useDeleteRestorantMutation,
} = restorantsApi;
