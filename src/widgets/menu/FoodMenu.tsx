import menuIcon from "@/assets/MenuAside/columns.png";
// import orderHistoryIcon from "@/assets/MenuAside/history.png";
// import mapIcon from "@/assets/MenuAside/Map-pin.png";
import "@/shared/styles/scss/menu/menu.scss";
import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { NavLink } from "react-router";

function FoodMenu() {
  return (
    <div>
      <h3>MENU</h3>
      <div>
        <div className="menu">
          <NavLink
            to={FRONT_ROUTES.pages.FullMenu.navigationPath}
            className="menu__link"
          >
            <div className="menu__icon--block">
              <img className="menu__icon--img" src={menuIcon} alt="menuIcon" />
            </div>
            <span>Food Menu</span>
          </NavLink>
        </div>
        {/* <div className="menu__icon--block">
          <Link to={FRONT_ROUTES.pages.OrderHistory.navigationPath}>
            <div>
              <img src={orderHistoryIcon} alt="menuIcon" />
            </div>
            <span>Food Menu</span>
          </Link>
        </div>
        <div className="menu__icon--block">
          <Link to={FRONT_ROUTES.pages.SetLocation.navigationPath}>
            <div>
              <img src={mapIcon} alt="menuIcon" />
            </div>
            <span>Food Menu</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default FoodMenu;
