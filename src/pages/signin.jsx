import Hero6 from "../assets/hero6.png";
import Vector1 from "../assets/bg-vector-1.png";
import { SigninForm } from "@/components/forms/signin-form";

const SignInPage = () => {
  return (
    <div>
      <section className="p-6 pb-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="pt-72 text-muted-foreground">
          <h2 className="text-6xl font-bold">Log In</h2>
          <p className="text-3xl font-semibold my-8">
            Please Login To Continue
          </p>
          <p className="w-[85%] text-justify leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
        </div>
        <div className="relative">
          <img
            src={Vector1}
            className="absolute inset-0 -translate-y-10 -z-10 scale-[1.20]"
          />
          <img src={Hero6} className="mt-16" />
        </div>
      </section>
      <section className="p-8 pt-0">
        <SigninForm />
      </section>
    </div>
  );
};

export default SignInPage;
