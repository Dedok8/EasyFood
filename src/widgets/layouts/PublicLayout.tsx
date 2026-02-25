import { Outlet } from "react-router";

function PublicLayout() {
  console.log("public render");

  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default PublicLayout;
