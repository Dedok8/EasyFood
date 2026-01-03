import { Outlet } from "react-router";

function Mainlayout() {
  return (
    <main className="wrapper">
      <Outlet />
    </main>
  );
}

export default Mainlayout;
