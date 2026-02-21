import Header from "@/widgets/layouts/Heder";
import { Outlet } from "react-router";

function Mainlayout() {
  return (
    <div className="flex">
      <Header />
      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
