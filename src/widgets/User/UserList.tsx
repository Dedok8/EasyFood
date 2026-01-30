import { useGetUsersQuery } from "@/entities/user/api/userApi";
import type { IUserDTO } from "@/entities/user/types/interfaces";
import { selectAccessToken, selectAuthUser } from "@/features/auth";
import UserComp from "@/widgets/Admin/UsersComp.";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function UserList() {
  const accessToken = useSelector(selectAccessToken);
  const { data, isLoading, error } = useGetUsersQuery(undefined, {
    skip: false,
  });

  const currentUser = useSelector(selectAuthUser);
  const users: IUserDTO[] = data?.data ?? [];
  const { t } = useTranslation();

  console.log("Debug info:", {
    accessToken: !!accessToken,
    isLoading,
    error,
    data,
    users,
    usersLength: users.length,
  });

  if (isLoading) return <div>{t("common.loadingMessage")}</div>;
  if (error)
    return (
      <div>
        {t("common.errorMessage")}: {error.toString()}
      </div>
    );

  return (
    <div>
      {users.map((user) => (
        <UserComp
          key={user.id}
          user={user}
          isCurrent={user.id === currentUser?.id}
        />
      ))}
    </div>
  );
}

export default UserList;
