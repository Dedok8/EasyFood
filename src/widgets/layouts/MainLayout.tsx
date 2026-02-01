import Header from "@/widgets/layouts/Heder";
import { Outlet } from "react-router";

function Mainlayout() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}

export default Mainlayout;
