import { useGetUserByIdQuery } from "@/entities/user/api/userApi";

function useUserById(id: number) {
  const { data, isLoading, isError } = useGetUserByIdQuery({ id });

  return {
    user: data?.data ?? null,
    isLoading,
    isError,
  };
}

export default useUserById;
