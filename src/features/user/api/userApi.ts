import type {
  ICardsResponseDTO,
  ILocationResponseDTO,
  IUserResponseDTO,
  IUserSingleResponseDTO,
} from "@/features/user/types/interfaces";
import { baseApi } from "@/shared/api/baseApi";
import { API_ROUTES } from "@/shared/config/routes/apiRoutes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET =====================================

    getUsers: build.query<IUserResponseDTO, void>({
      query: () => API_ROUTES.users.all,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((u) => ({ type: "Users" as const, id: u.id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    getMe: build.query<IUserSingleResponseDTO, void>({
      query: () => API_ROUTES.users.me,
      providesTags: [{ type: "Users", id: "ME" }],
    }),

    getUserById: build.query<IUserSingleResponseDTO, { id: number }>({
      query: ({ id }) => API_ROUTES.users.byId(id),
      providesTags: (result, error, { id }) => [{ type: "Users", id }],
    }),

    getUserLocation: build.query<
      ILocationResponseDTO,
      { id: number; location: string }
    >({
      query: ({ id, location }) => API_ROUTES.users.locationById(id, location),
      providesTags: (result, error, { id }) => [{ type: "Users", id }],
    }),

    getCards: build.query<ICardsResponseDTO, { id: number }>({
      query: ({ id }) => API_ROUTES.users.cards(id),
      providesTags: (result, error, { id }) => [{ type: "Users", id }],
    }),

    // POST =====================================

    userIdLocation: build.mutation<
      ILocationResponseDTO,
      { id: number; location: string }
    >({
      query: ({ id, location }) => ({
        url: API_ROUTES.users.locationById(id, location),
        method: "POST",
        body: { location },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        { type: "Users", id: "LIST" },
      ],
    }),

    userCard: build.mutation<
      ICardsResponseDTO,
      { id: number; cardData: Partial<ICardsResponseDTO> }
    >({
      query: ({ id, cardData }) => ({
        url: API_ROUTES.users.cards(id),
        method: "POST",
        body: cardData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        { type: "Users", id: "LIST" },
      ],
    }),

    // PUT =====================================
    updateUser: build.mutation<
      IUserSingleResponseDTO,
      { id: number; data: Partial<IUserSingleResponseDTO> }
    >({
      query: ({ id, data }) => ({
        url: API_ROUTES.users.byId(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        { type: "Users", id: "LIST" },
      ],
    }),
    updateUserPassword: build.mutation<
      IUserSingleResponseDTO,
      { id: number; data: { oldPassword: string; newPassword: string } }
    >({
      query: ({ id, data }) => ({
        url: API_ROUTES.users.changePassword(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        { type: "Users", id: "LIST" },
      ],
    }),
  }),
});
