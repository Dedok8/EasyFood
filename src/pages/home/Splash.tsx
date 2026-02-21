import type { RootState } from "@/app/store/store";
import dish_1 from "@/assets/Splash/dish_1.png";
import dish_2 from "@/assets/Splash/dish_2.png";

import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router";

function Splash() {
  const navigate = useNavigate();

  const authenticated = useSelector(
    (state: RootState) => !!state.auth.accessToken
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 2500);

    const t2 = setTimeout(() => {
      navigate(
        authenticated
          ? FRONT_ROUTES.pages.OpenMobileApplication.navigationPath
          : FRONT_ROUTES.pages.Onboarding.navigationPath
      );
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [navigate, authenticated]);

  return (
    <div className={`splash ${fade ? "splash--fadeout" : ""}`}>
      <div className="splash__dish-left">
        <div className="splash__dish-wrapper">
          <img src={dish_1} alt="dish_1" className="splash__dish-image" />

          <div className="splash__circle-background">
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
          </div>
        </div>
      </div>

      <div className="splash__dish-right">
        <div className="splash__dish-wrapper">
          <img src={dish_2} alt="dish_2" className="splash__dish-image" />

          <div className="splash__circle-background">
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
            <div className="splash__circle"></div>
          </div>
        </div>
      </div>

      <div className="splash__content">
        <div className="splash__content-box">
          <h1 className="splash__title">
            Eat
            <span className="splash__title-highlight">
              <strong>Easy</strong>
            </span>
          </h1>

          <p className="splash__description">
            Are you tired of scrolling through menus and struggling to decide
            what to order? Our new restaurant app has got you covered with
            personalized recommendations from our digital assistant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Splash;
