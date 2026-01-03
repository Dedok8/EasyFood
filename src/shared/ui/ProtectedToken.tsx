import { selectAccessToken } from "@/features/auth/api/model/authSlice";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function ProtectedToken() {
  const token = useSelector(selectAccessToken);
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={FRONT_ROUTES.pages.Onboarding.navigationPath as string}
      replace
    />
  );
}

export default ProtectedToken;
