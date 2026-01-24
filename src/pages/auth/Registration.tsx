import RegistrationForm from "@/features/auth/registration/ui/RegistrationForm";
import AuthCompLogo from "@/shared/ui/authCompLogo/authCompLogo";

function Registration() {
  return (
    <div className="flex ">
      <div>
        <h2>Title</h2>
        <p>Description</p>
        <RegistrationForm />
      </div>
      <AuthCompLogo />
    </div>
  );
}

export default Registration;
