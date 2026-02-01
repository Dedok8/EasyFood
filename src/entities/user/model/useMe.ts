import type { RootState } from "@/app/store/store";
import { useGetMeQuery } from "@/entities/user/api/userApi";
import { useSelector } from "react-redux";

function useMe() {
  const isAuth = useSelector((state: RootState) =>
    Boolean(state.auth.accessToken)
  );

  const { data, isLoading, isError } = useGetMeQuery(undefined, {
    skip: !isAuth,
  });
  return { user: data?.data ?? null, isLoading, isError };
}

export default useMe;
