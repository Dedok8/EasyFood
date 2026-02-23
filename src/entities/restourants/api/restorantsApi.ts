import type {
  IDishesResponse,
  IRestaurant,
  IRestaurantsResponse,
} from "@/entities/restourants/types/interfaces";
import type { ICreateRestoran } from "@/features/restorant/add-restorant/types/interfaces";
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
                type: "Restaurants" as const,
                id: r.id,
              })),
              { type: "Restaurants", id: "LIST" },
            ]
          : [{ type: "Restaurants", id: "LIST" }],
    }),

    getRestorantById: build.query<IRestaurant, { id: number }>({
      query: ({ id }) => API_ROUTES.restaurants.byId(id),
      providesTags: (result, error, { id }) => [{ type: "Restaurants", id }],
    }),

    getRestorantsDishes: build.query<IDishesResponse, { restaurantId: number }>(
      {
        query: ({ restaurantId }) =>
          API_ROUTES.restaurants.dishes(restaurantId),
        providesTags: (result, error, { restaurantId }) => [
          { type: "Restaurants", id: restaurantId },
        ],
      }
    ),

    // POST ===============================

    createRestorants: build.mutation<IRestaurant, ICreateRestoran>({
      query: (restorantData) => ({
        url: API_ROUTES.restaurants.createRestorant,
        method: "POST",
        body: restorantData,
      }),
      invalidatesTags: [{ type: "Restaurants", id: "LIST" }],
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
        { type: "Restaurants", id },
        { type: "Restaurants", id: "LIST" },
      ],
    }),

    // DELETE ===============================
    deleteRestorant: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: API_ROUTES.restaurants.byId(id),
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Restaurants", id: "LIST" }],
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
