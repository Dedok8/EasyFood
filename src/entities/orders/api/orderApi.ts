import type {
  IOrderDTO,
  IOrdersResponseDTO,
} from "@/entities/orders/types/interfaces";
import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET ===============================

    getOrders: build.query<IOrdersResponseDTO, void>({
      query: () => API_ROUTES.orders.all,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Orders" as const,
                id: id,
              })),
              { type: "Orders" as const, id: "LIST" },
            ]
          : [{ type: "Orders" as const, id: "LIST" }],
    }),

    getOrdersById: build.query<IOrdersResponseDTO, { id: number }>({
      query: ({ id }) => API_ROUTES.users.orders(id),
      providesTags: (result, error, { id }) => [{ type: "Orders", id }],
    }),

    // PUT ===============================

    orderStatus: build.mutation<
      IOrdersResponseDTO,
      { id: string; status: string }
    >({
      query: ({ id, status }) => ({
        url: API_ROUTES.orders.byId(id),
        method: "PUT",
        body: { status },
      }),
    }),

    // POST ===============================
    createOrder: build.mutation<
      IOrdersResponseDTO,
      { userId: number; orderData: IOrderDTO }
    >({
      query: ({ userId, orderData }) => ({
        url: API_ROUTES.orders.create(userId),
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: [{ type: "Orders", id: "LIST" }],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByIdQuery,
  useOrderStatusMutation,
  useCreateOrderMutation,
} = orderApi;
