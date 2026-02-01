import useMe from "@/entities/user/model/useMe";
import LogoString from "@/shared/ui/logo/LogoString";
// import GeneralMenu from "@/widgets/General/GeneralMenu";
import LogOut from "@/widgets/LogOut/LogOut";
import FoodMenu from "@/widgets/menu/FoodMenu";
import UserProfile from "@/widgets/User/UserProfile";

function Aside() {
  const { user, isLoading } = useMe();

  if (isLoading || !user) return null;

  return (
    <aside
      className="text-red-50 text-[16px] max-w-80 w-[260px] h-screen rounded-tr-2xl rounded-br-2xl
      bg-[linear-gradient(180deg,#32324D_0%,#32324D_20%,#2C2C45_50%,#32324D_80%,#32324D_100%)] "
    >
      <div>
        <div className="mb-1.5 ">
          <LogoString />
        </div>
        <div className="h-[1px] bg-white/10"></div>
        <UserProfile user={user} />
        <FoodMenu />
        {/* <GeneralMenu /> */}
        <LogOut />
      </div>
    </aside>
  );
}

export default Aside;
