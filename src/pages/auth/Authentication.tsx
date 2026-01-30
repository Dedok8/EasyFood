import LoginForm from "@/features/auth/login/ui/LoginForm";
import AuthCompLogo from "@/shared/ui/authCompLogo/authCompLogo";

function Authentication() {
  return (
    <div className="flex">
      <LoginForm />

      <AuthCompLogo />
    </div>
  );
}

export default Authentication;
