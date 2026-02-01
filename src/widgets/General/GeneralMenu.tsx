import rewardIcon from "@/assets/General/revard.png";
import infoIcon from "@/assets/General/info.png";

import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { Link } from "react-router";

function GeneralMenu() {
  return (
    <div>
      <h3>GENERAL</h3>
      <div>
        <div>
          <Link to={FRONT_ROUTES.pages.MyRewards.navigationPath}>
            <div>
              <img src={rewardIcon} alt="reward" />
            </div>
            <span>My Reward</span>
          </Link>
        </div>
        <div>
          <Link to={FRONT_ROUTES.pages.HelpPage.navigationPath}>
            <div>
              <img src={infoIcon} alt="help" />
            </div>
            <span>Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GeneralMenu;
