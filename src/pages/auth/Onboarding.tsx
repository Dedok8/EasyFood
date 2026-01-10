import { FRONT_ROUTES } from "@/shared/config/routes/frontRoutes";
import { useNavigate } from "react-router";

function OnBoarding() {
  const navigation = useNavigate();
  return (
    <div>
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
                navigation(FRONT_ROUTES.pages.Register.navigationPath)
              }
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default OnBoarding;
