import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import AuthCompLogo from "@/shared/ui/authCompLogo/authCompLogo";
import { useNavigate } from "react-router";

function OnBoarding() {
  const navigation = useNavigate();
  return (
    <div className="flex">
      <div>
        <div>
          <h2>Let’s Get Started 😁</h2>
          <p>
            Sign up or login into to have a full digital experience in our
            restaurant
          </p>
        </div>
        <form>
          <div>
            <button
              onClick={() =>
                navigation(FRONT_ROUTES.pages.Authentication.navigationPath)
              }
              type="button"
            >
              Sign up
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                navigation(FRONT_ROUTES.pages.Registration.navigationPath)
              }
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <AuthCompLogo />
    </div>
  );
}

export default OnBoarding;
