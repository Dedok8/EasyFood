import MainLayout from "./MainLayout";
import PublicLayout from "@/widgets/layouts/PublicLayout";
import { useSelector } from "react-redux";
import { selectAccessToken } from "@/features/auth";

export default function RootLayout() {
  const token = useSelector(selectAccessToken);

  return token ? <MainLayout /> : <PublicLayout />;
}
