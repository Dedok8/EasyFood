import { useLogout } from "@/features/auth";
import { LogInIcon } from "lucide-react";
// import logoutIcon from "@/assets/LogOut/log-out.png";
import s from "@/shared/ui/aside/aside.module.scss";

function LogOut() {
  const { logout, isLoading, error } = useLogout();

  if (isLoading) return <span>Вихід...</span>;
  if (error) return <span>Помилка виходу</span>;

  return (
    <div>
      <button onClick={logout} className={s["aside__nav--menu-img"]}>
        <LogInIcon size={20} />
      </button>
    </div>
  );
}

export default LogOut;
