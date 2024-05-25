import Logo from "../assets/logo.svg";

export const LogoComponent = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={Logo} alt="logo" className="size-8" />
      <p className="text-xl font-bold">PillBox Los Santos</p>
    </div>
  );
};
