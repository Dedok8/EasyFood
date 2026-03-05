import Sidebar from "@/shared/ui/aside/Aside";
import { Outlet } from "react-router";
import s from "./mainlayout.module.scss";

function Mainlayout() {
  console.log("render main");

  return (
    <div className={s.mainlayout}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
