import Logo from "../../Eventpage/EventPageComponents/Logo/Logo";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center pb-10">
      <div>
        <Logo />
      </div>
      <div className="text-white font-semibold text-4xl flex items-center flex-col gap-3">
        <p>All India Diploma Engineers And Officials Association </p>
        <span> (AIDEOA)</span>
      </div>
      <div className="text-white text-xl font-medium">
        <p>Join us or Download your ID’s</p>
      </div>
    </div>
  );
};
export default Header;
