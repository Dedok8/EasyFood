import { useLogout } from "@/features/auth";
import logoutIcon from "@/assets/LogOut/log-out.png";
function LogOut() {
  const { logout, isLoading, error } = useLogout();

  if (isLoading) return <span>Вихід...</span>;
  if (error) return <span>Помилка виходу</span>;

  return (
    <div>
      <button onClick={logout}>
        <img src={logoutIcon} alt="logout" />
      </button>
    </div>
  );
}

export default LogOut;
