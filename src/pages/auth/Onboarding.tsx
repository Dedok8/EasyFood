import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import AuthCompLogo from "@/shared/ui/authCompLogo/authCompLogo";
import { useNavigate } from "react-router";

function OnBoarding() {
  const navigation = useNavigate();

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Let's Get Started 😁</h2>
            <p>
              Sign up or login into to have a full digital experience in our
              restaurant
            </p>
          </div>

          <div>
            <button
              className="btn-primary"
              onClick={() =>
                navigation(FRONT_ROUTES.pages.Authentication.navigationPath)
              }
              type="button"
            >
              Get Started
            </button>
          </div>

          <button type="button">Sign up later</button>
        </div>
      </div>

      <AuthCompLogo />
    </div>
  );
}

export default OnBoarding;
