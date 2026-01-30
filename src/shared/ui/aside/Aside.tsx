import LogoString from "@/shared/ui/logo/LogoString";

function Aside() {
  return (
    <aside
      className="max-w-80 w-[260px] h-screen rounded-tr-2xl rounded-br-2xl
      bg-[linear-gradient(180deg,#32324D_0%,#32324D_20%,#2C2C45_50%,#32324D_80%,#32324D_100%)]"
    >
      <div>
        <div className="mb-1.5 ">
          <LogoString />
        </div>
        <div className="h-[1px] bg-white/10"></div>
      </div>
    </aside>
  );
}

export default Aside;
